'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { BookOpen, Calculator, FileText, HelpCircle, ArrowRight, ShieldCheck, Search } from 'lucide-react';

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<'glossary' | 'guides' | 'calculators'>('glossary');
  const [searchTerm, setSearchTerm] = useState('');

  const glossaryTerms = [
    {
      term: 'D.I.M.E. Formula',
      category: 'Life Insurance',
      def: 'An industry-standard calculation method used to determine total life insurance need: Debt (consumer loans) + Income replacement (typically 10x annual earnings) + Mortgage payoff + Education funding for children minus existing group assets.',
    },
    {
      term: 'Level Term Life Insurance',
      category: 'Life Insurance',
      def: 'A life insurance policy where the death benefit payout and monthly/annual premium remain completely fixed and guaranteed for a designated duration (e.g. 10, 20, 30, or 35 years).',
    },
    {
      term: 'Roth IRA & Custodial Roth IRA',
      category: 'Investments',
      def: 'An IRS-qualified individual retirement account funded with after-tax dollars. Investments grow 100% tax-free, and qualified distributions after age 59½ and 5 years of holding are completely exempt from federal and state income taxes.',
    },
    {
      term: 'Financial Needs Analysis (FNA)',
      category: 'Advisory',
      def: 'A comprehensive, multi-pillar financial audit evaluating household cashflow, debt acceleration schedules, survivor income requirements, and retirement readiness into a customized 12-page blueprint.',
    },
    {
      term: 'Debt Roll-Up / Snowball Acceleration',
      category: 'Debt Strategy',
      def: 'A disciplined repayment structure where discretionary cashflow and payments from paid-off accounts are rolled into the next liability, accelerating debt elimination and saving thousands in interest.',
    },
    {
      term: '529 College Savings Plan',
      category: 'Investments',
      def: 'A state-sponsored, tax-advantaged savings plan designed to encourage saving for future higher education costs. Earnings grow federal and state tax-free when used for qualified education expenses.',
    },
    {
      term: 'IRC Section 7702',
      category: 'Life & Wealth',
      def: 'The section of the Internal Revenue Code that governs life insurance contracts, allowing permanent cash-value policies to accumulate investment value tax-deferred and distribute funds tax-free via policy loans.',
    },
    {
      term: 'Fiduciary Advisory Standard',
      category: 'Ethics & Compliance',
      def: 'The highest legal and ethical standard requiring an advisor to act exclusively in the best financial interest of the client with zero high-pressure sales or undisclosed conflicts of interest.',
    },
    {
      term: 'Waiver of Premium Rider',
      category: 'Life Insurance',
      def: 'An optional policy endorsement that pays your life insurance premiums on your behalf if you become totally disabled and unable to work.',
    },
    {
      term: 'Full Replacement Cost (HO-3 / HO-5)',
      category: 'Property Insurance',
      def: 'Property indemnity that pays the actual cost to repair or rebuild damaged structures and replace personal contents with brand-new materials of comparable quality, without deduction for depreciation.',
    },
    {
      term: 'ACA Marketplace / Qualified Health Plan',
      category: 'Health Insurance',
      def: 'Health coverage meeting Affordable Care Act standards covering essential health benefits, preventive screenings with zero copay, and eligibility for income-based premium tax credits (subsidies).',
    },
    {
      term: 'MAGI (Modified Adjusted Gross Income)',
      category: 'Tax Strategy',
      def: 'The household income figure utilized by the IRS to determine eligibility for Roth IRA contributions, ACA healthcare subsidies, and student loan interest deductions.',
    },
  ];

  const filteredTerms = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.def.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">EDUCATION &amp; PLANNING TOOLKIT</span>
            <h1 className="banner-title">Financial Resources &amp; Glossary</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Resources</span>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Hub Section */}
      <section className="resources-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">KNOWLEDGE BASE</span>
            <h2 className="section-title">Tools, Calculators &amp; Educational Guides</h2>
            <p className="section-desc">
              Empowering individuals, families, and business owners with transparent financial literacy, plain-English definitions, and interactive planning models.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="res-tabs-row">
            <button
              className={`res-tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
              onClick={() => setActiveTab('glossary')}
            >
              <HelpCircle size={20} />
              <span>Financial &amp; Insurance Glossary</span>
            </button>
            <button
              className={`res-tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
              onClick={() => setActiveTab('guides')}
            >
              <BookOpen size={20} />
              <span>Planning Guides &amp; Checklists</span>
            </button>
            <button
              className={`res-tab-btn ${activeTab === 'calculators' ? 'active' : ''}`}
              onClick={() => setActiveTab('calculators')}
            >
              <Calculator size={20} />
              <span>Interactive Calculators</span>
            </button>
          </div>

          {/* TAB 1: Glossary */}
          {activeTab === 'glossary' && (
            <div className="glossary-content">
              {/* Search Bar */}
              <div className="glossary-search-box">
                <Search size={20} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search 20+ terms (e.g. D.I.M.E., Roth IRA, Level Term, Replacement Cost)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="glossary-search-input"
                />
              </div>

              <div className="glossary-grid">
                {filteredTerms.map((item, idx) => (
                  <div key={idx} className="glossary-card">
                    <span className="glossary-cat">{item.category}</span>
                    <h3 className="glossary-term">{item.term}</h3>
                    <p className="glossary-def">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Guides & Checklists */}
          {activeTab === 'guides' && (
            <div className="guides-grid">
              <div className="guide-card">
                <span className="guide-tag">FLAGSHIP CHECKLIST</span>
                <h3 className="guide-title">Financial Needs Analysis Checklist: 7 Steps for Families</h3>
                <p className="guide-desc">
                  A step-by-step checklist to organize household income, debt roll-up schedules, survivor protection, and retirement assets into one actionable review.
                </p>
                <Link href="/financial-needs-analysis-checklist" className="guide-link">
                  <span>Read Full Checklist Guide</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="guide-card">
                <span className="guide-tag">FAMILY PROTECTION</span>
                <h3 className="guide-title">Term Life Insurance for Parents: How Much Do You Need?</h3>
                <p className="guide-desc">
                  An in-depth breakdown of the D.I.M.E. formula, why workplace group insurance is rarely sufficient, and how to lock in low level rates.
                </p>
                <Link href="/term-life-insurance-for-parents" className="guide-link">
                  <span>Read Term Life Guide</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="guide-card">
                <span className="guide-tag">BLOG &amp; INSIGHTS</span>
                <h3 className="guide-title">Nova Finance Insights &amp; Market Education</h3>
                <p className="guide-desc">
                  Explore our complete collection of licensed financial advisory articles, tax wrapper explanations, and multi-carrier insurance updates.
                </p>
                <Link href="/blog" className="guide-link">
                  <span>Visit Insights Hub</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 3: Calculators */}
          {activeTab === 'calculators' && (
            <div className="calculators-grid">
              <div className="calc-card">
                <div className="calc-card-icon"><Calculator size={28} /></div>
                <h3 className="calc-title">Compound Growth &amp; Wealth Projection</h3>
                <p className="calc-desc">
                  Model hypothetical compounding returns (6%, 8%, 10% presets or custom 4%–12% slider) across 1 to 40-year time horizons in qualified Roth wrappers.
                </p>
                <Link href="/tax-free-investment#calculator" className="btn-blue-solid calc-btn">
                  <span>Launch Growth Calculator</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="calc-card">
                <div className="calc-card-icon"><ShieldCheck size={28} /></div>
                <h3 className="calc-title">Term Life Insurance Quote Estimator</h3>
                <p className="calc-desc">
                  Calculate estimated level monthly/annual premiums for $100K to $1M+ coverage across 10, 15, 20, 25, 30, and 35-year terms.
                </p>
                <Link href="/term-life-insurance#life-calc-section" className="btn-blue-solid calc-btn">
                  <span>Launch Life Estimator</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom Consultation CTA */}
      <section className="res-cta-strip">
        <div className="container text-center">
          <h2 className="res-cta-title">Need Personalized Help Applying These Principles?</h2>
          <p className="res-cta-desc">
            Schedule a complimentary, confidential 1-on-1 strategy session with our licensed Maryland advisory team today.
          </p>
          <Link href="/book-a-consultation" className="btn-white-solid">
            <span>Book Your Free Consultation</span>
            <ArrowRight size={16} />
          </Link>
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

        .resources-section {
          padding: 85px 0 95px;
          background-color: #f7f9fc;
        }

        .section-header {
          max-width: 800px;
          margin: 0 auto 45px;
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

        .res-tabs-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .res-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          border: 2px solid #e2e8f0;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 700;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .res-tab-btn:hover {
          border-color: #003399;
          color: #003399;
        }

        .res-tab-btn.active {
          background-color: #003399;
          border-color: #003399;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 51, 153, 0.2);
        }

        /* Glossary */
        .glossary-search-box {
          position: relative;
          max-width: 650px;
          margin: 0 auto 35px;
        }

        .search-icon {
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .glossary-search-input {
          width: 100%;
          padding: 16px 20px 16px 52px;
          border: 2px solid #e2e8f0;
          border-radius: 30px;
          font-size: 1rem;
          background-color: #ffffff;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
        }

        .glossary-search-input:focus {
          outline: none;
          border-color: #003399;
        }

        .glossary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .glossary-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 28px 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .glossary-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 51, 153, 0.08);
          border-color: #003399;
        }

        .glossary-cat {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          background-color: #eef2ff;
          padding: 4px 10px;
          border-radius: 9999px;
          margin-bottom: 12px;
        }

        .glossary-term {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 10px;
        }

        .glossary-def {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #4a5568;
          margin: 0;
        }

        /* Guides Grid */
        .guides-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .guide-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 36px 30px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
        }

        .guide-tag {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          margin-bottom: 12px;
        }

        .guide-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.35;
          margin-bottom: 14px;
        }

        .guide-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .guide-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #003399;
          text-decoration: none;
        }

        .guide-link:hover {
          text-decoration: underline;
        }

        /* Calculators Grid */
        .calculators-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .calc-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
        }

        .calc-card-icon {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background-color: #e6f0fa;
          color: #003399;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .calc-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 12px;
        }

        .calc-desc {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 28px;
          flex-grow: 1;
        }

        .btn-blue-solid {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          padding: 13px 24px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-blue-solid:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }

        /* Bottom CTA */
        .res-cta-strip {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0;
        }

        .res-cta-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .res-cta-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin-bottom: 28px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        .btn-white-solid {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #ffffff;
          color: #000050;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-white-solid:hover {
          background-color: #f1f5f9;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .glossary-grid,
          .guides-grid,
          .calculators-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
