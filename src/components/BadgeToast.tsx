import React, { useEffect } from 'react';
import {
  Award,
  BookOpen,
  Calculator,
  Compass,
  Droplets,
  Flame,
  HeartPulse,
  Radio,
  ShieldCheck,
  Sliders,
  Sparkles,
  Tent,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BadgeToast: React.FC = () => {
  const { language, unlockedToast, dismissToast } = useApp();

  useEffect(() => {
    if (unlockedToast) {
      const timer = setTimeout(() => {
        dismissToast();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [unlockedToast, dismissToast]);

  if (!unlockedToast) return null;

  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-[#A5B88A]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-red-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-sky-400" />;
      case 'Tent':
        return <Tent className="w-5 h-5 text-emerald-400" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5 text-[#C49A62]" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5 text-[#A5B88A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#A5B88A]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-sky-400" />;
      case 'Award':
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#A5B88A]" />;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short max-w-sm w-full">
      <div className="rounded-2xl bg-[#18231C] border-2 border-[#A5B88A] p-4 text-[#F0F0E8] shadow-2xl space-y-2 relative overflow-hidden backdrop-blur-md">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#A5B88A]/20 rounded-full blur-xl pointer-events-none" />

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#202C23] border border-[#A5B88A] flex items-center justify-center shrink-0">
              {renderBadgeIcon(unlockedToast.iconName)}
            </div>

            <div>
              <span className="text-[10px] font-black tracking-widest text-[#A5B88A] uppercase block">
                MILESTONE UNLOCKED • +{unlockedToast.xpReward} XP
              </span>
              <h4 className="text-sm font-bold text-[#F0F0E8]">
                {unlockedToast.title[language]}
              </h4>
            </div>
          </div>

          <button
            onClick={dismissToast}
            className="p-1 text-[#A3ADA2] hover:text-[#F0F0E8]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#A3ADA2] leading-relaxed pl-13">
          {unlockedToast.description[language]}
        </p>
      </div>
    </div>
  );
};
