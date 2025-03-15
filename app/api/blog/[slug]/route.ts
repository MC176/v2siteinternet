import { NextRequest, NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/blog';

export async function GET(
  request: NextRequest,
  { params }: { params: Record<string, string> }
) {
  try {
    const slug = params.slug;
    const post = getPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json(
        { error: 'Article non trouvé' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération de l\'article' },
      { status: 500 }
    );
  }
}