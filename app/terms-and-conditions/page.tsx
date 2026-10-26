'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, ShieldAlert } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="page-wrapper">
      <Header />

      <section className="legal-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="legal-tag">LEGAL & COMPLIANCE</span>
            <h1 className="legal-title">Terms & Conditions</h1>
            <p className="legal-subtitle">
              Last Updated: September 2026 | Nova Finance by Tainaliel
            </p>
          </div>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container max-w-legal">
          <div className="legal-card">
            <div className="legal-intro">
              <div className="intro-icon-box">
                <FileText size={32} color="#003399" />
              </div>
              <p>
                Welcome to <strong>NOVA Finance by Tainaliel</strong>. By accessing this website or booking a consultation, you agree to comply with and be bound by the following Terms and Conditions. Please review them carefully prior to using our services.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>1. Nature of Services & Educational Context</h2>
              <p>
                NOVA Finance by Tainaliel provides financial education, needs analysis assessments, and insurance brokerage services. Content published on this website, including calculators and illustrative projections, is provided for general informational and educational purposes only and does not constitute a binding offer of coverage or formal tax/legal advice.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Quotes & Insurance Underwriting</h2>
              <p>
                All insurance rate estimates (including Term Life, Auto, Health, and Property & Casualty) displayed on this website or discussed during initial consultations are preliminary and subject to formal underwriting review, carrier approval, state availability, medical history, driving records, and property inspections.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Licensing & Geographic Jurisdiction</h2>
              <p>
                Our insurance producers operate under appropriate state insurance licenses in Maryland and authorized United States jurisdictions. Product availability, carrier appointments, and terms vary by state and individual eligibility.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Intellectual Property</h2>
              <p>
                All original text, proprietary graphics, layout structures, and trademarks displayed on this site are the intellectual property of NOVA Finance by Tainaliel and may not be reproduced, copied, or redistributed without written authorization.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Limitation of Liability</h2>
              <p>
                In no event shall NOVA Finance by Tainaliel, its officers, or its licensed representatives be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website or reliance on hypothetical calculation scenarios.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Inquiries & Legal Notices</h2>
              <div className="contact-info-box">
                <p><strong>NOVA Finance by Tainaliel</strong></p>
                <p>One World Trade Center, Suite 8500, New York, NY 10007, USA</p>
                <p>Email: <a href="mailto:consult@tainaliel.com">consult@tainaliel.com</a></p>
                <p>Phone: <a href="tel:+14437136416">+1 (443) 713-6416</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .legal-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0 60px;
          text-align: center;
        }

        .legal-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }

        .legal-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .legal-subtitle {
          font-size: 0.95rem;
          color: #cbd5e1;
        }

        .legal-body-section {
          padding: 70px 0 90px;
          background-color: #f8fafc;
        }

        .max-w-legal {
          max-width: 860px;
          margin: 0 auto;
        }

        .legal-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 50px 55px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .legal-intro {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background-color: #f0f7ff;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 40px;
          color: #1e3a8a;
          line-height: 1.65;
        }

        .intro-icon-box {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .legal-section-block {
          margin-bottom: 36px;
        }

        .legal-section-block h2 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 14px;
        }

        .legal-section-block p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 14px;
        }

        .contact-info-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 18px 24px;
          margin-top: 14px;
          font-size: 0.98rem;
          color: #1e293b;
          line-height: 1.6;
        }

        .contact-info-box a {
          color: #003399;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .legal-title {
            font-size: 2.2rem;
          }
          .legal-card {
            padding: 30px 20px;
          }
          .legal-intro {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </main>
  );
}
