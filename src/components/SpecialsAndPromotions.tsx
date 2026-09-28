import React from 'react';
import { ArrowUpRight, Check, Gift, Sparkles, Clock, SlidersHorizontal } from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface SpecialsAndPromotionsProps {
  content: SiteContent;
  onSelectContactService: (serviceName: string) => void;
  onOpenCms: () => void;
}

export const SpecialsAndPromotions: React.FC<SpecialsAndPromotionsProps> = ({
  content,
  onSelectContactService,
  onOpenCms,
}) => {
  const handleJumpToContactWithService = (serviceName: string) => {
    onSelectContactService(serviceName);
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="specials"
      className="bg-[#FAF7F2] py-20 md:py-28 lg:py-36 border-b border-[#E5DEC9]"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 md:space-y-24">
        {/* 1. NEW CLIENT SPECIAL */}
        {content.newClientSpecial.enabled && (
          <div className="relative bg-[#F3EDE2] border border-[#E5DEC9] overflow-hidden shadow-[0_24px_60px_-20px_rgba(28,25,23,0.09)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              {/* Left Editorial Content */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 space-y-6">
                <div className="inline-flex items-center gap-3">
                  <span className="w-8 h-[1px] bg-[#C5A880]" />
                  <span className="text-xs uppercase tracking-[0.24em] text-[#6E655F] font-semibold">
                    {content.newClientSpecial.eyebrow}
                  </span>
                </div>

                <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1917] font-light leading-[1.08] uppercase">
                  {content.newClientSpecial.headline}
                </h2>

                {/* Prominent Luxury Price & Treatment */}
                <div className="py-5 px-6 sm:px-8 bg-[#FAF7F2] border border-[#E5DEC9] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="font-serif-editorial text-6xl sm:text-7xl text-[#1C1917] font-light leading-none tracking-tight">
                    {content.newClientSpecial.price}
                  </div>
                  <div className="h-[1px] sm:h-12 sm:w-[1px] bg-[#E5DEC9]" />
                  <div>
                    <span className="block text-[10.5px] uppercase tracking-[0.22em] text-[#C5A880] font-semibold">
                      SIGNATURE TREATMENT
                    </span>
                    <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1917] tracking-wide mt-0.5">
                      {content.newClientSpecial.treatment}
                    </h3>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-[#6E655F] font-light leading-relaxed max-w-xl">
                  “{content.newClientSpecial.description}”
                </p>

                <div className="pt-2 space-y-3">
                  <a
                    href={content.business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
                  >
                    <span>{content.newClientSpecial.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
                  </a>

                  <p className="text-xs text-[#6E655F] italic block">
                    {content.newClientSpecial.secondaryText}
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5 h-full min-h-[340px] lg:min-h-[520px] relative overflow-hidden bg-[#EBE3D5]">
                <img
                  src="/images/european-facial.jpg"
                  alt="Signature European Facial New Client Special at Skin by Nadiya"
                  className="w-full h-full object-cover inset-0 lg:absolute"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#F3EDE2]/30 lg:to-transparent" />
              </div>
            </div>
          </div>
        )}

        {/* 2. GIVEAWAY / PROMOTIONAL SECTION */}
        {content.giveawayPromo.enabled && (
          <div className="bg-[#1C1917] text-[#FAF7F2] border border-[#332E2A] p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#C5A880]/10 blur-3xl"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#26221F] border border-[#C5A880]/40 text-[10px] uppercase tracking-[0.22em] text-[#C5A880]">
                    {content.giveawayPromo.subcopy}
                  </span>
                  <span className="text-xs uppercase tracking-[0.26em] text-[#D4A59A] font-medium">
                    {content.giveawayPromo.tagline}
                  </span>
                </div>

                <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl text-[#FAF7F2] font-light leading-[1.05] uppercase">
                  {content.giveawayPromo.headline}
                </h2>

                {/* How to Enter Steps 01 - 03 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {content.giveawayPromo.steps.map((step) => (
                    <div
                      key={step.number}
                      className="p-5 bg-[#26221F] border border-[#FAF7F2]/10 space-y-2"
                    >
                      <span className="font-serif-editorial italic text-3xl text-[#C5A880] block">
                        {step.number}
                      </span>
                      <p className="text-sm text-[#FAF7F2] font-medium leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href={content.business.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-[#FAF7F2] text-[#1C1917] hover:bg-[#EBE3D5] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2.5 transition-colors"
                  >
                    <span>{content.giveawayPromo.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <button
                    onClick={onOpenCms}
                    className="px-4 py-3 border border-[#FAF7F2]/20 hover:border-[#C5A880] text-[#EBE3D5] text-[11px] uppercase tracking-[0.16em] inline-flex items-center gap-2 transition-colors"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Edit Campaign Dates</span>
                  </button>
                </div>
              </div>

              {/* Editable Giveaway Schedule Box */}
              <div className="lg:col-span-5">
                <div className="p-7 sm:p-8 bg-[#26221F] border border-[#FAF7F2]/15 space-y-6">
                  <div className="flex items-center justify-between border-b border-[#FAF7F2]/10 pb-4">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-[#C5A880]" />
                      <span className="text-xs uppercase tracking-[0.2em] text-[#FAF7F2] font-semibold">
                        GIVEAWAY SCHEDULE
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#9E948C]">
                      CMS Editable
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-[#1C1917] border border-[#FAF7F2]/10 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.16em] text-[#EBE3D5]/75">
                        Giveaway deadline:
                      </span>
                      <span className="font-serif-editorial text-xl text-[#C5A880] font-medium">
                        {content.giveawayPromo.deadlineDate}
                      </span>
                    </div>

                    <div className="p-4 bg-[#1C1917] border border-[#FAF7F2]/10 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.16em] text-[#EBE3D5]/75">
                        Winner announcement:
                      </span>
                      <span className="font-serif-editorial text-xl text-[#C5A880] font-medium">
                        {content.giveawayPromo.winnerAnnouncementDate}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[#9E948C] leading-relaxed">
                    Check Nadiya&apos;s official Facebook page for active giveaway posts, entry rules, and current announcement updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. REFERRAL PROMOTION & 4. LASH MODEL PROMOTION SIDE-BY-SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* REFERRAL PROMOTION CARD */}
          {content.referralPromo.enabled && (
            <div className="lg:col-span-5 bg-[#F4EAE6]/70 border border-[#D4A59A]/40 p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#6E655F] font-semibold">
                    CLIENT APPRECIATION
                  </span>
                </div>

                <h3 className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1917] font-light leading-tight uppercase">
                  {content.referralPromo.headline}
                </h3>

                <div className="py-4 px-5 bg-[#FAF7F2] border border-[#E5DEC9] inline-block">
                  <span className="font-serif-editorial text-4xl text-[#1C1917] font-medium">
                    {content.referralPromo.rewardAmount}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#6E655F] ml-3">
                    TOWARD YOUR NEXT RF TREATMENT
                  </span>
                </div>

                <p className="text-base text-[#1C1917]/85 font-light leading-relaxed">
                  “{content.referralPromo.copy}”
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-[#D4A59A]/30">
                <button
                  onClick={() =>
                    handleJumpToContactWithService('Referral Promotion ($20 Toward RF Treatment)')
                  }
                  className="w-full py-4 px-6 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{content.referralPromo.ctaText}</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* LASH MODEL PROMOTION CARD */}
          {content.lashModelPromo.enabled && (
            <div className="lg:col-span-7 bg-[#F3EDE2] border border-[#E5DEC9] p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-6 h-[1px] bg-[#C5A880]" />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#6E655F] font-semibold">
                      PORTFOLIO OPPORTUNITY
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF7F2] border border-[#E5DEC9] text-xs text-[#1C1917]">
                    <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>Appointment time: {content.lashModelPromo.appointmentTime}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1917] font-light uppercase leading-none">
                    {content.lashModelPromo.headline}
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#C5A880] font-semibold mt-2.5">
                    {content.lashModelPromo.subheadline}
                  </p>
                </div>

                <p className="font-serif-editorial italic text-2xl text-[#1C1917]">
                  “{content.lashModelPromo.copy}”
                </p>

                {/* Requirements List */}
                <div className="p-6 bg-[#FAF7F2] border border-[#E5DEC9] space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#1C1917] font-semibold">
                    MODEL REQUIREMENTS:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {content.lashModelPromo.requirements.map((req) => (
                      <li
                        key={req}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[#6E655F]"
                      >
                        <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5DEC9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <button
                  onClick={() =>
                    handleJumpToContactWithService(
                      'Lash Model Opportunity — Classic Lash Extensions ($100)'
                    )
                  }
                  className="px-8 py-4 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-xs uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <span>{content.lashModelPromo.ctaText}</span>
                  <span>→</span>
                </button>
                <span className="text-xs text-[#6E655F]">
                  Click to inquire &amp; reserve your model spot with Nadiya.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
