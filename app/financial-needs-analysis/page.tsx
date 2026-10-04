'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, TrendingUp, Calendar, ArrowRight, ShieldCheck, Clock, FileText, CheckCircle2, Lock, PieChart, BarChart2, DollarSign } from 'lucide-react';

export default function FinancialNeedsAnalysisPage() {
  const [activeTab, setActiveTab] = useState<'sample' | 'consultation'>('sample');
  const [samplePage, setSamplePage] = useState<1 | 2 | 3>(1);

  // Comprehensive Wealth Assessment Form State
  const [consultForm, setConsultForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    stateOrCountry: 'Maryland',
    primaryGoal: 'Tax-Advantaged Mutual Funds & Wealth Growth',
    monthlySavings: '$300 - $600/month',
    timeHorizon: '10 to 20 years (Retirement & Wealth)',
    preferredTime: 'Morning (9:00 AM – 12:00 PM EST)',
    financialWorry: '',
  });
  const [submittedConsult, setSubmittedConsult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${consultForm.firstName} ${consultForm.lastName}`.trim(),
          ...consultForm,
          service: `FNA Strategy Session: ${consultForm.primaryGoal}`,
        }),
      });
      setSubmittedConsult(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmittedConsult(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-wrapper">
      <Header />

      {/* Top Hero & Service Section (50/50 Split) */}
      <section className="service-hero-section">
        {/* Left Column: Dotted Globe + Image with Floating Badges */}
        <div className="image-side-col">
          <div className="shape-bg-wrapper">
            <Image
              src="/images/shape-10-1.png"
              alt="Pattern background"
              width={625}
              height={789}
              className="shape-dotted-globe"
              priority
            />
          </div>

          <div className="main-image-card">
            <Image
              src="/images/fna-hero.png"
              alt="Financial Needs Analysis Assessment"
              width={460}
              height={460}
              className="card-feature-img circular-img"
              priority
            />

            {/* Floating Pill Badge Top-Left */}
            <div className="floating-pill pill-top-left">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>100% Complimentary</span>
            </div>

            {/* Floating Pill Badge Bottom-Right */}
            <div className="floating-pill pill-bottom-right">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>12-Page Custom Blueprint</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Mint Background (#E2EDEA) */}
        <div className="service-content-col">
          <div className="service-content-inner">
            <div className="service-badge-tag">
              <TrendingUp size={16} className="service-tag-icon" strokeWidth={2.5} />
              <span>FLAGSHIP EDUCATIONAL ADVISORY</span>
            </div>

            <h1 className="service-main-title">
              Financial Needs <br />Analysis (FNA)
            </h1>

            <p className="service-subtext-lead">
              A comprehensive, 100% complimentary financial blueprint designed to uncover hidden cash flow, eliminate debt, and protect your household.
            </p>

            <p className="service-description">
              The Financial Needs Analysis is Nova Finance&apos;s flagship service. We analyze your actual cashflow, debt structure, retirement trajectory, and insurance safety nets before recommending a single strategy. <strong>Product purchase is never required.</strong>
            </p>

            <ul className="service-points-list">
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>$0 Out-of-Pocket Cost • 100% Confidential</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>D.I.M.E. survivor income protection calculation</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Debt Roll-Up schedule to save thousands in interest</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Retirement readiness gap audit &amp; tax wrapper roadmap</span>
              </li>
            </ul>

            <div className="get-started-btn-row">
              <Link href="/book-a-consultation" className="btn-primary-hero-fna">
                <Calendar size={18} />
                <span>Book Free Strategy Session</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('sample');
                  document.getElementById('fna-sample-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="outline-pill-btn"
              >
                <FileText size={18} className="btn-icon" />
                <span>View Sample Report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Deliverable Overview Strip */}
      <section className="fna-features-strip">
        <div className="container">
          <div className="fna-specs-grid">
            <div className="spec-card">
              <div className="spec-icon"><DollarSign size={24} /></div>
              <div className="spec-meta">
                <span className="spec-label">Cost</span>
                <strong className="spec-val">100% Free ($0)</strong>
                <span className="spec-sub">No purchase ever required</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon"><Clock size={24} /></div>
              <div className="spec-meta">
                <span className="spec-label">Duration</span>
                <strong className="spec-val">45 – 60 Minutes</strong>
                <span className="spec-sub">One-on-one virtual or phone</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon"><FileText size={24} /></div>
              <div className="spec-meta">
                <span className="spec-label">Required Docs</span>
                <strong className="spec-val">Paystubs &amp; Statements</strong>
                <span className="spec-sub">Debts, 401(k), &amp; policy terms</span>
              </div>
            </div>

            <div className="spec-card">
              <div className="spec-icon"><ShieldCheck size={24} /></div>
              <div className="spec-meta">
                <span className="spec-label">Deliverable</span>
                <strong className="spec-val">12-Page Custom PDF</strong>
                <span className="spec-sub">Step-by-step roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Samples / Consultation Section */}
      <section id="fna-sample-section" className="tabs-content-section">
        <div className="container max-w-calc">
          {/* Tabs Header */}
          <div className="tabs-header-row">
            <button
              className={`tab-btn ${activeTab === 'sample' ? 'active' : ''}`}
              onClick={() => setActiveTab('sample')}
              type="button"
            >
              Interactive FNA Sample Report
            </button>
            <button
              className={`tab-btn ${activeTab === 'consultation' ? 'active' : ''}`}
              onClick={() => setActiveTab('consultation')}
              type="button"
            >
              Request Your Free FNA Blueprint
            </button>
          </div>

          {/* Tab 1: Interactive 3-Page Redacted Sample Report */}
          {activeTab === 'sample' && (
            <div className="sample-report-viewer-card">
              <div className="viewer-header">
                <div>
                  <span className="viewer-tag">REDACTED CLIENT CASE EXAMPLE</span>
                  <h3 className="viewer-title">Sample Financial Needs Analysis Blueprint</h3>
                  <p className="viewer-sub">Client: Maryland Dual-Income Household (Ages 34 &amp; 36, 2 Dependents)</p>
                </div>

                {/* 3-Page Selector */}
                <div className="page-switcher-pills">
                  <button
                    type="button"
                    onClick={() => setSamplePage(1)}
                    className={`page-pill-btn ${samplePage === 1 ? 'active' : ''}`}
                  >
                    Page 1: Cashflow &amp; Reserves
                  </button>
                  <button
                    type="button"
                    onClick={() => setSamplePage(2)}
                    className={`page-pill-btn ${samplePage === 2 ? 'active' : ''}`}
                  >
                    Page 2: Survivor Gap &amp; Debt
                  </button>
                  <button
                    type="button"
                    onClick={() => setSamplePage(3)}
                    className={`page-pill-btn ${samplePage === 3 ? 'active' : ''}`}
                  >
                    Page 3: Retirement &amp; Wealth
                  </button>
                </div>
              </div>

              {/* Page 1: Cashflow & Liquidity Overview */}
              {samplePage === 1 && (
                <div className="report-page-body">
                  <div className="report-section-header">
                    <h4>Executive Cash Flow, Net Worth &amp; Emergency Reserves</h4>
                    <span className="page-num-badge">Page 1 of 3</span>
                  </div>

                  <div className="report-data-grid">
                    <div className="data-box highlight-blue">
                      <span className="data-label">Monthly Gross Income</span>
                      <strong className="data-number">$11,200</strong>
                      <span className="data-sub">Combined household W-2 earnings</span>
                    </div>

                    <div className="data-box highlight-green">
                      <span className="data-label">Discretionary Cashflow Surplus</span>
                      <strong className="data-number">$1,850 / mo</strong>
                      <span className="data-sub">Identified after budget audit</span>
                    </div>

                    <div className="data-box highlight-orange">
                      <span className="data-label">Current Emergency Reserve</span>
                      <strong className="data-number">$14,500 (3.2 Months)</strong>
                      <span className="data-sub">Recommended target: $27,000 (6 Mo)</span>
                    </div>
                  </div>

                  <div className="report-table-wrap">
                    <table className="report-table">
                      <thead>
                        <tr>
                          <th>Asset / Liability Category</th>
                          <th>Current Valuation</th>
                          <th>Target Benchmark</th>
                          <th>FNA Recommendation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Primary Residence Equity</strong></td>
                          <td>$160,000 ($340,000 Mortgage)</td>
                          <td>Appreciating Asset</td>
                          <td>Maintain standard amortized payments</td>
                        </tr>
                        <tr>
                          <td><strong>Liquid High-Yield Savings</strong></td>
                          <td>$14,500</td>
                          <td>$27,000 (6 Months Expenses)</td>
                          <td>Allocate $350/mo to reach target in 36 mo</td>
                        </tr>
                        <tr>
                          <td><strong>Employer 401(k) Balances</strong></td>
                          <td>$115,000</td>
                          <td>3x Salary by Age 40</td>
                          <td>Capture full employer 5% match</td>
                        </tr>
                        <tr>
                          <td><strong>Revolving Consumer Debt</strong></td>
                          <td>$28,000 (Avg 19.4% APR)</td>
                          <td>$0 (Debt-Free)</td>
                          <td>Execute Debt Roll-Up Acceleration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Page 2: Survivor Protection & Debt Roll-Up */}
              {samplePage === 2 && (
                <div className="report-page-body">
                  <div className="report-section-header">
                    <h4>Survivor Income Replacement (D.I.M.E.) &amp; Debt Acceleration</h4>
                    <span className="page-num-badge">Page 2 of 3</span>
                  </div>

                  <div className="dime-breakdown-card">
                    <h5 className="dime-title">D.I.M.E. Life Insurance Need Calculation</h5>
                    <div className="dime-calc-grid">
                      <div className="dime-item">
                        <span className="dime-letter">D</span>
                        <span className="dime-name">Debt Payoff</span>
                        <strong>$28,000</strong>
                      </div>
                      <div className="dime-item">
                        <span className="dime-letter">I</span>
                        <span className="dime-name">10-Yr Income Replacement</span>
                        <strong>$720,000</strong>
                      </div>
                      <div className="dime-item">
                        <span className="dime-letter">M</span>
                        <span className="dime-name">Mortgage Elimination</span>
                        <strong>$340,000</strong>
                      </div>
                      <div className="dime-item">
                        <span className="dime-letter">E</span>
                        <span className="dime-name">2x College Funds</span>
                        <strong>$150,000</strong>
                      </div>
                    </div>
                    <div className="dime-total-strip">
                      <span>Total Obligation ($1,238,000) − Existing Employer Life ($85,000) =</span>
                      <strong className="dime-final-val">$1,153,000 Protection Requirement</strong>
                    </div>
                  </div>

                  <div className="debt-rollup-box">
                    <h5>Debt Roll-Up / Snowball Acceleration Schedule</h5>
                    <p>
                      By rolling $650/mo of recovered cashflow sequentially from lowest balance to highest, the household eliminates $28,000 in consumer debt <strong>4.2 years earlier</strong>, saving <strong>$11,400 in interest charges</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* Page 3: Retirement & Wealth Accumulation */}
              {samplePage === 3 && (
                <div className="report-page-body">
                  <div className="report-section-header">
                    <h4>Retirement Readiness &amp; Tax-Advantaged Wealth Trajectory</h4>
                    <span className="page-num-badge">Page 3 of 3</span>
                  </div>

                  <div className="report-data-grid">
                    <div className="data-box highlight-blue">
                      <span className="data-label">Status Quo at Age 65</span>
                      <strong className="data-number">$610,000</strong>
                      <span className="data-sub">Subject to future ordinary income taxes</span>
                    </div>

                    <div className="data-box highlight-green">
                      <span className="data-label">FNA Optimized Plan at Age 65</span>
                      <strong className="data-number">$1,420,000+</strong>
                      <span className="data-sub">Diversified across Roth IRAs &amp; 401(k)</span>
                    </div>

                    <div className="data-box highlight-purple">
                      <span className="data-label">Projected Tax-Free Advantage</span>
                      <strong className="data-number">+$810,000</strong>
                      <span className="data-sub">Compound growth in qualified tax wrappers</span>
                    </div>
                  </div>

                  <div className="action-roadmap-list">
                    <h5>Priority Implementation Roadmap</h5>
                    <ol>
                      <li><strong>Step 1:</strong> Place two 30-year Level Term Life policies ($750K each) at $74/mo combined.</li>
                      <li><strong>Step 2:</strong> Accelerate debt payments with the Debt Roll-Up method to achieve 100% debt freedom in 26 months.</li>
                      <li><strong>Step 3:</strong> Redirect $600/mo freed debt cashflow into two Roth IRAs ($300/mo each) for tax-free retirement growth.</li>
                    </ol>
                  </div>
                </div>
              )}

              <div className="viewer-footer-cta">
                <button
                  type="button"
                  onClick={() => setActiveTab('consultation')}
                  className="btn-blue-solid"
                >
                  <span>Request Your Own Customized FNA Blueprint (Free)</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Book A Consultation */}
          {activeTab === 'consultation' && (
            <div className="calc-content-card">
              {submittedConsult ? (
                <div className="consult-success-msg">
                  <h3>Thank you for requesting a Financial Needs Analysis!</h3>
                  <p>Our senior financial advisor will review your goals and reach out to prepare your personalized report.</p>
                </div>
              ) : (
                <form className="consult-form" onSubmit={handleConsultSubmit}>
                  <div className="form-row-2">
                    <div className="form-group">
                      <label>First Name <span className="red-asterisk">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={consultForm.firstName}
                        onChange={(e) => setConsultForm({ ...consultForm, firstName: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name <span className="red-asterisk">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={consultForm.lastName}
                        onChange={(e) => setConsultForm({ ...consultForm, lastName: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Email Address <span className="red-asterisk">*</span></label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        value={consultForm.email}
                        onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number <span className="red-asterisk">*</span></label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (443) 000-0000"
                        value={consultForm.phone}
                        onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>State / Region <span className="red-asterisk">*</span></label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maryland, MD"
                        value={consultForm.stateOrCountry}
                        onChange={(e) => setConsultForm({ ...consultForm, stateOrCountry: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Primary Area of Interest</label>
                      <select
                        value={consultForm.primaryGoal}
                        onChange={(e) => setConsultForm({ ...consultForm, primaryGoal: e.target.value })}
                        className="calc-input"
                      >
                        <option value="Tax-Advantaged Mutual Funds & Wealth Growth">Tax-Advantaged Mutual Funds &amp; Wealth Growth</option>
                        <option value="Comprehensive Financial Needs Analysis (FNA)">Comprehensive Financial Needs Analysis (FNA)</option>
                        <option value="Term Life Insurance Protection">Term Life Insurance Protection</option>
                        <option value="College Savings / Custodial Roth IRA">College Savings / Custodial Roth IRA</option>
                        <option value="Retirement & Pension Maximization">Retirement &amp; Pension Maximization</option>
                        <option value="Debt Elimination & Cashflow Strategy">Debt Elimination &amp; Cashflow Strategy</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Current Monthly Investment / Savings Capacity ($)</label>
                      <select
                        value={consultForm.monthlySavings}
                        onChange={(e) => setConsultForm({ ...consultForm, monthlySavings: e.target.value })}
                        className="calc-input"
                      >
                        <option value="">Select an estimated monthly range</option>
                        <option value="$100 - $300 / month">$100 – $300 / month</option>
                        <option value="$300 - $600 / month">$300 – $600 / month</option>
                        <option value="$600 - $1,200 / month">$600 – $1,200 / month</option>
                        <option value="$1,200 - $2,500 / month">$1,200 – $2,500 / month</option>
                        <option value="$2,500+ / month">$2,500+ / month</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Preferred Consultation Time</label>
                      <select
                        value={consultForm.preferredTime}
                        onChange={(e) => setConsultForm({ ...consultForm, preferredTime: e.target.value })}
                        className="calc-input"
                      >
                        <option value="Morning (9:00 AM – 12:00 PM EST)">Morning (9:00 AM – 12:00 PM EST)</option>
                        <option value="Afternoon (12:00 PM – 4:00 PM EST)">Afternoon (12:00 PM – 4:00 PM EST)</option>
                        <option value="Evening (4:00 PM – 7:00 PM EST)">Evening (4:00 PM – 7:00 PM EST)</option>
                        <option value="Saturday Morning">Saturday Morning</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>What is your biggest financial priority or question?</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about specific questions, family protection priorities, or retirement goals you would like to cover..."
                      value={consultForm.financialWorry}
                      onChange={(e) => setConsultForm({ ...consultForm, financialWorry: e.target.value })}
                      className="calc-input"
                    />
                  </div>

                  <div className="privacy-trust-notice">
                    <p>
                     <strong>100% Free &amp; Confidential</strong>: A licensed Nova Finance advisor will review your goals and reach out within 1 business day. By submitting, you agree to our{' '}
                      <Link href="/privacy-policy" style={{ color: '#003399', textDecoration: 'underline' }}>Privacy Policy</Link> and{' '}
                      <Link href="/terms-and-conditions" style={{ color: '#003399', textDecoration: 'underline' }}>Terms of Service</Link>.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="calc-submit-btn"
                  >
                    {isSubmitting ? 'Submitting Request...' : 'Request Free Financial Needs Analysis'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Pill Section */}
      <section className="cta-action-section">
        <div className="container">
          <div className="cta-center-text text-center">
            <h2 className="cta-heading-title">
              Ready to take control of your financial future?
            </h2>
            <p className="cta-subtitle-text">
              Start building financial stability with NOVA today.
            </p>

            {/* Pill Card with 2 columns: Mail us! & Call us! */}
            <div className="contact-pill-card">
              <div className="pill-col">
                <span className="pill-sub-label">Mail us!</span>
                <a href="mailto:consult@tainaliel.com" className="pill-main-link">
                  consult@tainaliel.com
                </a>
              </div>

              <div className="pill-divider-line" />

              <div className="pill-col">
                <span className="pill-sub-label">Call us!</span>
                <a href="tel:+14437136416" className="pill-main-link">
                  +1 (443) 713-6416
                </a>
              </div>
            </div>

            {/* Bottom Book a Consultation CTA Button */}
            <div className="cta-btn-wrap">
              <Link href="/contact-us" className="btn-blue-solid consultation-btn">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .service-hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          width: 100%;
          min-height: 560px;
          background-color: #E2EDEA;
          align-items: stretch;
          overflow: hidden;
        }

        /* Left Column */
        .image-side-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 60px 40px 60px 5%;
          background-color: #ffffff;
          overflow: hidden;
        }

        .shape-bg-wrapper {
          position: absolute;
          left: -40px;
          top: 50%;
          transform: translateY(-50%);
          width: 580px;
          max-width: 90%;
          z-index: 1;
          pointer-events: none;
          opacity: 0.9;
        }

        .shape-dotted-globe {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        .main-image-card {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          display: flex;
          justify-content: center;
        }

        .card-feature-img {
          width: 100%;
          max-width: 420px;
          height: auto;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
          display: block;
        }

        .circular-img {
          border-radius: 50%;
        }

        .floating-pill {
          position: absolute;
          background-color: #ffffff;
          padding: 10px 22px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);
          font-weight: 700;
          font-size: 0.95rem;
          color: #0a1128;
          z-index: 3;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .pill-top-left {
          top: 20px;
          left: -15px;
        }

        .pill-bottom-right {
          bottom: 20px;
          right: -15px;
        }

        .pill-check-icon {
          color: #003399;
          flex-shrink: 0;
        }

        /* Right Column: Full Mint Container (#E2EDEA) */
        .service-content-col {
          background-color: #E2EDEA;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 70px 10% 70px 60px;
        }

        .service-content-inner {
          max-width: 560px;
          width: 100%;
        }

        .service-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #003399;
          margin-bottom: 18px;
        }

        .service-tag-icon {
          color: #003399;
        }

        .service-main-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.18;
          margin-bottom: 22px;
          letter-spacing: -0.5px;
        }

        .service-subtext-lead {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #4a5568;
          margin-bottom: 16px;
        }

        .service-description {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 30px;
        }

        .service-points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 40px;
        }

        .point-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          font-weight: 600;
          color: #0a1128;
        }

        .blue-circle-check {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #1a44c2;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .get-started-btn-row {
          margin-top: 15px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-primary-hero-fna {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 13px 26px;
          border-radius: 9999px;
          border: 2px solid #003399;
          transition: all 0.25s ease;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(0, 51, 153, 0.25);
        }

        .btn-primary-hero-fna:hover {
          background-color: #002277;
          border-color: #002277;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.35);
        }

        .outline-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 2px solid #003399;
          color: #003399;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          padding: 12px 26px;
          border-radius: 9999px;
          background-color: transparent;
          transition: all 0.25s ease;
          cursor: pointer;
        }

        .outline-pill-btn:hover {
          background-color: #003399;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.2);
        }

        /* FNA Specs Strip */
        .fna-features-strip {
          background-color: #000050;
          padding: 28px 0;
          color: #ffffff;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .fna-specs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .spec-card {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .spec-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background-color: rgba(0, 194, 203, 0.15);
          color: #00c2cb;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .spec-meta {
          display: flex;
          flex-direction: column;
        }

        .spec-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .spec-val {
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 800;
        }

        .spec-sub {
          font-size: 0.78rem;
          color: #cbd5e1;
        }

        /* Tabs Section */
        .tabs-content-section {
          padding: 60px 0 80px;
          background-color: #ffffff;
        }

        .max-w-calc {
          max-width: 960px;
          margin: 0 auto;
        }

        .tabs-header-row {
          display: flex;
          gap: 0;
          margin-bottom: 32px;
        }

        .tab-btn {
          padding: 14px 32px;
          font-size: 1.05rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          background-color: #f1f5f9;
          color: #475569;
        }

        .tab-btn:first-child {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .tab-btn:last-child {
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .tab-btn.active {
          background-color: #003399;
          color: #ffffff;
        }

        /* Sample Report Viewer Card */
        .sample-report-viewer-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 51, 153, 0.06);
        }

        .viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 28px;
        }

        .viewer-tag {
          font-size: 0.75rem;
          font-weight: 800;
          color: #003399;
          letter-spacing: 1px;
        }

        .viewer-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0a1128;
          margin: 4px 0;
        }

        .viewer-sub {
          font-size: 0.88rem;
          color: #64748b;
          margin: 0;
        }

        .page-switcher-pills {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .page-pill-btn {
          background-color: #f1f5f9;
          border: 1px solid #cbd5e1;
          color: #334155;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .page-pill-btn:hover {
          background-color: #e2e8f0;
        }

        .page-pill-btn.active {
          background-color: #003399;
          color: #ffffff;
          border-color: #003399;
        }

        .report-page-body {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 28px;
        }

        .report-section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }

        .report-section-header h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a1128;
          margin: 0;
        }

        .page-num-badge {
          background-color: #e0f2fe;
          color: #0369a1;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 12px;
        }

        .report-data-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .data-box {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 16px;
          border-left: 4px solid #003399;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
        }

        .highlight-blue { border-left-color: #003399; }
        .highlight-green { border-left-color: #16a34a; }
        .highlight-orange { border-left-color: #f97316; }
        .highlight-purple { border-left-color: #9333ea; }

        .data-label {
          font-size: 0.78rem;
          color: #64748b;
          font-weight: 700;
          text-transform: uppercase;
        }

        .data-number {
          font-size: 1.35rem;
          color: #0a1128;
          font-weight: 800;
          margin: 4px 0;
        }

        .data-sub {
          font-size: 0.78rem;
          color: #64748b;
        }

        .report-table-wrap {
          overflow-x: auto;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
        }

        .report-table th {
          background-color: #000050;
          color: #ffffff;
          padding: 12px 16px;
          text-align: left;
          font-size: 0.82rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .report-table td {
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
          color: #334155;
        }

        .dime-breakdown-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .dime-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 16px;
        }

        .dime-calc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 16px;
        }

        .dime-item {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
        }

        .dime-letter {
          font-size: 1.2rem;
          font-weight: 900;
          color: #003399;
        }

        .dime-name {
          font-size: 0.75rem;
          color: #64748b;
          margin-bottom: 4px;
        }

        .dime-total-strip {
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 8px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.92rem;
          color: #166534;
        }

        .dime-final-val {
          font-size: 1.15rem;
          color: #14532d;
        }

        .debt-rollup-box,
        .action-roadmap-list {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 20px;
        }

        .debt-rollup-box h5,
        .action-roadmap-list h5 {
          font-size: 1rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 10px;
        }

        .debt-rollup-box p {
          font-size: 0.92rem;
          color: #4a5568;
          line-height: 1.6;
          margin: 0;
        }

        .action-roadmap-list ol {
          padding-left: 20px;
          margin: 0;
        }

        .action-roadmap-list li {
          font-size: 0.92rem;
          color: #334155;
          line-height: 1.6;
          margin-bottom: 8px;
        }

        .viewer-footer-cta {
          text-align: center;
          margin-top: 10px;
        }

        .calc-content-card {
          padding: 10px 0;
        }

        .red-asterisk {
          color: #ef4444;
          font-weight: bold;
          margin-right: 4px;
        }

        .consult-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 1rem;
          font-weight: 700;
          color: #0a1128;
        }

        .calc-input {
          width: 100%;
          padding: 12px 18px;
          border: 1px solid #cbd5e1;
          border-radius: 6px;
          font-size: 1rem;
          color: #0a1128;
          outline: none;
          transition: border-color 0.2s;
          background-color: #ffffff;
        }

        .calc-input:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.1);
        }

        .calc-submit-btn {
          align-self: flex-start;
          background-color: #0056b3;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 12px 36px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s;
          margin-top: 10px;
        }

        .calc-submit-btn:hover {
          background-color: #003d82;
        }

        .privacy-trust-notice {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #64748b;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 12px 16px;
          border-radius: 8px;
          margin-top: 4px;
        }

        .consult-success-msg {
          padding: 40px;
          text-align: center;
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 12px;
          color: #166534;
        }

        /* CTA Section */
        .cta-action-section {
          padding: 80px 0 95px;
          background-color: #ffffff;
        }

        .cta-center-text {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading-title {
          font-size: 3rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .cta-subtitle-text {
          font-size: 1.15rem;
          color: #64748b;
          margin-bottom: 45px;
        }

        .contact-pill-card {
          display: inline-flex;
          align-items: center;
          justify-content: space-around;
          border: 2px solid #003399;
          border-radius: 9999px;
          padding: 24px 70px;
          width: 100%;
          max-width: 780px;
          background-color: #ffffff;
          box-shadow: 0 8px 24px rgba(0, 51, 153, 0.06);
          margin-bottom: 36px;
        }

        .pill-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .pill-sub-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0070f3;
        }

        .pill-main-link {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0a1128;
          transition: color 0.2s;
        }

        .pill-main-link:hover {
          color: #003399;
        }

        .pill-divider-line {
          width: 1.5px;
          height: 48px;
          background-color: #cbd5e1;
        }

        .cta-btn-wrap {
          margin-top: 10px;
        }

        .consultation-btn {
          padding: 14px 36px;
          font-size: 1.05rem;
          border-radius: 8px;
        }

        @media (max-width: 1024px) {
          .service-hero-section {
            grid-template-columns: 1fr;
          }
          .image-side-col {
            justify-content: center;
            padding: 50px 20px;
          }
          .service-content-col {
            padding: 50px 30px;
          }
          .service-main-title {
            font-size: 2.3rem;
          }
          .cta-heading-title {
            font-size: 2.2rem;
          }
          .sample-reports-grid {
            grid-template-columns: 1fr;
          }
          .contact-pill-card {
            flex-direction: column;
            border-radius: 24px;
            padding: 30px;
            gap: 20px;
          }
          .pill-divider-line {
            width: 80%;
            height: 1px;
          }
          .pill-top-left {
            left: 10px;
          }
          .pill-bottom-right {
            right: 10px;
          }
        }
      `}</style>
    </main>
  );
}
