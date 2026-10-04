'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          {/* 4-Column Footer Grid */}
          <div className="footer-columns">
            {/* Column 1: Brand & Licensing */}
            <div className="footer-col brand-column">
              <Link href="/" className="footer-brand">
                <Image
                  src="/images/Nova-Finance-Logo2-e1764265994550.png"
                  alt="Nova Finance by Tainaliel"
                  width={210}
                  height={75}
                  className="footer-logo-img"
                />
              </Link>
              <p className="footer-about-text">
                At NOVA Finance by Tainaliel, we provide transparent, zero-cost Financial Needs Analyses, comprehensive life &amp; P&amp;C insurance brokerage, and tax-advantaged retirement strategies.
              </p>
              <div className="footer-quick-badge">
                <span>MD Producer License #W950893</span>
              </div>
            </div>

            {/* Column 2: Practice Areas & Services */}
            <div className="footer-col">
              <h3 className="footer-col-title">Practice Areas</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/financial-needs-analysis" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Financial Needs Analysis (FNA)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/term-life-insurance" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Life Insurance Solutions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/automobile-insurance" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Auto Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link href="/health-insurance" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Health Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link href="/property-insurance" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Property &amp; Casualty</span>
                  </Link>
                </li>
                <li>
                  <Link href="/tax-free-investment" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Tax-Advantaged Investments</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Audience & Resources */}
            <div className="footer-col">
              <h3 className="footer-col-title">Who We Help &amp; Learn</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/start-here" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Start Here (Free Snapshot)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Who We Help (Client Paths)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Guides, Calculators &amp; Glossary</span>
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Client Case Studies</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Educational Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-process" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>How the Process Works</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: About & Connect */}
            <div className="footer-col">
              <h3 className="footer-col-title">Company &amp; Connect</h3>
              <ul className="footer-links-list">
                <li>
                  <Link href="/about-company" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>About Founder &amp; Licensing</span>
                  </Link>
                </li>
                <li>
                  <Link href="/book-a-consultation" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Book a Consultation</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="footer-nav-link">
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Contact Our Office</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/nova-finance-by-tainaliel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    <ChevronUp size={14} className="link-chevron" />
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/novafinance_tainaliel"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="footer-nav-link"
                  >
                    <ChevronUp size={14} className="link-chevron" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/14437136416"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-nav-link"
                  >
                    <ChevronUp size={14} className="link-chevron" />
                    <span>WhatsApp Advisory</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Regulatory & Jurisdiction Footer Notice */}
          <div className="footer-compliance-notice">
            <p>
              <strong>Regulatory &amp; Jurisdictional Notice:</strong> NOVA Finance by Tainaliel LLC is a U.S. independent insurance agency and financial education firm headquartered at 255 Oakview Village Dr, Glen Burnie, MD 21061. Insurance policies (Life, Auto, Health, Property &amp; Casualty) are brokered through licensed insurance producers appointed in Maryland and authorized U.S. jurisdictions. Financial Needs Analyses and wealth models are educational. Investment assets are held directly by third-party registered custodians and broker-dealers.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom-bar">
            <div className="copyright-info">
              &copy; 2026{' '}
              <Link href="/" className="white-link">
                NovaFinance by Tainaliel LLC
              </Link>{' '}
              All Rights Reserved.
            </div>

            <div className="legal-links-row">
              <Link href="/privacy-policy" className="legal-link">
                Privacy Policy
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/terms-and-conditions" className="legal-link">
                Terms of Use
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/disclosures" className="legal-link">
                Disclosures
              </Link>
              <span className="legal-separator">•</span>
              <Link href="/accessibility" className="legal-link">
                Accessibility
              </Link>
              <span className="legal-separator">•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
                  }
                }}
                className="legal-btn-link"
              >
                Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      {showScrollTop && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <style jsx>{`
        .site-footer {
          background-color: #000050;
          color: #cbd5e1;
          padding: 85px 0 35px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.2fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .brand-column {
          padding-right: 15px;
        }

        .footer-brand {
          display: inline-block;
          margin-bottom: 24px;
        }

        .footer-logo-img {
          width: 200px;
          height: auto;
          object-fit: contain;
        }

        .footer-about-text {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #cbd5e1 !important;
        }

        .footer-col-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 24px;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .footer-nav-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.98rem;
          color: #cbd5e1 !important;
          transition: var(--transition);
        }

        .footer-nav-link span {
          color: #cbd5e1 !important;
          transition: color 0.2s ease;
        }

        .link-chevron {
          color: #cbd5e1 !important;
          flex-shrink: 0;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .footer-nav-link:hover {
          color: #ffffff !important;
          transform: translateX(4px);
        }

        .footer-nav-link:hover span {
          color: #ffffff !important;
        }

        .footer-nav-link:hover .link-chevron {
          color: #ffffff !important;
        }

        .footer-compliance-notice {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 28px;
          margin-bottom: 28px;
          font-size: 0.82rem;
          line-height: 1.65;
          color: #94a3b8;
        }

        .footer-compliance-notice strong {
          color: #cbd5e1;
        }

        .footer-bottom-bar {
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
          font-size: 0.9rem;
          color: #A4B3AF;
        }

        .white-link {
          color: #ffffff;
          font-weight: 600;
        }

        .white-link:hover {
          color: #00c2cb;
        }

        .footer-quick-badge {
          display: inline-block;
          margin-top: 14px;
          background-color: rgba(0, 194, 203, 0.12);
          border: 1px solid rgba(0, 194, 203, 0.3);
          color: #00c2cb;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .legal-links-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .legal-link {
          color: #cbd5e1;
          transition: var(--transition);
          text-decoration: none;
        }

        .legal-link:hover {
          color: #ffffff;
        }

        .legal-btn-link {
          background: none;
          border: none;
          padding: 0;
          color: #cbd5e1;
          font-size: 0.9rem;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
        }

        .legal-btn-link:hover {
          color: #ffffff;
        }

        .legal-separator {
          color: #64748b;
        }

        @media (max-width: 991px) {
          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 600px) {
          .footer-columns {
            grid-template-columns: 1fr;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}
