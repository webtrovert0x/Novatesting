'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, TrendingUp, Building2, CheckCircle2, Calendar } from 'lucide-react';

export default function ServicesPage() {
  const pillars = [
    {
      title: 'Strategic Wealth Planning',
      tag: 'FINANCIAL CLARITY',
      icon: TrendingUp,
      desc: 'We work closely with you to evaluate your current financial picture, define meaningful personal objectives, and construct a clear, step-by-step roadmap for sustainable long-term security.',
      features: [
        'Personalized cash flow & savings alignment',
        'Long-term horizon and goal-based modeling',
        'Structured strategies for milestone readiness',
        'Objective, pressure-free consultative reviews',
      ],
      ctaText: 'Schedule a Planning Session',
    },
    {
      title: 'Family & Asset Protection',
      tag: 'RISK MANAGEMENT',
      icon: ShieldCheck,
      desc: 'Protecting what you have built is just as critical as growing it. We provide tailored protection strategies designed to safeguard your loved ones and valuable personal assets against unexpected life events.',
      features: [
        'Comprehensive family life & income replacement strategies',
        'Personal property and casualty coverage evaluation',
        'Health, medical, and emergency safeguard review',
        'Independent multi-carrier policy comparisons',
      ],
      ctaText: 'Explore Protection Options',
    },
    {
      title: 'Business & Commercial Advisory',
      tag: 'ENTERPRISE CONTINUITY',
      icon: Building2,
      desc: 'For entrepreneurs, independent contractors, and business owners, we design protective frameworks that preserve business continuity, manage commercial risk, and protect key stakeholders.',
      features: [
        'Business continuity and key stakeholder shields',
        'Customized commercial risk assessments',
        'Executive protection and succession structuring',
        'Proactive annual strategy reviews',
      ],
      ctaText: 'Discuss Business Solutions',
    },
  ];

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">OUR PRACTICE AREAS</span>
            <h1 className="banner-title">Services &amp; Advisory Solutions</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Header */}
      <section className="services-main-section">
        <div className="container">
          <div className="intro-header text-center">
            <span className="section-eyebrow">CONSULTATIVE APPROACH</span>
            <h2 className="section-title">
              Clear Guidance &amp; Objective Discovery
            </h2>
            <p className="intro-text">
              At NOVA Finance, we don&apos;t make speculative promises or push one-size-fits-all products. We focus on uncovering your real questions, stress-testing vulnerabilities, and guiding you toward well-structured financial and protection choices.
            </p>
          </div>

          {/* 3 Strategic Pillars Grid */}
          <div className="pillars-grid">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <IconComp size={32} color="#003399" />
                    </div>
                    <span className="pillar-tag">{item.tag}</span>
                  </div>

                  <h3 className="pillar-title">{item.title}</h3>
                  <p className="pillar-desc">{item.desc}</p>

                  <div className="pillar-features-list">
                    <h4 className="features-subheading">Key Focus Areas:</h4>
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="feature-line">
                        <CheckCircle2 size={16} className="feature-check" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pillar-footer">
                    <Link href="/book-a-consultation" className="pillar-btn">
                      <span>{item.ctaText}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="services-cta-card">
            <div className="cta-left">
              <h3 className="cta-heading">Curious about your options?</h3>
              <p className="cta-sub">
                Schedule a confidential, zero-obligation discovery session with our New York advisory team at One World Trade Center.
              </p>
            </div>
            <div className="cta-right">
              <Link href="/book-a-consultation" className="btn-cta-white">
                <Calendar size={18} />
                <span>Book a Discovery Call</span>
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
          padding: 70px 0;
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
        .services-main-section {
          padding: 85px 0 100px;
          background-color: #f8fafc;
        }
        .intro-header {
          max-width: 800px;
          margin: 0 auto 65px;
          text-align: center;
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
          font-size: 2.75rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }
        .intro-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #4a5568;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 65px;
        }
        .pillar-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pillar-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px rgba(0, 51, 153, 0.1);
          border-color: #003399;
        }
        .pillar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .pillar-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 14px;
          background-color: #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pillar-tag {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          background-color: #eef2ff;
          padding: 5px 12px;
          border-radius: 9999px;
        }
        .pillar-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.3;
          margin-bottom: 14px;
        }
        .pillar-desc {
          font-size: 0.96rem;
          line-height: 1.65;
          color: #4a5568;
          margin-bottom: 28px;
        }
        .pillar-features-list {
          margin-bottom: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }
        .features-subheading {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .feature-line {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.5;
        }
        :global(.feature-check) {
          color: #00c2cb;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .pillar-footer {
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
        }
        .pillar-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.94rem;
          font-weight: 700;
          padding: 13px 20px;
          border-radius: 10px;
          transition: var(--transition);
        }
        .pillar-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }
        .services-cta-card {
          background-color: #000050;
          border-radius: 20px;
          padding: 45px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          color: #ffffff;
        }
        .cta-heading {
          font-size: 1.85rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: #ffffff;
        }
        .cta-sub {
          font-size: 1rem;
          color: #cbd5e1;
          margin: 0;
          max-width: 650px;
          line-height: 1.6;
        }
        .btn-cta-white {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #00c2cb;
          color: #000050;
          font-size: 1.02rem;
          font-weight: 800;
          padding: 15px 32px;
          border-radius: 10px;
          white-space: nowrap;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .btn-cta-white:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .services-cta-card {
            flex-direction: column;
            text-align: center;
            padding: 35px 24px;
          }
          .cta-sub {
            max-width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
