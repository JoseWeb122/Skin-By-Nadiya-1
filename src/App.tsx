import { useState, useEffect } from 'react';
import { defaultSiteContent, SiteContent } from './data/siteContent';
import { NavbarAndAnnouncement } from './components/NavbarAndAnnouncement';
import { HeroAndTrust } from './components/HeroAndTrust';
import { ServicesAndRfSection } from './components/ServicesAndRfSection';
import { AboutAndWhyChoose } from './components/AboutAndWhyChoose';
import { SpecialsAndPromotions } from './components/SpecialsAndPromotions';
import { ResultsAndTestimonials } from './components/ResultsAndTestimonials';
import { FaqAndContactFooter } from './components/FaqAndContactFooter';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import { StudioCmsModal } from './components/StudioCmsModal';

const STORAGE_KEY = 'skin_by_nadiya_cms_v1';

export function App() {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as SiteContent;
      }
    } catch {
      // fallback to default
    }
    return defaultSiteContent;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [cmsOpen, setCmsOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string>(
    'Signature European Facial ($95 New Client Special)'
  );

  const handleUpdateContent = (updated: SiteContent) => {
    setContent(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore storage errors
    }
  };

  const handleResetContent = () => {
    setContent(defaultSiteContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore storage errors
    }
  };

  // Scroll-spy for active navigation item
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'specials', 'results', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col selection:bg-[#EAD8D2] selection:text-[#1C1917]">
      {/* Top Announcement Bar + Sticky Header */}
      <NavbarAndAnnouncement
        content={content}
        activeSection={activeSection}
        onOpenCms={() => setCmsOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero + Trust Strip + Editorial Brand Statement */}
        <HeroAndTrust content={content} />

        {/* About Nadiya + Why Choose Nadiya */}
        <AboutAndWhyChoose content={content} />

        {/* Services Preview + Featured RF Section + Interactive Treatment Categories */}
        <ServicesAndRfSection content={content} />

        {/* New Client Special ($95) + RF Giveaway + Referral Promo + Lash Model Promo */}
        <SpecialsAndPromotions
          content={content}
          onSelectContactService={(service) => setPreselectedService(service)}
          onOpenCms={() => setCmsOpen(true)}
        />

        {/* Real Results Gallery + Facebook Social Strip + Testimonials + Self-Care Editorial */}
        <ResultsAndTestimonials
          content={content}
          onOpenLightbox={(idx) => setLightboxIndex(idx)}
          onOpenCms={() => setCmsOpen(true)}
        />

        {/* FAQ Accordion + Booking Conversion + Contact Form + DeLand Location + Footer */}
        <FaqAndContactFooter
          content={content}
          preselectedService={preselectedService}
          onOpenCms={() => setCmsOpen(true)}
        />
      </main>

      {/* Gallery Lightbox Modal */}
      <GalleryLightboxModal
        items={content.gallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        bookingUrl={content.business.bookingUrl}
      />

      {/* Studio CMS Live Content Editor Drawer */}
      <StudioCmsModal
        isOpen={cmsOpen}
        onClose={() => setCmsOpen(false)}
        content={content}
        onUpdateContent={handleUpdateContent}
        onResetContent={handleResetContent}
      />
    </div>
  );
}

export default App;
