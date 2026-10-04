'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Video, 
  TrendingUp, 
  HeartHandshake, 
  Car, 
  Home, 
  Calculator, 
  Lock,
  ChevronRight
} from 'lucide-react';

type ServiceType = 
  | 'fna' 
  | 'mutual-funds' 
  | 'life-insurance' 
  | 'health-insurance' 
  | 'auto-insurance' 
  | 'property-insurance';

export default function BookAConsultationPage() {
  const [step, setStep] = useState<'form' | 'calendar' | 'confirmed'>('form');
  const [hasStarted, setHasStarted] = useState(false);

  // Form State
  const [service, setService] = useState<ServiceType>('fna');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: 'Maryland',
    preferredMeetingFormat: 'Phone Call',
    // Dynamic Fields
    // Auto
    vehicleDetails: '',
    vehicleUse: 'Personal Commute',
    autoCoverage: 'Full Coverage',
    // Life
    lifeCoverageAmount: '$500,000',
    termLength: '20 Years',
    tobaccoUse: 'No',
    // Mutual Funds / FNA
    monthlySavingsCapacity: '$250 - $500/mo',
    investmentGoal: 'Tax-Free Retirement (Roth)',
    // Health
    healthScope: 'Individual & Family',
    // Property
    propertyType: 'Single Family Home',
    notes: '',
  });

  // Calendar State
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available consultation dates (next 10 business days)
  const [availableDates, setAvailableDates] = useState<{ day: string; date: string; formatted: string }[]>([]);

  useEffect(() => {
    const dates = [];
    const now = new Date();
    let count = 0;
    let daysAhead = 1;

    while (count < 10) {
      const target = new Date(now);
      target.setDate(now.getDate() + daysAhead);
      const dayOfWeek = target.getDay();

      // Only Monday - Friday
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push({
          day: target.toLocaleDateString('en-US', { weekday: 'short' }),
          date: target.toISOString().split('T')[0],
          formatted: target.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        });
        count++;
      }
      daysAhead++;
    }

    setAvailableDates(dates);
    if (dates.length > 0) {
      setSelectedDate(dates[0].date);
      setSelectedTime('10:00 AM EST');
    }
  }, []);

  // Event Tracking Utility
  const trackEvent = (eventName: string, data?: Record<string, any>) => {
    try {
      if (typeof window !== 'undefined') {
        const payload = { event: eventName, ...data, timestamp: new Date().toISOString() };
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push(payload);
        window.dispatchEvent(new CustomEvent('nova_analytics', { detail: payload }));
        console.log(`[Event Tracked: ${eventName}]`, payload);
      }
    } catch (err) {
      console.warn('Analytics tracking error:', err);
    }
  };

  const handleInputFocus = () => {
    if (!hasStarted) {
      setHasStarted(true);
      trackEvent('form_start', { service });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent('form_complete', { 
      service, 
      state: formData.state,
      preferredFormat: formData.preferredMeetingFormat 
    });
    setStep('calendar');
    trackEvent('calendar_view', { service });
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleBookingConfirm = async () => {
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        serviceSelected: service,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
        meetingFormat: formData.preferredMeetingFormat,
        formSource: 'Dedicated Booking Router',
      };

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      trackEvent('appointment_booked', {
        service,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
        meetingFormat: formData.preferredMeetingFormat,
      });

      setStep('confirmed');
      window.scrollTo({ top: 250, behavior: 'smooth' });
    } catch (error) {
      console.error('Booking submission failed:', error);
      setStep('confirmed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimeSlots = [
    '09:30 AM EST',
    '11:00 AM EST',
    '01:30 PM EST',
    '03:00 PM EST',
    '04:30 PM EST',
    '06:00 PM EST',
  ];

  return (
    <main className="page-wrapper">
      <Header />

      {/* Hero Banner */}
      <section className="booking-hero">
        <div className="container">
          <div className="hero-content text-center">
            <div className="hero-badge">
              <ShieldCheck size={16} />
              <span>LICENSED FIDUCIARY ADVISORY</span>
            </div>
            <h1 className="hero-title">Book a 1-on-1 Consultation</h1>
            <p className="hero-subtitle">
              Complimentary, customized guidance with an authorized Nova Finance advisor. Select your area of interest to begin.
            </p>
          </div>
        </div>
      </section>

      {/* Multi-Step Booking Flow */}
      <section className="booking-flow-section">
        <div className="container max-w-booking">
          {/* Funnel Progress Indicator */}
          <div className="progress-bar-row">
            <div className={`step-node ${step === 'form' ? 'active' : 'completed'}`}>
              <span className="node-num">1</span>
              <span className="node-label">Select Service &amp; Details</span>
            </div>
            <div className="node-line" />
            <div className={`step-node ${step === 'calendar' ? 'active' : step === 'confirmed' ? 'completed' : ''}`}>
              <span className="node-num">2</span>
              <span className="node-label">Choose Date &amp; Time</span>
            </div>
            <div className="node-line" />
            <div className={`step-node ${step === 'confirmed' ? 'active' : ''}`}>
              <span className="node-num">3</span>
              <span className="node-label">Confirmation</span>
            </div>
          </div>

          {/* STEP 1: ROUTING FORM WITH SERVICE SELECTOR */}
          {step === 'form' && (
            <div className="booking-card">
              <div className="card-header">
                <h2 className="step-title">What would you like to discuss?</h2>
                <p className="step-desc">
                  Select your primary objective so we can tailor the right licensed specialist and planning tools.
                </p>
              </div>

              {/* Service Selection Grid */}
              <div className="service-selector-grid">
                {[
                  {
                    id: 'fna',
                    name: 'Financial Needs Analysis',
                    sub: 'Debt roll-up, retirement readiness & full blueprint',
                    icon: <Calculator size={24} />,
                  },
                  {
                    id: 'mutual-funds',
                    name: 'Tax-Advantaged Investments',
                    sub: 'Roth IRA, Custodial Accounts & Compound Growth',
                    icon: <TrendingUp size={24} />,
                  },
                  {
                    id: 'life-insurance',
                    name: 'Term Life Insurance',
                    sub: 'Income replacement & mortgage family protection',
                    icon: <HeartHandshake size={24} />,
                  },
                  {
                    id: 'health-insurance',
                    name: 'Health & Medical Coverage',
                    sub: 'Individual, family, & supplemental healthcare',
                    icon: <ShieldCheck size={24} />,
                  },
                  {
                    id: 'auto-insurance',
                    name: 'Auto Insurance Quote',
                    sub: 'Multi-carrier vehicle & liability comparison',
                    icon: <Car size={24} />,
                  },
                  {
                    id: 'property-insurance',
                    name: 'Property & Casualty',
                    sub: 'Homeowners, landlords, & commercial property',
                    icon: <Home size={24} />,
                  },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setService(item.id as ServiceType);
                      trackEvent('service_selected', { service: item.id });
                    }}
                    className={`service-card-btn ${service === item.id ? 'active' : ''}`}
                  >
                    <div className="service-icon-wrap">{item.icon}</div>
                    <div className="service-info">
                      <strong className="service-title">{item.name}</strong>
                      <span className="service-sub">{item.sub}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Dynamic Lead Form */}
              <form onSubmit={handleFormSubmit} className="booking-form">
                <div className="form-section-title">
                  <span>Your Contact Information</span>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>First Name <span className="req">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={formData.firstName}
                      onFocus={handleInputFocus}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="req">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Smith"
                      value={formData.lastName}
                      onFocus={handleInputFocus}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Email Address <span className="req">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onFocus={handleInputFocus}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number <span className="req">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (443) 000-0000"
                      value={formData.phone}
                      onFocus={handleInputFocus}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>State of Residence <span className="req">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maryland"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Preferred Meeting Format</label>
                    <select
                      value={formData.preferredMeetingFormat}
                      onChange={(e) => setFormData({ ...formData, preferredMeetingFormat: e.target.value })}
                      className="form-input"
                    >
                      <option value="Phone Call">Direct Phone Call</option>
                      <option value="Google Meet Video">Google Meet Video</option>
                      <option value="Zoom Meeting">Zoom Video Conference</option>
                    </select>
                  </div>
                </div>

                {/* DYNAMIC SERVICE-SPECIFIC FIELDS */}
                <div className="form-section-title">
                  <span>
                    {service === 'fna' && 'Financial Needs Analysis Scope'}
                    {service === 'mutual-funds' && 'Investment Profile'}
                    {service === 'life-insurance' && 'Coverage Preferences'}
                    {service === 'health-insurance' && 'Healthcare Requirements'}
                    {service === 'auto-insurance' && 'Vehicle Underwriting Details'}
                    {service === 'property-insurance' && 'Property Specifications'}
                  </span>
                </div>

                {/* Auto Insurance Fields */}
                {service === 'auto-insurance' && (
                  <div className="service-fields-box">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Vehicle Year, Make &amp; Model</label>
                        <input
                          type="text"
                          placeholder="e.g. 2022 Toyota Camry"
                          value={formData.vehicleDetails}
                          onChange={(e) => setFormData({ ...formData, vehicleDetails: e.target.value })}
                          className="form-input"
                        />
                      </div>
                      <div className="form-group">
                        <label>Primary Vehicle Use</label>
                        <select
                          value={formData.vehicleUse}
                          onChange={(e) => setFormData({ ...formData, vehicleUse: e.target.value })}
                          className="form-input"
                        >
                          <option value="Personal Commute">Personal Commute</option>
                          <option value="Pleasure / Low Mileage">Pleasure / Low Mileage</option>
                          <option value="Business / Commercial Use">Business / Commercial Use</option>
                          <option value="Rideshare (Uber/Lyft)">Rideshare</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Desired Coverage Level</label>
                      <select
                        value={formData.autoCoverage}
                        onChange={(e) => setFormData({ ...formData, autoCoverage: e.target.value })}
                        className="form-input"
                      >
                        <option value="Full Coverage (Comprehensive + Collision)">Full Coverage (Comprehensive + Collision)</option>
                        <option value="State Minimum Liability Only">State Minimum Liability Only</option>
                        <option value="Enhanced Liability ($250k/$500k limits)">Enhanced Liability ($250k/$500k limits)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Term Life Fields */}
                {service === 'life-insurance' && (
                  <div className="service-fields-box">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Target Coverage Amount</label>
                        <select
                          value={formData.lifeCoverageAmount}
                          onChange={(e) => setFormData({ ...formData, lifeCoverageAmount: e.target.value })}
                          className="form-input"
                        >
                          <option value="$250,000">$250,000</option>
                          <option value="$500,000">$500,000</option>
                          <option value="$750,000">$750,000</option>
                          <option value="$1,000,000">$1,000,000</option>
                          <option value="$1,500,000+">$1,500,000+</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Term Duration</label>
                        <select
                          value={formData.termLength}
                          onChange={(e) => setFormData({ ...formData, termLength: e.target.value })}
                          className="form-input"
                        >
                          <option value="10 Years">10 Years</option>
                          <option value="15 Years">15 Years</option>
                          <option value="20 Years">20 Years</option>
                          <option value="30 Years">30 Years</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Tobacco or Nicotine Use (Past 3 Years)?</label>
                      <select
                        value={formData.tobaccoUse}
                        onChange={(e) => setFormData({ ...formData, tobaccoUse: e.target.value })}
                        className="form-input"
                      >
                        <option value="No">No (Non-Tobacco)</option>
                        <option value="Yes">Yes</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Mutual Funds / FNA Fields */}
                {(service === 'fna' || service === 'mutual-funds') && (
                  <div className="service-fields-box">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label>Estimated Monthly Savings Capacity</label>
                        <select
                          value={formData.monthlySavingsCapacity}
                          onChange={(e) => setFormData({ ...formData, monthlySavingsCapacity: e.target.value })}
                          className="form-input"
                        >
                          <option value="$100 - $250/mo">$100 - $250 / month</option>
                          <option value="$250 - $500/mo">$250 - $500 / month</option>
                          <option value="$500 - $1,000/mo">$500 - $1,000 / month</option>
                          <option value="$1,000+/mo">$1,000+ / month</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Primary Focus</label>
                        <select
                          value={formData.investmentGoal}
                          onChange={(e) => setFormData({ ...formData, investmentGoal: e.target.value })}
                          className="form-input"
                        >
                          <option value="Tax-Free Retirement (Roth)">Tax-Free Retirement (Roth)</option>
                          <option value="Children College / Custodial Roth">Children College / Custodial Roth</option>
                          <option value="Debt Elimination Roadmap">Accelerated Debt Elimination</option>
                          <option value="Comprehensive 360 Blueprint">Comprehensive 360 Blueprint</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Health Insurance Fields */}
                {service === 'health-insurance' && (
                  <div className="service-fields-box">
                    <div className="form-group">
                      <label>Who Needs Health Coverage?</label>
                      <select
                        value={formData.healthScope}
                        onChange={(e) => setFormData({ ...formData, healthScope: e.target.value })}
                        className="form-input"
                      >
                        <option value="Individual Only">Individual Only</option>
                        <option value="Individual & Spouse">Individual &amp; Spouse</option>
                        <option value="Individual & Family (3+ members)">Individual &amp; Family (3+ members)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Property Insurance Fields */}
                {service === 'property-insurance' && (
                  <div className="service-fields-box">
                    <div className="form-group">
                      <label>Property Type</label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="form-input"
                      >
                        <option value="Single Family Home">Single Family Home</option>
                        <option value="Townhouse / Condo">Townhouse / Condo</option>
                        <option value="Rental Property / Landlord">Rental Property / Landlord</option>
                        <option value="Commercial Building">Commercial Building</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label>Additional Notes or Questions (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us any specific timelines, goals, or current policies..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-submit-row">
                  <button type="submit" className="btn-continue">
                    <span>Continue to Choose Date &amp; Time</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 2: INTERACTIVE SCHEDULER & CALENDAR */}
          {step === 'calendar' && (
            <div className="booking-card">
              <div className="card-header">
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="back-step-btn"
                >
                  &larr; Back to edit details
                </button>
                <h2 className="step-title">Select Your Preferred Date &amp; Time</h2>
                <p className="step-desc">
                  Choose a convenient slot for your 30-minute private consultation via <strong>{formData.preferredMeetingFormat}</strong>.
                </p>
              </div>

              <div className="calendar-grid-wrap">
                {/* Date Selection */}
                <div className="date-picker-block">
                  <h4 className="picker-label">1. Select Date</h4>
                  <div className="dates-pill-grid">
                    {availableDates.map((item) => (
                      <button
                        key={item.date}
                        type="button"
                        onClick={() => setSelectedDate(item.date)}
                        className={`date-pill-btn ${selectedDate === item.date ? 'active' : ''}`}
                      >
                        <span className="pill-day">{item.day}</span>
                        <span className="pill-date">{item.formatted}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="time-picker-block">
                  <h4 className="picker-label">2. Select Time (EST)</h4>
                  <div className="times-pill-grid">
                    {availableTimeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`time-pill-btn ${selectedTime === time ? 'active' : ''}`}
                      >
                        <Clock size={15} />
                        <span>{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Selected Slot Summary */}
              <div className="booking-summary-banner">
                <div className="summary-col">
                  <span className="summary-tag">CONSULTATION SUMMARY</span>
                  <div className="summary-details">
                    <strong>{formData.firstName} {formData.lastName}</strong> ({formData.email}) • {formData.phone}
                    <br />
                    <span>Topic: <strong>{service.toUpperCase()}</strong> via <strong>{formData.preferredMeetingFormat}</strong></span>
                    <br />
                    <span className="summary-date-highlight">
                      📅 Date: {selectedDate} at ⏰ {selectedTime}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleBookingConfirm}
                  className="btn-confirm-booking"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Confirm Appointment ➔'}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONFIRMATION STATE */}
          {step === 'confirmed' && (
            <div className="booking-card text-center confirmed-card">
              <div className="confirm-check-wrap">
                <CheckCircle2 size={54} color="#16a34a" />
              </div>
              <span className="confirm-eyebrow">APPOINTMENT CONFIRMED</span>
              <h2 className="confirm-title">You&apos;re All Set, {formData.firstName}!</h2>
              <p className="confirm-lead">
                Your consultation has been booked for <strong>{selectedDate} at {selectedTime}</strong> via <strong>{formData.preferredMeetingFormat}</strong>.
              </p>

              <div className="confirmed-details-box">
                <div className="detail-item">
                  <span className="d-label">Advisor Assigned:</span>
                  <span className="d-val">Licensed Nova Finance Specialist</span>
                </div>
                <div className="detail-item">
                  <span className="d-label">Client Contact:</span>
                  <span className="d-val">{formData.phone} | {formData.email}</span>
                </div>
                <div className="detail-item">
                  <span className="d-label">Service Focus:</span>
                  <span className="d-val">{service.toUpperCase()}</span>
                </div>
              </div>

              {/* What Happens Next 4-Step Timeline */}
              <div className="what-happens-next-box">
                <h3 className="next-heading">What Happens Next?</h3>
                <div className="next-timeline">
                  <div className="timeline-step">
                    <div className="step-circle">1</div>
                    <div className="step-text">
                      <strong>Immediate Calendar Invite &amp; Confirmation</strong>
                      <p>You&apos;ll receive an email receipt with meeting dial-in details / video link for your calendar.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-circle">2</div>
                    <div className="step-text">
                      <strong>Advisor Pre-Session Review</strong>
                      <p>Your assigned licensed specialist prepares multi-carrier options or your custom wealth illustration in advance.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-circle">3</div>
                    <div className="step-text">
                      <strong>Your 30-Minute 1-on-1 Strategy Call</strong>
                      <p>A relaxed, transparent review of your goals and quotes with 100% fiduciary clarity and zero high-pressure sales.</p>
                    </div>
                  </div>

                  <div className="timeline-step">
                    <div className="step-circle">4</div>
                    <div className="step-text">
                      <strong>Your Custom Roadmap &amp; Blueprint</strong>
                      <p>You receive your finalized FNA analysis or side-by-side policy options to review at your own pace.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="confirm-btn-row">
                <Link href="/" className="btn-home">
                  Return to Homepage
                </Link>
                <Link href="/financial-needs-analysis-checklist" className="btn-fna">
                  Review Pre-Call Checklist
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .booking-hero {
          background-color: #000050;
          color: #ffffff;
          padding: 70px 0 60px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 2px;
          color: #00c2cb;
          margin-bottom: 12px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
        }

        .hero-subtitle {
          font-size: 1.05rem;
          color: #cbd5e1;
          max-width: 680px;
          margin: 0 auto;
        }

        .booking-flow-section {
          padding: 60px 0 90px;
          background-color: #f8fafc;
        }

        .max-w-booking {
          max-width: 860px;
          margin: 0 auto;
        }

        /* Progress Bar */
        .progress-bar-row {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 36px;
        }

        .step-node {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
          font-size: 0.9rem;
          font-weight: 600;
          color: #4a5568;
        }

        .step-node.active {
          opacity: 1;
          color: #003399;
        }

        .step-node.completed {
          opacity: 1;
          color: #16a34a;
        }

        .node-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .step-node.active .node-num {
          background-color: #003399;
          color: #ffffff;
        }

        .step-node.completed .node-num {
          background-color: #16a34a;
          color: #ffffff;
        }

        .node-line {
          flex: 1;
          max-width: 60px;
          height: 2px;
          background-color: #cbd5e1;
          margin: 0 14px;
        }

        /* Booking Card */
        .booking-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 44px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .card-header {
          margin-bottom: 28px;
        }

        .step-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 8px;
        }

        .step-desc {
          font-size: 0.96rem;
          color: #64748b;
        }

        .back-step-btn {
          background: none;
          border: none;
          color: #003399;
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9rem;
          margin-bottom: 12px;
          padding: 0;
        }

        /* Service Selector Grid */
        .service-selector-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .service-card-btn {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background-color: #f8fafc;
          border: 2px solid #e2e8f0;
          border-radius: 12px;
          padding: 16px;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .service-card-btn:hover {
          border-color: #93c5fd;
          background-color: #f0f7ff;
        }

        .service-card-btn.active {
          border-color: #003399;
          background-color: #eff6ff;
          box-shadow: 0 4px 14px rgba(0, 51, 153, 0.08);
        }

        .service-icon-wrap {
          color: #003399;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .service-title {
          display: block;
          font-size: 1rem;
          color: #0a1128;
          margin-bottom: 3px;
        }

        .service-sub {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          line-height: 1.4;
        }

        /* Form Styling */
        .form-section-title {
          font-size: 1rem;
          font-weight: 700;
          color: #003399;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin: 24px 0 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #1e293b;
        }

        .req {
          color: #dc2626;
        }

        .form-input {
          padding: 12px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-size: 0.95rem;
          color: #0a1128;
          outline: none;
          transition: border-color 0.2s ease;
          background-color: #ffffff;
        }

        .form-input:focus {
          border-color: #003399;
          box-shadow: 0 0 0 3px rgba(0, 51, 153, 0.1);
        }

        .service-fields-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .form-submit-row {
          margin-top: 28px;
          display: flex;
          justify-content: flex-end;
        }

        .btn-continue {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #003399;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 14px 32px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-continue:hover {
          background-color: #002277;
        }

        /* Calendar Picker */
        .calendar-grid-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          margin-bottom: 32px;
        }

        .picker-label {
          font-size: 1rem;
          font-weight: 700;
          color: #0a1128;
          margin-bottom: 14px;
        }

        .dates-pill-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .date-pill-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px;
          border: 2px solid #e2e8f0;
          border-radius: 10px;
          background-color: #f8fafc;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .date-pill-btn:hover {
          border-color: #93c5fd;
        }

        .date-pill-btn.active {
          border-color: #003399;
          background-color: #eff6ff;
        }

        .pill-day {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
        }

        .pill-date {
          font-size: 1rem;
          font-weight: 800;
          color: #0a1128;
        }

        .times-pill-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }

        .time-pill-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          background-color: #f8fafc;
          cursor: pointer;
          font-size: 0.92rem;
          font-weight: 600;
          color: #1e293b;
          transition: all 0.2s ease;
        }

        .time-pill-btn:hover {
          border-color: #93c5fd;
        }

        .time-pill-btn.active {
          border-color: #003399;
          background-color: #003399;
          color: #ffffff;
        }

        .booking-summary-banner {
          background-color: #f0f7ff;
          border: 1px solid #bfdbfe;
          border-radius: 14px;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .summary-tag {
          font-size: 0.78rem;
          font-weight: 800;
          color: #003399;
          letter-spacing: 1px;
        }

        .summary-details {
          font-size: 0.95rem;
          color: #334155;
          margin-top: 4px;
          line-height: 1.5;
        }

        .summary-date-highlight {
          color: #003399;
          font-weight: 700;
        }

        .btn-confirm-booking {
          background-color: #003399;
          color: #ffffff;
          font-size: 1.05rem;
          font-weight: 700;
          padding: 14px 28px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .btn-confirm-booking:hover {
          background-color: #002277;
        }

        /* Confirmed State */
        .confirmed-card {
          padding: 60px 40px;
        }

        .confirm-check-wrap {
          margin-bottom: 16px;
        }

        .confirm-eyebrow {
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #16a34a;
        }

        .confirm-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #0a1128;
          margin: 8px 0 12px;
        }

        .confirm-lead {
          font-size: 1.1rem;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .confirmed-details-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px 28px;
          max-width: 540px;
          margin: 0 auto 28px;
          text-align: left;
        }

        .detail-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid #e2e8f0;
          font-size: 0.92rem;
        }

        .detail-item:last-child {
          border-bottom: none;
        }

        .d-label {
          color: #64748b;
          font-weight: 600;
        }

        .d-val {
          color: #0a1128;
          font-weight: 700;
        }

        .what-happens-next-box {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 28px;
          max-width: 600px;
          margin: 0 auto 32px;
          text-align: left;
        }

        .next-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0a1128;
          margin-bottom: 20px;
          text-align: center;
        }

        .next-timeline {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .step-circle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #003399;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .step-text strong {
          display: block;
          font-size: 0.95rem;
          color: #0a1128;
          margin-bottom: 2px;
        }

        .step-text p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        .confirm-btn-row {
          display: flex;
          gap: 16px;
          justify-content: center;
        }

        .btn-home {
          background-color: #003399;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
        }

        .btn-fna {
          background-color: #e2e8f0;
          color: #0a1128;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .service-selector-grid,
          .calendar-grid-wrap,
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 2.2rem;
          }
          .booking-card {
            padding: 28px 20px;
          }
        }
      `}</style>
    </main>
  );
}
