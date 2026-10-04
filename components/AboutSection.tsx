'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingUp, Play } from 'lucide-react';

export default function AboutSection() {
  const coreServices = [
    { title: 'Tax-Advantaged Investment Discovery', href: '/tax-free-investment' },
    { title: 'Income & Family Protection Planning', href: '/term-life-insurance' },
    { title: 'Financial Needs Analysis (FNA)', href: '/financial-needs-analysis' },
    { title: 'Auto & Liability Comparison', href: '/automobile-insurance' },
    { title: 'Health & Medical Coverage Review', href: '/health-insurance' },
    { title: 'Property & Casualty Safeguards', href: '/property-insurance' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-row">
          {/* Left Column: Image */}
          <div className="about-image-col">
            <div className="about-img-frame">
              <Image
                src="/images/offer-1-1.jpg"
                alt="Nova Finance Strategic Advisory"
                width={520}
                height={480}
                className="about-feature-img"
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="about-content-col">
            <div className="about-tag">
              <TrendingUp size={18} className="tag-icon" />
              <span>ABOUT NOVA FINANCE</span>
            </div>

            <h2 className="about-main-heading">Objective Clarity for Real Life</h2>

            <p className="about-description">
              NOVA Finance is the financial consulting and wealth protection arm of{' '}
              <strong>Tainaliel</strong>, headquartered at One World Trade Center, New York, NY. We help individuals, families, and business leaders look past sales hype, uncover hidden risks, and build clear, resilient strategies tailored to what truly matters.
            </p>

            {/* Core Services Card Box */}
            <div className="core-services-box">
              <h3 className="core-services-title">Areas of Strategic Exploration</h3>
              <ul className="core-services-list">
                {coreServices.map((service, idx) => (
                  <li key={idx}>
                    <Link href={service.href} className="core-service-item">
                      <Play size={12} className="play-bullet" fill="#003399" />
                      <span>{service.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-btn-wrap">
              <Link href="/about-company" className="btn-blue-solid">
                Explore Our Philosophy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 80px 0 80px;
          background-color: #ffffff;
        }

        .about-row {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 40px;
        }

        .about-image-col {
          display: flex;
          justify-content: center;
        }

        .about-img-frame {
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
          width: 100%;
        }

        .about-feature-img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }

        .about-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #003399;
          margin-bottom: 12px;
        }

        .tag-icon {
          color: #003399;
        }

        .about-main-heading {
          font-size: 2.75rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.2;
          margin-bottom: 22px;
        }

        .about-description {
          font-size: 1.05rem;
          line-height: 1.75;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .core-services-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px 28px;
          margin-bottom: 30px;
        }

        .core-services-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 18px;
        }

        .core-services-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px 20px;
        }

        .core-service-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #1a202c;
          text-decoration: none;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .core-service-item:hover {
          color: #003399;
          transform: translateX(4px);
        }

        .play-bullet {
          color: #003399;
          flex-shrink: 0;
          transition: transform 0.2s ease;
        }

        .core-service-item:hover .play-bullet {
          transform: scale(1.15);
        }

        .about-btn-wrap {
          margin-top: 10px;
        }

        @media (max-width: 991px) {
          .about-row {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-main-heading {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 600px) {
          .core-services-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
