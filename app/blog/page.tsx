'use client';

import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Search, Calendar, Clock, BookOpen } from 'lucide-react';
import { LOCAL_POSTS } from '@/lib/posts';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const set = new Set(LOCAL_POSTS.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredPosts = useMemo(() => {
    return LOCAL_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === 'All' || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return LOCAL_POSTS.find((p) => p.featured) || LOCAL_POSTS[0];
  }, []);

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">INSIGHTS &amp; PERSPECTIVES</span>
            <h1 className="banner-title">Wealth Strategies &amp; Knowledge</h1>
            <p className="banner-subtitle">
              Expert commentary on tax optimization, family asset protection, and multi-generational financial planning.
            </p>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Insights &amp; Blog</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Main Section */}
      <section className="blog-section">
        <div className="container">
          {/* Controls: Search & Category Filter */}
          <div className="blog-controls-bar">
            {/* Category Pills */}
            <div className="category-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search articles or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="search-clear-btn">
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Featured Post Highlight (Shown when viewing all & no search query) */}
          {selectedCategory === 'All' && !searchQuery && featuredPost && (
            <div className="featured-card-wrapper">
              <div className="featured-card">
                <div className="featured-img-col">
                  <div className="featured-img-box">
                    <img
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="featured-img"
                    />
                    <span className="featured-badge">Featured Strategy</span>
                  </div>
                </div>

                <div className="featured-content-col">
                  <div className="post-meta-top">
                    <span className="category-tag">{featuredPost.category}</span>
                    <span className="meta-item">
                      <Clock size={14} /> {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="featured-title">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="featured-excerpt">{featuredPost.excerpt}</p>

                  <div className="featured-footer">
                    <div className="author-info">
                      <div className="author-details">
                        <span className="author-name">{featuredPost.author.name}</span>
                        <span className="post-date">
                          <Calendar size={13} /> {featuredPost.date}
                        </span>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`} className="read-more-btn">
                      Read Full Article <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="posts-grid-header">
            <h3 className="grid-section-title">
              {searchQuery
                ? `Results for "${searchQuery}" (${filteredPosts.length})`
                : selectedCategory === 'All'
                ? 'Recent Publications'
                : `${selectedCategory} Articles (${filteredPosts.length})`}
            </h3>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="no-posts-box text-center">
              <BookOpen size={44} className="no-posts-icon" />
              <h4>No articles found</h4>
              <p>We couldn&apos;t find any publications matching your current search or filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="btn-reset-filters"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="posts-grid">
              {filteredPosts.map((post) => (
                <article key={post.id} className="post-card">
                  <div className="post-card-img-wrap">
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.coverImage} alt={post.title} className="post-card-img" />
                    </Link>
                    <span className="card-category-badge">{post.category}</span>
                  </div>

                  <div className="post-card-body">
                    <div className="card-meta">
                      <span className="meta-stat">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="meta-stat">
                        <Clock size={13} /> {post.readTime}
                      </span>
                    </div>

                    <h4 className="post-card-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="post-card-excerpt">{post.excerpt}</p>

                    <div className="post-card-footer">
                      <div className="card-author">
                        <span className="card-author-name">{post.author.name}</span>
                        <span className="card-author-role">{post.author.role}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="card-arrow-link" aria-label={`Read ${post.title}`}>
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Advisory Consultation Callout */}
          <div className="blog-cta-banner">
            <div className="cta-banner-inner">
              <div className="cta-banner-text">
                <span className="cta-eyebrow">TAILORED STRATEGY</span>
                <h3 className="cta-headline">Have specific financial questions about your portfolio?</h3>
                <p className="cta-sub">
                  Schedule a confidential, complimentary consultation with a licensed Nova Finance advisor.
                </p>
              </div>
              <div className="cta-banner-action">
                <Link href="/book-a-consultation" className="btn-cta-primary">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 80px 0 70px;
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
          font-size: 3.1rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.5px;
        }
        .banner-subtitle {
          max-width: 680px;
          margin: 0 auto 20px;
          font-size: 1.12rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #94a3b8;
        }
        .crumb-sep {
          color: #00c2cb;
        }

        .blog-section {
          padding: 70px 0 100px;
          background-color: #f8fafc;
        }

        /* Controls */
        .blog-controls-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 45px;
          padding-bottom: 25px;
          border-bottom: 1px solid #e2e8f0;
        }
        .category-pills {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
        .category-pill {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .category-pill:hover {
          border-color: #003399;
          color: #003399;
        }
        .category-pill.active {
          background-color: #003399;
          border-color: #003399;
          color: #ffffff;
        }

        .search-box {
          position: relative;
          min-width: 280px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #64748b;
        }
        .search-input {
          width: 100%;
          padding: 10px 36px 10px 40px;
          border-radius: 9999px;
          border: 1px solid #cbd5e1;
          background-color: #ffffff;
          font-size: 0.92rem;
          color: #0f172a;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .search-input:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.1);
        }
        .search-clear-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #64748b;
          cursor: pointer;
        }

        /* Featured Card */
        .featured-card-wrapper {
          margin-bottom: 55px;
        }
        .featured-card {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 51, 153, 0.07);
          border: 1px solid #e2e8f0;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .featured-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(0, 51, 153, 0.12);
        }
        .featured-img-col {
          position: relative;
          min-height: 380px;
        }
        .featured-img-box {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .featured-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background-color: #000050;
          color: #00c2cb;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        .featured-content-col {
          padding: 40px 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .post-meta-top {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .category-tag {
          background-color: rgba(0, 51, 153, 0.08);
          color: #003399;
          font-weight: 700;
          font-size: 0.78rem;
          padding: 4px 12px;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .meta-item {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.85rem;
          color: #64748b;
        }
        .featured-title {
          font-size: 1.85rem;
          font-weight: 800;
          line-height: 1.3;
          margin-bottom: 16px;
          color: #0a1128;
        }
        .featured-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .featured-title a:hover {
          color: #003399;
        }
        .featured-excerpt {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 30px;
        }
        .featured-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
        }
        .author-details {
          display: flex;
          flex-direction: column;
        }
        .author-name {
          font-weight: 700;
          color: #0f172a;
          font-size: 0.95rem;
        }
        .post-date {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.82rem;
          color: #64748b;
        }
        .read-more-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #003399;
          color: #ffffff;
          padding: 10px 22px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background-color 0.2s ease;
        }
        .read-more-btn:hover {
          background-color: #002277;
        }

        /* Posts Grid */
        .posts-grid-header {
          margin-bottom: 30px;
        }
        .grid-section-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0a1128;
        }
        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }
        .post-card {
          background-color: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .post-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 51, 153, 0.09);
        }
        .post-card-img-wrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }
        .post-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .post-card:hover .post-card-img {
          transform: scale(1.05);
        }
        .card-category-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background-color: rgba(0, 0, 80, 0.85);
          backdrop-filter: blur(4px);
          color: #00c2cb;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .post-card-body {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 12px;
        }
        .meta-stat {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          color: #64748b;
        }
        .post-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1.4;
          margin-bottom: 12px;
          color: #0a1128;
        }
        .post-card-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .post-card-title a:hover {
          color: #003399;
        }
        .post-card-excerpt {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .post-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }
        .card-author {
          display: flex;
          flex-direction: column;
        }
        .card-author-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
        }
        .card-author-role {
          font-size: 0.75rem;
          color: #64748b;
        }
        .card-arrow-link {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: #f1f5f9;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .card-arrow-link:hover {
          background-color: #003399;
          color: #ffffff;
          transform: translateX(3px);
        }

        /* No Posts Found */
        .no-posts-box {
          background: #ffffff;
          border-radius: 16px;
          padding: 60px 20px;
          border: 1px dashed #cbd5e1;
          margin-bottom: 50px;
        }
        .no-posts-icon {
          color: #94a3b8;
          margin-bottom: 16px;
        }
        .no-posts-box h4 {
          font-size: 1.35rem;
          color: #0f172a;
          margin-bottom: 8px;
        }
        .no-posts-box p {
          color: #64748b;
          max-width: 440px;
          margin: 0 auto 20px;
        }
        .btn-reset-filters {
          background-color: #003399;
          color: #ffffff;
          border: none;
          padding: 10px 22px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.88rem;
          cursor: pointer;
        }

        /* Consultation CTA Banner */
        .blog-cta-banner {
          background: linear-gradient(135deg, #000050 0%, #003399 100%);
          border-radius: 20px;
          padding: 48px 50px;
          color: #ffffff;
          box-shadow: 0 15px 35px rgba(0, 0, 80, 0.15);
        }
        .cta-banner-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 25px;
        }
        .cta-banner-text {
          max-width: 650px;
        }
        .cta-eyebrow {
          display: inline-block;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 8px;
        }
        .cta-headline {
          font-size: 1.85rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
          line-height: 1.3;
        }
        .cta-sub {
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.5;
        }
        .btn-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #00c2cb;
          color: #000050;
          font-weight: 800;
          font-size: 1rem;
          padding: 14px 28px;
          border-radius: 9999px;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }
        .btn-cta-primary:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 194, 203, 0.35);
        }

        @media (max-width: 900px) {
          .featured-card {
            grid-template-columns: 1fr;
          }
          .featured-img-col {
            min-height: 260px;
          }
          .featured-content-col {
            padding: 30px 25px;
          }
          .blog-controls-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .search-box {
            width: 100%;
          }
          .banner-title {
            font-size: 2.3rem;
          }
        }

        @media (max-width: 640px) {
          .posts-grid {
            grid-template-columns: 1fr;
          }
          .cta-banner-inner {
            flex-direction: column;
            text-align: center;
          }
          .btn-cta-primary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
