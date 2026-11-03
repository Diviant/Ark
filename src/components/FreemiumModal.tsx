import React from 'react';
import { Check, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../i18n/translations';

interface FreemiumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FreemiumModal: React.FC<FreemiumModalProps> = ({ isOpen, onClose }) => {
  const { language } = useApp();
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 text-[#F0F0E8] shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#A5B88A]/20 border border-[#A5B88A]/40 flex items-center justify-center mx-auto text-[#A5B88A]">
            <Sparkles className="w-6 h-6" />
          </div>
          <span className="text-xs font-bold text-[#C49A62] uppercase tracking-wider block">
            WILDCRAFT PRO SURVIVALIST PASS
          </span>
          <h2 className="text-xl font-black text-[#F0F0E8]">
            Unlock Full Offline Field Library
          </h2>
        </div>

        <div className="space-y-3 text-xs">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#101713] border border-[#202C23]">
            <Check className="w-4 h-4 text-[#A5B88A] shrink-0" />
            <span>Full Offline PDF Field Cards & Topo Map downloads</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#101713] border border-[#202C23]">
            <Check className="w-4 h-4 text-[#A5B88A] shrink-0" />
            <span>Unlimited Household Preparedness Audits & Action Plans</span>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#101713] border border-[#202C23]">
            <Check className="w-4 h-4 text-[#A5B88A] shrink-0" />
            <span>Advanced Radio Frequency Maps & Morse Audio Generator</span>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#A5B88A] text-[#101713] font-bold text-xs uppercase tracking-wider hover:bg-[#8e9e75] transition-colors"
          >
            Continue with Free Explorer Plan
          </button>
        </div>
      </div>
    </div>
  );
};
