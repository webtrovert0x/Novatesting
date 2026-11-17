import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts';
import ShareButtons from '@/components/ShareButtons';
import { Calendar, Clock, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Nova Finance',
    };
  }

  return {
    title: `${post.title} | Nova Finance Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.slug, post.category, 3);

  return (
    <main className="page-wrapper">
      <Header />

      {/* Article Header Banner */}
      <section className="article-header-section">
        <div className="container">
          <div className="article-header-inner text-center">
            {/* Breadcrumb */}
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <Link href="/blog">Insights</Link>
              <span className="crumb-sep">&gt;</span>
              <span className="crumb-current">{post.category}</span>
            </div>

            <span className="article-category-badge">{post.category}</span>
            <h1 className="article-main-title">{post.title}</h1>

            <div className="article-meta-row">
              <div className="article-author-meta">
                <span className="meta-by">By</span>
                <span className="meta-author-name">{post.author.name}</span>
                <span className="meta-author-role">({post.author.role})</span>
              </div>
              <span className="meta-dot">•</span>
              <div className="meta-item">
                <Calendar size={15} /> {post.date}
              </div>
              <span className="meta-dot">•</span>
              <div className="meta-item">
                <Clock size={15} /> {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Area */}
      <section className="article-body-section">
        <div className="container article-layout-container">
          {/* Main Hero Image */}
          <div className="article-hero-media">
            <img src={post.coverImage} alt={post.title} className="article-hero-img" />
          </div>

          {/* Social Share & Top Tools Bar */}
          <div className="article-top-bar">
            <Link href="/blog" className="back-to-blog-link">
              <ArrowLeft size={16} /> Back to all articles
            </Link>
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Article Body */}
          <article className="article-rich-content">
            <div
              className="prose-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="article-tags-wrap">
                <span className="tags-label">Topics:</span>
                <div className="tags-list">
                  {post.tags.map((tag) => (
                    <span key={tag} className="article-tag-item">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Author Profile Box */}
          <div className="author-bio-card">
            <div className="author-avatar-col">
              <div className="author-avatar-wrap">
                <img src={post.author.avatar} alt={post.author.name} className="author-avatar-img" />
              </div>
            </div>
            <div className="author-text-col">
              <span className="author-label">Published by</span>
              <h4 className="author-heading">{post.author.name}</h4>
              <p className="author-role-title">{post.author.role}</p>
              <p className="author-desc">
                The advisory research team at Nova Finance specializes in holistic financial needs analyses, tax-advantaged mutual funds selection, and cross-border wealth preservation frameworks.
              </p>
            </div>
          </div>

          {/* Bottom Share Bar */}
          <div className="article-bottom-share">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>

          {/* Consultation CTA Banner */}
          <div className="article-cta-box">
            <div className="article-cta-inner">
              <div className="article-cta-badge">
                <ShieldCheck size={20} /> CERTIFIED ADVISORY
              </div>
              <h3 className="article-cta-title">Apply These Strategies to Your Portfolio</h3>
              <p className="article-cta-desc">
                Schedule a confidential, complimentary 30-minute Financial Needs Analysis session with a licensed Nova Finance wealth advisor.
              </p>
              <Link href="/book-a-consultation" className="article-cta-btn">
                Book a Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="related-articles-section">
              <div className="related-header">
                <h3 className="related-title">Related Publications</h3>
                <Link href="/blog" className="view-all-link">
                  View all <ArrowRight size={15} />
                </Link>
              </div>

              <div className="related-grid">
                {relatedPosts.map((rel) => (
                  <article key={rel.id} className="related-card">
                    <div className="related-img-wrap">
                      <Link href={`/blog/${rel.slug}`}>
                        <img src={rel.coverImage} alt={rel.title} className="related-img" />
                      </Link>
                      <span className="related-badge">{rel.category}</span>
                    </div>
                    <div className="related-card-body">
                      <span className="related-date">{rel.date}</span>
                      <h4 className="related-card-title">
                        <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                      </h4>
                      <Link href={`/blog/${rel.slug}`} className="related-read-link">
                        Read article <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .article-header-section {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0 60px;
        }
        .article-header-inner {
          max-width: 860px;
          margin: 0 auto;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #94a3b8;
          margin-bottom: 24px;
        }
        .breadcrumbs a {
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .breadcrumbs a:hover {
          color: #00c2cb;
        }
        .crumb-sep {
          color: #00c2cb;
        }
        .crumb-current {
          color: #00c2cb;
          font-weight: 600;
        }
        .article-category-badge {
          display: inline-block;
          background-color: rgba(0, 194, 203, 0.15);
          color: #00c2cb;
          padding: 6px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .article-main-title {
          font-size: 2.85rem;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -0.5px;
        }
        .article-meta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.92rem;
          color: #cbd5e1;
        }
        .article-author-meta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .meta-by {
          color: #94a3b8;
        }
        .meta-author-name {
          font-weight: 700;
          color: #ffffff;
        }
        .meta-author-role {
          color: #94a3b8;
          font-size: 0.85rem;
        }
        .meta-dot {
          color: #00c2cb;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .article-body-section {
          padding: 50px 0 100px;
          background-color: #f8fafc;
        }
        .article-layout-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .article-hero-media {
          width: 100%;
          max-height: 480px;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 35px;
          box-shadow: 0 10px 30px rgba(0, 0, 80, 0.08);
        }
        .article-hero-img {
          width: 100%;
          height: 100%;
          max-height: 480px;
          object-fit: cover;
          display: block;
        }
        .article-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 16px 0;
          margin-bottom: 35px;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .back-to-blog-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #003399;
          text-decoration: none;
          transition: transform 0.2s ease;
        }
        .back-to-blog-link:hover {
          transform: translateX(-3px);
          color: #002277;
        }

        /* Article Prose */
        .article-rich-content {
          background-color: #ffffff;
          padding: 50px 55px;
          border-radius: 20px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
          margin-bottom: 45px;
        }
        .prose-content {
          font-size: 1.12rem;
          line-height: 1.85;
          color: #334155;
        }
        .prose-content .lead {
          font-size: 1.25rem;
          font-weight: 500;
          line-height: 1.75;
          color: #0f172a;
          margin-bottom: 28px;
          border-left: 4px solid #00c2cb;
          padding-left: 20px;
        }
        .prose-content h2 {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0a1128;
          margin: 40px 0 16px;
          line-height: 1.35;
        }
        .prose-content h3 {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0a1128;
          margin: 30px 0 14px;
        }
        .prose-content p {
          margin-bottom: 22px;
        }
        .prose-content ul, .prose-content ol {
          margin: 20px 0 28px 24px;
        }
        .prose-content li {
          margin-bottom: 12px;
          line-height: 1.7;
        }
        .prose-content blockquote {
          background-color: #f1f5f9;
          border-left: 4px solid #003399;
          padding: 24px 28px;
          border-radius: 0 12px 12px 0;
          margin: 35px 0;
          font-style: italic;
          font-size: 1.15rem;
          line-height: 1.7;
          color: #000050;
        }

        .article-tags-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 40px;
          padding-top: 25px;
          border-top: 1px solid #f1f5f9;
        }
        .tags-label {
          font-weight: 700;
          font-size: 0.88rem;
          color: #64748b;
        }
        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .article-tag-item {
          background-color: #f1f5f9;
          color: #003399;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        /* Author Bio */
        .author-bio-card {
          display: flex;
          align-items: center;
          gap: 24px;
          background-color: #ffffff;
          padding: 30px 35px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          margin-bottom: 30px;
        }
        .author-avatar-wrap {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          background-color: #f1f5f9;
          border: 2px solid #003399;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .author-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .author-label {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00c2cb;
        }
        .author-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 2px;
        }
        .author-role-title {
          font-size: 0.88rem;
          color: #003399;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .author-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
        }

        .article-bottom-share {
          display: flex;
          justify-content: center;
          padding: 20px 0 35px;
        }

        /* Consultation CTA Box */
        .article-cta-box {
          background: linear-gradient(135deg, #000050 0%, #003399 100%);
          border-radius: 20px;
          padding: 45px 50px;
          color: #ffffff;
          text-align: center;
          margin-bottom: 60px;
          box-shadow: 0 12px 30px rgba(0, 0, 80, 0.12);
        }
        .article-cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }
        .article-cta-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .article-cta-desc {
          max-width: 620px;
          margin: 0 auto 24px;
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        .article-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #00c2cb;
          color: #000050;
          font-weight: 800;
          font-size: 1rem;
          padding: 14px 30px;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .article-cta-btn:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 194, 203, 0.35);
        }

        /* Related Articles */
        .related-articles-section {
          padding-top: 20px;
        }
        .related-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }
        .related-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a1128;
        }
        .view-all-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #003399;
          font-weight: 700;
          font-size: 0.92rem;
          text-decoration: none;
        }
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 24px;
        }
        .related-card {
          background-color: #ffffff;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .related-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(0, 51, 153, 0.08);
        }
        .related-img-wrap {
          position: relative;
          height: 160px;
          overflow: hidden;
        }
        .related-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .related-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: rgba(0, 0, 80, 0.85);
          color: #00c2cb;
          padding: 3px 10px;
          border-radius: 9999px;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .related-card-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .related-date {
          font-size: 0.78rem;
          color: #64748b;
          margin-bottom: 8px;
        }
        .related-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 16px;
          color: #0a1128;
          flex-grow: 1;
        }
        .related-card-title a {
          color: inherit;
          text-decoration: none;
        }
        .related-card-title a:hover {
          color: #003399;
        }
        .related-read-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #003399;
          text-decoration: none;
        }

        @media (max-width: 800px) {
          .article-main-title {
            font-size: 2.1rem;
          }
          .article-rich-content {
            padding: 35px 25px;
          }
          .author-bio-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
