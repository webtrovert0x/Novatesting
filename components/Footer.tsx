'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronUp, Phone, Mail } from 'lucide-react';

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
          {/* Main Sleek Footer Row */}
          <div className="footer-main-row">
            {/* Brand Column */}
            <div className="footer-brand-block">
              <Link href="/" className="footer-logo-link">
                <Image
                  src="/images/Nova-Finance-Logo2-e1764265994550.png"
                  alt="Nova Finance by Tainaliel"
                  width={180}
                  height={55}
                  className="footer-logo"
                />
              </Link>
              <p className="footer-tagline">
                Strategic financial planning &amp; asset protection tailored for your life and business.
              </p>
            </div>

            {/* Clean Horizontal Navigation */}
            <div className="footer-nav-block">
              <span className="footer-nav-title">Quick Navigation</span>
              <ul className="footer-nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-company">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/our-process">Our Process</Link></li>
                <li><Link href="/contact-us">Contact</Link></li>
                <li><Link href="/book-a-consultation" className="highlight-link">Book a Call</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact-block">
              <span className="footer-nav-title">Connect</span>
              <div className="contact-items">
                <a href="tel:+14437136416" className="c-link">
                  <Phone size={14} />
                  <span>+1 (443) 713-6416</span>
                </a>
                <a href="mailto:consult@tainaliel.com" className="c-link">
                  <Mail size={14} />
                  <span>consult@tainaliel.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Minimal Bottom Bar */}
          <div className="footer-bottom">
            <p className="copyright-text">
              &copy; 2026 Nova Finance by Tainaliel LLC. All Rights Reserved.
            </p>
            <div className="legal-links">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-and-conditions">Terms of Use</Link>
              <span>•</span>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-cookie-preferences'));
                  }
                }}
                className="cookie-btn"
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
          <ChevronUp size={20} />
        </button>
      )}

      <style jsx>{`
        .site-footer {
          background-color: #00003c;
          color: #94a3b8;
          padding: 48px 0 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-main-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-brand-block {
          max-width: 320px;
        }

        .footer-logo-link {
          display: inline-block;
          margin-bottom: 12px;
        }

        .footer-logo {
          width: 170px;
          height: auto;
          object-fit: contain;
        }

        .footer-tagline {
          font-size: 0.88rem;
          line-height: 1.55;
          color: #cbd5e1;
          margin: 0;
        }

        .footer-nav-block,
        .footer-contact-block {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-nav-title {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #00c2cb;
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 16px 24px;
          max-width: 320px;
        }

        .footer-nav-list li a {
          color: #cbd5e1;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
          text-decoration: none;
        }

        .footer-nav-list li a:hover {
          color: #ffffff;
        }

        .footer-nav-list li a.highlight-link {
          color: #00c2cb;
          font-weight: 700;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.88rem;
        }

        .c-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #cbd5e1;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .c-link:hover {
          color: #ffffff;
        }

        .footer-bottom {
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-size: 0.82rem;
          color: #64748b;
        }

        .copyright-text {
          margin: 0;
          color: #94a3b8;
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legal-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-links a:hover {
          color: #ffffff;
        }

        .cookie-btn {
          background: none;
          border: none;
          padding: 0;
          color: #94a3b8;
          font-size: 0.82rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .cookie-btn:hover {
          color: #ffffff;
        }

        .back-to-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #003399;
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, background-color 0.2s ease;
          z-index: 99;
        }

        .back-to-top-btn:hover {
          background-color: #00c2cb;
          color: #000050;
          transform: translateY(-3px);
        }

        @media (max-width: 860px) {
          .footer-main-row {
            flex-direction: column;
            gap: 28px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </>
  );
}
