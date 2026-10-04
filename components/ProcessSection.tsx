'use client';

import React from 'react';
import Image from 'next/image';

export default function ProcessSection() {
  const steps = [
    {
      step: 'STEP #1',
      title: 'Consultation & Goal Setting',
      desc: 'We begin with a quick, friendly consultation to understand your goals, priorities, and financial roadmap.',
    },
    {
      step: 'STEP #2',
      title: 'Personalized Strategy & Plan',
      desc: 'Our team designs a customized financial and protection plan that fits your exact goals and timeline.',
    },
    {
      step: 'STEP #3',
      title: 'Implementation & Growth Tracking',
      desc: 'We put your plan into action, monitor milestone progress, and make adjustments as your life evolves.',
    },
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        {/* Header */}
        <div className="process-header text-center">
          <div className="process-tag">
            <Image
              src="/images/icons8-chart-50.png"
              alt="Process"
              width={18}
              height={18}
              className="tag-icon-img"
            />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="process-main-title">Our Process</h2>
        </div>

        {/* Structural Process Diagram Layout */}
        <div className="process-diagram-wrapper">
          {/* Top PROCESS Box */}
          <div className="top-process-container">
            <div className="top-process-box">
              <span className="process-outline-text">PROCESS</span>
            </div>
          </div>

          {/* SVG Tree Connector Lines */}
          <svg
            className="process-connector-svg"
            viewBox="0 0 1100 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Left Branch down to Step 1 */}
            <path
              d="M 275 70 L 183 70 L 183 225"
              stroke="#224C9B"
              strokeWidth="2.5"
            />

            {/* Right Branch down to Step 3 */}
            <path
              d="M 825 70 L 917 70 L 917 225"
              stroke="#224C9B"
              strokeWidth="2.5"
            />

            {/* Center Branch down to Step 2 */}
            <path
              d="M 550 140 L 550 375"
              stroke="#224C9B"
              strokeWidth="2.5"
            />
          </svg>

          {/* Connector Node Badges with icon-10-1.png Touching the Boxes */}
          <div className="node-badge node-left">
            <Image
              src="/images/icon-10-1.png"
              alt="Dropdown"
              width={38}
              height={38}
              className="node-icon-img"
            />
          </div>

          <div className="node-badge node-right">
            <Image
              src="/images/icon-10-1.png"
              alt="Dropdown"
              width={38}
              height={38}
              className="node-icon-img"
            />
          </div>

          <div className="node-badge node-center">
            <Image
              src="/images/icon-10-1.png"
              alt="Dropdown"
              width={38}
              height={38}
              className="node-icon-img"
            />
          </div>

          {/* 3 Step Boxes Grid */}
          <div className="step-cards-grid">
            {/* Step 1 (Shifted down slightly) */}
            <div className="step-column step-col-1">
              <div className="step-outer-frame">
                <div className="step-header-label">{steps[0].step}</div>
                <div className="step-inner-card">
                  <h3 className="card-heading">{steps[0].title}</h3>
                  <p className="card-paragraph">{steps[0].desc}</p>
                </div>
              </div>
            </div>

            {/* Step 2 (Shifted Down 200px) */}
            <div className="step-column step-col-2">
              <div className="step-outer-frame">
                <div className="step-header-label">{steps[1].step}</div>
                <div className="step-inner-card">
                  <h3 className="card-heading">{steps[1].title}</h3>
                  <p className="card-paragraph">{steps[1].desc}</p>
                </div>
              </div>
            </div>

            {/* Step 3 (Shifted down slightly) */}
            <div className="step-column step-col-3">
              <div className="step-outer-frame">
                <div className="step-header-label">{steps[2].step}</div>
                <div className="step-inner-card">
                  <h3 className="card-heading">{steps[2].title}</h3>
                  <p className="card-paragraph">{steps[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mouse Scroll Indicator */}
        <div className="mouse-scroll-indicator light">
          <div className="mouse-icon-frame">
            <div className="mouse-wheel" />
          </div>
          <div className="mouse-arrow-down" />
        </div>
      </div>

      <style jsx>{`
        .process-section {
          padding: 85px 0 75px;
          background-color: #003399;
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .process-header {
          text-align: center;
          margin-bottom: 45px;
        }

        .process-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: #00c2cb;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .tag-icon-img {
          display: inline-block;
          object-fit: contain;
        }

        .process-main-title {
          font-size: 3.2rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.5px;
        }

        .process-diagram-wrapper {
          position: relative;
          max-width: 1120px;
          margin: 0 auto 230px;
          padding-top: 170px;
        }

        /* Top PROCESS Frame Box */
        .top-process-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 2;
        }

        .top-process-box {
          width: 550px;
          max-width: 92%;
          height: 140px;
          border: 1.5px solid #224C9B;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 51, 153, 0.4);
          backdrop-filter: blur(4px);
        }

        .process-outline-text {
          font-size: 5rem;
          font-weight: 900;
          letter-spacing: 14px;
          color: transparent;
          -webkit-text-stroke: 1.5px #224C9B;
          text-transform: uppercase;
          user-select: none;
        }

        /* Connecting SVG */
        .process-connector-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 420px;
          z-index: 1;
          pointer-events: none;
        }

        /* Circular Arrow Nodes at the center of each line */
        .node-badge {
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #001e54;
          border: 2px solid #224C9B;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          padding: 8px;
        }

        .node-icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .node-left {
          top: 145px;
          left: 16.6%;
          transform: translate(-50%, -50%);
        }

        .node-right {
          top: 145px;
          left: 83.4%;
          transform: translate(-50%, -50%);
        }

        .node-center {
          top: 250px;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* 3 Columns Grid */
        .step-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          position: relative;
          z-index: 4;
        }

        .step-col-1,
        .step-col-3 {
          transform: translateY(50px);
        }

        .step-col-2 {
          transform: translateY(200px);
        }

        .step-outer-frame {
          border: 1.5px solid #224C9B;
          border-radius: 18px;
          padding: 16px 14px 14px;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(0, 45, 140, 0.5);
          backdrop-filter: blur(6px);
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .step-outer-frame:hover {
          transform: translateY(-4px);
          border-color: #00c2cb;
        }

        .step-header-label {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #00c2cb;
          margin-bottom: 14px;
          text-transform: uppercase;
        }

        .step-inner-card {
          background-color: #ffffff;
          border-radius: 14px;
          padding: 38px 24px;
          width: 100%;
          min-height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #0a1128;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .card-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0a1128;
          line-height: 1.3;
          margin-bottom: 14px;
        }

        .card-paragraph {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #555555;
        }

        @media (max-width: 991px) {
          .top-process-container,
          .process-connector-svg,
          .node-badge {
            display: none;
          }
          .process-diagram-wrapper {
            padding-top: 0;
          }
          .step-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .step-col-2 {
            transform: translateY(0);
          }
          .process-main-title {
            font-size: 2.3rem;
          }
        }
      `}</style>
    </section>
  );
}
