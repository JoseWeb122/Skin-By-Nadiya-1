import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface HeroAndTrustProps {
  content: SiteContent;
}

export const HeroAndTrust: React.FC<HeroAndTrustProps> = ({ content }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28"
      >
        {/* Subtle ambient warm champagne glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 right-0 w-[550px] h-[550px] rounded-full bg-[#F4EAE6]/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-10 w-[420px] h-[420px] rounded-full bg-[#EBE3D5]/50 blur-3xl"
        />

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Editorial Typography Column */}
            <div className="lg:col-span-7 space-y-7 animate-fade-in-up">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  LICENSED ESTHETICIAN • DELAND, FL
                </span>
              </div>

              <h1 className="font-serif-editorial text-5xl sm:text-6xl md:text-7xl xl:text-[82px] text-[#1C1917] font-light leading-[0.98] tracking-[-0.02em]">
                <span className="block">YOUR SKIN.</span>
                <span className="block italic font-normal text-[#1C1917] mt-1">
                  YOUR CONFIDENCE.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-[19px] text-[#6E655F] font-light leading-[1.75] max-w-xl">
                Personalized aesthetic treatments designed to help you relax, rejuvenate, and reveal your natural glow.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_14px_30px_-10px_rgba(28,25,23,0.28)]"
                >
                  <span>BOOK YOUR APPOINTMENT</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </a>

                <a
                  href="#services"
                  onClick={scrollToServices}
                  className="px-8 py-4 bg-transparent border border-[#1C1917]/35 hover:border-[#1C1917] hover:bg-[#F3EDE2]/70 text-[#1C1917] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2.5 transition-all duration-300"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#6E655F]" />
                </a>
              </div>

              {/* Supporting trust line underneath buttons */}
              <div className="pt-3 flex items-center gap-4 border-t border-[#E5DEC9] max-w-lg">
                <span className="w-2 h-2 rounded-full bg-[#D4A59A]" />
                <p className="font-serif-editorial italic text-lg sm:text-xl text-[#1C1917] tracking-wide">
                  Real People. Real Results. Real Confidence.
                </p>
              </div>
            </div>

            {/* Right Asymmetric Editorial Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative offset champagne frame */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 sm:-inset-4 border border-[#C5A880]/40 rounded-t-[180px] rounded-b-[6px] translate-x-3 translate-y-3 pointer-events-none"
                />

                {/* Main Hero Image with soft top arch */}
                <div className="relative overflow-hidden rounded-t-[175px] rounded-b-[4px] border border-[#E5DEC9] bg-[#F3EDE2] aspect-[4/5] shadow-[0_24px_60px_-15px_rgba(28,25,23,0.12)]">
                  <img
                    src="/images/hero-glow.jpg"
                    alt="Woman with healthy, naturally glowing skin in warm golden sunlight — Skin by Nadiya in DeLand, FL"
                    className="w-full h-full object-cover animate-slow-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/30 via-transparent to-transparent" />

                  {/* Bottom inside editorial caption */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#FAF7F2]">
                    <div>
                      <span className="block text-[10px] uppercase tracking-[0.22em] text-[#EBE3D5]">
                        BOUTIQUE AESTHETICS STUDIO
                      </span>
                      <span className="font-serif-editorial italic text-xl sm:text-2xl">
                        Relax. Rejuvenate. Glow.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating New Client Special Badge */}
                {content.newClientSpecial.enabled && (
                  <a
                    href="#specials"
                    className="animate-float-gentle absolute -bottom-6 -left-3 sm:-left-7 bg-[#FAF7F2]/95 backdrop-blur-md border border-[#E5DEC9] px-5 py-4 shadow-[0_20px_40px_-15px_rgba(28,25,23,0.14)] group hover:border-[#C5A880] transition-colors"
                  >
                    <span className="block text-[9.5px] uppercase tracking-[0.22em] text-[#6E655F]">
                      NEW CLIENT SPECIAL
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917] font-medium">
                        {content.newClientSpecial.price}
                      </span>
                      <span className="text-xs uppercase tracking-[0.16em] text-[#1C1917] group-hover:text-[#C5A880] transition-colors">
                        {content.newClientSpecial.treatment} →
                      </span>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section
        aria-label="Studio Standards"
        className="bg-[#F3EDE2] border-y border-[#E5DEC9] py-5"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <ul className="flex flex-wrap items-center justify-center md:justify-between gap-y-3 gap-x-6 text-center">
            {[
              'LICENSED ESTHETICIAN',
              'PERSONALIZED CARE',
              'RESULTS-DRIVEN TREATMENTS',
              'HIGH-QUALITY PRODUCTS',
              'DELAND, FL',
            ].map((item, idx, arr) => (
              <React.Fragment key={item}>
                <li className="text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#1C1917] font-medium">
                  {item}
                </li>
                {idx < arr.length - 1 && (
                  <li
                    aria-hidden="true"
                    className="hidden lg:inline-block text-[#C5A880] text-xs"
                  >
                    •
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </section>

      {/* BRAND STATEMENT SECTION */}
      <section className="relative overflow-hidden bg-[#FAF7F2] py-20 md:py-28 lg:py-36">
        {/* Oversized Editorial Watermark */}
        <div
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-10 left-1/2 -translate-x-1/2 font-serif-editorial text-[90px] sm:text-[140px] lg:text-[190px] tracking-[0.12em] text-[#EBE3D5]/45 leading-none whitespace-nowrap"
        >
          POREFECTION
        </div>

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative">
                <div className="overflow-hidden border border-[#E5DEC9] bg-[#F3EDE2] aspect-[4/5] shadow-[0_20px_50px_-12px_rgba(28,25,23,0.08)]">
                  <img
                    src="/images/studio-sanctuary.jpg"
                    alt="Warm travertine skincare tray with botanical serums and plush ivory towels at Skin by Nadiya"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#6E655F] border-b border-[#E5DEC9] pb-3">
                  <span>POREFECTION AESTHETICS</span>
                  <span>DELAND, FLORIDA</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Statement Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  POREFECTION AESTHETICS
                </span>
              </div>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light leading-[1.08]">
                Healthy Skin.{' '}
                <span className="italic font-normal text-[#1C1917]">Happier You.</span>
              </h2>

              <blockquote className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917]/90 font-light leading-[1.55] border-l-2 border-[#D4A59A] pl-6 sm:pl-8">
                “Your skin deserves more than a one-size-fits-all approach. Nadiya provides personalized aesthetic treatments designed around your individual skin goals, helping you feel confident, refreshed, and comfortable in your own skin.”
              </blockquote>

              <p className="text-sm sm:text-base text-[#6E655F] leading-relaxed max-w-2xl">
                Every appointment at <strong className="font-medium text-[#1C1917]">Skin by Nadiya</strong> blends serene boutique wellness with results-driven skincare. Whether you are visiting for your very first customized facial or a targeted rejuvenation plan, your comfort and confidence come first.
              </p>

              {/* Brand Themes Strip */}
              <div className="pt-4">
                <span className="block text-[10px] uppercase tracking-[0.22em] text-[#9E948C] mb-3">
                  THE SKIN BY NADIYA PHILOSOPHY
                </span>
                <div className="flex flex-wrap gap-2">
                  {content.business.brandThemes.map((theme) => (
                    <span
                      key={theme}
                      className="px-3.5 py-1.5 bg-[#F3EDE2] border border-[#E5DEC9] text-[10.5px] uppercase tracking-[0.2em] text-[#1C1917]"
                    >
                      {theme}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
