import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface ServicesAndRfSectionProps {
  content: SiteContent;
}

const rfBenefits = [
  {
    number: '01',
    title: 'TIGHTENS & FIRMS',
    description: 'Helps improve the appearance of loose skin.',
  },
  {
    number: '02',
    title: 'SUPPORTS COLLAGEN',
    description: 'Stimulates collagen and elastin production.',
  },
  {
    number: '03',
    title: 'SMOOTHER-LOOKING SKIN',
    description: 'Helps reduce the appearance of fine lines and wrinkles.',
  },
  {
    number: '04',
    title: 'IMPROVED TEXTURE',
    description: 'Helps improve the appearance of skin texture and tone.',
  },
  {
    number: '05',
    title: 'NO DOWNTIME',
    description: 'A non-invasive treatment designed to fit comfortably into your lifestyle.',
  },
];

export const ServicesAndRfSection: React.FC<ServicesAndRfSectionProps> = ({ content }) => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('FACIALS');

  const handleSelectCategoryAndScroll = (categoryKey: string) => {
    setSelectedCategoryKey(categoryKey);
    const explorerEl = document.getElementById('treatment-categories-explorer');
    if (explorerEl) {
      explorerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeCategory =
    content.treatmentCategories.find((c) => c.key === selectedCategoryKey) ||
    content.treatmentCategories[0];

  return (
    <>
      {/* SERVICES PREVIEW SECTION */}
      <section
        id="services"
        className="bg-[#F3EDE2] border-t border-[#E5DEC9] py-20 md:py-28 lg:py-36"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-5 mb-16 md:mb-20">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                CURATED TREATMENT MENU
              </span>
              <span className="w-8 h-[1px] bg-[#C5A880]" />
            </div>

            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-[56px] text-[#1C1917] font-light leading-[1.08] uppercase">
              AESTHETIC TREATMENTS
              <span className="block italic font-normal normal-case mt-1">
                That Bring Out Your Natural Beauty
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6E655F] font-light leading-relaxed">
              From customized facials to skin tightening and body contouring, every treatment is designed with your skin goals and overall confidence in mind.
            </p>
          </div>

          {/* 5 Premium Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.servicesPreview.map((service, index) => {
              const isWideCard = index === 0;
              return (
                <article
                  key={service.id}
                  className={`group bg-[#FAF7F2] border border-[#E5DEC9] hover:border-[#C5A880] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-[0_14px_35px_-18px_rgba(28,25,23,0.08)] hover:-translate-y-1 ${
                    isWideCard ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#EBE3D5]">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 border border-[#E5DEC9]">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#1C1917] font-medium">
                          0{index + 1} • {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Text Body */}
                    <div className="p-7 sm:p-8 space-y-3.5">
                      <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917] tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-[15px] text-[#6E655F] leading-relaxed font-light">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer CTA */}
                  <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-[#E5DEC9]/70 flex items-center justify-between">
                    <button
                      onClick={() => handleSelectCategoryAndScroll(service.categoryKey)}
                      className="text-xs uppercase tracking-[0.2em] text-[#1C1917] font-medium group-hover:text-[#C5A880] inline-flex items-center gap-2 transition-colors"
                    >
                      <span>{service.ctaText}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>

                    <a
                      href={content.business.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] uppercase tracking-[0.16em] text-[#6E655F] hover:text-[#1C1917] inline-flex items-center gap-1"
                      title={`Book ${service.title} on Booksy`}
                    >
                      <span>Book</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}

            {/* 6th Bespoke Consultation Card to complete the 3x2 editorial grid harmoniously */}
            <article className="bg-[#1C1917] text-[#FAF7F2] border border-[#332E2A] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-[#C5A880]/10 blur-2xl"
              />
              <div className="space-y-4 relative z-10">
                <span className="inline-block text-[10px] uppercase tracking-[0.24em] text-[#C5A880]">
                  PERSONALIZED GUIDANCE
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#FAF7F2] font-light leading-tight">
                  Not Sure Where to Begin Your Skin Journey?
                </h3>
                <p className="text-sm text-[#EBE3D5]/80 font-light leading-relaxed">
                  Every complexion is unique. Book our New Client Signature European Facial ($95) or reach out directly so Nadiya can tailor a treatment plan around your goals.
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-[#FAF7F2]/15 space-y-3 relative z-10">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 bg-[#FAF7F2] text-[#1C1917] hover:bg-[#EBE3D5] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURED RF TREATMENT SECTION */}
      <section className="relative bg-[#1C1917] text-[#FAF7F2] py-20 md:py-28 lg:py-36 overflow-hidden">
        {/* Subtle warm radial glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#D4A59A]/10 blur-3xl"
        />

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Editorial Copy & Benefits */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#C5A880] font-medium">
                  SIGNATURE MODALITY • NON-INVASIVE REJUVENATION
                </span>
              </div>

              <div>
                <h2 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl text-[#FAF7F2] font-light leading-[0.98] tracking-tight">
                  <span className="block">TIGHTER.</span>
                  <span className="block italic text-[#EBE3D5]">SMOOTHER.</span>
                  <span className="block">BRIGHTER.</span>
                </h2>
                <p className="font-serif-editorial text-2xl sm:text-3xl text-[#D4A59A] italic mt-4">
                  Discover the benefits of RF skin tightening.
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#EBE3D5]/85 font-light leading-relaxed max-w-2xl">
                RF, or radiofrequency, is a non-invasive skin rejuvenation treatment that uses gentle heat energy to stimulate your body&apos;s natural collagen and elastin production.
              </p>

              {/* 5 Benefit Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {rfBenefits.map((benefit, index) => (
                  <div
                    key={benefit.title}
                    className={`p-5 bg-[#26221F] border border-[#FAF7F2]/10 hover:border-[#C5A880]/50 transition-colors ${
                      index === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">
                        {benefit.title}
                      </h3>
                      <span className="font-serif-editorial italic text-sm text-[#C5A880]">
                        {benefit.number}
                      </span>
                    </div>
                    <p className="text-sm text-[#EBE3D5]/75 font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA & Disclaimer */}
              <div className="pt-4 space-y-4">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#FAF7F2] text-[#1C1917] hover:bg-[#EBE3D5] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                >
                  <span>BOOK AN RF TREATMENT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1C1917]" />
                </a>

                <p className="text-xs text-[#9E948C] italic leading-relaxed">
                  *Individual results may vary. Treatment suitability will be discussed during your appointment.
                </p>
              </div>
            </div>

            {/* Right Close-Up Skincare Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 border border-[#C5A880]/30 translate-x-3 translate-y-3 pointer-events-none"
                />
                <div className="relative aspect-[4/5] overflow-hidden border border-[#FAF7F2]/15 bg-[#26221F]">
                  <img
                    src="/images/rf-treatment.jpg"
                    alt="Close-up of non-invasive RF radiofrequency skin tightening facial treatment"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#C5A880] block">
                      COLLAGEN & ELASTIN SUPPORT
                    </span>
                    <p className="font-serif-editorial text-2xl text-[#FAF7F2]">
                      Gentle warmth. Zero downtime. Natural firmness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE TREATMENT CATEGORIES EXPLORER */}
      <section
        id="treatment-categories-explorer"
        className="bg-[#FAF7F2] py-20 md:py-28 lg:py-32 border-b border-[#E5DEC9]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  INTERACTIVE TREATMENT GUIDE
                </span>
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1917] font-light">
                Explore Treatment Categories
              </h2>
            </div>
            <p className="text-sm text-[#6E655F] max-w-md font-light">
              Select any category below to view detailed treatment descriptions, who it may be suitable for, and key aesthetic benefits.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div
            role="tablist"
            aria-label="Treatment Categories"
            className="flex flex-wrap border-b border-[#E5DEC9] mb-12 gap-2 sm:gap-4"
          >
            {content.treatmentCategories.map((cat) => {
              const isSelected = cat.key === activeCategory.key;
              return (
                <button
                  key={cat.key}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategoryKey(cat.key)}
                  className={`px-5 py-4 text-xs uppercase tracking-[0.2em] transition-all border-b-2 -mb-[1px] ${
                    isSelected
                      ? 'border-[#1C1917] bg-[#F3EDE2] text-[#1C1917] font-semibold'
                      : 'border-transparent text-[#6E655F] hover:text-[#1C1917] hover:bg-[#F3EDE2]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Active Category Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-[#F3EDE2]/60 border border-[#E5DEC9] p-6 sm:p-10 lg:p-12">
            {/* Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden border border-[#E5DEC9] bg-[#EBE3D5]">
                <img
                  src={activeCategory.image}
                  alt={activeCategory.imageAlt}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                {activeCategory.featuredOffer && (
                  <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/95 backdrop-blur-sm p-4 border border-[#E5DEC9] flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span className="text-xs text-[#1C1917] font-medium">
                      {activeCategory.featuredOffer}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#C5A880] font-semibold">
                  {activeCategory.label}
                </span>
                <h3 className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl text-[#1C1917] font-light leading-tight">
                  {activeCategory.title}
                </h3>
                <p className="font-serif-editorial italic text-xl text-[#6E655F]">
                  {activeCategory.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#1C1917]/85 font-light leading-relaxed">
                {activeCategory.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#E5DEC9]">
                {/* Who It May Be Suitable For */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    WHO IT MAY BE SUITABLE FOR
                  </h4>
                  <ul className="space-y-2.5">
                    {activeCategory.suitableFor.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6E655F] leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4A59A] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    KEY BENEFITS
                  </h4>
                  <ul className="space-y-2.5">
                    {activeCategory.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6E655F] leading-relaxed"
                      >
                        <Check className="w-4 h-4 text-[#C5A880] mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5DEC9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2.5 transition-colors"
                >
                  <span>{activeCategory.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </a>
                <span className="text-[11px] text-[#9E948C] italic">
                  Individual results may vary. Customized during your consultation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
