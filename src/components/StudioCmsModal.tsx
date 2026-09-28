import React, { useState } from 'react';
import { X, RotateCcw, Check, Sparkles, Calendar, Tag, MessageSquare, Phone } from 'lucide-react';
import { SiteContent, defaultSiteContent } from '../data/siteContent';

interface StudioCmsModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: SiteContent;
  onUpdateContent: (updated: SiteContent) => void;
  onResetContent: () => void;
}

export const StudioCmsModal: React.FC<StudioCmsModalProps> = ({
  isOpen,
  onClose,
  content,
  onUpdateContent,
  onResetContent,
}) => {
  const [activeTab, setActiveTab] = useState<'promotions' | 'giveaway' | 'testimonials' | 'business'>('promotions');
  const [savedToast, setSavedToast] = useState(false);

  if (!isOpen) return null;

  const triggerSaved = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2000);
  };

  const handleFieldChange = (updater: (draft: SiteContent) => SiteContent) => {
    const next = updater(structuredClone(content));
    onUpdateContent(next);
    triggerSaved();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#1C1917]/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#FAF7F2] text-[#1C1917] h-full shadow-2xl border-l border-[#E5DEC9] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 bg-[#F3EDE2] border-b border-[#E5DEC9] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#6E655F] font-semibold">
                Skin by Nadiya • Studio CMS
              </span>
            </div>
            <h3 className="font-serif-editorial text-2xl text-[#1C1917] mt-0.5">
              Editable Content & Promotions Manager
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EBE3D5] text-[#1C1917] transition-colors"
            aria-label="Close CMS Editor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E5DEC9] bg-[#FAF7F2] px-6 gap-4 overflow-x-auto">
          {[
            { id: 'promotions', label: 'Specials & Offers', icon: Tag },
            { id: 'giveaway', label: 'RF Giveaway', icon: Calendar },
            { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
            { id: 'business', label: 'Contact & Links', icon: Phone },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-1.5 py-3.5 text-xs uppercase tracking-[0.14em] border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-[#1C1917] text-[#1C1917] font-semibold'
                    : 'border-transparent text-[#6E655F] hover:text-[#1C1917]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === 'promotions' && (
            <>
              {/* Announcement Bar */}
              <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917]">
                    Top Announcement Bar
                  </span>
                  <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.announcementBar.enabled}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.announcementBar.enabled = e.target.checked;
                          return d;
                        })
                      }
                      className="accent-[#1C1917]"
                    />
                    <span>Visible</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={content.announcementBar.text}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.announcementBar.text = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9] focus:outline-none focus:border-[#1C1917]"
                />
              </div>

              {/* New Client Special */}
              <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917]">
                    New Client Special ($95 European Facial)
                  </span>
                  <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.newClientSpecial.enabled}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.newClientSpecial.enabled = e.target.checked;
                          return d;
                        })
                      }
                      className="accent-[#1C1917]"
                    />
                    <span>Active</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                      Promotional Price
                    </label>
                    <input
                      type="text"
                      value={content.newClientSpecial.price}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.newClientSpecial.price = e.target.value;
                          return d;
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                      Treatment Name
                    </label>
                    <input
                      type="text"
                      value={content.newClientSpecial.treatment}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.newClientSpecial.treatment = e.target.value;
                          return d;
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                    Description
                  </label>
                  <textarea
                    rows={2}
                    value={content.newClientSpecial.description}
                    onChange={(e) =>
                      handleFieldChange((d) => {
                        d.newClientSpecial.description = e.target.value;
                        return d;
                      })
                    }
                    className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                  />
                </div>
              </div>

              {/* Referral Promo */}
              <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917]">
                    Referral Promotion
                  </span>
                  <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.referralPromo.enabled}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.referralPromo.enabled = e.target.checked;
                          return d;
                        })
                      }
                      className="accent-[#1C1917]"
                    />
                    <span>Active</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={content.referralPromo.headline}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.referralPromo.headline = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
                <textarea
                  rows={2}
                  value={content.referralPromo.copy}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.referralPromo.copy = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>

              {/* Lash Model Promo */}
              <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917]">
                    Lash Model Promotion ($100 Full Set)
                  </span>
                  <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                    <input
                      type="checkbox"
                      checked={content.lashModelPromo.enabled}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.lashModelPromo.enabled = e.target.checked;
                          return d;
                        })
                      }
                      className="accent-[#1C1917]"
                    />
                    <span>Active</span>
                  </label>
                </div>
                <input
                  type="text"
                  value={content.lashModelPromo.subheadline}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.lashModelPromo.subheadline = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                      Appointment Duration
                    </label>
                    <input
                      type="text"
                      value={content.lashModelPromo.appointmentTime}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.lashModelPromo.appointmentTime = e.target.value;
                          return d;
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                      Model Rate
                    </label>
                    <input
                      type="text"
                      value={content.lashModelPromo.price}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.lashModelPromo.price = e.target.value;
                          return d;
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'giveaway' && (
            <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917] block">
                    RF Treatment Giveaway Section
                  </span>
                  <span className="text-xs text-[#6E655F]">
                    Toggle visibility or set official campaign dates when active.
                  </span>
                </div>
                <label className="inline-flex items-center gap-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={content.giveawayPromo.enabled}
                    onChange={(e) =>
                      handleFieldChange((d) => {
                        d.giveawayPromo.enabled = e.target.checked;
                        return d;
                      })
                    }
                    className="accent-[#1C1917]"
                  />
                  <span>Display on Site</span>
                </label>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                  Headline
                </label>
                <input
                  type="text"
                  value={content.giveawayPromo.headline}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.giveawayPromo.headline = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                    Giveaway Deadline
                  </label>
                  <input
                    type="text"
                    value={content.giveawayPromo.deadlineDate}
                    onChange={(e) =>
                      handleFieldChange((d) => {
                        d.giveawayPromo.deadlineDate = e.target.value;
                        return d;
                      })
                    }
                    placeholder="[ADD DATE]"
                    className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                    Winner Announcement Date
                  </label>
                  <input
                    type="text"
                    value={content.giveawayPromo.winnerAnnouncementDate}
                    onChange={(e) =>
                      handleFieldChange((d) => {
                        d.giveawayPromo.winnerAnnouncementDate = e.target.value;
                        return d;
                      })
                    }
                    placeholder="[ADD DATE]"
                    className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-4">
              <p className="text-xs text-[#6E655F] leading-relaxed">
                Per brand integrity guidelines, placeholder cards are displayed by default rather than fabricated reviews. Replace any card below as real client feedback arrives:
              </p>
              {content.testimonials.map((item, idx) => (
                <div key={item.id} className="p-4 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.15em] font-semibold text-[#1C1917]">
                      Testimonial Card 0{idx + 1}
                    </span>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                      Client Quote
                    </label>
                    <textarea
                      rows={2}
                      value={item.quote}
                      onChange={(e) =>
                        handleFieldChange((d) => {
                          d.testimonials[idx].quote = e.target.value;
                          d.testimonials[idx].isPlaceholder =
                            e.target.value.trim() === defaultSiteContent.testimonials[idx].quote;
                          return d;
                        })
                      }
                      className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                        Client Name / Label
                      </label>
                      <input
                        type="text"
                        value={item.clientLabel}
                        onChange={(e) =>
                          handleFieldChange((d) => {
                            d.testimonials[idx].clientLabel = e.target.value;
                            return d;
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                        Treatment Received
                      </label>
                      <input
                        type="text"
                        value={item.treatmentLabel}
                        onChange={(e) =>
                          handleFieldChange((d) => {
                            d.testimonials[idx].treatmentLabel = e.target.value;
                            return d;
                          })
                        }
                        className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'business' && (
            <div className="p-5 bg-[#F3EDE2]/70 border border-[#E5DEC9] space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                  Booksy Booking Link
                </label>
                <input
                  type="url"
                  value={content.business.bookingUrl}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.business.bookingUrl = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={content.business.phoneDisplay}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.business.phoneDisplay = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={content.business.email}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.business.email = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#6E655F] mb-1">
                  Facebook URL
                </label>
                <input
                  type="url"
                  value={content.business.facebookUrl}
                  onChange={(e) =>
                    handleFieldChange((d) => {
                      d.business.facebookUrl = e.target.value;
                      return d;
                    })
                  }
                  className="w-full px-3 py-2 text-sm bg-[#FAF7F2] border border-[#E5DEC9]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F3EDE2] border-t border-[#E5DEC9] flex items-center justify-between">
          <button
            onClick={onResetContent}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#6E655F] hover:text-[#1C1917] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset to Defaults
          </button>

          <div className="flex items-center gap-3">
            {savedToast && (
              <span className="inline-flex items-center gap-1 text-xs text-[#4E6E58] font-medium">
                <Check className="w-3.5 h-3.5" />
                Saved
              </span>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#1C1917] text-[#FAF7F2] text-xs uppercase tracking-[0.15em] hover:bg-[#332E2A] transition-colors"
            >
              Done Editing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
