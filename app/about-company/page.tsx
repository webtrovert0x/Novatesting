'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Compass, Shield, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutCompanyPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="banner-eyebrow">ABOUT NOVA FINANCE</span>
            <h1 className="banner-title">Our Story &amp; Philosophy</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Heritage */}
      <section className="about-intro-section">
        <div className="container">
          <div className="intro-header text-center">
            <span className="section-eyebrow">MISSION &amp; PURPOSE</span>
            <h2 className="section-title">Guiding You Toward Sustainable Financial Clarity</h2>
            <p className="intro-lead">
              NOVA Finance is the dedicated financial consulting and wealth protection division of <strong>Tainaliel</strong>. Headquartered at One World Trade Center, New York, NY, we partner with individuals, families, and entrepreneurs to simplify complex decisions, safeguard assets, and create structured long-term pathways.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-box">
                <Target size={36} color="#003399" />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To eliminate confusion and high-pressure sales from the financial planning process, providing transparent access to customized roadmaps that protect what matters most and build lasting security.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-box">
                <Compass size={36} color="#003399" />
              </div>
              <h3 className="mv-title">Our Philosophy</h3>
              <p className="mv-text">
                Every individual and business has a unique story. We listen first, analyze objective priorities, and collaborate with you on tailored solutions designed for your specific life stage and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Practice Section */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-card">
            <div className="founder-img-col">
              <div className="founder-avatar-frame">
                <Image
                  src="/images/offer-1-1.jpg"
                  alt="Nova Finance Advisory Team"
                  width={420}
                  height={440}
                  className="founder-photo"
                />
              </div>
            </div>
            <div className="founder-info-col">
              <span className="section-eyebrow">OUR ADVISORY PRACTICE</span>
              <h2 className="founder-name">Client-First Wealth Leadership</h2>
              <p className="founder-title">NOVA Finance by Tainaliel Advisory Group</p>
              
              <div className="founder-bio">
                <p>
                  NOVA Finance was established under Tainaliel with a single, clear objective: to make strategic financial planning and asset protection accessible, understandable, and client-centric.
                </p>
                <p>
                  Our advisory team champions a relationship-first model. Rather than promoting one-size-fits-all products, our practice focuses on structured discovery, objective risk management, and long-term partnership with families and emerging business leaders.
                </p>
              </div>

              <div className="founder-badges-row">
                <div className="f-badge">
                  <strong>New York Office</strong>
                  <span>One World Trade Center</span>
                </div>
                <div className="f-badge">
                  <strong>Relationship First</strong>
                  <span>Objective Advisory</span>
                </div>
                <div className="f-badge">
                  <strong>Customized Blueprints</strong>
                  <span>Goal-Aligned Strategies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Pillars of Trust */}
      <section className="values-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">OUR CORE VALUES</span>
            <h2 className="section-title">The Principles That Guide Us</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><Shield size={28} color="#003399" /></div>
              <h3 className="value-title">Integrity &amp; Trust</h3>
              <p className="value-desc">We operate with complete transparency, putting your best interests and long-term peace of mind at the center of every conversation.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Award size={28} color="#003399" /></div>
              <h3 className="value-title">Clarity Over Complexity</h3>
              <p className="value-desc">We demystify financial and protection options, translating complex concepts into straightforward, actionable steps.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Users size={28} color="#003399" /></div>
              <h3 className="value-title">Dedicated Partnership</h3>
              <p className="value-desc">Your financial journey evolves over time. We provide ongoing reviews and continuous guidance as your life and business grow.</p>
            </div>

            <div className="value-card">
              <div className="value-icon"><Target size={28} color="#003399" /></div>
              <h3 className="value-title">Personalized Strategy</h3>
              <p className="value-desc">No generic formulas. Every roadmap is uniquely structured to align with your personal goals and risk profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-banner-box text-center">
            <h2 className="cta-title">Let&apos;s Build Your Financial Roadmap Together</h2>
            <p className="cta-text">
              Book a complimentary consultation with our team to explore your options and gain clear direction.
            </p>
            <div className="cta-btn-wrap">
              <Link href="/book-a-consultation" className="btn-pill-primary">
                <span>Book a Consultation</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .page-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0;
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
          margin-bottom: 12px;
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
        .about-intro-section {
          padding: 85px 0 65px;
          background-color: #ffffff;
        }
        .intro-header {
          max-width: 820px;
          margin: 0 auto 60px;
          text-align: center;
        }
        .section-eyebrow {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #003399;
          margin-bottom: 12px;
        }
        .section-title {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }
        .intro-lead {
          font-size: 1.15rem;
          line-height: 1.8;
          color: #4a5568;
        }
        .mv-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        .mv-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 44px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: transform 0.25s ease;
        }
        .mv-card:hover {
          transform: translateY(-4px);
        }
        .mv-icon-box {
          margin-bottom: 20px;
        }
        .mv-title {
          font-size: 1.55rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 14px;
        }
        .mv-text {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #4a5568;
        }
        .founder-section {
          padding: 75px 0;
          background-color: #f8fafc;
        }
        .founder-card {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 50px;
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 10px 30px rgba(0, 51, 153, 0.05);
          align-items: center;
        }
        .founder-avatar-frame {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        .founder-photo {
          width: 100%;
          height: auto;
          display: block;
        }
        .founder-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 6px;
        }
        .founder-title {
          font-size: 1.05rem;
          font-weight: 600;
          color: #003399;
          margin-bottom: 20px;
        }
        .founder-bio p {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 16px;
        }
        .founder-badges-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 24px;
        }
        .f-badge {
          background-color: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
          padding: 10px 16px;
          display: flex;
          flex-direction: column;
        }
        .f-badge strong {
          font-size: 0.92rem;
          color: #1e3a8a;
        }
        .f-badge span {
          font-size: 0.8rem;
          color: #3b82f6;
        }
        .values-section {
          padding: 85px 0 95px;
          background-color: #ffffff;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .value-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 24px;
          text-align: left;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }
        .value-card:hover {
          transform: translateY(-4px);
          border-color: #003399;
        }
        .value-icon {
          margin-bottom: 16px;
        }
        .value-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 10px;
        }
        .value-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #4a5568;
          margin: 0;
        }
        .about-cta-section {
          padding: 0 0 90px;
          background-color: #ffffff;
        }
        .cta-banner-box {
          background-color: #000050;
          border-radius: 20px;
          padding: 55px 40px;
          color: #ffffff;
        }
        .cta-title {
          font-size: 2.3rem;
          font-weight: 800;
          margin-bottom: 14px;
          color: #ffffff;
        }
        .cta-text {
          font-size: 1.1rem;
          color: #cbd5e1;
          margin-bottom: 30px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }
        .btn-cta-blue {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #00c2cb;
          color: #000050;
          font-size: 1.02rem;
          font-weight: 800;
          padding: 15px 32px;
          border-radius: 10px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .btn-cta-blue:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
        }
        @media (max-width: 991px) {
          .mv-grid,
          .founder-card,
          .values-grid {
            grid-template-columns: 1fr;
          }
          .founder-card {
            padding: 30px 20px;
          }
          .banner-title {
            font-size: 2.4rem;
          }
        }
      `}</style>
    </main>
  );
}
