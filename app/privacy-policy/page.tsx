'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="page-wrapper">
      <Header />

      <section className="legal-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="legal-tag">LEGAL & COMPLIANCE</span>
            <h1 className="legal-title">Privacy Policy</h1>
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
                <ShieldCheck size={32} color="#003399" />
              </div>
              <p>
                At <strong>NOVA Finance by Tainaliel</strong>, we are committed to safeguarding the personal and financial information of our clients, prospective clients, and website visitors. This Privacy Policy details how we collect, use, store, protect, and handle your information in full compliance with United States privacy standards and state regulations.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>1. Information We Collect</h2>
              <p>We only collect information that is strictly necessary to evaluate financial planning needs, provide insurance quote estimates, deliver Financial Needs Analyses (FNA), or respond to your direct inquiries:</p>
              <ul>
                <li><strong>Contact Information:</strong> Full name, email address, phone number, and mailing/residential address.</li>
                <li><strong>Demographic Information:</strong> State/jurisdiction of residence, age/date of birth (as required for insurance underwriting eligibility).</li>
                <li><strong>Financial & Risk Planning Context:</strong> Income ranges, family coverage goals, vehicle details (for auto insurance), or property specifications provided voluntarily in consultation requests.</li>
                <li><strong>Technical Usage Data:</strong> Anonymized browser type, operating system, and standard website interaction metrics to optimize performance.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>2. How We Use Your Information</h2>
              <p>Your data is processed strictly for legitimate financial service and advisory purposes:</p>
              <ul>
                <li>Conducting personalized, confidential Financial Needs Analyses and wealth protection reviews.</li>
                <li>Obtaining non-binding insurance quotes and illustrative scenarios from licensed carrier partners.</li>
                <li>Communicating with you regarding your requested consultation, appointments, and inquiries.</li>
                <li>Maintaining compliance with state insurance regulatory recordkeeping mandates.</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h2>3. Non-Disclosure & Third-Party Sharing</h2>
              <p>
                <strong>We do not sell, rent, or trade your personal data to any third-party marketers.</strong> Information is only shared with authorized insurance carriers or underwriters with your explicit consent for the purpose of executing policy applications or processing formal quotations.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Data Security & Storage</h2>
              <p>
                All submitted consultation data is transmitted using 256-bit SSL/TLS encryption. Access to client records is strictly restricted to licensed advisors and authorized compliance personnel who are bound by confidentiality agreements.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Your Privacy Rights & Communications Consent</h2>
              <p>
                You have the right to request access to the information we hold about you, request corrections, or request deletion where permitted by legal recordkeeping standards. By providing your phone number and email, you consent to receive direct communications regarding your consultation request. You may opt out of non-essential communications at any time.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Contact Our Privacy Officer</h2>
              <p>If you have any questions or concerns regarding this Privacy Policy, please contact us directly:</p>
              <div className="contact-info-box">
                <p><strong>NOVA Finance by Tainaliel</strong></p>
                <p>Glen Burnie, Maryland, USA</p>
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

        .legal-section-block ul {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 14px;
        }

        .legal-section-block li {
          font-size: 0.98rem;
          line-height: 1.6;
          color: #4a5568;
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
