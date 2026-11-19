/* eslint-disable @typescript-eslint/no-require-imports */
import defaultPosts from '@/data/posts.json';
import {
  fetchSupabasePosts,
  fetchSupabasePostBySlug,
  insertSupabasePost,
  deleteSupabasePost,
  SupabasePost,
} from './supabase';

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

interface WordPressPostRaw {
  id: number;
  slug: string;
  date: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  content?: { rendered?: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
    'wp:term'?: Array<Array<{ name?: string }>>;
    author?: Array<{ name?: string }>;
  };
}

// In-memory runtime cache
let runtimePosts: Post[] = [...(defaultPosts as Post[])];

export function loadLocalPosts(): Post[] {
  return runtimePosts;
}

export const LOCAL_POSTS: Post[] = defaultPosts as Post[];

/**
 * Fetch all posts:
 * 1. Checks Supabase cloud database first!
 * 2. Checks WordPress if enabled.
 * 3. Falls back to pre-seeded local posts if database is empty.
 */
export async function getAllPosts(): Promise<Post[]> {
  // 1. Try Supabase Cloud Database
  try {
    const supabasePosts = await fetchSupabasePosts();
    if (Array.isArray(supabasePosts) && supabasePosts.length > 0) {
      return supabasePosts.map(transformSupabasePost);
    }
  } catch (err) {
    console.warn('[Supabase Posts Fetch Notice]:', err);
  }

  // 2. Check WordPress toggle if configured
  const useWordPress = process.env.USE_WORDPRESS_BLOG === 'true';
  const wpUrl = process.env.WORDPRESS_API_URL;
  if (useWordPress && wpUrl) {
    try {
      const res = await fetch(`${wpUrl}/posts?_embed&per_page=20`, {
        next: { revalidate: 60 },
      });

      if (res.ok) {
        const wpPosts: WordPressPostRaw[] = await res.json();
        if (Array.isArray(wpPosts) && wpPosts.length > 0) {
          return wpPosts.map(transformWordPressPost);
        }
      }
    } catch (err) {
      console.warn('[WordPress Blog Fetch Notice]:', err);
    }
  }

  // 3. Fallback to default posts
  return defaultPosts as Post[];
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  // Try Supabase directly
  try {
    const spPost = await fetchSupabasePostBySlug(slug);
    if (spPost) {
      return transformSupabasePost(spPost);
    }
  } catch {
    // fallback
  }

  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/**
 * Create a new post:
 * Persists directly into Supabase database!
 */
export async function createPost(newPostData: Omit<Post, 'id'>): Promise<Post> {
  const id = String(Date.now());
  const post: Post = {
    ...newPostData,
    id,
  };

  // Convert to Supabase schema
  const supabasePayload: SupabasePost = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    category: post.category,
    cover_image: post.coverImage,
    date: post.date,
    read_time: post.readTime,
    author: post.author,
    tags: post.tags || [],
    featured: Boolean(post.featured),
  };

  // 1. Insert into Supabase cloud PostgreSQL
  const savedToSupabase = await insertSupabasePost(supabasePayload);
  if (!savedToSupabase) {
    console.warn('[Supabase Warning] Post could not be inserted into Supabase cloud table. Falling back to local memory.');
  }

  // 2. Also keep in-memory cache updated
  runtimePosts = [post, ...runtimePosts];

  return post;
}

/**
 * Delete a post by ID or slug
 */
export async function deletePost(id: string): Promise<boolean> {
  // Delete from Supabase
  await deleteSupabasePost(id);

  runtimePosts = runtimePosts.filter((p) => p.id !== id && p.slug !== id);
  return true;
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
 * Adapter: Transforms Supabase DB row into Post interface
 */
function transformSupabasePost(sp: SupabasePost): Post {
  return {
    id: String(sp.id || sp.slug),
    slug: sp.slug,
    title: sp.title,
    excerpt: sp.excerpt,
    content: sp.content,
    category: sp.category,
    date: sp.date,
    readTime: sp.read_time,
    coverImage: sp.cover_image,
    featured: sp.featured,
    author: sp.author || {
      name: 'Advisory Team',
      role: 'Senior Wealth Strategist',
      avatar: '/images/Nova-Finance-Logo1.png',
    },
    tags: sp.tags || [],
  };
}

/**
 * Adapter: Transforms a WordPress REST API post object into standard Post interface
 */
function transformWordPressPost(wpPost: WordPressPostRaw): Post {
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
    tags: wpPost._embedded?.['wp:term']?.[1]?.map((t) => t.name || '').filter(Boolean) || [],
  };
}
