'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Strategic Wealth Planning',
      desc: 'Clarify your path forward with structured roadmaps designed around cash flow, tax efficiencies, and long-term milestones.',
      icon: '/images/icons8-investment-50.png',
      link: '/services',
    },
    {
      title: 'Family & Asset Protection',
      desc: 'Evaluate whether your household coverage matches real-world liabilities, income replacement needs, and lifestyle protection.',
      icon: '/images/icons8-family-50.png',
      link: '/services',
    },
    {
      title: 'Business & Executive Solutions',
      desc: 'Stress-test key continuity safeguards, commercial liabilities, and executive risk management for your venture.',
      icon: '/images/icons8-chart-50.png',
      link: '/services',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="services-header text-center">
          <span className="section-eyebrow">AREAS OF ADVISORY</span>
          <h2 className="services-title">Consultative Roadmaps for Life &amp; Business</h2>
          <p className="services-subtitle">
            We don&apos;t push standardized packages. We explore your unique financial landscape, evaluate risk exposures, and design tailored frameworks that make sense for you.
          </p>
        </div>

        {/* 3 Blue-Bordered Service Cards */}
        <div className="services-grid">
          {services.map((item, idx) => (
            <div key={idx} className="offer-card">
              <div className="offer-icon-wrap">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={52}
                  height={52}
                  className="offer-icon-img"
                />
              </div>

              <h3 className="offer-title">{item.title}</h3>

              <p className="offer-desc">{item.desc}</p>

              <div className="offer-btn-wrap">
                <Link
                  href={item.link}
                  className="offer-pill-btn"
                >
                  <span>Learn How It Works</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Center See All Our Services Button */}
        <div className="see-all-wrap text-center">
          <Link href="/services" className="btn-pill-blue">
            <span>Explore All Practice Areas &amp; Options</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 85px 0 95px;
          background-color: #f7f9fc;
        }

        .services-header {
          text-align: center;
          margin-bottom: 55px;
          max-width: 750px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-eyebrow {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #003399;
          margin-bottom: 12px;
        }

        .services-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #0a1128;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .services-subtitle {
          font-size: 1.05rem;
          color: #64748b;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-bottom: 50px;
        }

        .offer-card {
          background-color: #ffffff;
          border: 2px solid #003399;
          border-radius: 20px;
          padding: 44px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .offer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(0, 51, 153, 0.12);
        }

        .offer-icon-wrap {
          margin-bottom: 24px;
          color: #003399;
        }

        .offer-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #0a1128;
          line-height: 1.3;
          margin-bottom: 18px;
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .offer-desc {
          font-size: 0.98rem;
          line-height: 1.65;
          color: #4a5568;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .offer-btn-wrap {
          margin-top: auto;
        }

        .offer-pill-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #003399;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: var(--radius-full);
          transition: var(--transition);
        }

        .offer-pill-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }

        .see-all-wrap {
          text-align: center;
        }

        .see-all-btn {
          padding: 14px 36px;
          font-size: 1rem;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          background-color: #003399;
          color: #ffffff;
          font-weight: 700;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .see-all-btn:hover {
          background-color: #002277;
          transform: translateY(-2px);
        }

        @media (max-width: 991px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .services-title {
            font-size: 2.2rem;
          }
          .offer-title {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}
