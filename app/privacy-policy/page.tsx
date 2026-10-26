'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, Lock, FileText, CheckCircle2, UserCheck, AlertCircle } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="page-wrapper">
      <Header />

      <section className="legal-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="legal-tag">LEGAL &amp; PRIVACY COMPLIANCE</span>
            <h1 className="legal-title">Personal Information &amp; Privacy Policy</h1>
            <p className="legal-subtitle">
              Last Updated: October 2026 | Nova Finance by Tainaliel LLC
            </p>
          </div>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container max-w-legal">
          <div className="legal-card">
            {/* Lead Trust Badge */}
            <div className="legal-intro">
              <div className="intro-icon-box">
                <ShieldCheck size={36} color="#003399" />
              </div>
              <div>
                <strong>Our Commitment to Your Privacy:</strong>
                <p>
                  At <strong>NOVA Finance by Tainaliel LLC</strong>, headquartered at One World Trade Center, New York, NY, protecting your personal and non-public financial information (NPI) is fundamental to our fiduciary relationship. We strictly adhere to U.S. federal privacy standards (Gramm-Leach-Bliley Act), state privacy acts (CCPA/CPRA, NY SHIELD Act), and industry best practices.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <div className="legal-section-block">
              <h2>1. Categories of Personal Information We Collect</h2>
              <p>
                We only collect personal information that is reasonably necessary to provide tailored financial consulting, conduct Financial Needs Analyses (FNA), prepare insurance quote illustrations, and facilitate direct client consultations:
              </p>
              <ul>
                <li>
                  <strong>Personal Identifiers:</strong> Full legal name, email address, telephone number, residential address, state of residence, and preferred contact channels.
                </li>
                <li>
                  <strong>Financial &amp; Risk Planning Context:</strong> Voluntary information regarding household cash flow ranges, savings goals, debt elimination priorities, vehicle details (for auto insurance), or property type (for homeowners/commercial coverage).
                </li>
                <li>
                  <strong>Underwriting Eligibility Details (Voluntary):</strong> Age brackets, tobacco usage, and family protection requirements necessary to illustrate non-binding policy estimates with carrier partners.
                </li>
                <li>
                  <strong>Technical &amp; Device Information:</strong> Internet Protocol (IP) address, browser type, operating system, and anonymized interaction timestamps used solely to ensure website security and calculator accuracy.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="legal-section-block">
              <h2>2. How We Use Your Personal Information</h2>
              <p>Your personal information is used exclusively for legitimate advisory, consulting, and administrative purposes:</p>
              <ul>
                <li>Structuring confidential, customized financial and wealth protection roadmaps.</li>
                <li>Preparing comparative, non-binding policy estimates across our independent network of A-rated U.S. carriers.</li>
                <li>Scheduling and hosting one-on-one strategy sessions via telephone or secure video conference.</li>
                <li>Maintaining compliance with state and federal financial recordkeeping regulations.</li>
                <li>Preventing fraudulent submissions and maintaining site integrity.</li>
              </ul>
            </div>

            {/* Section 3 - Highlighted Non-Sale Clause */}
            <div className="legal-section-block highlight-block">
              <div className="highlight-header">
                <UserCheck size={24} color="#003399" />
                <h3>3. Strict Non-Sale &amp; Non-Sharing Guarantee</h3>
              </div>
              <p>
                <strong>NOVA Finance by Tainaliel does not sell, rent, monetize, or lease your personal information to any third-party data brokers, marketing agencies, or unaffiliated commercial entities.</strong>
              </p>
              <p>
                Information is only disclosed to authorized insurance underwriters or registered custodians with your explicit request and affirmative consent, strictly for the purpose of executing requested policy applications or setting up designated accounts.
              </p>
            </div>

            {/* Section 4 */}
            <div className="legal-section-block">
              <h2>4. Information Security &amp; Data Encryption</h2>
              <p>
                We implement robust administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, destruction, loss, alteration, or disclosure:
              </p>
              <ul>
                <li><strong>Encryption in Transit:</strong> All web traffic and form submissions are secured with 256-bit SSL/TLS cryptographic encryption.</li>
                <li><strong>Access Controls:</strong> Access to client consultation records is strictly restricted to licensed advisors and compliance personnel on a need-to-know basis.</li>
                <li><strong>Secure Storage:</strong> Information is stored on SOC-2 compliant, enterprise-grade cloud servers with multi-factor authentication and continuous security monitoring.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="legal-section-block">
              <h2>5. Your Consumer Privacy Rights</h2>
              <p>
                Depending on your state of residence (including California, New York, Virginia, and reciprocal jurisdictions), you have specific statutory rights regarding your personal information:
              </p>
              <ul>
                <li><strong>Right to Know / Access:</strong> You may request a summary of the personal information we have collected and processed about you.</li>
                <li><strong>Right to Rectification:</strong> You have the right to request correction of any inaccurate or incomplete personal information in our records.</li>
                <li><strong>Right to Deletion:</strong> You may request the deletion of your personal information, subject to mandatory legal, regulatory, and insurance record retention rules.</li>
                <li><strong>Right to Opt-Out:</strong> You may opt out of marketing communications or withdraw consent for advisory follow-ups at any time.</li>
                <li><strong>Non-Discrimination:</strong> We will never discriminate against you, deny services, or alter pricing because you exercised your privacy rights.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="legal-section-block">
              <h2>6. Data Retention &amp; Secure Disposal</h2>
              <p>
                We retain personal information only for as long as reasonably necessary to fulfill the purposes outlined in this policy, satisfy client advisory commitments, and comply with state insurance department statutory retention periods (typically 5 to 7 years for policy records). When data is no longer required, it is permanently deleted using secure electronic sanitization methods.
              </p>
            </div>

            {/* Section 7 */}
            <div className="legal-section-block">
              <h2>7. Cookies &amp; Tracking Technologies</h2>
              <p>
                We use strictly necessary and performance cookies to maintain site functionality and ensure calculator models execute correctly. We do not deploy cross-context behavioral tracking across third-party networks. You can adjust your preferences at any time via the <strong>Cookie Preferences</strong> link in the website footer.
              </p>
            </div>

            {/* Section 8 - Contact */}
            <div className="legal-section-block">
              <h2>8. Exercising Your Rights &amp; Privacy Inquiries</h2>
              <p>
                To exercise any of your privacy rights, submit a data access request, or ask questions regarding this Personal Information &amp; Privacy Policy, please contact our privacy compliance team:
              </p>
              <div className="contact-info-box">
                <p><strong>NOVA Finance by Tainaliel LLC</strong></p>
                <p>Attn: Privacy &amp; Data Protection Office</p>
                <p>📍 One World Trade Center, Suite 8500, New York, NY 10007, USA</p>
                <p>📧 Email: <a href="mailto:consult@tainaliel.com">consult@tainaliel.com</a></p>
                <p>📞 Phone: <a href="tel:+14437136416">+1 (443) 713-6416</a></p>
                <p className="response-time">We respond to verified consumer privacy requests within <strong>15 to 30 business days</strong> in accordance with applicable laws.</p>
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

        .legal-intro strong {
          display: block;
          font-size: 1.05rem;
          margin-bottom: 6px;
          color: #003399;
        }

        .legal-intro p {
          margin: 0;
          font-size: 0.95rem;
        }

        .legal-section-block {
          margin-bottom: 36px;
        }

        .legal-section-block h2 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 14px;
          letter-spacing: -0.3px;
        }

        .legal-section-block p {
          font-size: 0.98rem;
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
          font-size: 0.95rem;
          line-height: 1.6;
          color: #4a5568;
        }

        .legal-section-block li strong {
          color: #0a1128;
        }

        .highlight-block {
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 12px;
          padding: 24px 28px;
        }

        .highlight-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }

        .highlight-header h3 {
          font-size: 1.3rem;
          font-weight: 800;
          color: #166534;
          margin: 0;
        }

        .highlight-block p {
          color: #166534;
          font-size: 0.96rem;
        }

        .contact-info-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 22px 26px;
          margin-top: 14px;
          font-size: 0.96rem;
          color: #1e293b;
          line-height: 1.65;
        }

        .contact-info-box a {
          color: #003399;
          font-weight: 600;
          text-decoration: underline;
        }

        .response-time {
          margin-top: 10px !important;
          font-size: 0.88rem !important;
          color: #64748b !important;
          border-top: 1px solid #e2e8f0;
          padding-top: 10px;
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
