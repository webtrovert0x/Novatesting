'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, TrendingUp, Award, Clock, DollarSign, FileText } from 'lucide-react';

export default function StartHerePage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">YOUR FIRST STEP TO CLARITY</span>
            <h1 className="banner-title">Start Here: Get Your Free Financial Snapshot</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Start Here</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Simple Steps */}
      <section className="start-steps-section">
        <div className="container max-w-content">
          <div className="section-header text-center">
            <span className="section-eyebrow">THE 3-STEP SNAPSHOT PROCESS</span>
            <h2 className="section-title">How Your Complimentary Snapshot Works</h2>
            <p className="section-desc">
              Nova Finance eliminates financial confusion with an objective, licensed, step-by-step roadmap. Zero high-pressure sales, zero fees, and 100% confidentiality.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-num">01</div>
              <h3 className="step-heading">Request Your Snapshot</h3>
              <p className="step-text">
                Complete our simple, confidential 2-minute questionnaire outlining your family size, priorities, and top financial questions.
              </p>
            </div>

            <div className="step-card">
              <div className="step-num">02</div>
              <h3 className="step-heading">FNA Consultation Call</h3>
              <p className="step-text">
                Connect for a 45–60 minute one-on-one session with a licensed Maryland advisor to review cashflow, debt, and survivor protection.
              </p>
            </div>

            <div className="step-card">
              <div className="step-num">03</div>
              <h3 className="step-heading">Receive 12-Page Blueprint</h3>
              <p className="step-text">
                Walk away with an exact mathematical blueprint: D.I.M.E. insurance need, debt roll-up schedule, and tax-advantaged retirement trajectory.
              </p>
            </div>
          </div>

          {/* Direct Launch CTA Box */}
          <div className="launch-box">
            <div className="launch-text">
              <span className="launch-badge">100% FREE • NO OBLIGATION</span>
              <h3 className="launch-title">Ready to Begin Your Financial Needs Analysis?</h3>
              <p className="launch-sub">
                Join hundreds of Maryland and U.S. working households building structured, generational wealth.
              </p>
            </div>
            <div className="launch-btn-row">
              <Link href="/financial-needs-analysis" className="btn-blue-solid">
                <span>Start Free Analysis Now</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="/book-a-consultation" className="btn-outline-solid">
                <span>Book Direct Strategy Call</span>
              </Link>
            </div>
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
          font-size: 2.85rem;
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

        .start-steps-section {
          padding: 85px 0 95px;
          background-color: #f7f9fc;
        }

        .max-w-content {
          max-width: 920px;
          margin: 0 auto;
        }

        .section-header {
          margin-bottom: 50px;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #003399;
          margin-bottom: 12px;
        }

        .section-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 16px;
        }

        .section-desc {
          font-size: 1.1rem;
          line-height: 1.75;
          color: #4a5568;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 50px;
        }

        .step-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 26px;
          box-shadow: 0 6px 20px rgba(0, 51, 153, 0.04);
        }

        .step-num {
          font-size: 1.3rem;
          font-weight: 800;
          color: #003399;
          background-color: #e6f0fa;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .step-heading {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 12px;
        }

        .step-text {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #4a5568;
          margin: 0;
        }

        .launch-box {
          background-color: #000050;
          border-radius: 20px;
          padding: 48px;
          color: #ffffff;
          text-align: center;
        }

        .launch-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #00c2cb;
          letter-spacing: 1.5px;
        }

        .launch-title {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          margin: 10px 0 12px;
        }

        .launch-sub {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin-bottom: 30px;
        }

        .launch-btn-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-blue-solid {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          border: 2px solid #ffffff;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-blue-solid:hover {
          background-color: #00c2cb;
          color: #000050;
          border-color: #00c2cb;
          transform: translateY(-2px);
        }

        .btn-outline-solid {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: transparent;
          color: #ffffff;
          border: 2px solid #ffffff;
          padding: 14px 28px;
          border-radius: 10px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-outline-solid:hover {
          background-color: #ffffff;
          color: #000050;
          transform: translateY(-2px);
        }

        @media (max-width: 850px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .launch-box {
            padding: 30px 20px;
          }
        }
      `}</style>
    </main>
  );
}
