// Server-only Supabase client configuration
// Values are read strictly from private environment variables — NEVER hardcoded or exposed to the client.
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export interface SupabasePost {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image: string;
  date: string;
  read_time: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  featured: boolean;
  created_at?: string;
}

/**
 * Fetch all posts from Supabase via PostgREST API (Server-side only)
 */
export async function fetchSupabasePosts(): Promise<SupabasePost[]> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return [];
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?select=*&order=created_at.desc`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.warn('[Supabase API Server Notice] Status:', res.status, await res.text());
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('[Supabase Fetch Error]:', err);
    return [];
  }
}

/**
 * Fetch a single post by slug from Supabase (Server-side only)
 */
export async function fetchSupabasePostBySlug(slug: string): Promise<SupabasePost | null> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return null;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?slug=eq.${encodeURIComponent(slug)}&select=*`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      next: { revalidate: 0 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data[0] : null;
  } catch (err) {
    console.error('[Supabase Fetch By Slug Error]:', err);
    return null;
  }
}

/**
 * Insert a new post into Supabase (Server-side only)
 */
export async function insertSupabasePost(post: SupabasePost): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn('[Supabase] Missing SUPABASE_URL or SUPABASE_KEY environment variables.');
    return false;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify(post),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('[Supabase Server Insert Error]:', res.status, errText);
      return false;
    }

    return true;
  } catch (err) {
    console.error('[Supabase Insert Exception]:', err);
    return false;
  }
}

/**
 * Delete a post from Supabase by ID (Server-side only)
 */
export async function deleteSupabasePost(id: string): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return false;
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/posts?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
    });

    return res.ok;
  } catch (err) {
    console.error('[Supabase Delete Error]:', err);
    return false;
  }
}
