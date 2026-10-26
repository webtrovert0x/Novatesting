'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Clock, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import TopographyField from './TopographyField';

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Pointer parallax: writes two CSS variables, the stylesheet does the moving
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width - 0.5;
      ty = (e.clientY - r.top) / r.height - 0.5;
    };
    const tick = () => {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.setProperty('--px', cx.toFixed(4));
      el.style.setProperty('--py', cy.toFixed(4));
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <section className="hero-banner" ref={sectionRef}>
        {/* Background image: slow push-in, pointer parallax, drifting light and live terrain lines */}
        <div className="hero-bg-container">
          <div className="hero-parallax">
            <div className="hero-kenburns">
              <Image
                src="/images/nova-hero-skyline.jpg"
                alt="Nova Finance One World Trade Center New York"
                fill
                priority
                className="hero-bg-img"
                sizes="100vw"
              />
            </div>
          </div>
          <div className="hero-dark-overlay" />
          <div className="hero-haze hero-haze-warm" />
          <div className="hero-haze hero-haze-cool" />
          <div className="hero-topo">
            <TopographyField opacity={0.6} levels={16} cell={15} />
          </div>
        </div>

        <div className="container hero-content-container">
          <div className="hero-inner-box">
            <div className="hero-eyebrow-tag">
              <ShieldCheck size={16} className="eyebrow-icon" />
              <span>CURIOSITY &amp; STRATEGIC CLARITY</span>
            </div>

            <h1 className="hero-main-title">
              What is your financial strategy overlooking?
            </h1>

            <p className="hero-subtext">
              Finance isn&apos;t about chasing hype or unrealistic promises. We help you ask the right questions, uncover hidden blind spots, and design clear safeguards for your life and business.
            </p>

            <div className="hero-actions">
              <Link
                href="/book-a-consultation"
                className="btn-pill-primary"
              >
                <span>Explore Your Blind Spots</span>
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/our-process"
                className="btn-pill-secondary"
              >
                <span>How We Uncover Answers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Strip directly below Hero */}
      <section className="trust-strip-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <CheckCircle2 size={18} className="trust-icon" />
              <span>Questions Over Sales Pitches</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={18} className="trust-icon" />
              <span>No Hype or Inflated Promises</span>
            </div>
            <div className="trust-item">
              <Award size={18} className="trust-icon" />
              <span>Objective Scenario Testing</span>
            </div>
            <div className="trust-item">
              <Clock size={18} className="trust-icon" />
              <span>Clarity for Real Life</span>
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
          background-color: #000022;
          padding: 120px 0 105px;
          color: #ffffff;
        }

        .hero-bg-container {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        :global(.hero-bg-img) {
          object-fit: cover;
          object-position: center 30%;
        }

        /* Pointer parallax on an outer layer, push-in on an inner one, so the two never fight */
        .hero-parallax {
          position: absolute;
          inset: -4%;
          transform: translate3d(calc(var(--px, 0) * -26px), calc(var(--py, 0) * -16px), 0);
          will-change: transform;
        }

        .hero-kenburns {
          position: absolute;
          inset: 0;
          animation: heroPushIn 32s ease-in-out infinite alternate;
          will-change: transform;
        }

        @keyframes heroPushIn {
          from {
            transform: scale(1) translate3d(0, 0, 0);
          }
          to {
            transform: scale(1.12) translate3d(-1.6%, -1%, 0);
          }
        }

        /* Light drifting across the skyline: warm from the sunset side, cool from the river */
        .hero-haze {
          position: absolute;
          width: 70%;
          height: 90%;
          border-radius: 50%;
          filter: blur(60px);
          mix-blend-mode: screen;
          pointer-events: none;
          will-change: transform, opacity;
        }

        .hero-haze-warm {
          right: -15%;
          bottom: -25%;
          background: radial-gradient(closest-side, rgba(255, 150, 90, 0.34), rgba(255, 150, 90, 0));
          animation: hazeWarm 18s ease-in-out infinite alternate;
        }

        .hero-haze-cool {
          left: 10%;
          top: -30%;
          background: radial-gradient(closest-side, rgba(0, 194, 203, 0.22), rgba(0, 194, 203, 0));
          animation: hazeCool 24s ease-in-out infinite alternate;
        }

        @keyframes hazeWarm {
          from {
            transform: translate3d(0, 0, 0);
            opacity: 0.55;
          }
          to {
            transform: translate3d(-14%, -8%, 0);
            opacity: 1;
          }
        }

        @keyframes hazeCool {
          from {
            transform: translate3d(0, 0, 0);
            opacity: 0.5;
          }
          to {
            transform: translate3d(16%, 10%, 0);
            opacity: 0.95;
          }
        }

        /* Terrain lines: soft on the text side, stronger toward the skyline */
        .hero-topo {
          position: absolute;
          inset: 0;
          -webkit-mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.55) 45%, #000 100%);
          mask-image: linear-gradient(90deg, rgba(0, 0, 0, 0.18) 0%, rgba(0, 0, 0, 0.55) 45%, #000 100%);
          pointer-events: none;
        }

        /* Staggered entrance for the copy */
        .hero-inner-box > :global(*),
        .hero-inner-box > .hero-actions {
          opacity: 0;
          animation: heroRise 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hero-inner-box > :nth-child(1) { animation-delay: 80ms; }
        .hero-inner-box > :nth-child(2) { animation-delay: 160ms; }
        .hero-inner-box > :nth-child(3) { animation-delay: 240ms; }
        .hero-inner-box > :nth-child(4) { animation-delay: 320ms; }

        @keyframes heroRise {
          from {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns,
          .hero-haze {
            animation: none;
          }
          .hero-parallax {
            transform: none;
          }
          .hero-inner-box > :global(*) {
            opacity: 1;
            animation: none;
          }
        }

        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(3, 10, 24, 0.88) 0%,
            rgba(3, 10, 24, 0.72) 60%,
            rgba(3, 10, 24, 0.55) 100%
          );
        }

        .hero-content-container {
          position: relative;
          z-index: 2;
        }

        .hero-inner-box {
          max-width: 860px;
          text-align: left;
        }

        .hero-eyebrow-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(0, 194, 203, 0.16);
          border: 1px solid rgba(0, 194, 203, 0.45);
          color: #00c2cb;
          padding: 7px 16px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 22px;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }

        :global(.eyebrow-icon) {
          color: #00c2cb;
        }

        .hero-main-title {
          font-size: 3.35rem;
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.5px;
          color: #ffffff;
          margin-bottom: 22px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        .hero-subtext {
          font-size: 1.15rem;
          line-height: 1.75;
          color: #f1f5f9;
          margin-bottom: 36px;
          max-width: 760px;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .btn-hero-primary {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 10px;
          background-color: #00c2cb !important;
          color: #000050 !important;
          font-size: 1.02rem !important;
          font-weight: 800 !important;
          padding: 15px 32px !important;
          border-radius: 9999px !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
          box-shadow: 0 6px 22px rgba(0, 194, 203, 0.45) !important;
          cursor: pointer !important;
          border: none !important;
        }

        .btn-hero-primary:hover {
          background-color: #ffffff !important;
          color: #000050 !important;
          transform: translateY(-3px) !important;
          box-shadow: 0 10px 28px rgba(255, 255, 255, 0.35) !important;
        }

        .btn-hero-secondary {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px;
          background-color: rgba(255, 255, 255, 0.12) !important;
          color: #ffffff !important;
          font-size: 1.02rem !important;
          font-weight: 600 !important;
          padding: 15px 30px !important;
          border-radius: 9999px !important;
          border: 1.5px solid rgba(255, 255, 255, 0.45) !important;
          text-decoration: none !important;
          transition: all 0.25s ease !important;
          cursor: pointer !important;
          backdrop-filter: blur(6px);
        }

        .btn-hero-secondary:hover {
          background-color: rgba(255, 255, 255, 0.25) !important;
          border-color: #ffffff !important;
          color: #ffffff !important;
          transform: translateY(-3px) !important;
        }

        /* Trust Strip */
        .trust-strip-section {
          background-color: #00003c;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 22px 0;
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
          font-size: 0.9rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        :global(.trust-icon) {
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
            padding: 85px 0 75px;
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
          .btn-hero-primary,
          .btn-hero-secondary {
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
