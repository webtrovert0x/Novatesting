'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Compass, Award, Shield, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AboutCompanyPage() {
  return (
    <main className="page-wrapper">
      <Header />

      {/* Page Title Banner */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content text-center">
            <h1 className="banner-title">About NOVA Finance</h1>
            <div className="breadcrumbs">
              <Link href="/">Home</Link>
              <span className="crumb-sep">&gt;</span>
              <span>About Company</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are & Executive Background */}
      <section className="about-intro-section">
        <div className="container">
          <div className="intro-header text-center">
            <span className="section-eyebrow">OUR HERITAGE & MISSION</span>
            <h2 className="section-title">Who We Are</h2>
            <p className="intro-lead">
              NOVA Finance is the dedicated financial consulting and wealth protection division of <strong>Tainaliel</strong>, founded by <strong>Olamide Abayomi (Tainaliel)</strong>. Headquartered in Glen Burnie, Maryland, we empower working families, entrepreneurs, and diaspora professionals across U.S. jurisdictions with transparent, licensed, and results-driven financial strategies.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon-box">
                <Target size={36} />
              </div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-text">
                To simplify wealth building, demystify life insurance protection, and provide transparent access to personalized financial roadmaps that safeguard families and help capital compound safely across generations.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon-box">
                <Compass size={36} />
              </div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-text">
                To stand as the most trusted, compliant, and impactful financial advisory and protection partner for everyday earners and business owners seeking clarity, dignity, and generational wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Advisory Philosophy */}
      <section className="about-details-section">
        <div className="container">
          <div className="details-grid">
            <div className="details-img-wrap">
              <Image
                src="/images/offer-1-1.jpg"
                alt="Nova Finance Advisory Team and Founder"
                width={520}
                height={450}
                className="details-img"
              />
            </div>
            <div className="details-content">
              <span className="section-eyebrow">LICENSED & INDEPENDENT</span>
              <h2 className="details-heading">
                Clarity, Integrity, and Multi-Carrier Choice
              </h2>
              <p className="details-p">
                We believe that every family deserves fiduciary-minded direction without high-pressure sales tactics. Our licensed advisors evaluate your actual cashflow, debt structure, retirement goals, and family protection needs before designing a tailored roadmap.
              </p>
              <div className="pillars-mini-grid">
                <div className="mini-pillar">
                  <Shield size={20} className="mini-icon" />
                  <span>Licensed in MD &amp; U.S.</span>
                </div>
                <div className="mini-pillar">
                  <Award size={20} className="mini-icon" />
                  <span>Multi-Carrier Choice</span>
                </div>
                <div className="mini-pillar">
                  <Users size={20} className="mini-icon" />
                  <span>Complimentary FNA</span>
                </div>
                <div className="mini-pillar">
                  <TrendingUp size={20} className="mini-icon" />
                  <span>Long-Term Support</span>
                </div>
              </div>
              <div className="details-cta">
                <Link href="/financial-needs-analysis" className="btn-blue-solid">
                  <span>Get Your Free Financial Needs Analysis</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Model & Compliance Overview */}
      <section className="operating-model-section">
        <div className="container">
          <div className="model-header text-center">
            <span className="section-eyebrow">REGULATORY TRANSPARENCY</span>
            <h2 className="section-title">Our Operating Model & Legal Framework</h2>
            <p className="intro-lead">
              Clear structure, authorized licensing, and multi-carrier independence designed to protect your interests.
            </p>
          </div>

          <div className="model-grid">
            <div className="model-card">
              <div className="model-num">01</div>
              <h3 className="model-title">Legal Entity & Jurisdiction</h3>
              <p className="model-text">
                Operated by <strong>NOVA Finance by Tainaliel LLC</strong>, headquartered in Glen Burnie, Maryland. We proudly serve clients across Maryland and authorized U.S. jurisdictions, providing specialized financial strategies for working families and diaspora professionals.
              </p>
            </div>

            <div className="model-card">
              <div className="model-num">02</div>
              <h3 className="model-title">Licensed Multi-Carrier Brokerage</h3>
              <p className="model-text">
                Insurance solutions (Life, Auto, Health, Property & Casualty) are brokered through licensed insurance producers appointed with leading, A-rated U.S. carriers. We represent you—not a single captive insurer.
              </p>
            </div>

            <div className="model-card">
              <div className="model-num">03</div>
              <h3 className="model-title">Educational Wealth Strategy</h3>
              <p className="model-text">
                Our Financial Needs Analysis (FNA) and retirement modeling are educational tools. Product implementations (e.g. Custodial Roth IRAs, Mutual Funds) are executed through registered third-party broker-dealers and custodians.
              </p>
            </div>

            <div className="model-card">
              <div className="model-num">04</div>
              <h3 className="model-title">Transparent Compensation</h3>
              <p className="model-text">
                Your initial consultation and Financial Needs Analysis are 100% complimentary. When insurance policies are placed, our brokerage is compensated directly by carrier commissions at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Advisory Leadership */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-card">
            <div className="founder-img-col">
              <div className="founder-avatar-frame">
                <Image
                  src="/images/offer-1-1.jpg"
                  alt="Olamide Abayomi (Tainaliel) - Founder & Principal"
                  width={400}
                  height={420}
                  className="founder-photo"
                />
              </div>
            </div>
            <div className="founder-info-col">
              <span className="section-eyebrow">LEADERSHIP &amp; FIDUCIARY ETHOS</span>
              <h2 className="founder-name">Olamide Abayomi (Tainaliel)</h2>
              <p className="founder-title">Founder &amp; Managing Principal | Licensed Producer</p>
              
              <div className="founder-bio">
                <p>
                  Olamide Abayomi founded NOVA Finance under <strong>Tainaliel</strong> to bridge the critical gap between complex financial systems and working households. With deep roots in the Maryland community and years of hands-on experience guiding families and diaspora earners, Olamide champions a transparent, education-first advisory model.
                </p>
                <p>
                  As an independent insurance producer licensed in the State of Maryland with reciprocal multi-state authority, Olamide is appointed with premier A-rated insurance carriers across the United States. His advisory practice is founded on three pillars: zero high-pressure sales, complete fiduciary clarity, and generational wealth building through disciplined mathematical modeling.
                </p>
              </div>

              <div className="founder-badges-row">
                <div className="f-badge">
                  <strong>State of Maryland</strong>
                  <span>Resident Producer</span>
                </div>
                <div className="f-badge">
                  <strong>Multi-Carrier</strong>
                  <span>Independent Broker</span>
                </div>
                <div className="f-badge">
                  <strong>Specialization</strong>
                  <span>FNA &amp; Wealth Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anonymized Client Case Studies */}
      <section className="case-studies-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">PROVEN OUTCOMES</span>
            <h2 className="section-title">Real-World Case Studies</h2>
            <p className="intro-lead">
              Anonymized examples of how tailored financial roadmaps protect families and build lasting assets.
            </p>
          </div>

          <div className="case-grid">
            <div className="case-card">
              <div className="case-tag">CASE 01: FAMILY PROTECTION</div>
              <h3 className="case-title">Dual-Income Working Family</h3>
              <div className="case-meta">Location: Silver Spring, MD | Household: 2 Adults, 2 Children</div>
              <div className="case-body">
                <p><strong>Challenge:</strong> $420,000 mortgage with only basic employer-provided group life insurance (1x salary), leaving the family vulnerable to income loss.</p>
                <p><strong>Solution:</strong> Structured individual 30-year Term Life coverage ($750K per parent) and established two Custodial Roth IRAs ($150/mo each) for children&apos;s future compounding.</p>
                <p className="case-result"><strong>Outcome:</strong> 100% mortgage &amp; college replacement secured at $74/month total premium outlay.</p>
              </div>
            </div>

            <div className="case-card">
              <div className="case-tag">CASE 02: DEBT &amp; WEALTH</div>
              <h3 className="case-title">Healthcare Professional</h3>
              <div className="case-meta">Location: Baltimore, MD | Goal: Debt Roll-Up &amp; Roth Strategy</div>
              <div className="case-body">
                <p><strong>Challenge:</strong> $34,000 in high-interest credit card and personal loan debt with zero structured retirement savings outside employer 401(k).</p>
                <p><strong>Solution:</strong> Executed a structured Financial Needs Analysis (FNA) debt acceleration roadmap, reallocating cashflow without increasing monthly spend.</p>
                <p className="case-result"><strong>Outcome:</strong> Debt eliminated in 26 months, saving $8,400 in interest and redirecting $600/mo into tax-advantaged mutual funds.</p>
              </div>
            </div>

            <div className="case-card">
              <div className="case-tag">CASE 03: BUSINESS CONTINUITY</div>
              <h3 className="case-title">Independent Contractor / SME</h3>
              <div className="case-meta">Location: Glen Burnie, MD | Business: Logistics &amp; Transport</div>
              <div className="case-body">
                <p><strong>Challenge:</strong> Disjointed commercial auto and personal health coverage with rising premiums and lack of disability/key-person protection.</p>
                <p><strong>Solution:</strong> Re-shopped commercial property &amp; casualty across independent carrier network and added key-person term coverage.</p>
                <p className="case-result"><strong>Outcome:</strong> Reduced annual insurance overhead by 18% while expanding liability protection limits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable / Viewable Deliverable Preview */}
      <section className="deliverable-section">
        <div className="container">
          <div className="deliverable-card">
            <div className="deliverable-content">
              <span className="section-eyebrow">WHAT YOU RECEIVE</span>
              <h2 className="deliverable-title">Your Complimentary Financial Needs Analysis Deliverable</h2>
              <p className="deliverable-desc">
                When you complete an FNA with NOVA Finance, you receive a comprehensive, personalized 12-page financial blueprint including:
              </p>
              <ul className="deliverable-list">
                <li><CheckCircle2 size={18} className="deliv-check" /> <span><strong>Income Protection Calculator:</strong> Exact survivor income replacement requirements.</span></li>
                <li><CheckCircle2 size={18} className="deliv-check" /> <span><strong>Debt Roll-Up Matrix:</strong> Step-by-step payoff schedule to reach 100% debt freedom early.</span></li>
                <li><CheckCircle2 size={18} className="deliv-check" /> <span><strong>Retirement Readiness Audit:</strong> Projected accumulation gap at age 65 under current savings.</span></li>
                <li><CheckCircle2 size={18} className="deliv-check" /> <span><strong>Multi-Carrier Quote Comparison:</strong> Unbiased side-by-side policy terms from top A-rated insurers.</span></li>
              </ul>
              <div className="deliverable-btn-row">
                <Link href="/financial-needs-analysis" className="btn-blue-solid">
                  <span>Request Your Custom FNA Blueprint</span>
                  <ArrowRight size={18} />
                </Link>
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
          padding: 70px 0;
          text-align: center;
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
          padding: 85px 0 60px;
          background-color: #ffffff;
        }
        .intro-header {
          max-width: 880px;
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
          margin-bottom: 24px;
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
          color: #003399;
          margin-bottom: 20px;
        }
        .mv-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 14px;
        }
        .mv-text {
          font-size: 1.02rem;
          line-height: 1.7;
          color: #4a5568;
        }
        .about-details-section {
          padding: 70px 0 95px;
          background-color: #f7f9fc;
        }
        .details-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 50px;
          align-items: center;
        }
        .details-img-wrap {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .details-img {
          width: 100%;
          height: auto;
          display: block;
        }
        .details-heading {
          font-size: 2.3rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 18px;
          line-height: 1.25;
        }
        .details-p {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 24px;
        }
        .pillars-mini-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }
        .mini-pillar {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #0a1128;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .mini-icon {
          color: #003399;
          flex-shrink: 0;
        }
        .btn-blue-solid {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 700;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        .btn-blue-solid:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }
        .operating-model-section {
          padding: 85px 0 95px;
          background-color: #ffffff;
        }
        .model-header {
          max-width: 800px;
          margin: 0 auto 50px;
        }
        .model-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        .model-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 36px 32px;
          position: relative;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .model-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(0, 51, 153, 0.06);
          border-color: #cbd5e1;
        }
        .model-num {
          font-size: 1.5rem;
          font-weight: 800;
          color: #003399;
          background-color: #e6f0fa;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .model-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 12px;
        }
        .model-text {
          font-size: 0.98rem;
          line-height: 1.7;
          color: #4a5568;
        }
        /* Founder Section */
        .founder-section {
          padding: 80px 0;
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
          font-size: 1rem;
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

        /* Case Studies */
        .case-studies-section {
          padding: 85px 0 95px;
          background-color: #ffffff;
        }
        .section-header {
          max-width: 800px;
          margin: 0 auto 55px;
        }
        .case-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .case-card {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .case-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 51, 153, 0.08);
          border-color: #cbd5e1;
        }
        .case-tag {
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
          margin-bottom: 10px;
        }
        .case-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 6px;
        }
        .case-meta {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        .case-body p {
          font-size: 0.92rem;
          line-height: 1.65;
          color: #4a5568;
          margin-bottom: 10px;
        }
        .case-result {
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 6px;
          padding: 8px 12px;
          color: #166534 !important;
          margin-top: 12px;
        }

        /* Deliverable Section */
        .deliverable-section {
          padding: 0 0 90px;
          background-color: #ffffff;
        }
        .deliverable-card {
          background-color: #000050;
          color: #ffffff;
          border-radius: 20px;
          padding: 55px 60px;
        }
        .deliverable-title {
          font-size: 2.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
        }
        .deliverable-desc {
          font-size: 1.05rem;
          color: #cbd5e1;
          margin-bottom: 28px;
          max-width: 800px;
        }
        .deliverable-list {
          list-style: none;
          padding: 0;
          margin: 0 0 35px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .deliverable-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.96rem;
          color: #f1f5f9;
        }
        .deliv-check {
          color: #00c2cb;
          flex-shrink: 0;
          margin-top: 3px;
        }
        .deliverable-btn-row {
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .mv-grid,
          .details-grid,
          .model-grid,
          .founder-card,
          .case-grid,
          .deliverable-list {
            grid-template-columns: 1fr;
          }
          .deliverable-card {
            padding: 35px 25px;
          }
          .banner-title {
            font-size: 2.4rem;
          }
        }
      `}</style>
    </main>
  );
}
