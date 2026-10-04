'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Users, Briefcase, Building2, Globe2, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, DollarSign } from 'lucide-react';

export default function WhoWeHelpPage() {
  const [activeAudience, setActiveAudience] = useState<'families' | 'entrepreneurs' | 'small-business' | 'international'>('families');

  const audiences = [
    {
      id: 'families',
      label: 'Working Families',
      icon: Users,
      headline: 'Financial Security & Generational Wealth for Growing Families',
      tagline: 'Replace income vulnerabilities, accelerate debt payoff, and structure college funding for your children.',
      challenges: [
        'Relying solely on basic employer-provided 1x salary group life insurance.',
        'High-interest revolving debts slowing down down-payments and savings.',
        'Uncertainty about how much to save for college vs. parents\' retirement.',
      ],
      solutions: [
        'D.I.M.E. individual level term life protection locking in low rates.',
        'Debt Roll-Up / Snowball matrix to eliminate consumer liabilities early.',
        'Custodial Roth IRAs and 529 College Savings plans for children.',
      ],
      recommendedServices: [
        { name: 'Financial Needs Analysis (FNA)', href: '/financial-needs-analysis' },
        { name: 'Term Life Insurance', href: '/term-life-insurance' },
        { name: 'Tax-Advantaged Investments', href: '/tax-free-investment' },
      ],
    },
    {
      id: 'entrepreneurs',
      label: '1099 Earners & Freelancers',
      icon: Briefcase,
      headline: 'Tax-Efficient Retirement & Risk Shields for Independent Contractors',
      tagline: 'Structure self-employed retirement accounts, health safety nets, and personal disability buffers.',
      challenges: [
        'Irregular monthly cashflows and lack of employer-sponsored 401(k) plans.',
        'High out-of-pocket health insurance premiums on the individual market.',
        'Paying excessive taxes due to lack of tax-advantaged account wrappers.',
      ],
      solutions: [
        'Roth IRA & SEP-IRA wealth accumulation strategies with third-party custodians.',
        'ACA Marketplace plan optimization with qualifying subsidy calculations.',
        'Individual income protection and living benefit insurance riders.',
      ],
      recommendedServices: [
        { name: 'Tax-Advantaged Investments', href: '/tax-free-investment' },
        { name: 'Health & Medical Coverage', href: '/health-insurance' },
        { name: 'Financial Needs Analysis', href: '/financial-needs-analysis' },
      ],
    },
    {
      id: 'small-business',
      label: 'Small-Business Owners',
      icon: Building2,
      headline: 'Commercial Indemnity, Key-Person Life & Business Continuity',
      tagline: 'Protect your enterprise equity, commercial premises, and key executive partners.',
      challenges: [
        'Business disruption risk if a founder or essential key executive passes away.',
        'Rising commercial auto, property, and general liability insurance overhead.',
        'Funding buy-sell agreements without draining corporate working capital.',
      ],
      solutions: [
        'Key-Person Term Life Insurance and Buy-Sell agreement funding.',
        'Multi-carrier commercial property & casualty policy benchmarking.',
        'Business overhead expense protection and commercial vehicle fleet coverage.',
      ],
      recommendedServices: [
        { name: 'Property & Casualty Insurance', href: '/property-insurance' },
        { name: 'Term Life Insurance (Key-Person)', href: '/term-life-insurance' },
        { name: 'Automobile Insurance (Commercial)', href: '/automobile-insurance' },
      ],
    },
    {
      id: 'international',
      label: 'Global & International Clients',
      icon: Globe2,
      headline: 'Cross-Border Wealth Structuring & International Protection',
      tagline: 'Compliant financial roadmaps for international professionals, expatriates, and cross-border families.',
      challenges: [
        'Navigating multi-jurisdiction financial, tax, and insurance regulations.',
        'Managing cross-border assets while maintaining domestic financial security.',
        'Lack of transparent, globally fluent, licensed advisory guidance.',
      ],
      solutions: [
        'Compliant U.S. and international wealth structuring strategies.',
        'Dual-purpose cashflow planning: domestic portfolio growth + global family protection.',
        'Clear, plain-language education on cross-border tax efficiencies and asset preservation.',
      ],
      recommendedServices: [
        { name: 'Financial Needs Analysis', href: '/financial-needs-analysis' },
        { name: 'Tax-Advantaged Investments', href: '/tax-free-investment' },
        { name: 'Level Term Life Insurance', href: '/term-life-insurance' },
      ],
    },
  ];

  const currentAudience = audiences.find((a) => a.id === activeAudience) || audiences[0];
  const CurrentIcon = currentAudience.icon;

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">TAILORED CLIENT SOLUTIONS</span>
            <h1 className="banner-title">Who We Help</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Who We Help</span>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Selector Tabs */}
      <section className="audience-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">CUSTOMIZED FINANCIAL ROADMAPS</span>
            <h2 className="section-title">Built for Your Life Stage &amp; Profession</h2>
            <p className="section-desc">
              Whether you are raising a family, operating an enterprise, or building cross-border wealth as an international professional, Nova Finance provides objective, licensed direction.
            </p>
          </div>

          {/* 4 Audience Selector Pills */}
          <div className="audience-nav-grid">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              const isActive = activeAudience === aud.id;
              return (
                <button
                  key={aud.id}
                  onClick={() => setActiveAudience(aud.id as any)}
                  className={`aud-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <Icon size={22} className="aud-icon" />
                  <span>{aud.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Audience Display Card */}
          <div className="audience-detail-card">
            <div className="detail-top-bar">
              <div className="detail-icon-circle">
                <CurrentIcon size={32} />
              </div>
              <div>
                <span className="detail-badge">{currentAudience.label.toUpperCase()}</span>
                <h3 className="detail-headline">{currentAudience.headline}</h3>
                <p className="detail-tagline">{currentAudience.tagline}</p>
              </div>
            </div>

            <div className="detail-body-grid">
              {/* Common Challenges */}
              <div className="info-column challenge-col">
                <h4 className="col-title">Common Financial Challenges</h4>
                <ul className="info-list">
                  {currentAudience.challenges.map((item, idx) => (
                    <li key={idx}>
                      <span className="bullet-num">0{idx + 1}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nova Solutions */}
              <div className="info-column solution-col">
                <h4 className="col-title">How Nova Finance Solves It</h4>
                <ul className="info-list">
                  {currentAudience.solutions.map((item, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended Services Bar */}
            <div className="detail-footer-bar">
              <div className="rec-services-left">
                <span className="rec-label">Recommended Core Services:</span>
                <div className="rec-links-row">
                  {currentAudience.recommendedServices.map((srv, idx) => (
                    <Link key={idx} href={srv.href} className="rec-pill-link">
                      <span>{srv.name}</span>
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/book-a-consultation" className="btn-blue-solid detail-cta">
                <span>Book 1-on-1 Strategy Session</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Standards Strip */}
      <section className="standards-strip">
        <div className="container">
          <div className="standards-grid">
            <div className="standard-item">
              <ShieldCheck size={28} className="s-icon" />
              <div>
                <strong>Licensed &amp; Fiduciary Standards</strong>
                <p>Authorized independent advisory appointed with premier A-rated global institutions.</p>
              </div>
            </div>
            <div className="standard-item">
              <DollarSign size={28} className="s-icon" />
              <div>
                <strong>100% Free Initial FNA Snapshot</strong>
                <p>No fee, no hidden retainer, and zero obligation to purchase products.</p>
              </div>
            </div>
            <div className="standard-item">
              <TrendingUp size={28} className="s-icon" />
              <div>
                <strong>Independent Third-Party Custody</strong>
                <p>Investments held with registered leaders like Charles Schwab and Fidelity.</p>
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

        .audience-section {
          padding: 85px 0 95px;
          background-color: #f7f9fc;
        }

        .section-header {
          max-width: 800px;
          margin: 0 auto 50px;
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
        }

        .section-desc {
          font-size: 1.1rem;
          line-height: 1.75;
          color: #4a5568;
        }

        .audience-nav-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }

        .aud-tab-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background-color: #ffffff;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px 20px;
          font-size: 1rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .aud-tab-btn:hover {
          border-color: #003399;
          color: #003399;
          transform: translateY(-2px);
        }

        .aud-tab-btn.active {
          background-color: #003399;
          border-color: #003399;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 51, 153, 0.2);
        }

        .audience-detail-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 12px 36px rgba(0, 51, 153, 0.06);
        }

        .detail-top-bar {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding-bottom: 32px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 36px;
        }

        .detail-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background-color: #e6f0fa;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-badge {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #003399;
          background-color: #eef2ff;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .detail-headline {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0a1128;
          margin: 10px 0 6px;
        }

        .detail-tagline {
          font-size: 1.05rem;
          color: #64748b;
          margin: 0;
        }

        .detail-body-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-bottom: 36px;
        }

        .info-column {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 30px;
        }

        .col-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.96rem;
          line-height: 1.6;
          color: #334155;
        }

        .bullet-num {
          font-size: 0.8rem;
          font-weight: 800;
          color: #dc2626;
          background-color: #fee2e2;
          padding: 2px 8px;
          border-radius: 6px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .check-icon {
          color: #16a34a;
          flex-shrink: 0;
          margin-top: 3px;
        }

        .detail-footer-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: 28px;
          border-top: 1px solid #e2e8f0;
        }

        .rec-services-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .rec-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #64748b;
        }

        .rec-links-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .rec-pill-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #003399;
          font-size: 0.86rem;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 20px;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .rec-pill-link:hover {
          background-color: #003399;
          color: #ffffff;
          border-color: #003399;
        }

        .btn-blue-solid {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          transition: all 0.2s ease;
          text-decoration: none;
        }

        .btn-blue-solid:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }

        /* Standards Strip */
        .standards-strip {
          background-color: #000050;
          color: #ffffff;
          padding: 40px 0;
        }

        .standards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .standard-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .s-icon {
          color: #00c2cb;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .standard-item strong {
          display: block;
          font-size: 1.05rem;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .standard-item p {
          font-size: 0.88rem;
          color: #cbd5e1;
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 991px) {
          .audience-nav-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .detail-body-grid {
            grid-template-columns: 1fr;
          }
          .standards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .detail-footer-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .audience-nav-grid {
            grid-template-columns: 1fr;
          }
          .audience-detail-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </main>
  );
}
