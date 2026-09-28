import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface AboutAndWhyChooseProps {
  content: SiteContent;
}

const whyChoosePoints = [
  {
    number: '01',
    title: 'Licensed Esthetician',
    detail: 'Dedicated professional training and safe, attentive skincare practices in DeLand, FL.',
  },
  {
    number: '02',
    title: 'Personalized Treatment Plans',
    detail: 'Tailored around your unique complexion, lifestyle, and evolving skin goals.',
  },
  {
    number: '03',
    title: 'High-Quality Products',
    detail: 'Thoughtfully curated formulations chosen to nourish, balance, and support healthy skin.',
  },
  {
    number: '04',
    title: 'Relaxing, Boutique Experience',
    detail: 'An unhurried, peaceful studio sanctuary where you can truly unwind and reset.',
  },
  {
    number: '05',
    title: 'Results-Focused Approach',
    detail: 'Treatments selected to help bring out your natural radiance and long-term confidence.',
  },
  {
    number: '06',
    title: 'Individual Attention',
    detail: 'One-on-one care where you are heard, valued, and never rushed through your session.',
  },
];

export const AboutAndWhyChoose: React.FC<AboutAndWhyChooseProps> = ({ content }) => {
  const [showPhilosophyNote, setShowPhilosophyNote] = useState(false);

  return (
    <>
      {/* ABOUT NADIYA SECTION */}
      <section
        id="about"
        className="bg-[#FAF7F2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 w-full h-full border border-[#C5A880]/50 pointer-events-none"
                />
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F3EDE2] border border-[#E5DEC9] shadow-[0_20px_50px_-15px_rgba(28,25,23,0.1)]">
                  <img
                    src="/images/nadiya-esthetician.jpg"
                    alt="Nadiya Giordano — Licensed Esthetician at Skin by Nadiya in DeLand, FL"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1917]/75 via-[#1C1917]/25 to-transparent p-6 text-[#FAF7F2]">
                    <p className="font-serif-editorial text-2xl leading-tight">
                      {content.business.owner}
                    </p>
                    <p className="text-[10.5px] uppercase tracking-[0.22em] text-[#EBE3D5] mt-1">
                      {content.business.title} • {content.business.locationShort}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  MEET NADIYA
                </span>
              </div>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-[56px] text-[#1C1917] font-light leading-[1.08] uppercase">
                MY PASSION IS HELPING YOU{' '}
                <span className="italic font-normal normal-case block mt-1">
                  Feel Your Best.
                </span>
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#1C1917]/85 font-light leading-relaxed">
                <p>
                  “I&apos;m a licensed esthetician dedicated to helping you look and feel your best from the inside out.”
                </p>
                <p className="text-[#6E655F]">
                  “My approach is centered around personalized care, high-quality products, and treatments selected with your individual skin goals in mind.”
                </p>
              </div>

              {/* Three Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4 border-t border-[#E5DEC9]">
                <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-2">
                  <span className="font-serif-editorial italic text-lg text-[#C5A880] block">
                    01
                  </span>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    LICENSED &amp; EXPERIENCED
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E655F] font-light leading-relaxed">
                    Professional skincare knowledge with a personalized approach.
                  </p>
                </div>

                <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-2">
                  <span className="font-serif-editorial italic text-lg text-[#C5A880] block">
                    02
                  </span>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    PERSONALIZED CARE
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E655F] font-light leading-relaxed">
                    Every client and every skin journey is different.
                  </p>
                </div>

                <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-2">
                  <span className="font-serif-editorial italic text-lg text-[#C5A880] block">
                    03
                  </span>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    HIGH-QUALITY PRODUCTS
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E655F] font-light leading-relaxed">
                    Thoughtful products selected to support beautiful, healthy-looking skin.
                  </p>
                </div>
              </div>

              {/* Expandable Personal Note from Nadiya */}
              {showPhilosophyNote && (
                <div className="p-6 bg-[#F4EAE6]/60 border border-[#D4A59A]/40 space-y-3 animate-fade-in-up">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>A Personal Welcome from Nadiya Giordano</span>
                  </div>
                  <p className="text-sm text-[#6E655F] leading-relaxed font-light">
                    Welcome to <strong className="font-medium text-[#1C1917]">Skin by Nadiya</strong> in DeLand, Florida. Whether you are coming in for a restorative European Facial, non-invasive RF skin tightening, body contouring, or lash and brow artistry, my goal is for you to feel completely comfortable, cared for, and confident in your own skin.
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setShowPhilosophyNote((prev) => !prev)}
                  className="px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2.5 transition-colors"
                >
                  <span>GET TO KNOW NADIYA</span>
                  <span className="text-[#C5A880]">{showPhilosophyNote ? '−' : '+'}</span>
                </button>

                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 border border-[#1C1917]/35 hover:border-[#1C1917] text-[#1C1917] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <span>BOOK WITH NADIYA</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "WHY CHOOSE ME?" SECTION */}
      <section className="bg-[#F3EDE2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-14 md:mb-20 space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#C5A880]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                THE BOUTIQUE DIFFERENCE
              </span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light uppercase">
              WHY CHOOSE NADIYA?
            </h2>
          </div>

          {/* 01 - 06 Minimalist Numbered Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E5DEC9]">
            {whyChoosePoints.map((point) => (
              <div
                key={point.number}
                className="p-8 sm:p-10 bg-[#FAF7F2]/80 hover:bg-[#FAF7F2] border-r border-b border-[#E5DEC9] transition-colors flex flex-col justify-between gap-6 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif-editorial text-3xl sm:text-4xl italic text-[#C5A880] group-hover:translate-x-1 transition-transform">
                    {point.number}
                  </span>
                  <span className="w-8 h-[1px] bg-[#E5DEC9] group-hover:bg-[#C5A880] transition-colors" />
                </div>
                <div className="space-y-2.5">
                  <h3 className="font-serif-editorial text-2xl sm:text-[26px] text-[#1C1917] font-normal">
                    {point.number} — {point.title}
                  </h3>
                  <p className="text-sm text-[#6E655F] font-light leading-relaxed">
                    {point.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Highlight Quote-Style Statement */}
          <div className="mt-16 md:mt-24 relative bg-[#FAF7F2] border border-[#E5DEC9] p-10 sm:p-14 md:p-20 text-center overflow-hidden shadow-[0_20px_50px_-20px_rgba(28,25,23,0.07)]">
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute -top-6 left-1/2 -translate-x-1/2 font-serif-editorial text-[140px] text-[#EBE3D5]/60 leading-none"
            >
              “
            </div>
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="inline-block text-[10.5px] uppercase tracking-[0.28em] text-[#C5A880] font-semibold">
                WORDS TO LIVE BY
              </span>
              <blockquote className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light leading-[1.12]">
                <span className="block">Self care isn&apos;t selfish.</span>
                <span className="block italic font-normal text-[#D4A59A] mt-1">
                  It&apos;s necessary.
                </span>
              </blockquote>
              <div className="pt-2">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#1C1917] hover:text-[#C5A880] border-b border-[#1C1917] hover:border-[#C5A880] pb-1 transition-colors font-medium"
                >
                  <span>PRIORITIZE YOUR GLOW TODAY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
