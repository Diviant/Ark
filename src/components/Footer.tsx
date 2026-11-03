import React from 'react';
import { Compass, ShieldAlert } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../i18n/translations';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openSOSModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, openSOSModal }) => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <footer className="bg-[#101713] border-t border-[#202C23] text-[#A3ADA2] mt-20">
      {/* Emergency Disclaimer Banner */}
      <div className="bg-red-950/40 border-b border-red-900/40 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
          <p className="text-xs text-red-200/90 leading-relaxed">
            {t.safetyAlert}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#18231C] border border-[#202C23] flex items-center justify-center">
                <Compass className="w-4 h-4 text-[#A5B88A]" />
              </div>
              <span className="text-lg font-black tracking-wider text-[#F0F0E8] font-mono">
                WILDCRAFT
              </span>
            </div>
            <p className="text-xs text-[#A3ADA2] leading-relaxed">
              International platform for wilderness survival, bushcraft, off-grid autonomy, and emergency preparedness.
            </p>
            <div className="pt-2">
              <button
                onClick={openSOSModal}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-red-900/40 border border-red-700/50 text-xs font-bold text-red-300 hover:bg-red-800 hover:text-white transition-colors"
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>{t.emergencySOS} (112 / 911)</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-[#A5B88A] transition-colors">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('encyclopedia')} className="hover:text-[#A5B88A] transition-colors">
                  {t.navEncyclopedia}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.navTools}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('fieldMode')} className="hover:text-[#C49A62] transition-colors text-[#C49A62]">
                  {t.navFieldMode}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('profile')} className="hover:text-[#A5B88A] transition-colors">
                  {t.navProfile}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tools */}
          <div>
            <h4 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider mb-3">
              Survival Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.calcTitle}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.backpackTitle}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.shelterTitle}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.waterTitle}
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tools')} className="hover:text-[#A5B88A] transition-colors">
                  {t.scoreTitle}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Standards */}
          <div>
            <h4 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider mb-3">
              Credibility & Standards
            </h4>
            <p className="text-xs text-[#A3ADA2] leading-relaxed mb-3">
              Tested against SAS Survival, US Army FM 21-76, Red Cross First Aid, and FEMA Emergency Guidelines.
            </p>
            <div className="text-[11px] text-[#A3ADA2]/70 font-mono">
              Version 2.4 PWA • Verified Field Reference
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#202C23] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} WILDCRAFT • SURVIVAL KNOWLEDGE & SELF-RELIANCE</p>
          <p className="text-[#A3ADA2]/60 text-[11px]">Designed for Extreme Field Conditions & Off-Grid Autonomy</p>
        </div>
      </div>
    </footer>
  );
};
