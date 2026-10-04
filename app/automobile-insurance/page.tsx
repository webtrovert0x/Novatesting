'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Check, TrendingUp, Calendar, ArrowRight, ShieldCheck, Car } from 'lucide-react';

export default function AutomobileInsurancePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    vehicleInfo: '',
    primaryUse: 'Personal/Commuting',
    accidents: 'No',
    coverageType: 'Full Coverage (Comprehensive/Collision)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          service: `Auto Insurance Quote (${formData.vehicleInfo || 'Vehicle'})`,
          stateOrCountry: `ZIP: ${formData.zipCode}`,
          message: `Primary Use: ${formData.primaryUse}, Coverage: ${formData.coverageType}, Accidents/Tickets (3 yrs): ${formData.accidents}. Notes: ${formData.notes}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="page-wrapper">
      <Header />

      {/* Top Hero & Service Section (50/50 Split) */}
      <section className="service-hero-section">
        {/* Left Column: Dotted Globe + Vehicle Image with Floating Badges */}
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
              src="/images/auto-insurance-hero.png"
              alt="Nova Finance Auto Insurance Vehicle Coverage"
              width={520}
              height={320}
              className="card-feature-img"
              priority
            />

            {/* Floating Pill Badge Top-Left */}
            <div className="floating-pill pill-top-left">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Fast Claims</span>
            </div>

            {/* Floating Pill Badge Bottom-Right */}
            <div className="floating-pill pill-bottom-right">
              <Check size={16} className="pill-check-icon" strokeWidth={3} />
              <span>Auto Coverage</span>
            </div>
          </div>
        </div>

        {/* Right Column: Full Mint Background (#E2EDEA) */}
        <div className="service-content-col">
          <div className="service-content-inner">
            <div className="service-badge-tag">
              <TrendingUp size={16} className="service-tag-icon" strokeWidth={2.5} />
              <span>SERVICE</span>
            </div>

            <h1 className="service-main-title">
              Auto Insurance
            </h1>

            <p className="service-subtext-lead">
              Reliable coverage that keeps you protected on the road.
            </p>

            <p className="service-description">
              Protect your vehicle against accidents, theft, fire, and third-party liabilities.
              Our auto insurance solutions are flexible, affordable, and designed to give you
              peace of mind whether you’re commuting daily or traveling long distance.
            </p>

            <ul className="service-points-list">
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Comprehensive & third-party insurance</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Accident & collision protection</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Theft and fire coverage</span>
              </li>
              <li className="point-item">
                <span className="blue-circle-check">
                  <Check size={12} color="#ffffff" strokeWidth={3} />
                </span>
                <span>Fast claims support</span>
              </li>
            </ul>

            <div className="get-started-btn-row">
              <Link href="/book-a-consultation" className="btn-primary-hero-auto">
                <Calendar size={18} />
                <span>Book Rate Consultation</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  document.querySelector('.consultation-form-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="outline-pill-btn"
              >
                <Car size={18} className="btn-icon" />
                <span>Compare Auto Rates</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Insurance Consultation Form Section */}
      <section className="consultation-form-section">
        <div className="container max-w-form">
          <div className="section-title-wrap text-center">
            <h2 className="form-main-heading">Auto Insurance Consultation</h2>
            <p className="form-subheading">
              Speak with an expert to find the right coverage for your vehicle with confidence and clarity.
            </p>
          </div>

          <div className="form-card-container">
            {submitted ? (
              <div className="consult-success-msg">
                <h3>Thank you for your auto insurance inquiry!</h3>
                <p>An automotive insurance specialist will review your vehicle details and contact you with rate options.</p>
              </div>
            ) : (
              <form className="auto-form" onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label>First Name <span className="red-asterisk">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="calc-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="red-asterisk">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
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
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="calc-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="+1 (443) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="calc-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Zip Code <span className="red-asterisk">*</span></label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      required
                      placeholder="e.g. 21061"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value.replace(/\D/g, '') })}
                      className="calc-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Vehicle Year, Make &amp; Model</label>
                    <input
                      type="text"
                      placeholder="e.g. 2023 Toyota Camry"
                      value={formData.vehicleInfo}
                      onChange={(e) => setFormData({ ...formData, vehicleInfo: e.target.value })}
                      className="calc-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Primary Use of Vehicle</label>
                    <select
                      value={formData.primaryUse}
                      onChange={(e) => setFormData({ ...formData, primaryUse: e.target.value })}
                      className="calc-input"
                    >
                      <option value="Personal/Commuting">Personal / Commuting</option>
                      <option value="Business">Business</option>
                      <option value="Rideshare (Uber/Lyft)">Rideshare (Uber/Lyft)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Coverage Package Preference</label>
                    <select
                      value={formData.coverageType}
                      onChange={(e) => setFormData({ ...formData, coverageType: e.target.value })}
                      className="calc-input"
                    >
                      <option value="Full Coverage (Comprehensive/Collision)">Full Coverage (Comprehensive &amp; Collision)</option>
                      <option value="Liability">Liability Only</option>
                      <option value="Unsure">Unsure / Need Guidance</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Any accidents or tickets in the last 3 years?</label>
                  <div className="radio-group-row">
                    {['Yes', 'No'].map((choice) => (
                      <label key={choice} className="radio-label">
                        <input
                          type="radio"
                          name="accidents"
                          value={choice}
                          checked={formData.accidents === choice}
                          onChange={(e) => setFormData({ ...formData, accidents: e.target.value })}
                        />
                        <span>{choice}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Notes or Questions</label>
                  <textarea
                    rows={4}
                    placeholder="Provide any additional details, vehicle specifics, or current carrier..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="calc-input"
                  />
                </div>

                <div className="privacy-trust-notice">
                  <label className="checkbox-consent-label">
                    <input
                      type="checkbox"
                      required
                      defaultChecked={true}
                      className="consent-checkbox"
                    />
                    <span>
                      I authorize Nova Finance by Tainaliel LLC to use my provided vehicle and driver details to research and retrieve multi-carrier quote comparisons. I agree to the{' '}
                      <Link href="/privacy-policy" style={{ color: '#003399', textDecoration: 'underline' }}>Privacy Policy</Link>{' '}
                      and understand driving history data is handled strictly in accordance with state DMV/CLUE regulations.
                    </span>
                  </label>
                </div>

                <div className="auto-disclaimer-card">
                  <p>
                    <strong>Disclosures:</strong> Nova Finance is an independent insurance brokerage licensed in the State of Maryland (MD Resident Producer). Vehicle quotes are illustrative non-binding estimates until formal motor vehicle records (MVR) and insurance history reports are finalized. Guaranteed response within 1 business day.
                  </p>
                </div>

                <button type="submit" className="calc-submit-btn">
                  Submit Quote Request
                </button>
              </form>
            )}
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
          max-width: 480px;
          display: flex;
          justify-content: center;
        }

        .card-feature-img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 16px 30px rgba(0, 0, 0, 0.18));
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
          top: 10px;
          left: -15px;
        }

        .pill-bottom-right {
          bottom: 10px;
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
          margin-top: 10px;
        }

        .outline-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 2px solid #003399;
          color: #0a1128;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 12px 32px;
          border-radius: 9999px;
          background-color: transparent;
          transition: all 0.25s ease;
        }

        .outline-pill-btn:hover {
          background-color: #003399;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.2);
        }

        /* Consultation Form Section */
        .consultation-form-section {
          padding: 70px 0 85px;
          background-color: #ffffff;
        }

        .max-w-form {
          max-width: 880px;
          margin: 0 auto;
        }

        .section-title-wrap {
          margin-bottom: 36px;
        }

        .form-main-heading {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 12px;
        }

        .form-subheading {
          font-size: 1.05rem;
          color: #64748b;
        }

        .form-card-container {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .red-asterisk {
          color: #ef4444;
          font-weight: bold;
          margin-right: 4px;
        }

        .auto-form {
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

        .radio-group-row {
          display: flex;
          gap: 30px;
          padding: 6px 0;
        }

        .radio-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          cursor: pointer;
          font-weight: 600;
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
          .form-row-2 {
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
