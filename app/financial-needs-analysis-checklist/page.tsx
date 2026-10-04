'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { User, Calendar, MessageSquare, ArrowLeft } from 'lucide-react';

export default function FinancialNeedsAnalysisChecklistArticle() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1 className="banner-title">
              Financial Needs Analysis Checklist: 7 Steps for Families
            </h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <Link href="/blog">Blog</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Financial Needs Analysis Checklist</span>
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
                  <span>Olamide Abayomi</span>
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
                  A financial needs analysis checklist helps you bring income, expenses, debts, savings, insurance, and family goals into one clear review. The purpose is to identify the questions that deserve attention and choose practical next steps.
                </p>

                <h2>Step 1: Document Monthly Cash Flow & Net Income</h2>
                <p>
                  Start with a clear accounting of all household incoming revenue versus fixed and discretionary expenses. Distinguish between non-negotiable living costs and flexible lifestyle choices.
                </p>

                <h2>Step 2: Catalog and Prioritize Debts</h2>
                <p>
                  List credit cards, student loans, auto financing, and mortgages with their interest rates and minimum payments. Formulate an aggressive debt repayment hierarchy (such as Avalanche or Snowball methods).
                </p>

                <h2>Step 3: Establish a 3-6 Month Emergency Buffer</h2>
                <p>
                  Liquid cash reserves ensure unexpected automotive repairs or medical bills do not derail long-term investments or force you into high-interest debt cycles.
                </p>

                <h2>Step 4: Evaluate Protection & Insurance Adequacy</h2>
                <p>
                  Verify that life, health, auto, and property policies are appropriately sized to insulate your family from catastrophic economic disruption.
                </p>

                <h2>Step 5: Define Milestone Retirement Targets</h2>
                <p>
                  Determine your desired retirement horizon and calibrate monthly contributions to tax-advantaged accounts, mutual funds, and annuities.
                </p>

                <h2>Step 6: Plan for Education & Major Life Milestones</h2>
                <p>
                  Account for children's future education funds, home purchases, or entrepreneurial pursuits in designated investment vehicles.
                </p>

                <h2>Step 7: Conduct Annual Strategy Rebalancing</h2>
                <p>
                  A financial plan is a living system. Revisit your portfolio and priorities annually with a qualified fiduciary advisor.
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
                <h3 className="widget-title">Need Expert Guidance?</h3>
                <p className="widget-text">
                  Take the first step towards financial freedom with a structured, complimentary review.
                </p>
                <Link
                  href="/contact-us"
                  className="btn-blue-solid widget-cta"
                >
                  Book Financial Review
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
