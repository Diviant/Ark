import React from 'react';
import {
  Axe,
  Compass,
  Droplets,
  Flame,
  HeartPulse,
  ShieldAlert,
  Tent,
  Trees,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';
import { CategoryId } from '../types';

interface QuickCategoriesProps {
  onSelectCategory: (catId: CategoryId) => void;
}

export const QuickCategories: React.FC<QuickCategoriesProps> = ({ onSelectCategory }) => {
  const { language } = useApp();
  const t = translations[language];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trees':
        return <Trees className="w-6 h-6" />;
      case 'Axe':
        return <Axe className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      case 'Tent':
        return <Tent className="w-6 h-6" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      default:
        return <Trees className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black text-[#F0F0E8] uppercase tracking-wider font-mono">
          {t.quickAccess}
        </h2>
        <span className="text-xs text-[#A5B88A] font-bold">8 Essential Domains</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="group relative rounded-2xl bg-[#18231C] border border-[#202C23] hover:border-[#A5B88A]/60 p-5 space-y-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
          >
            {/* Background Gradient accent */}
            <div
              className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 group-hover:opacity-25 transition-opacity bg-gradient-to-br ${cat.bgGradient}`}
            />

            <div
              className="w-12 h-12 rounded-xl bg-[#202C23] border border-[#202C23] group-hover:border-[#A5B88A]/40 flex items-center justify-center transition-colors"
              style={{ color: cat.accentColor }}
            >
              {getCategoryIcon(cat.iconName)}
            </div>

            <div className="space-y-1">
              <h3 className="text-sm font-bold text-[#F0F0E8] group-hover:text-[#A5B88A] transition-colors">
                {cat.title[language]}
              </h3>
              <p className="text-xs text-[#A3ADA2] line-clamp-2 leading-relaxed">
                {cat.description[language]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
