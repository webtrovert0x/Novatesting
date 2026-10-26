'use client';

import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ConsultationCard() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    decisionMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.fullName,
          lastName: '',
          email: formData.email,
          phone: formData.phone,
          serviceSelected: formData.serviceInterest || 'General Inquiry',
          notes: formData.decisionMessage,
          formSource: 'Start with a clearer picture card',
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting consultation request:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-split-card">
      {/* Left Dark Column */}
      <div className="card-left-dark">
        <div className="left-content">
          <div className="step-eyebrow">
            <span className="eyebrow-dash">—</span>
            <span>YOUR NEXT STEP</span>
          </div>

          <h2 className="left-headline">
            Start with a clearer picture.
          </h2>

          <p className="left-description">
            Tell us what decision you are trying to make. We will help you identify the right conversation—without forcing you through an unrelated questionnaire.
          </p>
        </div>

        {/* Contact Badges at Bottom */}
        <div className="left-contact-badges">
          <a href="tel:+14437136416" className="contact-badge-item">
            <div className="badge-icon-circle">
              <Phone size={15} />
            </div>
            <span className="badge-text">+1 (443) 713-6416</span>
          </a>

          <a href="mailto:consult@tainaliel.com" className="contact-badge-item">
            <div className="badge-icon-circle">
              <Mail size={15} />
            </div>
            <span className="badge-text">consult@tainaliel.com</span>
          </a>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="card-right-form">
        {submitted ? (
          <div className="consultation-success-state">
            <div className="success-icon-wrap">
              <CheckCircle2 size={56} color="#16a34a" />
            </div>
            <h3 className="success-title">Thank You! Your Request Has Been Received</h3>
            <p className="success-desc">
              A Nova representative will review your note and reach out within <strong>one business day</strong>.
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  serviceInterest: '',
                  decisionMessage: '',
                });
              }}
              className="btn-reset"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-inner">
            <h2 className="form-title">Request a consultation</h2>
            <p className="form-subtitle">
              Share the basics. A Nova representative can follow up within one business day.
            </p>

            <div className="form-row-2">
              <div className="form-group">
                <label className="field-label">Full name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="field-input"
                />
              </div>

              <div className="form-group">
                <label className="field-label">Email address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="field-input"
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="field-label">Phone number</label>
                <input
                  type="tel"
                  required
                  placeholder="(000) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="field-input"
                />
              </div>

              <div className="form-group">
                <label className="field-label">What can we help with?</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="field-input field-select"
                >
                  <option value="">Choose one</option>
                  <option value="Strategic Wealth Planning">Strategic Wealth Planning</option>
                  <option value="Family & Asset Protection">Family &amp; Asset Protection</option>
                  <option value="Tax-Advantaged Growth">Tax-Advantaged Growth &amp; Investments</option>
                  <option value="Business & Executive Solutions">Business &amp; Executive Solutions</option>
                  <option value="Financial Needs Analysis">Financial Needs Analysis (FNA)</option>
                  <option value="General Discovery">General Discovery Session</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="field-label">What decision are you trying to make?</label>
              <textarea
                rows={3}
                placeholder="A sentence or two is enough."
                value={formData.decisionMessage}
                onChange={(e) => setFormData({ ...formData, decisionMessage: e.target.value })}
                className="field-input field-textarea"
              />
            </div>

            <p className="form-disclaimer">
              By submitting, you agree to be contacted about your request. This consultation is 100% complimentary &amp; confidential.
            </p>

            <div className="form-action-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-request-conversation"
              >
                <span>{isSubmitting ? 'Sending...' : 'Request my conversation'}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        .consultation-split-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          background-color: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 12px 40px rgba(0, 51, 153, 0.08);
          border: 1px solid #e2e8f0;
          max-width: 1060px;
          margin: 0 auto;
        }

        /* Left Dark Navy Column */
        .card-left-dark {
          background-color: #0b1528;
          color: #ffffff;
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .step-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #00c2cb;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .eyebrow-dash {
          font-weight: 900;
          color: #00c2cb;
        }

        .left-headline {
          font-size: 2.3rem;
          font-weight: 800;
          line-height: 1.25;
          color: #ffffff;
          margin-bottom: 22px;
          letter-spacing: -0.5px;
        }

        .left-description {
          font-size: 1rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
        }

        .left-contact-badges {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #cbd5e1;
          text-decoration: none;
          font-size: 0.92rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .contact-badge-item:hover {
          color: #ffffff;
        }

        .badge-icon-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00c2cb;
          flex-shrink: 0;
        }

        /* Right Clean White Form */
        .card-right-form {
          padding: 48px 44px;
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-inner {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-title {
          font-size: 1.95rem;
          font-weight: 800;
          color: #0a1128;
          margin: 0 0 6px 0;
          letter-spacing: -0.5px;
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: #64748b;
          margin: 0 0 10px 0;
          line-height: 1.5;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .field-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1e293b;
        }

        .field-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 0.94rem;
          color: #0a1128;
          background-color: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s ease;
        }

        .field-input::placeholder {
          color: #94a3b8;
        }

        .field-input:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.12);
        }

        .field-select {
          cursor: pointer;
        }

        .field-textarea {
          resize: vertical;
          min-height: 90px;
          font-family: inherit;
        }

        .form-disclaimer {
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.5;
          margin: 4px 0 0 0;
        }

        .form-action-row {
          margin-top: 8px;
        }

        .btn-request-conversation {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.98rem;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 51, 153, 0.25);
        }

        .btn-request-conversation:hover {
          background-color: #002277;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.35);
        }

        .btn-request-conversation:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        /* Success State */
        .consultation-success-state {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .success-icon-wrap {
          margin-bottom: 8px;
        }

        .success-title {
          font-size: 1.55rem;
          font-weight: 800;
          color: #15803d;
        }

        .success-desc {
          font-size: 1rem;
          color: #334155;
          max-width: 480px;
          line-height: 1.6;
        }

        .btn-reset {
          background: none;
          border: none;
          color: #003399;
          font-weight: 700;
          font-size: 0.92rem;
          cursor: pointer;
          text-decoration: underline;
          margin-top: 12px;
        }

        @media (max-width: 900px) {
          .consultation-split-card {
            grid-template-columns: 1fr;
          }
          .card-left-dark {
            padding: 36px 28px;
          }
          .card-right-form {
            padding: 36px 28px;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .left-headline {
            font-size: 1.9rem;
          }
        }
      `}</style>
    </div>
  );
}
