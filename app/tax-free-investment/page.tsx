'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

export default function TaxFreeInvestmentPage() {
  const [activeTab, setActiveTab] = useState<'quote' | 'consultation'>('quote');

  // Calculator State
  const [openingBalance, setOpeningBalance] = useState<number>(5000);
  const [years, setYears] = useState<number>(15);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(300);
  const [annualRate, setAnnualRate] = useState<number>(8); // Default 8%
  const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
  const [estimatedGrowth, setEstimatedGrowth] = useState<number>(0);
  const [potentialWealth, setPotentialWealth] = useState<number>(0);

  // Consultation Form State
  const [consultForm, setConsultForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    wrapperInterest: 'Roth IRA',
    taxBracket: '22–24%',
    riskTolerance: 'Moderate',
    state: '',
    notes: '',
  });
  const [submittedConsult, setSubmittedConsult] = useState(false);

  // Dynamic compound interest calculation
  useEffect(() => {
    const p = Number(openingBalance) || 0;
    const t = Number(years) || 1;
    const pmt = Number(monthlyContribution) || 0;
    const r = (Number(annualRate) || 8) / 100;
    const n = 12;
    const totalMonths = t * n;
    const i = r / n;

    // Principal invested
    const principal = p + (pmt * totalMonths);
    setTotalPrincipal(principal);

    // Potential Wealth
    const fvPrincipal = p * Math.pow(1 + i, totalMonths);
    const fvAnnuity = pmt > 0 && i > 0 ? pmt * ((Math.pow(1 + i, totalMonths) - 1) / i) : (pmt * totalMonths);
    const totalFutureValue = Math.round(fvPrincipal + fvAnnuity);
    setPotentialWealth(totalFutureValue);
    setEstimatedGrowth(Math.max(0, totalFutureValue - principal));
  }, [openingBalance, years, monthlyContribution, annualRate]);

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedConsult(true);
  };

  return (
    <main className="page-wrapper">
      <Header />

      {/* Top Hero & Service Section (50/50 Seamless Split) */}
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
              src="/images/account-4-1.jpg"
              alt="Tax-Advantaged Wealth and Compound Growth Strategy"
              width={540}
              height={360}
              className="card-feature-img"
              priority
            />

            {/* Floating Pill Badge Top-Left */}
            <div className="floating-pill pill-top-left">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Diversified Portfolios</span>
            </div>

            {/* Floating Pill Badge Bottom-Right */}
            <div className="floating-pill pill-bottom-right">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Tax-Advantaged Growth</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Mint Background */}
        <div className="service-content-col">
          <div className="service-content-inner">
            <div className="service-badge-tag">
              <TrendingUp size={16} className="service-tag-icon" strokeWidth={2.5} />
              <span>WEALTH STRATEGY</span>
            </div>

            <h1 className="service-main-title">
              Tax-Advantaged <br />Wealth &amp; Growth Strategies
            </h1>

            <p className="service-subtext-lead">
              Smart investment structuring designed to help your capital compound efficiently using qualified IRS account wrappers.
            </p>

            <p className="service-description">
              Mutual funds themselves are not inherently tax-free; true tax efficiency requires pairing disciplined asset allocation with compliant account wrappers (such as Roth IRAs, Custodial Roth accounts, 529 College Savings, or IRC §7702 policies). We help you model your trajectory and connect with registered third-party custodians.
            </p>

            <ul className="service-points-list">
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Roth IRA &amp; Custodial Roth tax-free compounding</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Third-party registered custody (Schwab, Fidelity, Vanguard)</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Personalized multi-scenario mathematical modeling</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Zero obligation, 100% complimentary FNA snapshot</span>
              </li>
            </ul>

            <div className="get-started-btn-row">
              <Link href="/book-a-consultation" className="btn-primary-hero-tax">
                <Calendar size={18} />
                <span>Book Strategy Consultation</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('quote');
                  document.getElementById('tax-calc-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="outline-pill-btn"
              >
                <TrendingUp size={18} className="btn-icon" />
                <span>Interactive Calculator</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Calculator / Consultation Section */}
      <section id="tax-calc-section" className="calculator-section">
        <div className="container max-w-calc">
          {/* Tabs */}
          <div className="tabs-header-row">
            <button
              className={`tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
              onClick={() => setActiveTab('quote')}
              type="button"
            >
              Get Quick Quote
            </button>
            <button
              className={`tab-btn ${activeTab === 'consultation' ? 'active' : ''}`}
              onClick={() => setActiveTab('consultation')}
              type="button"
            >
              Book A Consultation
            </button>
          </div>

          {/* Tab 1: Multi-Scenario Wealth Calculator */}
          {activeTab === 'quote' && (
            <div className="calc-content-card">
              <div className="calc-header-summary">
                <h3 className="calc-card-title">Interactive Compound Growth &amp; Wealth Projection</h3>
                <p className="calc-card-desc">
                  Model hypothetical compounding across varying time horizons and historical asset return scenarios.
                </p>
              </div>

              {/* Scenario Preset Buttons */}
              <div className="scenario-presets-row">
                <span className="preset-label">Scenario Presets:</span>
                <button
                  type="button"
                  onClick={() => setAnnualRate(6)}
                  className={`preset-btn ${annualRate === 6 ? 'active' : ''}`}
                >
                  Conservative (6%)
                </button>
                <button
                  type="button"
                  onClick={() => setAnnualRate(8)}
                  className={`preset-btn ${annualRate === 8 ? 'active' : ''}`}
                >
                  Balanced / Historical (8%)
                </button>
                <button
                  type="button"
                  onClick={() => setAnnualRate(10)}
                  className={`preset-btn ${annualRate === 10 ? 'active' : ''}`}
                >
                  Growth Focus (10%)
                </button>
              </div>

              <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
                <div className="calc-inputs-grid">
                  <div className="form-group">
                    <label htmlFor="openingBalance">Initial Starting Balance ($)</label>
                    <input
                      id="openingBalance"
                      type="number"
                      min="0"
                      step="500"
                      value={openingBalance}
                      onChange={(e) => setOpeningBalance(Number(e.target.value))}
                      className="calc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="monthlyContribution">Monthly Contribution ($)</label>
                    <input
                      id="monthlyContribution"
                      type="number"
                      min="0"
                      step="50"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="calc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="years">Time Horizon: <strong>{years} Years</strong></label>
                    <input
                      id="years"
                      type="range"
                      min="1"
                      max="40"
                      value={years}
                      onChange={(e) => setYears(Number(e.target.value))}
                      className="calc-slider"
                    />
                    <div className="slider-ticks">
                      <span>1 yr</span>
                      <span>10 yrs</span>
                      <span>20 yrs</span>
                      <span>30 yrs</span>
                      <span>40 yrs</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="annualRate">Hypothetical Annual Return: <strong>{annualRate}%</strong></label>
                    <input
                      id="annualRate"
                      type="range"
                      min="4"
                      max="12"
                      step="0.5"
                      value={annualRate}
                      onChange={(e) => setAnnualRate(Number(e.target.value))}
                      className="calc-slider"
                    />
                    <div className="slider-ticks">
                      <span>4% (Defensive)</span>
                      <span>8% (Baseline)</span>
                      <span>12% (Aggressive)</span>
                    </div>
                  </div>
                </div>

                {/* Projection Results Summary Cards */}
                <div className="results-metrics-grid">
                  <div className="metric-box principal-box">
                    <span className="metric-label">Total Principal Invested</span>
                    <span className="metric-value">
                      {totalPrincipal.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                    </span>
                    <span className="metric-sub">Your out-of-pocket contributions</span>
                  </div>

                  <div className="metric-box growth-box">
                    <span className="metric-label">Estimated Compound Growth</span>
                    <span className="metric-value">
                      +{estimatedGrowth.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                    </span>
                    <span className="metric-sub">Compounded interest over {years} yrs</span>
                  </div>

                  <div className="metric-box total-box">
                    <span className="metric-label">Projected Total Portfolio</span>
                    <span className="metric-value highlight-val">
                      {potentialWealth.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}
                    </span>
                    <span className="metric-sub">At {annualRate}% annual illustrative growth</span>
                  </div>
                </div>

                {/* Strong Regulatory & Mathematical Disclaimer */}
                <div className="prominent-disclaimer-box">
                  <div className="disclaimer-title">
                    <strong>Important Mathematical &amp; Regulatory Disclosures:</strong>
                  </div>
                  <p>
                    This projection is an educational mathematical simulation assuming a constant {annualRate}% annual return compounded monthly. Actual financial markets fluctuate year-over-year, and investments involve risk, including the possible loss of principal.
                  </p>
                  <ul className="disclaimer-bullets">
                    <li><strong>Fees &amp; Expenses:</strong> Calculations do not subtract underlying mutual fund expense ratios (typically 0.05%–0.75%), custodian transaction costs, or advisory fees.</li>
                    <li><strong>Taxes &amp; Wrappers:</strong> Tax-free growth and withdrawals apply only within qualified tax wrappers (such as Roth IRAs, 529 College Plans, or IRC Section 7702 life policies) subject to IRS eligibility, contribution limits, and holding periods (e.g., 5-year rule and age 59½).</li>
                    <li><strong>No Guaranteed Performance:</strong> Past performance and hypothetical rates do not guarantee future investment returns. Consult with a licensed advisor for an individualized suitability review.</li>
                  </ul>
                </div>

                <div className="calc-action-row">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('consultation');
                    }}
                    className="calc-submit-btn"
                  >
                    Discuss This Roadmap With A Licensed Advisor ➔
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Tab 2: Book A Consultation */}
          {activeTab === 'consultation' && (
            <div className="calc-content-card">
              {submittedConsult ? (
                <div className="consult-success-msg">
                  <h3>Thank you for reaching out!</h3>
                  <p>Our licensed wealth advisor will review your information and contact you shortly.</p>
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

                  <div className="form-group">
                    <label>Email <span className="red-asterisk">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="johndoe@mail.com"
                      value={consultForm.email}
                      onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                      className="calc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Current Tax Bracket</label>
                    <select
                      value={consultForm.taxBracket}
                      onChange={(e) => setConsultForm({ ...consultForm, taxBracket: e.target.value })}
                      className="calc-input"
                    >
                      <option value="10–12%">10–12%</option>
                      <option value="22–24%">22–24%</option>
                      <option value="32%+">32%+</option>
                      <option value="Unsure">Unsure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Risk Tolerance</label>
                    <div className="radio-group-row">
                      {['Conservative (Low Risk)', 'Moderate', 'Aggressive (High Growth)'].map((risk) => (
                        <label key={risk} className="radio-label">
                          <input
                            type="radio"
                            name="riskTolerance"
                            value={risk}
                            checked={consultForm.riskTolerance === risk}
                            onChange={(e) => setConsultForm({ ...consultForm, riskTolerance: e.target.value })}
                          />
                          <span>{risk}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>State of Residence</label>
                    <input
                      type="text"
                      placeholder="e.g. Maryland"
                      value={consultForm.state}
                      onChange={(e) => setConsultForm({ ...consultForm, state: e.target.value })}
                      className="calc-input"
                    />
                  </div>

                  <div className="form-group">
                    <label>Additional Notes or Questions</label>
                    <textarea
                      rows={4}
                      value={consultForm.notes}
                      onChange={(e) => setConsultForm({ ...consultForm, notes: e.target.value })}
                      className="calc-input"
                    />
                  </div>

                  <button type="submit" className="calc-submit-btn">
                    Submit
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Account Wrappers & Tax Regulations Breakdown */}
      <section className="account-wrappers-section">
        <div className="container">
          <div className="wrappers-header text-center">
            <span className="section-eyebrow">STRUCTURES &amp; WRAPPERS</span>
            <h2 className="section-title">Understanding Tax-Advantaged Account Vehicles</h2>
            <p className="intro-lead">
              Mutual funds themselves are not inherently tax-free; tax advantages depend strictly on the legal account structure, custodian holding, and IRS rules utilized.
            </p>
          </div>

          <div className="wrappers-grid">
            <div className="wrapper-card">
              <div className="wrapper-badge">RETIREMENT</div>
              <h3 className="wrapper-title">Roth IRA &amp; Custodial Roth IRA</h3>
              <p className="wrapper-desc">
                Contributed with after-tax dollars. Investments grow 100% tax-free, and qualified withdrawals in retirement (after age 59½ and 5-year holding) are completely free from federal and state income taxes.
              </p>
              <ul className="wrapper-facts">
                <li><strong>2024–2026 Limits:</strong> Up to $7,000/year ($8,000 if age 50+), subject to IRS earned income requirements and MAGI phaseouts.</li>
                <li><strong>Custodians:</strong> Held at registered independent custodians (e.g. Charles Schwab, Fidelity, Vanguard).</li>
              </ul>
            </div>

            <div className="wrapper-card">
              <div className="wrapper-badge">EDUCATION</div>
              <h3 className="wrapper-title">529 College Savings Plans</h3>
              <p className="wrapper-desc">
                State-sponsored, tax-advantaged investment accounts designed specifically for qualified educational expenses (tuition, fees, room &amp; board). Earnings grow federal tax-free.
              </p>
              <ul className="wrapper-facts">
                <li><strong>Contribution Rules:</strong> High aggregate lifetime limits per beneficiary with gift tax considerations.</li>
                <li><strong>Flexibility:</strong> Unused balances can rollover up to $35,000 lifetime into the beneficiary&apos;s Roth IRA under SECURE 2.0 rules.</li>
              </ul>
            </div>

            <div className="wrapper-card">
              <div className="wrapper-badge">PROTECTION &amp; ACCUMULATION</div>
              <h3 className="wrapper-title">IRC Section 7702 Cash Value Plans</h3>
              <p className="wrapper-desc">
                Permanent cash value life insurance contracts structured under IRS Section 7702 for tax-deferred cash growth and tax-free policy loans/withdrawals up to cost basis.
              </p>
              <ul className="wrapper-facts">
                <li><strong>Underwriting:</strong> Requires health qualification through A-rated licensed insurance carriers.</li>
                <li><strong>No Income Limits:</strong> Provides high-earner tax diversification without standard IRA contribution caps.</li>
              </ul>
            </div>

            <div className="wrapper-card">
              <div className="wrapper-badge">INCOME</div>
              <h3 className="wrapper-title">Municipal Bond Mutual Funds</h3>
              <p className="wrapper-desc">
                Mutual funds invested in state and local government debt securities. Interest distributions are exempt from federal income tax (and often in-state taxes).
              </p>
              <ul className="wrapper-facts">
                <li><strong>Suitability:</strong> Typically suitable for investors in higher federal income tax brackets (24%+).</li>
                <li><strong>Capital Gains:</strong> While income yields are tax-exempt, sales of underlying fund shares may trigger standard capital gains taxes.</li>
              </ul>
            </div>
          </div>
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
          background-color: ;
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
          max-width: 500px;
          border-radius: 16px;
        }

        .card-feature-img {
          width: 100%;
          height: auto;
          border-radius: 16px;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
          display: block;
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
          top: 24px;
          left: -20px;
        }

        .pill-bottom-right {
          bottom: 24px;
          right: -20px;
        }

        .pill-check-icon {
          color: #003399;
          flex-shrink: 0;
        }

        /* Right Column: Full Mint Container */
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

        .btn-primary-hero-tax {
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

        .btn-primary-hero-tax:hover {
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

        /* Calculator / Tab Section */
        .calculator-section {
          padding: 60px 0 80px;
          background-color: #ffffff;
        }

        .max-w-calc {
          max-width: 920px;
          margin: 0 auto;
        }

        .tabs-header-row {
          display: flex;
          gap: 0;
          margin-bottom: 24px;
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
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }

        .tab-btn:last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }

        .tab-btn.active {
          background-color: #003399;
          color: #ffffff;
        }

        .calc-content-card {
          padding: 10px 0;
        }

        .disclaimer-text {
          font-size: 0.95rem;
          color: #0a1128;
          margin-bottom: 28px;
          line-height: 1.5;
        }

        .red-asterisk {
          color: #ef4444;
          font-weight: bold;
          margin-right: 4px;
        }

        .calc-form, .consult-form {
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

        .readonly-input {
          background-color: #f8fafc;
          font-weight: 600;
          color: #0a1128;
          cursor: default;
        }

        .highlight-val {
          font-weight: 700;
          color: #003399;
        }

        .calc-header-summary {
          margin-bottom: 24px;
        }

        .calc-card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 8px;
        }

        .calc-card-desc {
          font-size: 0.98rem;
          color: #64748b;
        }

        .scenario-presets-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
          padding: 14px 18px;
          background-color: #f1f5f9;
          border-radius: 10px;
        }

        .preset-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #334155;
        }

        .preset-btn {
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid #cbd5e1;
          background-color: #ffffff;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          border-color: #003399;
          color: #003399;
        }

        .preset-btn.active {
          background-color: #003399;
          color: #ffffff;
          border-color: #003399;
        }

        .calc-inputs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 30px;
        }

        .calc-slider {
          width: 100%;
          height: 8px;
          border-radius: 5px;
          background: #e2e8f0;
          outline: none;
          margin: 14px 0 8px;
          cursor: pointer;
          accent-color: #003399;
        }

        .slider-ticks {
          display: flex;
          justify-content: space-between;
          font-size: 0.78rem;
          color: #64748b;
        }

        .results-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 28px;
        }

        .metric-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 18px;
          display: flex;
          flex-direction: column;
        }

        .metric-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .metric-value {
          font-size: 1.6rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 4px;
        }

        .metric-box.total-box {
          background-color: #eff6ff;
          border-color: #93c5fd;
        }

        .metric-box.total-box .metric-value {
          color: #003399;
        }

        .metric-sub {
          font-size: 0.78rem;
          color: #64748b;
        }

        .prominent-disclaimer-box {
          background-color: #fffbeb;
          border: 1px solid #fde68a;
          border-radius: 12px;
          padding: 20px 24px;
          margin-bottom: 28px;
          font-size: 0.88rem;
          line-height: 1.6;
          color: #92400e;
        }

        .disclaimer-title {
          margin-bottom: 8px;
          color: #78350f;
          font-size: 0.92rem;
        }

        .disclaimer-bullets {
          margin: 10px 0 0 18px;
          padding: 0;
        }

        .disclaimer-bullets li {
          margin-bottom: 6px;
        }

        .calc-action-row {
          display: flex;
          justify-content: center;
        }

        .calc-submit-btn {
          background-color: #003399;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 16px 36px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s, transform 0.2s;
        }

        .calc-submit-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }

        /* Account Wrappers Section */
        .account-wrappers-section {
          padding: 85px 0 95px;
          background-color: #f8fafc;
        }

        .wrappers-header {
          max-width: 820px;
          margin: 0 auto 50px;
        }

        .wrappers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .wrapper-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 36px 32px;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .wrapper-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 51, 153, 0.06);
        }

        .wrapper-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #003399;
          background-color: #e6f0fa;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 14px;
        }

        .wrapper-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 12px;
        }

        .wrapper-desc {
          font-size: 0.98rem;
          line-height: 1.65;
          color: #4a5568;
          margin-bottom: 16px;
        }

        .wrapper-facts {
          margin: 0 0 0 18px;
          color: #4a5568;
          font-size: 0.9rem;
          line-height: 1.65;
        }

        .wrapper-facts li {
          margin-bottom: 6px;
        }

        @media (max-width: 900px) {
          .calc-inputs-grid,
          .results-metrics-grid,
          .wrappers-grid {
            grid-template-columns: 1fr;
          }
        }

        .radio-group-row {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          padding: 6px 0;
        }

        .radio-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          cursor: pointer;
          font-weight: 500;
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
