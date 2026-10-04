'use client';

import React from 'react';

import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-inner text-center">
          <h2 className="cta-heading">
            Curious where your financial blind spots are? <br className="hidden-mobile" />
            Let&apos;s have a conversation.
          </h2>

          <p className="cta-subheading">
            No sales pitches, no get-rich hype. Just an objective, confidential discovery session tailored to your life.
          </p>

          {/* Oval Capsule with Contact Info */}
          <div className="contact-capsule">
            <a href="mailto:consult@tainaliel.com" className="capsule-block">
              <span className="capsule-tag">Email our advisory team</span>
              <strong className="capsule-value">consult@tainaliel.com</strong>
            </a>

            <div className="capsule-divider" />

            <a href="tel:+14437136416" className="capsule-block">
              <span className="capsule-tag">Call our New York office</span>
              <strong className="capsule-value">+1 (443) 713-6416</strong>
            </a>
          </div>

          {/* Book a Consultation Button */}
          <div className="cta-btn-wrap">
            <Link
              href="/book-a-consultation"
              className="btn-blue-solid cta-consult-btn"
            >
              Schedule a Discovery Call
            </Link>
          </div>

          {/* Dark Mouse Scroll Indicator */}
          <div className="mouse-scroll-indicator">
            <div className="mouse-icon-frame">
              <div className="mouse-wheel" />
            </div>
            <div className="mouse-arrow-down" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 95px 0 50px;
          background-color: #ffffff;
        }

        .cta-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cta-heading {
          font-size: 3.1rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.2;
          margin-bottom: 18px;
          letter-spacing: -0.5px;
        }

        .cta-subheading {
          font-size: 1.12rem;
          color: #4a5568;
          margin-bottom: 45px;
        }

        .contact-capsule {
          display: inline-flex;
          align-items: center;
          border: 2px solid #003399;
          border-radius: var(--radius-full);
          padding: 18px 48px;
          gap: 40px;
          background-color: #ffffff;
          margin-bottom: 36px;
          max-width: 100%;
        }

        .capsule-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: inherit;
          transition: var(--transition);
        }

        .capsule-tag {
          font-size: 0.92rem;
          font-weight: 600;
          color: #003399;
          margin-bottom: 4px;
        }

        .capsule-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0a1128;
        }

        .capsule-divider {
          width: 1.5px;
          height: 48px;
          background-color: #cbd5e1;
        }

        .cta-btn-wrap {
          margin-bottom: 25px;
        }

        .cta-consult-btn {
          font-size: 1.05rem;
          padding: 14px 38px;
          border-radius: 8px;
        }

        @media (max-width: 991px) {
          .cta-heading {
            font-size: 2.3rem;
          }
          .contact-capsule {
            padding: 16px 32px;
            gap: 24px;
          }
          .capsule-value {
            font-size: 1.05rem;
          }
        }

        @media (max-width: 650px) {
          .contact-capsule {
            flex-direction: column;
            border-radius: 20px;
            padding: 24px;
            gap: 18px;
            width: 100%;
          }
          .capsule-divider {
            width: 80%;
            height: 1px;
          }
          .hidden-mobile {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
