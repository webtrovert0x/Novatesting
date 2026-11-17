import defaultPosts from '@/data/posts.json';

export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  featured?: boolean;
  author: Author;
  tags?: string[];
}

// In-memory runtime cache
let runtimePosts: Post[] = [...(defaultPosts as Post[])];

/**
 * Load raw posts
 */
function loadLocalPosts(): Post[] {
  return runtimePosts;
}

/**
 * Save posts to data/posts.json (if in Node environment) and in-memory cache
 */
export async function saveLocalPosts(posts: Post[]): Promise<boolean> {
  runtimePosts = posts;

  if (typeof window === 'undefined') {
    try {
      const fs = await import('fs');
      const path = await import('path');
      const filePath = path.join(process.cwd(), 'data', 'posts.json');
      fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), 'utf-8');
      return true;
    } catch (err) {
      console.warn('[Posts Storage] Filesystem write notice:', err);
    }
  }

  return true;
}

export const LOCAL_POSTS: Post[] = defaultPosts as Post[];

/**
 * Fetch all posts
 * Checks if USE_WORDPRESS_BLOG is enabled.
 * If yes, queries WordPress REST API; otherwise returns local posts.
 */
export async function getAllPosts(): Promise<Post[]> {
  const useWordPress = process.env.USE_WORDPRESS_BLOG === 'true';

  if (useWordPress) {
    try {
      const wpUrl = process.env.WORDPRESS_API_URL || 'https://novafinance.tainaliel.com/wp-json/wp/v2';
      const res = await fetch(`${wpUrl}/posts?_embed&per_page=20`, {
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const wpPosts = await res.json();
        if (Array.isArray(wpPosts) && wpPosts.length > 0) {
          return wpPosts.map(transformWordPressPost);
        }
      }
    } catch (err) {
      console.warn('[WordPress Blog Fetch Notice]: Falling back to local posts:', err);
    }
  }

  return loadLocalPosts();
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Create a new post
 */
export async function createPost(newPostData: Omit<Post, 'id'>): Promise<Post> {
  const posts = loadLocalPosts();
  const id = String(Date.now());
  const post: Post = {
    ...newPostData,
    id,
  };

  const updatedPosts = [post, ...posts];
  await saveLocalPosts(updatedPosts);
  return post;
}

/**
 * Delete a post by ID
 */
export async function deletePost(id: string): Promise<boolean> {
  const posts = loadLocalPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length !== posts.length) {
    await saveLocalPosts(filtered);
    return true;
  }
  return false;
}

/**
 * Get related posts excluding the current post
 */
export async function getRelatedPosts(currentSlug: string, category: string, limit = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  const filtered = posts.filter((p) => p.slug !== currentSlug);
  
  const sameCategory = filtered.filter((p) => p.category === category);
  const others = filtered.filter((p) => p.category !== category);

  return [...sameCategory, ...others].slice(0, limit);
}

/**
 * Get all unique categories
 */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return ['All', ...categories];
}

/**
 * Adapter: Transforms a WordPress REST API post object into our standard Post interface
 */
function transformWordPressPost(wpPost: any): Post {
  const featuredMedia = wpPost._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const categories = wpPost._embedded?.['wp:term']?.[0];
  const primaryCategory = categories?.[0]?.name || 'Insights';
  const authorName = wpPost._embedded?.['author']?.[0]?.name || 'Nova Finance Advisor';

  const wordCount = (wpPost.content?.rendered || '').replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return {
    id: String(wpPost.id),
    slug: wpPost.slug,
    title: wpPost.title?.rendered || 'Untitled Article',
    excerpt: (wpPost.excerpt?.rendered || '').replace(/<[^>]*>/g, '').trim(),
    content: wpPost.content?.rendered || '',
    category: primaryCategory,
    date: new Date(wpPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: `${minutes} min read`,
    coverImage: featuredMedia || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    author: {
      name: authorName,
      role: 'Wealth Advisory Team',
      avatar: '/images/Nova-Finance-Logo1.png',
    },
    tags: wpPost._embedded?.['wp:term']?.[1]?.map((t: any) => t.name) || [],
  };
}
