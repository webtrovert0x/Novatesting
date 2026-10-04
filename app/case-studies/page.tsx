'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Star, ShieldCheck, CheckCircle2, ArrowRight, Award, TrendingUp, DollarSign, Users } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Dual-Income Family: Mortgage Protection & College Seed Growth',
      category: 'FAMILY WEALTH & PROTECTION',
      location: 'Silver Spring, Maryland',
      household: '2 Working Adults (Ages 34 & 37), 2 Children (Ages 4 & 7)',
      challenge: 'The household carried a $420,000 mortgage and $22,000 in credit card balances with only basic employer-provided group life coverage (1x salary). If either wage earner died, the survivor would face immediate foreclosure and depleted college funds.',
      fnaSolution: 'Nova Finance designed an individualized FNA blueprint: placed two 30-year Level Term Life policies ($750,000 death benefit each) at $74/mo combined, initiated a debt roll-up acceleration plan, and opened two Custodial Roth IRAs ($150/mo each) for children\'s compound growth.',
      metrics: [
        { label: 'Mortgage Protected', val: '$420,000' },
        { label: 'Combined Term Coverage', val: '$1,500,000' },
        { label: 'Monthly Premium Outlay', val: '$74 / month' },
        { label: 'Debt-Free Timeline', val: '24 Months' },
      ],
      testimonial: '"Working with Nova Finance completely changed our family\'s financial trajectory. We were overwhelmed by how much insurance to get and how to balance saving for our kids with paying off debt. The 12-page FNA gave us clear, mathematical steps without any pressure."',
      clientName: 'Michael & Adanna T.',
    },
    {
      title: 'Independent Healthcare Consultant: 1099 Debt Payoff & Roth Maximization',
      category: 'SELF-EMPLOYED & DEBT ACCELERATION',
      location: 'Baltimore, Maryland',
      household: 'Solo Entrepreneur / Healthcare Contractor (Age 42)',
      challenge: 'Accumulated $34,000 in personal loan and high-interest credit card debt from launching an independent consultancy. Lacked structured individual retirement vehicles outside a frozen previous employer 401(k).',
      fnaSolution: 'Restructured monthly cashflow using the FNA debt snowball schedule without increasing total monthly out-of-pocket spend. Redirected freed interest payments into an annual Roth IRA and established an individual high-deductible health plan with HSA tax deductions.',
      metrics: [
        { label: 'Debt Eliminated', val: '$34,000' },
        { label: 'Interest Saved', val: '$8,400' },
        { label: 'Payoff Accelerated', val: '3.5 Years Earlier' },
        { label: 'Annual Roth Allocation', val: '$7,000 / year' },
      ],
      testimonial: '"As a 1099 contractor, navigating taxes, private health insurance, and retirement on my own was exhausting. Nova Finance gave me an exact roadmap to crush my debt and fund my Roth IRA systematically."',
      clientName: 'Dr. Kimberly S.',
    },
    {
      title: 'Commercial Transport SME: Fleet Casualty Benchmarking & Key-Person Shield',
      category: 'BUSINESS CONTINUITY & RISK INDEMNITY',
      location: 'Glen Burnie, Maryland',
      household: 'Commercial Logistics Company (6 Vehicles, 2 Managing Partners)',
      challenge: 'Fragmented commercial auto policies with rising premiums, inadequate $500K liability caps, and zero key-person life insurance to protect partnership continuity in the event of an owner\'s death.',
      fnaSolution: 'Benchmarked commercial property, casualty, and commercial auto lines across Nova\'s independent A-rated carrier network, securing a $1M combined single limit policy while reducing annual overhead by 18%. Placed reciprocal Key-Person Level Term contracts to fund partner buy-sell obligations.',
      metrics: [
        { label: 'Annual Premium Savings', val: '18% Overhead Reduction' },
        { label: 'Liability Limit Expanded', val: '$1,000,000' },
        { label: 'Key-Person Funding', val: '$500K per Partner' },
        { label: 'Placement Timeline', val: '48 Hours' },
      ],
      testimonial: '"Nova Finance saved our transportation business thousands in insurance overhead while doubling our liability shield. Having a local Maryland independent broker who actually shops multi-carrier markets is invaluable."',
      clientName: 'David O. & Marcus B. (Logistics Principals)',
    },
  ];

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">VERIFIED OUTCOMES &amp; CLIENT PROOF</span>
            <h1 className="banner-title">Reviews &amp; Case Studies</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Case Studies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Case Studies Section */}
      <section className="cases-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">PROVEN STRATEGIES</span>
            <h2 className="section-title">Real Client Challenges. Fiduciary Solutions.</h2>
            <p className="section-desc">
              Explore anonymized case studies detailing how personalized Financial Needs Analysis roadmaps, multi-carrier insurance placement, and tax-advantaged accounts protect Maryland families and business owners.
            </p>
          </div>

          <div className="cases-list">
            {caseStudies.map((cs, idx) => (
              <article key={idx} className="case-study-card">
                <div className="case-header">
                  <div>
                    <span className="case-badge">{cs.category}</span>
                    <h3 className="case-title">{cs.title}</h3>
                    <div className="case-meta">
                      <span><strong>Location:</strong> {cs.location}</span>
                      <span className="meta-sep">•</span>
                      <span><strong>Household:</strong> {cs.household}</span>
                    </div>
                  </div>
                </div>

                <div className="case-grid-body">
                  <div className="case-narrative-col">
                    <div className="narrative-box">
                      <h4 className="box-heading">The Challenge</h4>
                      <p>{cs.challenge}</p>
                    </div>

                    <div className="narrative-box solution-box">
                      <h4 className="box-heading">The Nova Finance FNA Solution</h4>
                      <p>{cs.fnaSolution}</p>
                    </div>
                  </div>

                  <div className="case-metrics-col">
                    <h4 className="metrics-heading">Quantified Client Outcomes</h4>
                    <div className="metrics-grid">
                      {cs.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="metric-cell">
                          <span className="m-label">{m.label}</span>
                          <strong className="m-val">{m.val}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="quote-box">
                      <div className="stars-row">
                        {[...Array(5)].map((_, sIdx) => (
                          <Star key={sIdx} size={16} fill="#eab308" color="#eab308" />
                        ))}
                      </div>
                      <p className="quote-text">{cs.testimonial}</p>
                      <span className="quote-author">— {cs.clientName}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA Card */}
          <div className="case-bottom-cta">
            <div className="cta-inner-text">
              <span className="cta-badge">ZERO RISK • 100% COMPLIMENTARY</span>
              <h3 className="cta-title">Ready to Design Your Own Custom Financial Blueprint?</h3>
              <p className="cta-desc">
                Schedule your complimentary 1-on-1 Financial Needs Analysis session with our licensed advisors today.
              </p>
            </div>
            <Link href="/financial-needs-analysis" className="btn-blue-solid cta-btn">
              <span>Request Free FNA Blueprint</span>
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

        .cases-section {
          padding: 85px 0 95px;
          background-color: #f7f9fc;
        }

        .section-header {
          max-width: 800px;
          margin: 0 auto 55px;
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

        .cases-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-bottom: 60px;
        }

        .case-study-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 44px;
          box-shadow: 0 10px 30px rgba(0, 51, 153, 0.05);
        }

        .case-header {
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 28px;
        }

        .case-badge {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          background-color: #eef2ff;
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .case-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #0a1128;
          margin: 12px 0 8px;
        }

        .case-meta {
          font-size: 0.9rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .meta-sep {
          color: #cbd5e1;
        }

        .case-grid-body {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 36px;
        }

        .case-narrative-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .narrative-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 22px;
        }

        .solution-box {
          background-color: #f0fdf4;
          border-color: #bbf7d0;
        }

        .box-heading {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 8px;
        }

        .narrative-box p {
          font-size: 0.94rem;
          line-height: 1.65;
          color: #4a5568;
          margin: 0;
        }

        .case-metrics-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .metrics-heading {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0a1128;
          margin: 0;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .metric-cell {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 14px;
          display: flex;
          flex-direction: column;
          border-left: 4px solid #003399;
        }

        .m-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .m-val {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a1128;
          margin-top: 4px;
        }

        .quote-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
        }

        .stars-row {
          display: flex;
          gap: 4px;
          margin-bottom: 8px;
        }

        .quote-text {
          font-size: 0.9rem;
          font-style: italic;
          line-height: 1.6;
          color: #334155;
          margin-bottom: 8px;
        }

        .quote-author {
          font-size: 0.85rem;
          font-weight: 700;
          color: #003399;
          display: block;
        }

        .case-bottom-cta {
          background-color: #000050;
          border-radius: 20px;
          padding: 45px 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #ffffff;
          gap: 30px;
        }

        .cta-badge {
          font-size: 0.75rem;
          font-weight: 800;
          color: #00c2cb;
          letter-spacing: 1.5px;
        }

        .cta-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          margin: 6px 0;
        }

        .cta-desc {
          font-size: 1rem;
          color: #cbd5e1;
          margin: 0;
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
          font-size: 1rem;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .btn-blue-solid:hover {
          background-color: #00c2cb;
          color: #000050;
          border-color: #00c2cb;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .case-grid-body {
            grid-template-columns: 1fr;
          }
          .case-bottom-cta {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .case-study-card {
            padding: 24px;
          }
          .case-title {
            font-size: 1.35rem;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
