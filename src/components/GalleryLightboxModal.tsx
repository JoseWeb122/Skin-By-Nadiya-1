import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { GalleryItem } from '../data/siteContent';

interface GalleryLightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  bookingUrl: string;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
  bookingUrl,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const item = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1C1917]/90 backdrop-blur-md p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#FAF7F2] border border-[#E5DEC9] shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FAF7F2]/90 text-[#1C1917] flex items-center justify-center hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors border border-[#E5DEC9]"
          aria-label="Close gallery lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image column */}
        <div className="lg:col-span-7 relative bg-[#1C1917] min-h-[320px] sm:min-h-[460px] flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.imageAlt}
            className="w-full h-full object-cover max-h-[75vh]"
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <button
              onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
              className="w-10 h-10 bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#1C1917] flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="px-3 py-1 bg-[#1C1917]/75 text-[#FAF7F2] text-[11px] uppercase tracking-[0.2em]">
              0{currentIndex + 1} / 0{items.length}
            </span>
            <button
              onClick={() => onNavigate((currentIndex + 1) % items.length)}
              className="w-10 h-10 bg-[#FAF7F2]/90 hover:bg-[#FAF7F2] text-[#1C1917] flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Details column */}
        <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-[#FAF7F2]">
          <div className="space-y-5">
            <div className="inline-block px-3 py-1 bg-[#F3EDE2] border border-[#E5DEC9] text-[10px] uppercase tracking-[0.2em] text-[#6E655F]">
              {item.category}
            </div>
            <h3 className="font-serif-editorial text-3xl md:text-4xl text-[#1C1917] leading-tight">
              {item.title}
            </h3>
            <p className="text-sm text-[#6E655F] leading-relaxed">{item.caption}</p>

            <div className="pt-4 border-t border-[#E5DEC9]">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#9E948C]">
                {item.isPlaceholderNote}
              </p>
              <p className="text-xs text-[#6E655F] mt-1 leading-relaxed">
                Authentic client before-and-after photography is shared with client consent. Follow Nadiya on Facebook for the latest studio transformations.
              </p>
            </div>
          </div>

          <div className="pt-8 mt-8 border-t border-[#E5DEC9] flex flex-col gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium flex items-center justify-center gap-2 hover:bg-[#332E2A] transition-colors"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
