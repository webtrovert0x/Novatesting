'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import {
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ProcessSection from '@/components/ProcessSection';

export default function OurProcessPage() {
  const processStepsDetailed = [
    {
      number: '01',
      tag: 'PHASE 1',
      title: 'Consultation & Goal Setting',
      subtitle: 'Understanding Where You Are and Where You Want to Go',
      desc: 'We begin with a friendly, comprehensive 1-on-1 strategy session. We analyze your current cash flow, existing assets, liabilities, family obligations, and risk comfort to identify your precise short- and long-term financial milestones.',
      points: [
        'Comprehensive discovery of financial priorities & family commitments',
        'Confidential assessment of income, liabilities, and safety buffers',
        'Establishment of measurable targets (retirement, education, growth)',
        'Zero-pressure, collaborative consultation environment',
      ],
      iconImage: '/images/icons8-chart-50.png',
      timeline: '1 - 2 Business Days',
    },
    {
      number: '02',
      tag: 'PHASE 2',
      title: 'Personalized Investment & Strategy Design',
      subtitle: 'Engineering Your Custom Wealth & Protection Blueprint',
      desc: 'Our senior advisory team models scenarios and builds a custom-tailored investment and insurance strategy. We calibrate asset allocation, tax minimization avenues (like Tax-Free Mutual Funds), and essential risk mitigation.',
      points: [
        'Custom asset allocation aligned with your personal risk profile',
        'Integration of tax-advantaged accounts to maximize retained earnings',
        'Selection of robust family life and casualty coverage shields',
        'Clear, plain-language walkthrough with actionable milestones',
      ],
      iconImage: '/images/icons8-investment-50.png',
      timeline: '3 - 5 Business Days',
    },
    {
      number: '03',
      tag: 'PHASE 3',
      title: 'Implementation & Continuous Growth Tracking',
      subtitle: 'Executing with Precision and Ongoing Strategic Oversight',
      desc: 'Once you approve the plan, we handle all administrative onboarding and portfolio activation seamlessly. We actively monitor performance and provide periodic reviews to keep you ahead of evolving economic landscapes.',
      points: [
        'Frictionless digital enrollment and portfolio deployment',
        'Regular performance reporting and transparent milestone tracking',
        'Scheduled portfolio rebalancing and life-event adjustments',
        'Direct, dedicated advisory access whenever questions arise',
      ],
      iconImage: '/images/icons8-growth-50.png',
      timeline: 'Ongoing Partnership',
    },
  ];

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">Our Process</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Our Process</span>
            </div>
          </div>
        </div>
      </section>

      {/* Process Intro Statement */}
      <section className="process-intro">
        <div className="container">
          <div className="intro-content text-center">
            <div className="sub-badge">
              <Image
                src="/images/icons8-chart-50.png"
                alt="Methodology"
                width={18}
                height={18}
                className="sub-badge-img"
              />
              <span>THE NOVA METHODOLOGY</span>
            </div>
            <h2 className="section-heading">
              A Structured, Disciplined Path to Sustainable Wealth
            </h2>
            <p className="lead-text">
              Building enduring financial independence is never an accident—it is the result of clear planning, informed execution, and continuous alignment. Here is how we turn your aspirations into tangible reality.
            </p>
          </div>
        </div>
      </section>

      {/* Original Interactive Diagram Section */}
      <ProcessSection />

      {/* Detailed Process Breakdown */}
      <section className="detailed-breakdown">
        <div className="container">
          <div className="section-title-wrap text-center">
            <h2 className="breakdown-title">Step-by-Step Deep Dive</h2>
            <p className="breakdown-subtitle">
              Every stage of your journey is managed with fiduciary integrity, transparency, and institutional-grade rigor.
            </p>
          </div>

          <div className="steps-list">
            {processStepsDetailed.map((step, idx) => (
              <div key={idx} className="step-detailed-card">
                <div className="card-left-col">
                  <div className="step-num-badge">{step.number}</div>
                  <div className="step-icon-wrap">
                    <Image
                      src={step.iconImage}
                      alt={step.title}
                      width={36}
                      height={36}
                      className="step-png-icon"
                    />
                  </div>
                  <div className="step-timeline-pill">
                    <span>Timeline: {step.timeline}</span>
                  </div>
                </div>

                <div className="card-right-col">
                  <div className="phase-tag">{step.tag}</div>
                  <h3 className="card-title">{step.title}</h3>
                  <h4 className="card-subtitle">{step.subtitle}</h4>
                  <p className="card-desc">{step.desc}</p>

                  <div className="card-points-grid">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="point-item">
                        <CheckCircle2 size={18} className="pt-icon" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="process-cta-section">
        <div className="container">
          <div className="cta-box text-center">
            <h2 className="cta-heading">Ready to Put the Process to Work for You?</h2>
            <p className="cta-text">
              Schedule your confidential 1-on-1 discovery consultation today and take the first decisive step toward financial clarity.
            </p>
            <Link
              href="/contact-us"
              className="btn-white-solid cta-btn"
            >
              <span>Book Your Consultation</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0;
          text-align: center;
        }
        .banner-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
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
        .process-intro {
          padding: 85px 0 60px;
          background-color: #ffffff;
        }
        .intro-content {
          max-width: 860px;
          margin: 0 auto;
        }
        .sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #003399;
          margin-bottom: -35px;
        }
        .section-heading {
          font-size: 2.8rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.25;
          margin-bottom: 20px;
        }
        .lead-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #4a5568;
        }
        .detailed-breakdown {
          padding: 90px 0 100px;
          background-color: #f7f9fc;
        }
        .section-title-wrap {
          max-width: 800px;
          margin: 0 auto 75px;
        }
        .breakdown-title {
          font-size: 2.6rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 16px;
        }
        .breakdown-subtitle {
          font-size: 1.1rem;
          color: #4a5568;
          line-height: 1.6;
        }
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 44px;
          max-width: 1050px;
          margin: 20px auto 0;
        }
        .step-detailed-card {
          background-color: #ffffff;
          border-radius: 22px;
          padding: 48px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 48px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .step-detailed-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 51, 153, 0.08);
          border-color: rgba(0, 51, 153, 0.2);
        }
        .card-left-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-right: 1px solid #edf2f7;
          padding-right: 36px;
        }
        .step-num-badge {
          font-size: 3.5rem;
          font-weight: 900;
          color: #003399;
          line-height: 1;
          margin-bottom: 16px;
          opacity: 0.9;
        }
        .step-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: #eff6ff;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }
        .step-timeline-pill {
          background-color: #f1f5f9;
          color: #475569;
          font-size: 0.84rem;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: var(--radius-full);
        }
        .phase-tag {
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #003399;
          margin-bottom: 8px;
        }
        .card-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .card-subtitle {
          font-size: 1.05rem;
          font-weight: 600;
          color: #00c2cb;
          margin-bottom: 18px;
        }
        .card-desc {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 24px;
        }
        .card-points-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px 20px;
        }
        .point-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.95rem;
          color: #1a202c;
          font-weight: 500;
          line-height: 1.5;
        }
        :global(.pt-icon) {
          color: #003399;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .process-cta-section {
          padding: 85px 0 95px;
          background-color: #000050;
        }
        .cta-box {
          max-width: 820px;
          margin: 0 auto;
        }
        .cta-heading {
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 18px;
        }
        .cta-text {
          font-size: 1.15rem;
          color: #cbd5e1;
          line-height: 1.75;
          margin-bottom: 36px;
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 38px;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          background-color: #ffffff;
          color: #000050;
          transition: all 0.25s ease;
        }
        .cta-btn:hover {
          background-color: #00c2cb;
          color: #000050;
          transform: translateY(-2px);
        }
        @media (max-width: 991px) {
          .step-detailed-card {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 36px 28px;
          }
          .card-left-col {
            border-right: none;
            border-bottom: 1px solid #edf2f7;
            padding-right: 0;
            padding-bottom: 24px;
          }
          .card-points-grid {
            grid-template-columns: 1fr;
          }
          .section-heading,
          .cta-heading {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </main>
  );
}
