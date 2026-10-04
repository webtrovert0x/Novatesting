'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <>
      <section className="hero-banner">
        {/* Background Image */}
        <div className="hero-bg-container">
          <Image
            src="/images/banner-4-1.jpg"
            alt="Nova Finance - Grow Your Wealth With Smart Investments"
            fill
            priority
            className="hero-bg-img"
            sizes="100vw"
          />
          <div className="hero-dark-overlay" />
        </div>

        <div className="container hero-content-container">
          <div className="hero-inner-box">
            <div className="hero-eyebrow-tag">
              <ShieldCheck size={16} />
              <span>LICENSED FINANCIAL ADVISORY &amp; PROTECTION</span>
            </div>

            <h1 className="hero-main-title">
              Build a Financial Plan That Protects Your Family &amp; Grows With Your Goals
            </h1>

            <p className="hero-subtext">
              Nova Finance helps working families, professionals, and diaspora entrepreneurs in Maryland and authorized U.S. jurisdictions evaluate life insurance, savings, and long-term investment options through a clear, licensed, one-on-one process.
            </p>

            <div className="hero-actions">
              <Link
                href="/financial-needs-analysis"
                className="btn-primary-hero"
              >
                <span>Get My Free Financial Snapshot</span>
                <CheckCircle2 size={18} />
              </Link>

              <Link
                href="/our-process"
                className="btn-secondary-hero"
              >
                <span>See How the Process Works</span>
              </Link>
            </div>

            <p className="hero-disclaimer-footnote">
              *Licensed in the State of Maryland and authorized U.S. jurisdictions. Product availability, carrier appointments, and eligibility vary by state.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Strip directly below Hero */}
      <section className="trust-strip-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Licensed in MD &amp; U.S. Jurisdictions</span>
            </div>
            <div className="trust-item">
              <Award size={18} className="trust-icon" />
              <span>100% Free &amp; Confidential FNA Snapshot</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>Independent Multi-Carrier Brokerage</span>
            </div>
            <div className="trust-item">
              <Clock size={18} className="trust-icon" />
              <span>Guaranteed Response Within 1 Business Day</span>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-banner {
          position: relative;
          min-height: 82vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background-color: #000000;
          padding: 120px 0 110px;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        :global(.hero-bg-img) {
          object-fit: cover;
          object-position: center;
        }

        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.65);
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
        }

        .hero-inner-box {
          max-width: 880px;
          text-align: left;
        }

        .hero-eyebrow-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(0, 194, 203, 0.15);
          border: 1px solid #00c2cb;
          color: #00c2cb;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .hero-main-title {
          font-size: 3.25rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #ffffff;
          margin-bottom: 20px;
        }

        .hero-subtext {
          font-size: 1.15rem;
          line-height: 1.7;
          color: #f1f5f9;
          margin-bottom: 32px;
          max-width: 820px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .btn-primary-hero {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px;
          background-color: #003399 !important;
          color: #ffffff !important;
          font-size: 1.02rem !important;
          font-weight: 700 !important;
          padding: 14px 28px !important;
          border-radius: 10px !important;
          border: 2px solid #ffffff !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
          text-decoration: none !important;
          cursor: pointer !important;
          box-shadow: 0 8px 24px rgba(0, 51, 153, 0.35);
        }

        .btn-primary-hero:hover {
          background-color: #00c2cb !important;
          color: #000050 !important;
          border-color: #00c2cb !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 28px rgba(0, 194, 203, 0.45) !important;
        }

        .btn-secondary-hero {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          font-size: 1.02rem !important;
          font-weight: 600 !important;
          padding: 14px 28px !important;
          border-radius: 10px !important;
          border: 2px solid #ffffff !important;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
          text-decoration: none !important;
          cursor: pointer !important;
          backdrop-filter: blur(4px);
        }

        .btn-secondary-hero:hover {
          background-color: #ffffff !important;
          border-color: #ffffff !important;
          color: #000050 !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 28px rgba(255, 255, 255, 0.3) !important;
        }

        .hero-disclaimer-footnote {
          font-size: 0.82rem;
          color: #cbd5e1;
          font-style: italic;
          margin: 0;
          opacity: 0.9;
        }

        /* Trust Strip */
        .trust-strip-section {
          background-color: #000050;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 20px 0;
          color: #ffffff;
        }

        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          align-items: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .trust-icon {
          color: #00c2cb;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 991px) {
          .hero-banner {
            min-height: auto;
            padding: 80px 0 80px;
          }
          .hero-main-title {
            font-size: 2.6rem;
          }
          .hero-subtext {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 640px) {
          .hero-main-title {
            font-size: 2.1rem;
          }
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }
          .btn-primary-hero {
            justify-content: center;
          }
          .trust-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
      `}</style>
    </>
  );
}
