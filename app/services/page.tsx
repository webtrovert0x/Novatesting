'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Car, HeartPulse, Home, Shield, Users, CheckCircle2, Award } from 'lucide-react';

export default function ServicesPage() {
  const allServices = [
    {
      title: 'Financial Needs Analysis (FNA)',
      tag: 'FLAGSHIP ADVISORY',
      forWhom: 'Families, dual-income earners, and business owners seeking an objective, debt-free wealth roadmap.',
      deliverable: 'A custom 12-page financial blueprint: Income Protection Gap, Debt Roll-Up Matrix, and Retirement Readiness.',
      timeline: '24 – 48 Hours',
      costStatus: '100% Complimentary (No Out-of-Pocket Cost)',
      eligibility: 'Open to all individuals, working families, and diaspora households in authorized U.S. states.',
      nextStep: 'Request Your Free Snapshot',
      imageIcon: '/images/icons8-chart-50.png',
      link: '/financial-needs-analysis',
    },
    {
      title: 'Term Life Insurance Protection',
      tag: 'FAMILY SECURITY',
      forWhom: 'Parents, mortgage holders, and breadwinners needing income replacement and family debt protection.',
      deliverable: 'Side-by-side comparison of 10, 20, 30-year level term policies from top A-rated U.S. carriers.',
      timeline: 'Instant Quotes; 1–2 Weeks Underwriting',
      costStatus: 'Zero Advisory Fee (Carrier-paid commission)',
      eligibility: 'Ages 18–75, subject to standard carrier medical and lifestyle underwriting.',
      nextStep: 'Compare Term Life Quotes',
      imageIcon: '/images/icons8-family-50.png',
      link: '/term-life-insurance',
    },
    {
      title: 'Tax-Advantaged Investments & Savings',
      tag: 'WEALTH BUILDING',
      forWhom: 'Investors aiming for tax-free retirement (Roth IRAs) or children\'s college funding (529 / Custodial Roth).',
      deliverable: 'Personalized compound growth modeling, asset allocation strategy, and registered custodian setup guidance.',
      timeline: '1 – 3 Business Days to Activate',
      costStatus: 'Complimentary Consultation & FNA Review',
      eligibility: 'Must have qualifying IRS earned income for Roth IRA contributions ($7,000/yr limit).',
      nextStep: 'Model Your Growth Plan',
      imageIcon: '/images/icons8-investment-50.png',
      link: '/tax-free-investment',
    },
    {
      title: 'Automobile Insurance',
      tag: 'PROPERTY & VEHICLE',
      forWhom: 'Drivers, multi-car households, and commercial vehicle operators seeking lower rates and better coverage.',
      deliverable: 'Multi-carrier liability, collision, comprehensive, and uninsured motorist quote package.',
      timeline: 'Same-Day Policy Placement',
      costStatus: 'Free Rate Comparison',
      eligibility: 'Licensed drivers with valid registration in Maryland or authorized reciprocal states.',
      nextStep: 'Request Auto Rate Comparison',
      icon: Car,
      link: '/automobile-insurance',
    },
    {
      title: 'Health & Medical Coverage',
      tag: 'HEALTHCARE SHIELD',
      forWhom: 'Self-employed individuals, independent contractors, and families seeking affordable healthcare.',
      deliverable: 'Comprehensive major medical, catastrophic care, preventive wellness, and dental/vision options.',
      timeline: '1 – 3 Business Days',
      costStatus: 'Free Plan Consultation',
      eligibility: 'U.S. residents during open enrollment or qualifying special enrollment life events.',
      nextStep: 'Review Health Plans',
      icon: HeartPulse,
      link: '/health-insurance',
    },
    {
      title: 'Property & Casualty Insurance',
      tag: 'ASSET INDEMNITY',
      forWhom: 'Homeowners, condo owners, real estate investors, landlords, and commercial property owners.',
      deliverable: 'Full replacement value coverage, weather/fire hazard indemnity, and landlord liability shields.',
      timeline: '24 – 48 Hours Underwriting Review',
      costStatus: 'Free Property Risk Audit',
      eligibility: 'Residential, multi-family, or commercial property owners in authorized states.',
      nextStep: 'Evaluate Property Coverage',
      icon: Home,
      link: '/property-insurance',
    },
  ];

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">PRACTICE AREAS &amp; SOLUTIONS</span>
            <h1 className="banner-title">Our Practice Areas &amp; Solutions</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="services-intro-section">
        <div className="container">
          <div className="intro-header text-center">
            <span className="section-eyebrow">HOLISTIC PLANNING</span>
            <h2 className="section-title">
              Strategic Guidance. Multi-Carrier Independence.
            </h2>
            <p className="intro-text">
              At NOVA Finance, we structure our services around solving real client problems rather than pushing disconnected financial products. We clearly separate <strong>Complimentary Financial Education (FNA)</strong> from <strong>Licensed Insurance Brokerage &amp; Custodial Execution</strong> so you receive transparent, pressure-free direction.
            </p>
          </div>

          {/* 6 Structured Practice Area Cards */}
          <div className="services-full-grid">
            {allServices.map((item, idx) => {
              const LucideIcon = item.icon;
              return (
                <div key={idx} className="service-box">
                  <div className="service-card-top">
                    <div className="service-icon-wrap">
                      {item.imageIcon ? (
                        <Image
                          src={item.imageIcon}
                          alt={item.title}
                          width={48}
                          height={48}
                          className="service-img-icon"
                        />
                      ) : (
                        LucideIcon && <LucideIcon size={40} className="s-icon" strokeWidth={1.75} />
                      )}
                    </div>
                    <span className="service-tag-pill">{item.tag}</span>
                  </div>

                  <h3 className="service-box-title">{item.title}</h3>

                  <div className="card-detail-block">
                    <div className="detail-item-row">
                      <span className="detail-label">Who it&apos;s for:</span>
                      <p className="detail-text">{item.forWhom}</p>
                    </div>

                    <div className="detail-item-row">
                      <span className="detail-label">What you receive:</span>
                      <p className="detail-text">{item.deliverable}</p>
                    </div>

                    <div className="detail-meta-pill-grid">
                      <div className="meta-pill">
                        <span className="m-pill-label">Timeline:</span>
                        <span className="m-pill-val">{item.timeline}</span>
                      </div>
                      <div className="meta-pill">
                        <span className="m-pill-label">Cost:</span>
                        <span className="m-pill-val">{item.costStatus}</span>
                      </div>
                    </div>

                    <div className="detail-item-row eligibility-row">
                      <span className="detail-label">Eligibility:</span>
                      <p className="detail-text">{item.eligibility}</p>
                    </div>
                  </div>

                  <div className="card-footer-meta">
                    <Link
                      href={item.link}
                      className="service-box-btn"
                    >
                      <span>{item.nextStep}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
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
        .services-intro-section {
          padding: 85px 0 100px;
          background-color: #f7f9fc;
        }
        .intro-header {
          max-width: 880px;
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
          font-size: 2.85rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .intro-text {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #4a5568;
        }
        .services-full-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .service-box {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 38px 30px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }
        .service-box:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 51, 153, 0.1);
          border-color: #003399;
        }
        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .service-icon-wrap {
          color: #003399;
        }
        .service-tag-pill {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          background-color: #eef2ff;
          padding: 5px 12px;
          border-radius: 9999px;
        }
        .service-box-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        .card-detail-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        .detail-item-row {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .detail-label {
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #003399;
        }
        .detail-text {
          font-size: 0.92rem;
          line-height: 1.55;
          color: #4a5568;
          margin: 0;
        }
        .detail-meta-pill-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 10px 12px;
          margin: 6px 0;
        }
        .meta-pill {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .m-pill-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #64748b;
          text-transform: uppercase;
        }
        .m-pill-val {
          font-size: 0.84rem;
          font-weight: 700;
          color: #0a1128;
          line-height: 1.3;
        }
        .eligibility-row {
          background-color: #f0fdf4;
          border-left: 3px solid #16a34a;
          padding: 8px 10px;
          border-radius: 0 6px 6px 0;
        }
        .eligibility-row .detail-label {
          color: #166534;
        }
        .eligibility-row .detail-text {
          color: #14532d;
          font-size: 0.86rem;
        }
        .card-footer-meta {
          padding-top: 18px;
          border-top: 1px solid #f1f5f9;
        }
        .service-box-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 8px;
          transition: var(--transition);
        }
        .service-box-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .services-full-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 650px) {
          .services-full-grid {
            grid-template-columns: 1fr;
          }
          .section-title {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </main>
  );
}
