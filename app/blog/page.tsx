'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { User, Calendar, MessageSquare, ArrowRight, ShieldCheck, Loader2 } from 'lucide-react';
import { getWordPressPosts, WPPost } from '@/lib/wordpress';

const DEFAULT_POSTS = [
  {
    title: 'Term Life Insurance for Parents: How Much Do You Need?',
    author: 'Olamide Abayomi',
    date: 'September 26, 2026',
    comments: '0 Comments',
    excerpt:
      'Term life insurance for parents can help protect a household during years when children or other relatives depend on a parent’s income or care. The amount to consider depends on the financial gap that would remain if that parent died. A useful starting point is to add the obligations you want covered, then subtract resources...',
    categories: ['Financial Education', 'Life Insurance'],
    slug: 'term-life-insurance-for-parents',
  },
  {
    title: 'Financial Needs Analysis Checklist: 7 Steps for Families',
    author: 'Olamide Abayomi',
    date: 'September 26, 2026',
    comments: '0 Comments',
    excerpt:
      'A financial needs analysis checklist helps you bring income, expenses, debts, savings, insurance, and family goals into one review. The purpose is to identify the questions that deserve attention and choose practical next steps. You do not need perfectly organized finances to begin. A few recent statements and an honest conversation can reveal where your...',
    categories: ['Financial Education'],
    slug: 'financial-needs-analysis-checklist',
  },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(DEFAULT_POSTS);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadWPPosts() {
      try {
        const wpData = await getWordPressPosts(10);
        if (wpData && wpData.length > 0) {
          const formatted = wpData.map((p) => ({
            title: p.title.rendered.replace(/<[^>]+>/g, ''),
            author: p.author_name || 'Olamide Abayomi',
            date: p.date,
            comments: '0 Comments',
            excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, '').slice(0, 240) + '...',
            categories: p.categories_names || ['Financial Education'],
            slug: p.slug,
          }));
          setPosts(formatted);
        }
      } catch (e) {
        console.warn('Using default posts due to WP connection status:', e);
      }
    }
    loadWPPosts();
  }, []);

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">FINANCIAL EDUCATION &amp; WEALTH STRATEGIES</span>
            <h1 className="banner-title">Nova Finance Insights &amp; Financial Education</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Insights &amp; Articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Content */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-layout-grid">
            <div className="posts-column">
              {posts.map((post, idx) => (
                <article key={idx} className="post-card">
                  <h2 className="post-title">
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <div className="post-meta">
                    <span className="meta-item">
                      <User size={15} />
                      <span>{post.author} (Licensed MD Producer)</span>
                    </span>
                    <span className="meta-item">
                      <Calendar size={15} />
                      <span>Published: {post.date}</span>
                    </span>
                    <span className="meta-item">
                      <ShieldCheck size={15} color="#16a34a" />
                      <span>Fact-Checked &amp; Peer Reviewed</span>
                    </span>
                  </div>

                  <p className="post-excerpt">{post.excerpt}</p>

                  <div className="post-footer">
                    <div className="category-tags">
                      {post.categories.map((cat, cIdx) => (
                        <span key={cIdx} className="category-pill">
                          {cat}
                        </span>
                      ))}
                    </div>

                    <Link href={`/${post.slug}`} className="read-more-circle-btn" aria-label={`Read ${post.title}`}>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              {/* Lead Magnet Widget */}
              <div className="sidebar-widget lead-magnet-widget">
                <div className="widget-icon-box">
                  <ShieldCheck size={32} color="#003399" />
                </div>
                <h3 className="widget-title">Free Download: FNA Family Checklist</h3>
                <p className="widget-text">
                  Get our 7-step household financial audit checklist covering survivor income replacement, debt acceleration, and tax wrappers.
                </p>
                <Link
                  href="/financial-needs-analysis-checklist"
                  className="btn-blue-solid widget-cta"
                >
                  Read &amp; Download Checklist ➔
                </Link>
              </div>

              {/* Author / Principal Bio Widget */}
              <div className="sidebar-widget author-widget">
                <h4 className="author-heading">About the Author &amp; Reviewer</h4>
                <p className="author-p">
                  <strong>Olamide Abayomi (Tainaliel)</strong> is the Managing Principal of NOVA Finance by Tainaliel LLC. He is an independent insurance producer licensed in the State of Maryland, specializing in multi-carrier family protection and retirement compound modeling.
                </p>
                <Link href="/about-company" className="author-link">
                  Learn About Our Advisory Philosophy ➔
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 75px 0 65px;
          text-align: center;
        }
        .banner-eyebrow {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }
        .banner-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #cbd5e1;
        }
        .crumb-sep {
          color: #00c2cb;
        }
        .blog-section {
          padding: 80px 0 100px;
          background-color: #f7f9fc;
        }
        .blog-layout-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }
        .posts-column {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .post-card {
          background-color: #ffffff;
          border-radius: 18px;
          padding: 40px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .post-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.3;
          margin-bottom: 14px;
        }
        .post-title a:hover {
          color: #003399;
        }
        .post-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.88rem;
          color: #718096;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .post-excerpt {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 28px;
        }
        .post-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #edf2f7;
        }
        .category-tags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .category-pill {
          background-color: #f1f5f9;
          color: #003399;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }
        .read-more-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #003399;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
        }
        .read-more-circle-btn:hover {
          background-color: #002277;
          transform: translateX(3px);
        }
        .sidebar-widget {
          background-color: #ffffff;
          border-radius: 18px;
          padding: 36px 28px;
          border: 1px solid #e2e8f0;
          position: sticky;
          top: 120px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .widget-icon-box {
          margin-bottom: 16px;
        }
        .widget-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 12px;
        }
        .widget-text {
          font-size: 0.95rem;
          color: #4a5568;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .widget-cta {
          display: inline-block;
          width: 100%;
          text-align: center;
          background-color: #003399;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 8px;
          font-weight: 700;
          transition: background-color 0.2s;
        }
        .widget-cta:hover {
          background-color: #002277;
        }
        @media (max-width: 991px) {
          .blog-layout-grid {
            grid-template-columns: 1fr;
          }
          .banner-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </main>
  );
}
