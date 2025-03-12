import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
});

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  author: string;
  image?: string;
  category?: string;
}

export function getAllPosts(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      // Remove ".md" from file name to get slug
      const slug = fileName.replace(/\.md$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Convert markdown to HTML
      const htmlContent = md.render(content);

      // Create excerpt from content (first 200 characters)
      const excerpt = content
        .replace(/[#*`]/g, '')
        .substring(0, 200)
        .trim() + '...';

      return {
        slug,
        content: htmlContent,
        excerpt,
        ...(data as { title: string; date: string; author: string; image?: string; category?: string })
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const htmlContent = md.render(content);

    return {
      slug,
      content: htmlContent,
      excerpt: content.substring(0, 200).trim() + '...',
      ...(data as { title: string; date: string; author: string; image?: string; category?: string })
    };
  } catch (error) {
    return null;
  }
}