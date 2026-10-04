'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ShieldCheck, Eye, Keyboard, Monitor, Mail, Phone } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">DIGITAL INCLUSION &amp; WCAG STANDARDS</span>
            <h1 className="banner-title">Accessibility Statement</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-body-section">
        <div className="container max-w-legal">
          <div className="legal-content-card">
            <div className="legal-header">
              <span className="last-updated">Last Reviewed: October 2026</span>
              <h2 className="legal-h2">Our Commitment to Digital Accessibility</h2>
              <p className="lead-text">
                NOVA Finance by Tainaliel LLC is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying relevant accessibility standards according to the Web Content Accessibility Guidelines (WCAG 2.1 Level AA).
              </p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-item">
                <Keyboard size={24} className="p-icon" />
                <strong>Keyboard Navigation</strong>
                <p>All core interactive calculators, navigation menus, and consultation forms are fully navigable via standard keyboard controls.</p>
              </div>

              <div className="pillar-item">
                <Eye size={24} className="p-icon" />
                <strong>High Contrast &amp; Legibility</strong>
                <p>We maintain strict color contrast ratios across typography and button states to support low-vision and color-blind visitors.</p>
              </div>

              <div className="pillar-item">
                <Monitor size={24} className="p-icon" />
                <strong>Screen Reader Compatibility</strong>
                <p>Semantic HTML5 elements, descriptive ARIA attributes, and meaningful alternative image tags are implemented across all pages.</p>
              </div>
            </div>

            <div className="legal-section-block">
              <h3>Conformance Status</h3>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. The Nova Finance website is partially conformant with WCAG 2.1 level AA. Partial conformance means that some parts of the content may not yet fully conform to the strictest standard as we continue third-party audits.
              </p>
            </div>

            <div className="legal-section-block">
              <h3>Technical Specifications</h3>
              <p>
                Accessibility of Nova Finance relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul>
                <li>HTML5 &amp; WAI-ARIA</li>
                <li>CSS3 with responsive viewport scaling</li>
                <li>JavaScript (Next.js / React) with accessible event listeners</li>
              </ul>
            </div>

            <div className="legal-section-block">
              <h3>Feedback &amp; Assistance</h3>
              <p>
                We welcome your feedback on the accessibility of the Nova Finance website. If you encounter accessibility barriers on our site or need assistance completing a consultation request:
              </p>
              <div className="contact-mini-card">
                <p><strong>Phone:</strong> <a href="tel:+14437136416">+1 (443) 713-6416</a></p>
                <p><strong>Email:</strong> <a href="mailto:consult@tainaliel.com">consult@tainaliel.com</a></p>
                <p><strong>Address:</strong> One World Trade Center, Suite 8500, New York, NY 10007, USA</p>
                <p>We aim to respond to accessibility inquiries within 1 business day.</p>
              </div>
            </div>
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

        .legal-body-section {
          padding: 80px 0 100px;
          background-color: #f7f9fc;
        }

        .max-w-legal {
          max-width: 880px;
          margin: 0 auto;
        }

        .legal-content-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 30px rgba(0, 51, 153, 0.05);
        }

        .last-updated {
          font-size: 0.82rem;
          font-weight: 700;
          color: #003399;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .legal-h2 {
          font-size: 2.1rem;
          font-weight: 800;
          color: #0a1128;
          margin: 10px 0 18px;
        }

        .lead-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: #4a5568;
          margin-bottom: 35px;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          padding-bottom: 35px;
          border-bottom: 1px solid #e2e8f0;
        }

        .pillar-item {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px 20px;
        }

        .p-icon {
          color: #003399;
          margin-bottom: 12px;
        }

        .pillar-item strong {
          display: block;
          font-size: 1rem;
          color: #0a1128;
          margin-bottom: 8px;
        }

        .pillar-item p {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
        }

        .legal-section-block {
          margin-bottom: 32px;
        }

        .legal-section-block h3 {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 14px;
        }

        .legal-section-block p {
          font-size: 0.98rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 12px;
        }

        .legal-section-block ul {
          padding-left: 20px;
          color: #4a5568;
          font-size: 0.96rem;
          line-height: 1.8;
        }

        .contact-mini-card {
          background-color: #eef2ff;
          border: 1px solid #c7d2fe;
          border-radius: 12px;
          padding: 24px;
          margin-top: 16px;
        }

        .contact-mini-card p {
          margin-bottom: 8px;
          color: #1e3a8a;
        }

        .contact-mini-card a {
          color: #003399;
          font-weight: 700;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .legal-content-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </main>
  );
}
