import { NextResponse } from 'next/server';
import { getPostBySlug, getRelatedPosts } from '@/lib/posts';

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await props.params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Article not found' },
        { status: 404 }
      );
    }

    const related = await getRelatedPosts(post.slug, post.category, 3);

    return NextResponse.json({
      success: true,
      post,
      related,
    });
  } catch (error) {
    console.error('[API /api/posts/[slug] Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
