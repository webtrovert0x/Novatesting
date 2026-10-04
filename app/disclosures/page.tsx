'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, Info, AlertTriangle } from 'lucide-react';

export default function DisclosuresPage() {
  return (
    <main className="page-wrapper">
      <Header />

      <section className="legal-banner">
        <div className="container">
          <div className="banner-content text-center">
            <span className="legal-tag">TRANSPARENCY & COMPLIANCE</span>
            <h1 className="legal-title">Disclosures & Regulatory Notice</h1>
            <p className="legal-subtitle">
              Nova Finance by Tainaliel | Licensed Insurance Brokerage & Financial Education
            </p>
          </div>
        </div>
      </section>

      <section className="legal-body-section">
        <div className="container max-w-legal">
          <div className="legal-card">
            <div className="legal-intro">
              <div className="intro-icon-box">
                <Info size={32} color="#003399" />
              </div>
              <p>
                <strong>NOVA Finance by Tainaliel</strong> is committed to operating with complete transparency, regulatory compliance, and consumer protection across all client engagements.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>1. Legal Entity Name & Operating Model</h2>
              <p>
                <strong>Legal Entity:</strong> NOVA Finance by Tainaliel LLC (operating under Tainaliel).<br />
                <strong>Headquarters:</strong> 255 Oakview Village Dr, Glen Burnie, MD 21061, United States.<br />
                <strong>Operating Model:</strong> NOVA Finance operates as a U.S.-based independent insurance brokerage and financial education firm. We provide tailored financial literacy, Financial Needs Analysis (FNA), and multi-carrier insurance solutions for individuals, working families, business owners, and diaspora professionals residing in the United States and authorized jurisdictions.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>2. Geographic Scope & Authorized Jurisdictions</h2>
              <p>
                NOVA Finance by Tainaliel is authorized to transact insurance and consulting services in the State of Maryland and applicable reciprocal U.S. states through properly licensed resident and non-resident insurance producers. Products, quotes, and calculators on this site are tailored to U.S. consumer standards and regulations. Visitors outside authorized U.S. jurisdictions may access educational materials for informational purposes only.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>3. Producer Licensing & Lines of Authority</h2>
              <p>
                All insurance solicitations, policy quotations, and contract placements are conducted by licensed insurance producers appointed with regulated U.S. insurance carriers. Lines of authority include:
              </p>
              <ul className="legal-list">
                <li><strong>Life Insurance:</strong> Term Life, Final Expense, and Mortgage Protection.</li>
                <li><strong>Health Insurance:</strong> Individual, Family, and Supplemental health coverage.</li>
                <li><strong>Property & Casualty:</strong> Personal Automobile and Residential/Commercial Property insurance.</li>
              </ul>
              <p>
                Producer National Producer Numbers (NPN) and state license credentials are furnished to clients upon consultation and during application submissions in accordance with Maryland and national insurance regulatory rules.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>4. Investment Guidance vs. Advisory Services</h2>
              <p>
                <strong>Nature of Service:</strong> Information presented regarding mutual funds, custodial accounts (e.g., Custodial Roth IRAs), 529 college plans, and compound growth modeling is provided strictly for <strong>financial education and debt elimination guidance</strong>.
              </p>
              <p>
                NOVA Finance is not a Registered Investment Advisor (RIA) or a Broker-Dealer. We do not provide discretionary asset management or personalized tax and legal advice. Product establishment and custodial holding for mutual funds or retirement accounts are executed directly through registered third-party broker-dealers, mutual fund custodians, or self-directed custodian platforms.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>5. Multi-Carrier Partnerships & Custodians</h2>
              <p>
                As an independent brokerage, NOVA Finance maintains relationships with multiple top-rated, A-rated insurance carriers across the United States. We are not captive to any single company. When you request a quote or policy, we shop across our independent carrier network to identify options suited to your financial goals and underwriting profile.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>6. Transparent Compensation Model</h2>
              <p>
                <strong>Zero Direct Fees:</strong> We do not charge clients for consultations, Financial Needs Analyses (FNA), or quote comparisons.<br />
                <strong>Carrier Commissions:</strong> When a client chooses to place an insurance policy or annuity through our brokerage, NOVA Finance is compensated via standard commissions paid directly by the issuing insurance company. This compensation creates no extra cost or fee markup to the client.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>7. Projections, Hypotheses & Testimonials</h2>
              <p>
                Calculations and illustrative charts (such as hypothetical annual returns) are mathematical models demonstrating long-term compounding and are not guarantees of future performance. Testimonials reflect individual experiences and do not guarantee equivalent outcomes for all clients.
              </p>
            </div>

            <div className="legal-section-block">
              <h2>8. State Regulatory Contacts & Verification</h2>
              <p>
                Consumers may verify licensing status, agent appointments, and consumer protections directly with the Maryland Insurance Administration (MIA) at <a href="https://insurance.maryland.gov" target="_blank" rel="noopener noreferrer">insurance.maryland.gov</a> or by calling (800) 492-4757.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .legal-banner {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0 60px;
          text-align: center;
        }

        .legal-tag {
          display: inline-block;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }

        .legal-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .legal-subtitle {
          font-size: 0.95rem;
          color: #cbd5e1;
        }

        .legal-body-section {
          padding: 70px 0 90px;
          background-color: #f8fafc;
        }

        .max-w-legal {
          max-width: 860px;
          margin: 0 auto;
        }

        .legal-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 50px 55px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .legal-intro {
          display: flex;
          gap: 20px;
          align-items: flex-start;
          background-color: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 40px;
          color: #166534;
          line-height: 1.65;
        }

        .intro-icon-box {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .legal-section-block {
          margin-bottom: 36px;
        }

        .legal-section-block h2 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 14px;
        }

        .legal-section-block p {
          font-size: 1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 14px;
        }

        .legal-section-block a {
          color: #003399;
          text-decoration: underline;
          font-weight: 600;
        }

        .legal-list {
          margin: 0 0 16px 20px;
          color: #4a5568;
          line-height: 1.7;
        }

        .legal-list li {
          margin-bottom: 8px;
        }

        @media (max-width: 768px) {
          .legal-title {
            font-size: 2.2rem;
          }
          .legal-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </main>
  );
}
