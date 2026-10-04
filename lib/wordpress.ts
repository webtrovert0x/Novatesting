/**
 * WordPress Headless Backend Integration Service
 * Connects Next.js frontend to WordPress REST API on novafinance.tainaliel.com
 */

const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://novafinance.tainaliel.com/wp-json/wp/v2';

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author_name?: string;
  featured_media_url?: string;
  categories_names?: string[];
}

/**
 * Fetch all published blog posts from WordPress backend
 */
export async function getWordPressPosts(limit: number = 10): Promise<WPPost[]> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?per_page=${limit}&_embed`, {
      next: { revalidate: 60 }, // Cache revalidation every 60 seconds
    });

    if (!res.ok) {
      console.warn(`[WordPress API] Failed to fetch posts: ${res.statusText}`);
      return [];
    }

    const posts = await res.json();
    return posts.map((post: any) => ({
      id: post.id,
      date: new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      slug: post.slug,
      title: { rendered: post.title?.rendered || '' },
      content: { rendered: post.content?.rendered || '' },
      excerpt: { rendered: post.excerpt?.rendered || '' },
      author_name: post._embedded?.author?.[0]?.name || 'Nova Finance Advisory',
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      categories_names: post._embedded?.['wp:term']?.[0]?.map((t: any) => t.name) || ['Financial Education'],
    }));
  } catch (error) {
    console.error('[WordPress API] Error fetching posts:', error);
    return [];
  }
}

/**
 * Fetch a single blog post by slug from WordPress backend
 */
export async function getWordPressPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;

    const posts = await res.json();
    if (!posts || posts.length === 0) return null;

    const post = posts[0];
    return {
      id: post.id,
      date: new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      slug: post.slug,
      title: { rendered: post.title?.rendered || '' },
      content: { rendered: post.content?.rendered || '' },
      excerpt: { rendered: post.excerpt?.rendered || '' },
      author_name: post._embedded?.author?.[0]?.name || 'Nova Finance Advisory',
      featured_media_url: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      categories_names: post._embedded?.['wp:term']?.[0]?.map((t: any) => t.name) || ['Financial Education'],
    };
  } catch (error) {
    console.error(`[WordPress API] Error fetching post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Submit lead/inquiry form data to WordPress backend
 */
export async function submitToWordPressBackend(formData: Record<string, any>, formId?: string) {
  try {
    const endpoint = formId
      ? `https://novafinance.tainaliel.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`
      : `/api/contact`;

    const bodyData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      bodyData.append(key, String(value));
    });

    const res = await fetch(endpoint, {
      method: 'POST',
      body: formId ? bodyData : JSON.stringify(formData),
      headers: formId ? {} : { 'Content-Type': 'application/json' },
    });

    return await res.json();
  } catch (error) {
    console.error('[WordPress API] Form submission error:', error);
    return { status: 'error', message: 'Failed to submit to WordPress backend' };
  }
}
