'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, TrendingUp, Calendar, ArrowRight, ShieldCheck, Award, Info, Lock } from 'lucide-react';

export default function TermLifeInsurancePage() {
  const [activeTab, setActiveTab] = useState<'quote' | 'consultation'>('quote');

  // Quote Calculator State
  const [coverageAmount, setCoverageAmount] = useState<string>('$500,000');
  const [age, setAge] = useState<number>(30);
  const [tobacco, setTobacco] = useState<string>('No');
  const [sex, setSex] = useState<string>('Male');
  const [planYears, setPlanYears] = useState<string>('20');
  const [waiver, setWaiver] = useState<string>('No');
  const [frequency, setFrequency] = useState<string>('Monthly');
  const [estimatedResult, setEstimatedResult] = useState<string>('$34.50');

  // Consultation Form State
  const [consultForm, setConsultForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    state: 'Maryland',
    coverageNeeded: '$500,000',
    termPreference: '20 Years',
    consent: true,
    notes: '',
  });
  const [submittedConsult, setSubmittedConsult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic life insurance rate calculation
  useEffect(() => {
    let baseRate = 20; // base monthly
    const cov = parseInt(coverageAmount.replace(/\D/g, '')) || 500000;
    
    // Coverage multiplier
    const covMultiplier = cov / 100000;
    baseRate = 5.8 * covMultiplier;

    // Age adjustment
    const userAge = Number(age) || 30;
    if (userAge > 30) {
      baseRate += (userAge - 30) * 1.65;
    }

    // Tobacco use
    if (tobacco === 'Yes') {
      baseRate *= 2.15;
    }

    // Sex adjustment (standard actuarial mortality tables)
    if (sex === 'Male') {
      baseRate *= 1.15;
    }

    // Plan length multiplier
    const yearsNum = parseInt(planYears) || 20;
    if (yearsNum === 10) baseRate *= 0.75;
    else if (yearsNum === 15) baseRate *= 0.88;
    else if (yearsNum === 25) baseRate *= 1.18;
    else if (yearsNum === 30) baseRate *= 1.35;
    else if (yearsNum === 35) baseRate *= 1.55;

    // Waiver of premium rider
    if (waiver === 'Yes') {
      baseRate += 4.5;
    }

    // Payment Frequency conversion
    let finalAmount = baseRate;
    if (frequency === 'Quarterly') finalAmount = baseRate * 3 * 0.98;
    else if (frequency === 'Semi-Annually') finalAmount = baseRate * 6 * 0.96;
    else if (frequency === 'Annually') finalAmount = baseRate * 12 * 0.92;

    setEstimatedResult(`$${finalAmount.toFixed(2)}`);
  }, [coverageAmount, age, tobacco, sex, planYears, waiver, frequency]);

  const handleConsultSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${consultForm.firstName} ${consultForm.lastName}`.trim(),
          email: consultForm.email,
          phone: consultForm.phone,
          service: `Term Life Insurance Quote ($${coverageAmount} / ${planYears} Yrs)`,
          stateOrCountry: consultForm.state,
          message: `Coverage: ${coverageAmount}, Term: ${planYears} Yrs, Age: ${age}, Tobacco: ${tobacco}, Waiver: ${waiver}. Notes: ${consultForm.notes}`,
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
              src="/images/Term-Life-Nova-Finance.png"
              alt="Nova Finance Licensed Term Life Insurance Protection"
              width={460}
              height={460}
              className="card-feature-img circular-img"
              priority
            />

            {/* Floating Pill Badge Top-Left */}
            <div className="floating-pill pill-top-left">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Multi-Carrier Choice</span>
            </div>

            {/* Floating Pill Badge Bottom-Right */}
            <div className="floating-pill pill-bottom-right">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Fixed Level Premiums</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Mint Background (#E2EDEA) */}
        <div className="service-content-col">
          <div className="service-content-inner">
            <div className="service-badge-tag">
              <TrendingUp size={16} className="service-tag-icon" strokeWidth={2.5} />
              <span>FAMILY PROTECTION</span>
            </div>

            <h1 className="service-main-title">
              Level Term Life <br />Insurance Protection
            </h1>

            <p className="service-subtext-lead">
              Affordable, transparent death benefit protection designed to replace household income, secure mortgages, and fund education.
            </p>

            <p className="service-description">
              As an independent multi-carrier brokerage, Nova Finance compares policies across leading A-rated U.S. insurers (such as Lincoln Financial, Prudential, Mutual of Omaha, Banner Life, and Transamerica) to secure the highest death benefit at the most competitive fixed premium.
            </p>

            <ul className="service-points-list">
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Guaranteed level premiums for 10, 15, 20, 25, 30, or 35 years</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Income replacement calculated with the D.I.M.E. formula</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Optional living benefits and waiver of premium riders</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>100% free multi-carrier quotes with zero sales pressure</span>
              </li>
            </ul>

            <div className="get-started-btn-row">
              <Link href="/book-a-consultation" className="btn-primary-hero-life">
                <Calendar size={18} />
                <span>Book Strategy Call</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  setActiveTab('quote');
                  document.getElementById('life-calc-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="outline-pill-btn"
              >
                <TrendingUp size={18} className="btn-icon" />
                <span>Calculate Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs & Calculator / Consultation Section */}
      <section id="life-calc-section" className="calculator-section">
        <div className="container max-w-calc">
          {/* Tabs */}
          <div className="tabs-header-row">
            <button
              className={`tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
              onClick={() => setActiveTab('quote')}
              type="button"
            >
              Interactive Quote Estimator
            </button>
            <button
              className={`tab-btn ${activeTab === 'consultation' ? 'active' : ''}`}
              onClick={() => setActiveTab('consultation')}
              type="button"
            >
              Request Official Multi-Carrier Comparison
            </button>
          </div>

          {/* Tab 1: Life Insurance Quick Quote Form */}
          {activeTab === 'quote' && (
            <div className="calc-content-card">
              <form className="calc-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="coverageAmount">Coverage Amount</label>
                    <select
                      id="coverageAmount"
                      value={coverageAmount}
                      onChange={(e) => setCoverageAmount(e.target.value)}
                      className="calc-input"
                    >
                      <option value="$100,000">$100,000</option>
                      <option value="$250,000">$250,000</option>
                      <option value="$500,000">$500,000</option>
                      <option value="$1,000,000">$1,000,000</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="userAge">Age</label>
                    <input
                      id="userAge"
                      type="number"
                      min="18"
                      max="85"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="calc-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="tobaccoUse">Tobacco Use</label>
                    <select
                      id="tobaccoUse"
                      value={tobacco}
                      onChange={(e) => setTobacco(e.target.value)}
                      className="calc-input"
                    >
                      <option value="No">No</option>
                      <option value="Yes">Yes</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="userSex">Sex</label>
                    <select
                      id="userSex"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                      className="calc-input"
                    >
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="planTerm">Term Duration</label>
                    <select
                      id="planTerm"
                      value={planYears}
                      onChange={(e) => setPlanYears(e.target.value)}
                      className="calc-input"
                    >
                      <option value="10">10-Year Guaranteed Level Term</option>
                      <option value="15">15-Year Guaranteed Level Term</option>
                      <option value="20">20-Year Guaranteed Level Term</option>
                      <option value="25">25-Year Guaranteed Level Term</option>
                      <option value="30">30-Year Guaranteed Level Term</option>
                      <option value="35">35-Year Guaranteed Level Term</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="waiverPremium">Waiver of Premium Rider</label>
                    <select
                      id="waiverPremium"
                      value={waiver}
                      onChange={(e) => setWaiver(e.target.value)}
                      className="calc-input"
                    >
                      <option value="No">No (Standard Policy)</option>
                      <option value="Yes">Yes (Waives premium if disabled)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="payFreq">Payment Schedule</label>
                  <select
                    id="payFreq"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="calc-input"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly (2% Pre-Pay Savings)</option>
                    <option value="Semi-Annually">Semi-Annually (4% Pre-Pay Savings)</option>
                    <option value="Annually">Annually (8% Pre-Pay Savings)</option>
                  </select>
                </div>

                <div className="form-group result-group">
                  <label htmlFor="resultEstimated">Estimated Illustrative Premium ({frequency})</label>
                  <input
                    id="resultEstimated"
                    type="text"
                    value={estimatedResult}
                    readOnly
                    className="calc-input readonly-input highlight-val"
                  />
                  <span className="estimate-caption">
                    *This is an estimated monthly/annual premium outlay, NOT a binding offer of coverage. Actual carrier rates are determined by formal medical history, prescription checks, and lifestyle underwriting.
                  </span>
                </div>

                <div className="calc-action-row">
                  <button
                    type="button"
                    onClick={() => setActiveTab('consultation')}
                    className="calc-submit-btn"
                  >
                    Request Official Multi-Carrier Comparison ➔
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
                  <p>Our life insurance specialist will review your request and get back to you shortly.</p>
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
                      <label>Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (443) 000-0000"
                        value={consultForm.phone}
                        onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input
                        type="date"
                        value={consultForm.dob}
                        onChange={(e) => setConsultForm({ ...consultForm, dob: e.target.value })}
                        className="calc-input"
                      />
                    </div>
                    <div className="form-group">
                      <label>Coverage Amount Needed ($)</label>
                      <select
                        value={consultForm.coverageNeeded}
                        onChange={(e) => setConsultForm({ ...consultForm, coverageNeeded: e.target.value })}
                        className="calc-input"
                      >
                        <option value="$100k - $250k">$100k - $250k</option>
                        <option value="$250k - $500k">$250k - $500k</option>
                        <option value="$500k - $1M">$500k - $1M</option>
                        <option value="$1M+">$1M+</option>
                      </select>
                    </div>
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

        .btn-primary-hero-life {
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

        .btn-primary-hero-life:hover {
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

        .estimate-caption {
          font-size: 0.8rem;
          color: #64748b;
          font-style: italic;
          margin-top: 6px;
          display: block;
          line-height: 1.5;
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
          font-size: 1.15rem;
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
