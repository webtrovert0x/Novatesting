'use client';

import React from 'react';
import Image from 'next/image';
import TopographyField from './TopographyField';
import Reveal from './Reveal';

export default function WhyChooseUs() {
  const pillars = [
    {
      title: 'Unbiased Inquiry',
      desc: 'Thoughtful, transparent discovery without high-pressure sales or quotas.',
      icon: '/images/icons8-integrity-50.png',
    },
    {
      title: 'Clarity Over Hype',
      desc: 'No inflated return claims or get-rich promises—just honest, disciplined strategy.',
      icon: '/images/icons8-expertise-50-1.png',
    },
    {
      title: 'Stress-Tested Design',
      desc: 'We explore worst-case and best-case scenarios to build enduring resilience.',
      icon: '/images/icons8-growth-50.png',
    },
    {
      title: 'Personal Alignment',
      desc: 'Custom roadmaps crafted specifically around your life stage and priorities.',
      icon: '/images/icons8-client-50.png',
    },
  ];

  return (
    <section id="why-us" className="why-us-section">
      <div className="why-topo">
        <TopographyField color="140, 190, 255" opacity={0.5} levels={14} cell={18} speed={0.8} />
      </div>
      <div className="container why-container">
        <div className="pillars-grid">
          {pillars.map((item, idx) => (
            <Reveal key={idx} delay={idx * 80} fill>
            <div className="pillar-column">
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
            </Reveal>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-us-section {
          position: relative;
          overflow: hidden;
          padding: 85px 0;
          background-color: #003399;
          color: #ffffff;
        }

        .why-topo {
          position: absolute;
          inset: 0;
          -webkit-mask-image: radial-gradient(ellipse at 50% 50%, #000 20%, rgba(0, 0, 0, 0.35) 100%);
          mask-image: radial-gradient(ellipse at 50% 50%, #000 20%, rgba(0, 0, 0, 0.35) 100%);
          pointer-events: none;
        }

        .why-container {
          position: relative;
          z-index: 1;
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
