import React, { useState, useEffect } from 'react';
import {
  Plus,
  Minus,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  SlidersHorizontal,
} from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface FaqAndContactFooterProps {
  content: SiteContent;
  preselectedService: string;
  onOpenCms: () => void;
}

export const FaqAndContactFooter: React.FC<FaqAndContactFooterProps> = ({
  content,
  preselectedService,
  onOpenCms,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceInterested, setServiceInterested] = useState('Signature European Facial ($95 New Client Special)');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'error' | 'success'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setServiceInterested(preselectedService);
    }
  }, [preselectedService]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('error');
      setErrorMessage('Please enter your name, email address, and a brief message so Nadiya can assist you.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    setFormStatus('success');
    setErrorMessage('');
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setFormStatus('idle');
  };

  return (
    <>
      {/* FAQ SECTION */}
      <section
        id="faq"
        className="bg-[#FAF7F2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]"
      >
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <span className="w-8 h-[1px] bg-[#C5A880]" />
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light">
              Your Questions, Answered
            </h2>
            <p className="text-sm sm:text-base text-[#6E655F] font-light">
              Everything you need to know before your visit to Skin by Nadiya in DeLand, Florida.
            </p>
          </div>

          {/* Accordion List */}
          <div className="divide-y divide-[#E5DEC9] border-y border-[#E5DEC9]">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div key={faq.id} className="py-6 sm:py-7">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 text-left group"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif-editorial italic text-lg text-[#C5A880] shrink-0">
                        0{index + 1}
                      </span>
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917] group-hover:text-[#6E655F] transition-colors font-normal">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="w-9 h-9 border border-[#E5DEC9] bg-[#F3EDE2]/70 flex items-center justify-center shrink-0 text-[#1C1917] group-hover:border-[#C5A880] transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-9 sm:pl-11 pr-4 pt-4 text-sm sm:text-base text-[#6E655F] font-light leading-relaxed animate-fade-in-up">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BOOKING CONVERSION SECTION */}
      <section className="relative bg-[#F3EDE2] py-20 md:py-28 lg:py-32 border-b border-[#E5DEC9] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute -bottom-10 left-1/2 -translate-x-1/2 font-serif-editorial text-[100px] sm:text-[160px] text-[#EBE3D5]/70 leading-none whitespace-nowrap"
        >
          CONFIDENCE
        </div>

        <div className="max-w-[1040px] mx-auto px-5 sm:px-8 lg:px-12 text-center relative z-10 space-y-7">
          <div className="inline-flex items-center gap-3 justify-center">
            <span className="w-8 h-[1px] bg-[#C5A880]" />
            <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
              YOUR GLOW AWAITS
            </span>
            <span className="w-8 h-[1px] bg-[#C5A880]" />
          </div>

          <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-[#1C1917] font-light leading-[1.06] uppercase">
            READY TO FEEL CONFIDENT IN YOUR SKIN?
          </h2>

          <p className="font-serif-editorial italic text-2xl sm:text-3xl text-[#6E655F] max-w-2xl mx-auto">
            “Let&apos;s create a treatment experience around your skin goals.”
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={content.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.22em] font-medium inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-md"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
            </a>

            <a
              href={content.business.phoneHref}
              className="px-9 py-4 bg-[#FAF7F2] border border-[#1C1917]/35 hover:border-[#1C1917] text-[#1C1917] text-xs uppercase tracking-[0.22em] font-medium inline-flex items-center justify-center gap-2.5 transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>CALL {content.business.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-[#FAF7F2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#C5A880]" />
                  <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                    GET IN TOUCH
                  </span>
                </div>
                <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light uppercase">
                  LET&apos;S CONNECT
                </h2>
                <p className="text-sm sm:text-base text-[#6E655F] font-light leading-relaxed">
                  Have a question about a treatment, the New Client Special, or the Lash Model opportunity? Reach out directly or book your session online.
                </p>
              </div>

              {/* Nadiya Profile Card */}
              <div className="p-7 bg-[#F3EDE2] border border-[#E5DEC9] space-y-5">
                <div className="border-b border-[#E5DEC9] pb-4">
                  <h3 className="font-serif-editorial text-3xl text-[#1C1917]">
                    {content.business.owner}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.22em] text-[#C5A880] font-semibold mt-1">
                    {content.business.title}
                  </p>
                  <p className="text-sm text-[#6E655F] mt-1">
                    {content.business.locationFull}
                  </p>
                </div>

                <div className="space-y-3.5 text-sm">
                  <a
                    href={content.business.phoneHref}
                    className="flex items-center gap-3.5 text-[#1C1917] hover:text-[#C5A880] transition-colors"
                  >
                    <span className="w-9 h-9 bg-[#FAF7F2] border border-[#E5DEC9] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#C5A880]" />
                    </span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-[#6E655F]">
                        PHONE
                      </span>
                      <span className="font-medium">{content.business.phoneDisplay}</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${content.business.email}`}
                    className="flex items-center gap-3.5 text-[#1C1917] hover:text-[#C5A880] transition-colors break-all"
                  >
                    <span className="w-9 h-9 bg-[#FAF7F2] border border-[#E5DEC9] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#C5A880]" />
                    </span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-[#6E655F]">
                        EMAIL
                      </span>
                      <span className="font-medium">{content.business.email}</span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 text-[#1C1917]">
                    <span className="w-9 h-9 bg-[#FAF7F2] border border-[#E5DEC9] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#C5A880]" />
                    </span>
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.18em] text-[#6E655F]">
                        LOCATION
                      </span>
                      <span className="font-medium">{content.business.locationFull}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5DEC9] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={content.business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-[11px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Book on Booksy</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </a>

                  <a
                    href={content.business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 bg-[#FAF7F2] border border-[#E5DEC9] hover:border-[#1C1917] text-[#1C1917] text-[11px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Facebook Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-[#F3EDE2]/60 border border-[#E5DEC9] p-8 sm:p-10 lg:p-12">
                <h3 className="font-serif-editorial text-3xl text-[#1C1917] mb-2">
                  Send a Message
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6E655F] mb-8">
                  WE WILL GET BACK TO YOU AS SOON AS POSSIBLE
                </p>

                {formStatus === 'success' ? (
                  <div className="p-8 bg-[#FAF7F2] border border-[#4E6E58]/40 space-y-5 text-center animate-fade-in-up">
                    <CheckCircle2 className="w-10 h-10 text-[#4E6E58] mx-auto" />
                    <h4 className="font-serif-editorial text-3xl text-[#1C1917]">
                      Thank You, {name}
                    </h4>
                    <p className="text-sm text-[#6E655F] max-w-md mx-auto leading-relaxed">
                      Your inquiry regarding <strong className="text-[#1C1917]">{serviceInterested}</strong> has been prepared. You can also send it directly via your email client or book immediately on Booksy below.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={`mailto:${content.business.email}?subject=${encodeURIComponent(
                          `Inquiry: ${serviceInterested} — ${name}`
                        )}&body=${encodeURIComponent(
                          `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${serviceInterested}\n\nMessage:\n${message}`
                        )}`}
                        className="px-6 py-3 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium inline-flex items-center gap-2"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span>Send via Email App</span>
                      </a>
                      <a
                        href={content.business.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-[#1C1917] text-[#1C1917] text-xs uppercase tracking-[0.18em] font-medium inline-flex items-center gap-2"
                      >
                        <span>Book on Booksy</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs uppercase tracking-wider text-[#6E655F] underline ml-2"
                      >
                        Send Another Message
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} noValidate className="space-y-5">
                    {formStatus === 'error' && (
                      <div className="p-4 bg-[#9E4747]/10 border border-[#9E4747] text-[#9E4747] text-xs flex items-center gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#1C1917] font-medium mb-2"
                        >
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E5DEC9] focus:border-[#1C1917] focus:outline-none text-sm text-[#1C1917]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#1C1917] font-medium mb-2"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E5DEC9] focus:border-[#1C1917] focus:outline-none text-sm text-[#1C1917]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#1C1917] font-medium mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E5DEC9] focus:border-[#1C1917] focus:outline-none text-sm text-[#1C1917]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-[11px] uppercase tracking-[0.18em] text-[#1C1917] font-medium mb-2"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="contact-service"
                          value={serviceInterested}
                          onChange={(e) => setServiceInterested(e.target.value)}
                          className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E5DEC9] focus:border-[#1C1917] focus:outline-none text-sm text-[#1C1917]"
                        >
                          <option value="Signature European Facial ($95 New Client Special)">
                            Signature European Facial ($95 New Client Special)
                          </option>
                          <option value="Customized Facials">Customized Facials</option>
                          <option value="RF Skin Tightening">RF Skin Tightening</option>
                          <option value="Ultrasonic Cavitation / Body Contouring">
                            Ultrasonic Cavitation / Body Contouring
                          </option>
                          <option value="Lash Lift Services">Lash Lift Services</option>
                          <option value="Brow Lamination Services">Brow Lamination Services</option>
                          <option value="Lash Model Opportunity — Classic Lash Extensions ($100)">
                            Lash Model Opportunity — Classic Lash Extensions ($100)
                          </option>
                          <option value="Referral Promotion ($20 Toward RF Treatment)">
                            Referral Promotion ($20 Toward RF Treatment)
                          </option>
                          <option value="General Skincare Inquiry">General Skincare Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-[11px] uppercase tracking-[0.18em] text-[#1C1917] font-medium mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Share your skin goals, questions, or preferred appointment availability..."
                        className="w-full px-4 py-3.5 bg-[#FAF7F2] border border-[#E5DEC9] focus:border-[#1C1917] focus:outline-none text-sm text-[#1C1917]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-10 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.22em] font-medium transition-colors cursor-pointer"
                    >
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="bg-[#F3EDE2] py-16 md:py-24 border-b border-[#E5DEC9]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  LOCAL BOUTIQUE STUDIO
                </span>
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1917] font-light uppercase">
                SERVING DELAND, FL
              </h2>
              <p className="text-base sm:text-lg text-[#6E655F] font-light leading-relaxed max-w-xl">
                “Your local destination for personalized skincare, aesthetics, and self-care.”
              </p>
              <div className="pt-2 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#1C1917] font-medium">
                <span>LOCATION:</span>
                <span className="px-3.5 py-1.5 bg-[#FAF7F2] border border-[#E5DEC9]">
                  DeLand, Florida
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="border border-[#E5DEC9] bg-[#FAF7F2] p-2 shadow-sm">
                <iframe
                  title="Map of DeLand, Florida"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-81.355%2C28.985%2C-81.255%2C29.065&layer=mapnik"
                  className="w-full h-64 sm:h-72 grayscale contrast-90 opacity-90"
                  loading="lazy"
                />
                <div className="px-4 py-2.5 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#6E655F]">
                  <span>DeLand, Florida</span>
                  <span>By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DARK CHARCOAL LUXURY FOOTER */}
      <footer className="bg-[#1C1917] text-[#FAF7F2] pt-20 pb-28 md:pb-16 border-t border-[#332E2A]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#FAF7F2]/10">
            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <span className="font-serif-editorial text-3xl tracking-[0.12em] text-[#FAF7F2] block">
                  SKIN BY NADIYA
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-[#C5A880] block mt-1">
                  LICENSED ESTHETICIAN
                </span>
              </div>
              <p className="font-serif-editorial italic text-2xl text-[#EBE3D5]">
                Your Skin. Your Confidence.
              </p>
              <p className="text-xs text-[#9E948C] leading-relaxed max-w-xs">
                Personalized aesthetic treatments designed to help you relax, rejuvenate, and reveal your natural glow in DeLand, FL.
              </p>
            </div>

            {/* Navigation Column */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[#C5A880] font-semibold">
                NAVIGATION
              </h3>
              <ul className="space-y-2.5 text-xs uppercase tracking-[0.18em]">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#services' },
                  { label: 'Specials', href: '#specials' },
                  { label: 'FAQ', href: '#faq' },
                  { label: 'Contact', href: '#contact' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-[#EBE3D5]/80 hover:text-[#FAF7F2] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[#C5A880] font-semibold">
                CONTACT &amp; LOCATION
              </h3>
              <ul className="space-y-3 text-sm text-[#EBE3D5]/85 font-light">
                <li>
                  <a
                    href={content.business.phoneHref}
                    className="hover:text-[#C5A880] transition-colors"
                  >
                    {content.business.phoneDisplay}
                  </a>
                </li>
                <li className="break-all">
                  <a
                    href={`mailto:${content.business.email}`}
                    className="hover:text-[#C5A880] transition-colors"
                  >
                    {content.business.email}
                  </a>
                </li>
                <li>{content.business.locationShort}</li>
                <li className="pt-1">
                  <a
                    href={content.business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-[#C5A880] hover:text-[#FAF7F2]"
                  >
                    <span>Facebook</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Booking Column */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.22em] text-[#C5A880] font-semibold">
                APPOINTMENTS
              </h3>
              <a
                href={content.business.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#FAF7F2] text-[#1C1917] hover:bg-[#EBE3D5] text-[11px] uppercase tracking-[0.16em] font-medium flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenCms}
                className="w-full py-2.5 px-3 border border-[#FAF7F2]/15 hover:border-[#C5A880] text-[#9E948C] hover:text-[#FAF7F2] text-[10px] uppercase tracking-[0.16em] flex items-center justify-center gap-1.5 transition-colors"
              >
                <SlidersHorizontal className="w-3 h-3 text-[#C5A880]" />
                <span>Studio CMS Editor</span>
              </button>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E948C]">
            <p>© 2026 Skin by Nadiya. All rights reserved.</p>
            <p className="text-[11px] uppercase tracking-[0.18em]">
              Nadiya Giordano • Licensed Esthetician • DeLand, FL
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY BOTTOM BOOKING BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E5DEC9] px-4 py-3 flex items-center gap-3 shadow-[0_-8px_25px_rgba(28,25,23,0.08)]">
        <a
          href={content.business.phoneHref}
          className="py-3 px-4 border border-[#1C1917]/30 text-[#1C1917] text-[11px] uppercase tracking-[0.15em] font-medium flex items-center justify-center gap-1.5 shrink-0"
        >
          <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>Call</span>
        </a>
        <a
          href={content.business.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 px-5 bg-[#1C1917] text-[#FAF7F2] text-[11px] uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2"
        >
          <span>BOOK AN APPOINTMENT</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
        </a>
      </div>
    </>
  );
};
