'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CuriosityExplorer from '@/components/CuriosityExplorer';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConsultationCard from '@/components/ConsultationCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CuriosityExplorer />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />

      {/* Embedded 1-on-1 Consultation Section directly on Homepage */}
      <section id="consultation" className="home-consultation-section">
        <div className="container">
          <ConsultationCard />
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .home-consultation-section {
          padding: 85px 0 95px;
          background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
        }
      `}</style>
    </main>
  );
}
