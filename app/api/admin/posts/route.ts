import { NextResponse } from 'next/server';
import { getAllPosts, createPost, deletePost } from '@/lib/posts';

function isAuthorized(request: Request): boolean {
  // 1. Check for authenticated HTTP-only session cookie
  const cookieHeader = request.headers.get('cookie') || '';
  if (cookieHeader.includes('nova_admin_session=authenticated')) {
    return true;
  }

  // 2. Check for optional direct admin key if configured
  const expectedPassword = process.env.ADMIN_PASSWORD;
  const clientKey = request.headers.get('x-admin-key');
  if (expectedPassword && clientKey && clientKey.trim() === expectedPassword.trim()) {
    return true;
  }

  return false;
}

export async function GET() {
  try {
    const posts = await getAllPosts();
    return NextResponse.json({
      success: true,
      total: posts.length,
      posts,
    });
  } catch (error) {
    console.error('[Admin API GET Error]:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized. Invalid or missing admin credentials.' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, excerpt, content, category, coverImage, authorName, authorRole, tags, featured } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        { success: false, message: 'Title, excerpt, and content are required.' },
        { status: 400 }
      );
    }

    // Auto-generate clean URL slug
    const baseSlug = (body.slug || title)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const existingPosts = await getAllPosts();
    let finalSlug = baseSlug;
    let counter = 1;
    while (existingPosts.some((p) => p.slug === finalSlug)) {
      finalSlug = `${baseSlug}-${counter++}`;
    }

    // Calculate approximate read time
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(wordCount / 200));

    // Format current date
    const formattedDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const newPostData = {
      slug: finalSlug,
      title,
      excerpt,
      content,
      category: category || 'Investment Strategy',
      date: formattedDate,
      readTime: `${minutes} min read`,
      coverImage:
        coverImage ||
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      featured: Boolean(featured),
      author: {
        name: authorName || 'Advisory Team',
        role: authorRole || 'Senior Wealth Strategist',
        avatar: '/images/Nova-Finance-Logo1.png',
      },
      tags: Array.isArray(tags) ? tags : typeof tags === 'string' ? tags.split(',').map((t: string) => t.trim()) : [],
    };

    const created = await createPost(newPostData);

    return NextResponse.json({
      success: true,
      message: 'Article published successfully!',
      post: created,
    });
  } catch (error) {
    console.error('[Admin API POST Error]:', error);
    return NextResponse.json({ success: false, message: 'Failed to create article' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized. Invalid or missing admin credentials.' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ success: false, message: 'Missing post ID' }, { status: 400 });
    }

    const removed = await deletePost(id);
    if (!removed) {
      return NextResponse.json({ success: false, message: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('[Admin API DELETE Error]:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete article' }, { status: 500 });
  }
}
