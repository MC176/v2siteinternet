import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const contentDir = path.join(process.cwd(), 'content', 'blog');
    const filePath = path.join(contentDir, `${params.slug}.json`);
    
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const post = JSON.parse(fileContent);

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Article non trouvé' },
      { status: 404 }
    );
  }
}