import { NextResponse } from 'next/server';
import { getPostBySlug } from '@/lib/blog';

// Define the correct type for the request context
type RequestContext = {
  params: {
    slug: string;
  };
};

export async function GET(
  request: Request,
  context: RequestContext
) {
  try {
    const post = getPostBySlug(context.params.slug);
    
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