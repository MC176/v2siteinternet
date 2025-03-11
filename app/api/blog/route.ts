import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    const files = await fs.readdir(contentDir);
    
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.json'))
        .map(async (file) => {
          const content = await fs.readFile(path.join(contentDir, file), 'utf-8');
          const post = JSON.parse(content);
          return {
            ...post,
            slug: file.replace('.json', '')
          };
        })
    );

    // Sort posts by date, most recent first
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des articles' },
      { status: 500 }
    );
  }
}