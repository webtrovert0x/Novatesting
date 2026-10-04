'use client';

import React from 'react';
import Image from 'next/image';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Integrity',
      desc: 'Honest, transparent advice — no smoke, no fluff.',
      icon: '/images/icons8-integrity-50.png',
    },
    {
      title: 'Expertise',
      desc: 'Experience in finance, business, and real-world markets.',
      icon: '/images/icons8-expertise-50-1.png',
    },
    {
      title: 'Growth-minded',
      desc: 'We design long-term strategies, not short-term quick fixes.',
      icon: '/images/icons8-growth-50.png',
    },
    {
      title: 'Client-focused',
      desc: 'Personalized solutions that reflect your unique situation.',
      icon: '/images/icons8-client-50.png',
    },
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="container">
        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <div key={idx} className="pillar-column">
              <div className="pillar-icon-box">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="pillar-icon-img"
                />
              </div>

              <h3 className="pillar-title">{item.title}</h3>

              <div className="pillar-underline" />

              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us-section {
          padding: 85px 0;
          background-color: #003399;
          color: #ffffff;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 36px;
        }

        .pillar-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .pillar-icon-box {
          margin-bottom: 22px;
          color: #ffffff;
        }

        .pillar-title {
          font-size: 1.65rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 16px;
        }

        .pillar-underline {
          width: 80%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.25);
          margin-bottom: 20px;
        }

        .pillar-desc {
          font-size: 0.98rem;
          line-height: 1.65;
          color: #e2e8f0;
        }

        @media (max-width: 991px) {
          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 24px;
          }
        }

        @media (max-width: 600px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
