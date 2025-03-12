import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { SignJWT, jwtVerify } from 'jose';
import sanitizeHtml from 'sanitize-html';
import { z } from 'zod';

// Maximum file size (2MB)
const MAX_FILE_SIZE = 2 * 1024 * 1024;

// Schema validation
const BlogPostSchema = z.object({
  title: z.string().min(1).max(200),
  content: z.string().min(1).max(50000),
  author: z.string().min(1).max(100).optional(),
  category: z.string().min(1).max(50).optional(),
  image: z.string().url().optional(),
});

// Sanitization options
const sanitizeOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li',
    'strong', 'em', 'code', 'pre', 'blockquote', 'a', 'img'
  ],
  allowedAttributes: {
    'a': ['href', 'title'],
    'img': ['src', 'alt', 'title']
  }
};

// Vérifie que JWT_SECRET est bien défini
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

async function verifyAuthToken(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    throw new Error('Missing or invalid authorization header');
  }

  const token = authHeader.split(' ')[1];
  try {
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

async function rateLimit(request: Request) {
  // Implémentation simple de la limitation de débit
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // 5 requêtes par minute

  // En production, utilise Redis ou une base de données pour stocker ces valeurs
  const requests = global.requestCounts?.get(ip) || [];
  requests.push(now);
  
  // Supprime les requêtes en dehors de la fenêtre actuelle
  const recentRequests = requests.filter(time => time > now - windowMs);
  
  if (!global.requestCounts) {
    global.requestCounts = new Map();
  }
  global.requestCounts.set(ip, recentRequests);

  if (recentRequests.length > maxRequests) {
    throw new Error('Too many requests');
  }
}

export async function POST(request: Request) {
  try {
    // Vérifie l'authentification
    await verifyAuthToken(request);

    // Vérifie la limitation de débit
    await rateLimit(request);

    // Vérifie la taille du contenu
    const contentLength = parseInt(request.headers.get('content-length') || '0');
    if (contentLength > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size too large' },
        { status: 413 }
      );
    }

    const body = await request.json();

    // Valide le schéma
    const validatedData = BlogPostSchema.parse(body);
    const { title, content, author, category, image } = validatedData;

    // Nettoie le contenu
    const sanitizedContent = sanitizeHtml(content, sanitizeOptions);

    // Crée un slug à partir du titre
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    // Vérifie si le fichier existe déjà
    const blogDir = path.join(process.cwd(), 'content', 'blog');
    const filePath = path.join(blogDir, `${slug}.md`);
    
    if (fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: 'Blog post with this title already exists' },
        { status: 409 }
      );
    }

    // Crée le frontmatter
    const frontmatter = {
      title,
      date: new Date().toISOString().split('T')[0],
      author: author || 'Anonymous',
      image: image || '/images/blog/default.jpg',
      category: category || 'General',
      lastModified: new Date().toISOString()
    };

    // Combine le frontmatter et le contenu nettoyé
    const fileContent = matter.stringify(sanitizedContent, frontmatter);

    // Crée le répertoire du blog s'il n'existe pas
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    // Écrit le fichier de manière atomique
    const tempPath = `${filePath}.tmp`;
    fs.writeFileSync(tempPath, fileContent);
    fs.renameSync(tempPath, filePath);

    // Log l'action
    console.log(`Blog post created: ${slug} by ${frontmatter.author}`);

    return NextResponse.json({ 
      success: true,
      slug,
      message: 'Blog post created successfully' 
    });

  } catch (error) {
    console.error('Error creating blog post:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data format', details: error.errors },
        { status: 400 }
      );
    }

    if (error instanceof Error) {
      if (error.message === 'Missing or invalid authorization header') {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        );
      }
      if (error.message === 'Invalid token') {
        return NextResponse.json(
          { error: 'Invalid authentication token' },
          { status: 401 }
        );
      }
      if (error.message === 'Too many requests') {
        return NextResponse.json(
          { error: 'Rate limit exceeded' },
          { status: 429 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}