'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, Sparkles, ArrowRight, CheckCircle, Compass, ShieldQuestion, Scale, Lightbulb } from 'lucide-react';

export default function CuriosityExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const curiosityTopics = [
    {
      id: 'strategy-vs-products',
      icon: Compass,
      question: '“I already have accounts & policies—does that mean I have a strategy?”',
      badge: 'THE INTEGRATION PUZZLE',
      headline: 'Having separate financial tools is not the same as having a coordinated strategy.',
      explanation:
        'Most people acquire financial products piecemeal over decades—a retirement account here, auto coverage there, a basic term policy from an employer. But when life shifts, these isolated pieces rarely communicate. Exploring how your protections, taxes, and timeline integrate uncovers surprising blind spots and immediate efficiencies.',
      keyTakeaway: 'Discovery reveals whether your assets work in harmony or in costly silos.',
    },
    {
      id: 'hype-vs-resilience',
      icon: Scale,
      question: '“Do I need high-risk gambles or complicated schemes to build stability?”',
      badge: 'REALITY VS. HYPE',
      headline: 'Sustainable financial peace comes from disciplined structure, not overnight speculation.',
      explanation:
        'The internet is flooded with claims of making millions effortlessly through secret insurance loopholes or aggressive market bets. In reality, enduring wealth is built on fundamental principles: managing cash flow, protecting downside risks, minimizing tax drag, and staying consistent across market cycles.',
      keyTakeaway: 'Clarity and defensive structure outperform speculative excitement every time.',
    },
    {
      id: 'stress-testing',
      icon: ShieldQuestion,
      question: '“If life took an unexpected turn tomorrow, how resilient is my safety net?”',
      badge: 'THE STRESS TEST',
      headline: 'Most households assume they are covered until an actual crisis tests the fine print.',
      explanation:
        'Do you know exactly what your policies cover—and more importantly, what they exclude? Stress-testing scenarios like sudden disability, breadwinner loss, or major liability claims allows you to make informed adjustments before life forces the issue.',
      keyTakeaway: 'Asking the hard questions in advance replaces anxiety with genuine certainty.',
    },
    {
      id: 'tax-efficiency',
      icon: Lightbulb,
      question: '“How much of my future wealth growth is vulnerable to unnecessary friction?”',
      badge: 'THE HIDDEN LEAK',
      headline: 'It isn’t just what you accumulate—it’s what you actually retain after taxes and fees.',
      explanation:
        'Many individuals focus exclusively on gross returns, ignoring how tax brackets, withdrawal penalties, and inflation erode purchasing power over a 20- or 30-year horizon. Exploring tax-advantaged structures (such as Roth conversions and tax-free mutual funds) keeps more of your hard-earned money working for you.',
      keyTakeaway: 'Smart structural choices create compound benefits over your lifetime.',
    },
  ];

  return (
    <section className="curiosity-section">
      <div className="container">
        {/* Section Header */}
        <div className="curiosity-header text-center">
          <div className="curiosity-pill">
            <Sparkles size={16} />
            <span>FINANCIAL CURIOSITY</span>
          </div>
          <h2 className="curiosity-title">Questions Worth Exploring</h2>
          <p className="curiosity-subtitle">
            You don&apos;t need to have all the answers right now. Real financial clarity begins by being curious enough to ask the questions most conversations avoid.
          </p>
        </div>

        {/* Interactive Explorer Container */}
        <div className="curiosity-box">
          {/* Left Column: Interactive Question Selectors */}
          <div className="curiosity-nav">
            <span className="nav-heading">Select a Question to Explore:</span>
            <div className="nav-list">
              {curiosityTopics.map((topic, idx) => {
                const IconComponent = topic.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`curiosity-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className="tab-icon-wrap">
                      <IconComponent size={20} />
                    </div>
                    <div className="tab-text-wrap">
                      <span className="tab-badge">{topic.badge}</span>
                      <span className="tab-question">{topic.question}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Deep Dive Card */}
          <div className="curiosity-display">
            <div className="display-inner">
              <div className="display-top">
                <span className="display-badge">
                  <HelpCircle size={14} />
                  {curiosityTopics[activeTab].badge}
                </span>
                <span className="display-count">
                  0{activeTab + 1} / 0{curiosityTopics.length}
                </span>
              </div>

              <h3 className="display-headline">
                {curiosityTopics[activeTab].headline}
              </h3>

              <p className="display-explanation">
                {curiosityTopics[activeTab].explanation}
              </p>

              <div className="takeaway-box">
                <CheckCircle size={20} className="takeaway-icon" />
                <div className="takeaway-text">
                  <strong>The Strategic Takeaway:</strong>
                  <span>{curiosityTopics[activeTab].keyTakeaway}</span>
                </div>
              </div>

              <div className="display-action">
                <Link
                  href="/book-a-consultation"
                  className="btn-curiosity-cta"
                >
                  <span>Discuss This Question in a 1-on-1 Discovery Session</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .curiosity-section {
          padding: 85px 0 90px;
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
        }

        .curiosity-header {
          max-width: 780px;
          margin: 0 auto 50px;
        }

        .curiosity-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(0, 51, 153, 0.08);
          color: #003399;
          border: 1px solid rgba(0, 51, 153, 0.18);
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 14px;
        }

        .curiosity-title {
          font-size: 2.85rem;
          font-weight: 800;
          color: #0a1128;
          letter-spacing: -0.5px;
          margin-bottom: 14px;
        }

        .curiosity-subtitle {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
        }

        .curiosity-box {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 32px;
          background-color: #ffffff;
          border-radius: 24px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 16px 40px rgba(0, 51, 153, 0.06);
          padding: 36px;
        }

        .curiosity-nav {
          display: flex;
          flex-direction: column;
        }

        .nav-heading {
          font-size: 0.84rem;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 16px;
        }

        .nav-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .curiosity-tab-btn {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 14px;
          background-color: #f8fafc;
          border: 1.5px solid #edf2f7;
          text-align: left;
          cursor: pointer;
          transition: all 0.25s ease;
          width: 100%;
        }

        .curiosity-tab-btn:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
        }

        .curiosity-tab-btn.active {
          background-color: #003399;
          border-color: #003399;
          box-shadow: 0 8px 20px rgba(0, 51, 153, 0.2);
        }

        .tab-icon-wrap {
          color: #003399;
          background-color: rgba(0, 51, 153, 0.1);
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
        }

        .curiosity-tab-btn.active .tab-icon-wrap {
          background-color: #00c2cb;
          color: #000050;
        }

        .tab-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .tab-badge {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 1px;
          color: #003399;
        }

        .curiosity-tab-btn.active .tab-badge {
          color: #00c2cb;
        }

        .tab-question {
          font-size: 0.94rem;
          font-weight: 600;
          color: #1e293b;
          line-height: 1.45;
        }

        .curiosity-tab-btn.active .tab-question {
          color: #ffffff;
        }

        .curiosity-display {
          background: linear-gradient(135deg, #000050 0%, #001e54 100%);
          border-radius: 20px;
          padding: 40px 42px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .display-inner {
          position: relative;
          z-index: 2;
        }

        .display-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .display-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(0, 194, 203, 0.15);
          color: #00c2cb;
          border: 1px solid rgba(0, 194, 203, 0.3);
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .display-count {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94a3b8;
        }

        .display-headline {
          font-size: 1.7rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 18px;
        }

        .display-explanation {
          font-size: 1.02rem;
          line-height: 1.75;
          color: #cbd5e1;
          margin-bottom: 24px;
        }

        .takeaway-box {
          background-color: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          padding: 16px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 30px;
        }

        :global(.takeaway-icon) {
          color: #00c2cb;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .takeaway-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
          font-size: 0.94rem;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .takeaway-text strong {
          color: #ffffff;
        }

        .btn-curiosity-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #00c2cb;
          color: #000050;
          font-size: 0.96rem;
          font-weight: 700;
          padding: 13px 24px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .btn-curiosity-cta:hover {
          background-color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
        }

        @media (max-width: 1024px) {
          .curiosity-box {
            grid-template-columns: 1fr;
            padding: 24px;
          }
          .curiosity-display {
            padding: 30px 24px;
          }
        }

        @media (max-width: 768px) {
          .curiosity-title {
            font-size: 2.2rem;
          }
          .display-headline {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}
