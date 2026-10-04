'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { User, Calendar, MessageSquare, ArrowLeft } from 'lucide-react';

export default function TermLifeInsuranceForParentsArticle() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1 className="banner-title">
              Term Life Insurance for Parents: How Much Do You Need?
            </h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <Link href="/blog">Blog</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Term Life Insurance for Parents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-section">
        <div className="container">
          <div className="article-layout-grid">
            <article className="article-main">
              <div className="article-meta">
                <span className="meta-item">
                  <User size={15} />
                  <span>Nova Finance Advisory Team</span>
                </span>
                <span className="meta-item">
                  <Calendar size={15} />
                  <span>September 26, 2026</span>
                </span>
                <span className="meta-item">
                  <MessageSquare size={15} />
                  <span>0 Comments</span>
                </span>
              </div>

              <div className="article-body">
                <p className="lead-paragraph">
                  Term life insurance for parents can help protect a household during years when children or other relatives depend on a parent’s income or care. The amount to consider depends on the financial gap that would remain if that parent died.
                </p>

                <h2>1. Understand the Primary Purpose of Term Life Insurance</h2>
                <p>
                  Term life insurance is designed to provide maximum financial coverage during critical vulnerability periods—such as raising children, paying down a mortgage, or funding future college education. Unlike permanent life policies, term insurance offers straightforward, cost-effective death benefit protection for a designated duration (e.g., 10, 20, or 30 years).
                </p>

                <h2>2. The D.I.M.E. Method for Calculating Coverage</h2>
                <p>
                  A reliable starting point used by financial planners is the D.I.M.E. formula:
                </p>
                <ul>
                  <li><strong>Debt:</strong> Total outstanding non-mortgage debts including credit cards, auto loans, and personal student loans.</li>
                  <li><strong>Income:</strong> Multiply annual household income by the number of years your family requires financial support (typically 5 to 10 times annual earnings).</li>
                  <li><strong>Mortgage:</strong> The full remaining balance on your primary residence mortgage.</li>
                  <li><strong>Education:</strong> Projected university or vocational tuition fees for each child.</li>
                </ul>

                <h2>3. Don't Overlook the Value of Stay-at-Home Parents</h2>
                <p>
                  Even if one parent does not earn a traditional salary, their contributions (childcare, transportation, household management) have substantial monetary value. Replacing these essential services if a tragedy strikes would require significant ongoing expenditures.
                </p>

                <h2>4. Next Steps for Parents</h2>
                <p>
                  Review your current workplace coverage, determine whether an individual term policy makes sense for your family, and lock in level premiums while you are young and healthy.
                </p>
              </div>

              <div className="article-navigation">
                <Link href="/blog" className="back-link">
                  <ArrowLeft size={16} />
                  <span>Back to All Articles</span>
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3 className="widget-title">Get a Personalized Quote</h3>
                <p className="widget-text">
                  Our licensed advisors can help you assess your exact term life insurance requirements in under 15 minutes.
                </p>
                <Link
                  href="/contact-us"
                  className="btn-blue-solid widget-cta"
                >
                  Book Free Consultation
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
          padding: 85px 0 75px;
        }
        .banner-content {
          max-width: 900px;
        }
        .banner-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.25;
        }
        .breadcrumbs {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: #cbd5e1;
        }
        .crumb-sep {
          color: #00c2cb;
        }
        .article-section {
          padding: 80px 0 100px;
          background-color: #ffffff;
        }
        .article-layout-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
        }
        .article-main {
          background-color: #ffffff;
        }
        .article-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.88rem;
          color: #718096;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 1px solid #edf2f7;
          flex-wrap: wrap;
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .lead-paragraph {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #1a202c;
          font-weight: 500;
          margin-bottom: 30px;
        }
        .article-body h2 {
          font-size: 1.65rem;
          font-weight: 700;
          color: #0a1128;
          margin: 36px 0 16px;
        }
        .article-body p {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 20px;
        }
        .article-body ul {
          margin: 0 0 24px 20px;
          color: #4a5568;
          line-height: 1.8;
        }
        .article-body li {
          margin-bottom: 10px;
          font-size: 1.02rem;
        }
        .article-navigation {
          margin-top: 50px;
          padding-top: 30px;
          border-top: 1px solid #e2e8f0;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: #003399;
          transition: var(--transition);
        }
        .back-link:hover {
          color: #002277;
          transform: translateX(-4px);
        }
        .sidebar-widget {
          background-color: #f7f9fc;
          border-radius: 18px;
          padding: 36px 28px;
          border: 1px solid #e2e8f0;
          position: sticky;
          top: 120px;
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
          width: 100%;
          text-align: center;
        }
        @media (max-width: 991px) {
          .article-layout-grid {
            grid-template-columns: 1fr;
          }
          .banner-title {
            font-size: 2.1rem;
          }
        }
      `}</style>
    </main>
  );
}
