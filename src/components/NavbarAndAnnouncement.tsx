import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, SlidersHorizontal } from 'lucide-react';
import { SiteContent } from '../data/siteContent';

interface NavbarAndAnnouncementProps {
  content: SiteContent;
  activeSection: string;
  onOpenCms: () => void;
}

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SPECIALS', href: '#specials' },
  { label: 'RESULTS', href: '#results' },
  { label: 'FAQ', href: '#faq' },
  { label: 'CONTACT', href: '#contact' },
];

export const NavbarAndAnnouncement: React.FC<NavbarAndAnnouncementProps> = ({
  content,
  activeSection,
  onOpenCms,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      {content.announcementBar.enabled && (
        <div className="bg-[#1C1917] text-[#FAF7F2] border-b border-[#332E2A] px-4 py-2.5 text-center relative z-40">
          <div className="max-w-[1380px] mx-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#EBE3D5] font-normal">
              {content.announcementBar.text}
            </span>
            <a
              href={content.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-[#C5A880] hover:text-[#FAF7F2] border-b border-[#C5A880]/60 pb-0.5 transition-colors font-medium"
            >
              <span>{content.announcementBar.ctaText}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}

      {/* STICKY / FLOATING HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E5DEC9] py-3.5 shadow-[0_8px_30px_rgba(28,25,23,0.04)]'
            : 'bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#E5DEC9]/60 py-5'
        }`}
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-4">
          {/* Logo Treatment */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif-editorial text-2xl sm:text-[28px] tracking-[0.12em] text-[#1C1917] font-normal leading-none group-hover:text-[#6E655F] transition-colors">
              SKIN BY NADIYA
            </span>
            <span className="text-[9.5px] sm:text-[10px] uppercase tracking-[0.28em] text-[#6E655F] mt-1.5 font-medium">
              LICENSED ESTHETICIAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-7"
          >
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative text-[11.5px] uppercase tracking-[0.18em] py-1 transition-colors ${
                    isActive
                      ? 'text-[#1C1917] font-medium'
                      : 'text-[#6E655F] hover:text-[#1C1917]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 bottom-0 h-[1px] bg-[#C5A880] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3.5">
            <button
              onClick={onOpenCms}
              title="Open Studio CMS Content Editor"
              className="px-3 py-2.5 border border-[#E5DEC9] bg-[#F3EDE2]/60 hover:bg-[#EBE3D5] text-[#6E655F] hover:text-[#1C1917] text-[10px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
              <span className="hidden lg:inline">Edit Site</span>
            </button>

            <a
              href={content.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#1C1917] text-[#FAF7F2] hover:bg-[#332E2A] text-[11px] uppercase tracking-[0.18em] font-medium inline-flex items-center gap-2 transition-all duration-300 shadow-sm hover:shadow"
            >
              <span className="hidden lg:inline">BOOK AN APPOINTMENT</span>
              <span className="lg:hidden">BOOK NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </a>
          </div>

          {/* Mobile Hamburger Trigger */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href={content.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-[#1C1917] text-[#FAF7F2] text-[10px] uppercase tracking-[0.16em] font-medium"
            >
              BOOK NOW
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1C1917] border border-[#E5DEC9] bg-[#F3EDE2]/60 hover:bg-[#EBE3D5] transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF7F2] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto xl:hidden animate-fade-in">
          <div className="flex items-center justify-between border-b border-[#E5DEC9] pb-5">
            <div className="flex flex-col">
              <span className="font-serif-editorial text-2xl tracking-[0.12em] text-[#1C1917]">
                SKIN BY NADIYA
              </span>
              <span className="text-[10px] uppercase tracking-[0.26em] text-[#6E655F] mt-1">
                LICENSED ESTHETICIAN • DELAND, FL
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 border border-[#E5DEC9] text-[#1C1917] hover:bg-[#F3EDE2]"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="py-8 flex flex-col gap-5">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="group flex items-baseline justify-between border-b border-[#E5DEC9]/70 pb-3.5"
              >
                <span className="font-serif-editorial text-3xl text-[#1C1917] group-hover:text-[#C5A880] transition-colors">
                  {link.label}
                </span>
                <span className="text-xs font-serif-editorial italic text-[#9E948C]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="space-y-4 pt-4 border-t border-[#E5DEC9]">
            <a
              href={content.business.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5A880]" />
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={content.business.phoneHref}
                className="py-3 px-4 border border-[#1C1917]/30 text-[#1C1917] text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{content.business.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCms();
                }}
                className="py-3 px-4 border border-[#E5DEC9] bg-[#F3EDE2] text-[#1C1917] text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Studio CMS</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
