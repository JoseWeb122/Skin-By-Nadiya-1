import React, { useState } from 'react';
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  SlidersHorizontal,
} from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface ResultsAndTestimonialsProps {
  content: SiteContent;
  onOpenLightbox: (index: number) => void;
  onOpenCms: () => void;
}

export const ResultsAndTestimonials: React.FC<ResultsAndTestimonialsProps> = ({
  content,
  onOpenLightbox,
  onOpenCms,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length
    );
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % content.testimonials.length);
  };

  return (
    <>
      {/* REAL RESULTS / SOCIAL PROOF GALLERY */}
      <section
        id="results"
        className="bg-[#F3EDE2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  THE STUDIO PORTFOLIO
                </span>
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light leading-[1.04] uppercase">
                <span className="block">REAL PEOPLE.</span>
                <span className="block italic font-normal normal-case text-[#1C1917] mt-1">
                  Real Results.
                </span>
              </h2>
            </div>

            <div className="max-w-md space-y-2">
              <p className="font-serif-editorial italic text-2xl text-[#1C1917]">
                “Beautiful skin journeys deserve to be celebrated.”
              </p>
              <p className="text-xs text-[#6E655F] leading-relaxed">
                Explore our studio treatment atmosphere below. Client before-and-after photography is curated with client permission—follow Nadiya on Facebook for the newest transformations.
              </p>
            </div>
          </div>

          {/* 6-Item Editorial Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {content.gallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(idx)}
                className="group cursor-pointer bg-[#FAF7F2] border border-[#E5DEC9] hover:border-[#C5A880] transition-all duration-500 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EBE3D5]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1C1917]/0 group-hover:bg-[#1C1917]/25 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-12 h-12 rounded-full bg-[#FAF7F2]/95 text-[#1C1917] flex items-center justify-center shadow-lg">
                      <Expand className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="absolute top-3.5 left-3.5 bg-[#FAF7F2]/90 backdrop-blur-sm px-3 py-1 border border-[#E5DEC9]">
                    <span className="text-[9.5px] uppercase tracking-[0.2em] text-[#1C1917] font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-editorial text-2xl text-[#1C1917]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6E655F] font-light leading-relaxed">
                    {item.caption}
                  </p>
                  <p className="pt-2 text-[10px] uppercase tracking-[0.16em] text-[#9E948C] border-t border-[#E5DEC9]/70">
                    {item.isPlaceholderNote}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Strip -> FOLLOW NADIYA */}
          <div className="mt-14 bg-[#FAF7F2] border border-[#E5DEC9] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <span className="text-[10.5px] uppercase tracking-[0.24em] text-[#C5A880] font-semibold block">
                STAY CONNECTED ON SOCIAL
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917]">
                Follow Skin by Nadiya on Facebook for Real Client Updates, Giveaways &amp; Availability
              </h3>
            </div>

            <a
              href={content.business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2.5 transition-colors"
            >
              <span>FOLLOW NADIYA</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-[#FAF7F2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  CLIENT REFLECTIONS
                </span>
              </div>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#1C1917] font-light uppercase">
                KIND WORDS FROM CLIENTS
              </h2>
            </div>

            {/* Slider Controls & CMS Edit Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCms}
                className="px-4 py-2.5 border border-[#E5DEC9] bg-[#F3EDE2] hover:bg-[#EBE3D5] text-xs uppercase tracking-[0.16em] text-[#6E655F] hover:text-[#1C1917] inline-flex items-center gap-1.5 transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Update Testimonials</span>
              </button>
              <button
                onClick={handlePrevSlide}
                className="w-11 h-11 border border-[#E5DEC9] bg-[#F3EDE2]/60 hover:bg-[#1C1917] hover:text-[#FAF7F2] text-[#1C1917] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="w-11 h-11 border border-[#E5DEC9] bg-[#F3EDE2]/60 hover:bg-[#1C1917] hover:text-[#FAF7F2] text-[#1C1917] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Three Placeholder Cards Grid (with active highlight synced to slider) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {content.testimonials.map((item, idx) => {
              const isSelected = idx === activeSlide;
              return (
                <article
                  key={item.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`cursor-pointer p-8 sm:p-10 border transition-all duration-500 flex flex-col justify-between min-h-[290px] ${
                    isSelected
                      ? 'bg-[#F3EDE2] border-[#C5A880] shadow-[0_18px_40px_-18px_rgba(28,25,23,0.09)]'
                      : 'bg-[#FAF7F2] border-[#E5DEC9] hover:border-[#C5A880]/60'
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="font-serif-editorial text-4xl text-[#C5A880] leading-none">
                        “
                      </span>
                      {item.isPlaceholder && (
                        <span className="px-2.5 py-1 bg-[#FAF7F2] border border-[#E5DEC9] text-[9.5px] uppercase tracking-[0.18em] text-[#9E948C]">
                          Placeholder Slot 0{idx + 1}
                        </span>
                      )}
                    </div>

                    <blockquote className="font-serif-editorial italic text-2xl sm:text-3xl text-[#1C1917] font-light leading-relaxed">
                      “{item.quote}”
                    </blockquote>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E5DEC9] flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                        {item.clientLabel}
                      </p>
                      <p className="text-xs text-[#6E655F] mt-0.5">{item.treatmentLabel}</p>
                    </div>
                    <span className="font-serif-editorial italic text-sm text-[#9E948C]">
                      0{idx + 1}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELF-CARE EDITORIAL SECTION */}
      <section className="relative bg-[#F4EAE6] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9] overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Editorial Statement */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#C5A880]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                  THE RITUAL OF WELLNESS
                </span>
              </div>

              <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-[68px] text-[#1C1917] font-light leading-[1.02] uppercase">
                <span className="block">SELF CARE ISN&apos;T SELFISH.</span>
                <span className="block italic font-normal normal-case text-[#1C1917] mt-1">
                  It&apos;s Necessary.
                </span>
              </h2>

              <p className="font-serif-editorial text-2xl sm:text-3xl text-[#6E655F] font-light leading-relaxed max-w-xl">
                “Make time to slow down, reset, and invest in yourself.”
              </p>

              <div className="pt-3">
                <a
                  href={content.business.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-sm"
                >
                  <span>BOOK YOUR SELF-CARE SESSION</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                </a>
              </div>
            </div>

            {/* Lifestyle Skincare Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 border border-[#C5A880]/40 -translate-x-3 translate-y-3 pointer-events-none"
                />
                <div className="relative aspect-[4/5] overflow-hidden border border-[#E5DEC9] bg-[#FAF7F2] shadow-lg">
                  <img
                    src="/images/studio-sanctuary.jpg"
                    alt="Calm luxury self-care skincare studio environment in DeLand, FL"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
