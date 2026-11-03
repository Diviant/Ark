import React from 'react';
import { Bookmark, CheckCircle2, Clock, Flame, ShieldAlert } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  onSelect: (article: Article) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, onSelect }) => {
  const { language, favorites, toggleFavorite, mastered, toggleMastered } = useApp();
  const t = translations[language];

  const categoryDef = CATEGORIES.find((c) => c.id === article.category);
  const isFav = favorites.includes(article.id);
  const isLearned = mastered.includes(article.id);

  const difficultyColors = {
    beginner: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60',
    intermediate: 'bg-amber-950/80 text-amber-300 border-amber-800/60',
    advanced: 'bg-orange-950/80 text-orange-300 border-orange-800/60',
    expert: 'bg-red-950/80 text-red-300 border-red-800/60',
  };

  return (
    <div
      onClick={() => onSelect(article)}
      className="group relative rounded-xl bg-[#202C23] border border-[#202C23] hover:border-[#A5B88A]/60 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Card Image Container */}
        <div className="relative h-48 w-full overflow-hidden bg-[#18231C]">
          <img
            src={article.mainImage}
            alt={article.title[language]}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#202C23] via-transparent to-black/40" />

          {/* Top Badges Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            {/* Category Tag */}
            <span
              className="px-2.5 py-1 rounded-md text-[11px] font-bold text-white uppercase tracking-wider backdrop-blur-md shadow-md"
              style={{ backgroundColor: `${categoryDef?.accentColor || '#A5B88A'}cc` }}
            >
              {categoryDef?.title[language] || article.category}
            </span>

            {/* Action Buttons: Favorite & Mastered */}
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => toggleMastered(article.id)}
                title={isLearned ? 'Marked as Mastered' : 'Mark as Mastered'}
                className={`p-1.5 rounded-md backdrop-blur-md transition-colors ${
                  isLearned
                    ? 'bg-emerald-500 text-white'
                    : 'bg-black/40 text-white/70 hover:text-white hover:bg-black/60'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => toggleFavorite(article.id)}
                title={isFav ? 'Remove Favorite' : 'Save Favorite'}
                className={`p-1.5 rounded-md backdrop-blur-md transition-colors ${
                  isFav
                    ? 'bg-[#C49A62] text-[#101713]'
                    : 'bg-black/40 text-white/70 hover:text-white hover:bg-black/60'
                }`}
              >
                <Bookmark className="w-4 h-4 fill-current" />
              </button>
            </div>
          </div>

          {/* Bottom difficulty & read time */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
            <span
              className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${
                difficultyColors[article.difficulty]
              }`}
            >
              {t[article.difficulty]}
            </span>
            <span className="flex items-center gap-1 text-[11px] text-[#A3ADA2] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
              <Clock className="w-3 h-3 text-[#A5B88A]" />
              {article.readTimeMinutes} min
            </span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-2.5">
          <h3 className="text-base font-bold text-[#F0F0E8] group-hover:text-[#A5B88A] transition-colors line-clamp-2 leading-snug">
            {article.title[language]}
          </h3>
          <p className="text-xs text-[#A3ADA2] line-clamp-2 leading-relaxed">
            {article.shortDescription[language]}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-5 pb-4 pt-2 border-t border-[#18231C] flex items-center justify-between text-[11px] text-[#A3ADA2]">
        <span className="truncate max-w-[180px]">
          {article.sources[0] || 'Verified Field Standard'}
        </span>
        <span className="text-[#A5B88A] font-semibold group-hover:underline">Read Field Guide →</span>
      </div>
    </div>
  );
};
