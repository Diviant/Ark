import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Radio,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onExplore: () => void;
  onOpenTools: () => void;
  onOpenFieldMode: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onOpenTools,
  onOpenFieldMode,
}) => {
  const { language } = useApp();
  const t = translations[language];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#202C23] bg-[#18231C]">
      {/* Background Forest Photo Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1800&q=80"
          alt="Wilderness Forest"
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101713] via-[#101713]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101713] via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#202C23]/80 border border-[#A5B88A]/30 backdrop-blur-md">
          <Compass className="w-4 h-4 text-[#A5B88A] animate-spin-slow" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#A5B88A] uppercase">
            WILDCRAFT • SURVIVAL KNOWLEDGE & SELF-RELIANCE
          </span>
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F0F0E8] tracking-tight leading-tight uppercase font-mono">
            {t.heroTagline}
          </h1>

          <p className="text-base sm:text-lg text-[#A3ADA2] leading-relaxed max-w-2xl font-light">
            {t.heroSubtitle}
          </p>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#A5B88A] text-[#101713] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#8e9e75] transition-all duration-300 shadow-xl"
          >
            <BookOpen className="w-4 h-4" />
            <span>{t.exploreKnowledge}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenTools}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#202C23] border border-[#A5B88A]/40 text-[#F0F0E8] font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[#A5B88A] hover:bg-[#202C23]/80 transition-all duration-300 backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#A5B88A]" />
            <span>{t.myPreparedness}</span>
          </button>

          <button
            onClick={onOpenFieldMode}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C49A62]/20 border border-[#C49A62]/50 text-[#C49A62] font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#C49A62]/30 transition-all duration-300 backdrop-blur-md"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            <span>{t.fieldMode}</span>
          </button>
        </div>

        {/* Highlight Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#202C23]/80">
          <div className="p-4 rounded-xl bg-[#101713]/80 border border-[#202C23] backdrop-blur-md">
            <span className="text-[10px] font-bold text-[#A5B88A] uppercase tracking-wider block mb-1">
              Field Tested
            </span>
            <h3 className="text-xs font-bold text-[#F0F0E8]">
              20 Verified Field Manuals
            </h3>
            <p className="text-[11px] text-[#A3ADA2] mt-0.5">
              Step-by-step guides for shelter, fire, water, navigation.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101713]/80 border border-[#202C23] backdrop-blur-md">
            <span className="text-[10px] font-bold text-[#C49A62] uppercase tracking-wider block mb-1">
              Interactive Tools
            </span>
            <h3 className="text-xs font-bold text-[#F0F0E8]">
              Calculators & Bug-Out Checklists
            </h3>
            <p className="text-[11px] text-[#A3ADA2] mt-0.5">
              Autonomy reserve calculator & 72h gear audit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101713]/80 border border-[#202C23] backdrop-blur-md">
            <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
              Off-Grid PWA
            </span>
            <h3 className="text-xs font-bold text-[#F0F0E8]">
              Field Mode & Night Vision
            </h3>
            <p className="text-[11px] text-[#A3ADA2] mt-0.5">
              Cached offline data and emergency radio frequencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
