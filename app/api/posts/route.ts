import { NextResponse } from 'next/server';
import { getAllPosts, getAllCategories } from '@/lib/posts';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let posts = await getAllPosts();

    if (category && category !== 'All') {
      posts = posts.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const q = search.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    const categories = await getAllCategories();

    return NextResponse.json({
      success: true,
      total: posts.length,
      categories,
      posts,
    });
  } catch (error) {
    console.error('[API /api/posts Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to retrieve posts' },
      { status: 500 }
    );
  }
}
