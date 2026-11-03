import React, { useState } from 'react';
import { Bookmark, CheckCircle2, Filter, Search, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';
import { Article, CategoryId, DifficultyLevel } from '../types';
import { ArticleCard } from './ArticleCard';

interface EncyclopediaViewProps {
  initialCategory?: CategoryId | 'all';
  onSelectArticle: (article: Article) => void;
}

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({
  initialCategory = 'all',
  onSelectArticle,
}) => {
  const { language, articles, favorites, mastered } = useApp();
  const t = translations[language];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [showOnlyFavs, setShowOnlyFavs] = useState(false);
  const [showOnlyMastered, setShowOnlyMastered] = useState(false);

  // Filter logic
  const filteredArticles = articles.filter((art) => {
    // Category match
    if (selectedCategory !== 'all' && art.category !== selectedCategory) return false;

    // Difficulty match
    if (selectedDifficulty !== 'all' && art.difficulty !== selectedDifficulty) return false;

    // Favorites only
    if (showOnlyFavs && !favorites.includes(art.id)) return false;

    // Mastered only
    if (showOnlyMastered && !mastered.includes(art.id)) return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const titleMatch = art.title[language]?.toLowerCase().includes(q);
      const descMatch = art.shortDescription[language]?.toLowerCase().includes(q);
      const equipMatch = art.requiredEquipment.some((eq) =>
        eq[language]?.toLowerCase().includes(q)
      );
      if (!titleMatch && !descMatch && !equipMatch) return false;
    }

    return true;
  });

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#F0F0E8] uppercase tracking-wider font-mono">
              {t.navEncyclopedia}
            </h1>
            <p className="text-xs sm:text-sm text-[#A3ADA2] mt-1">
              Field-tested manuals, survival guides, and emergency procedures.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => setShowOnlyFavs(!showOnlyFavs)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                showOnlyFavs
                  ? 'bg-[#C49A62] text-[#101713] border-[#C49A62] font-bold'
                  : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span>{t.favorites} ({favorites.length})</span>
            </button>

            <button
              onClick={() => setShowOnlyMastered(!showOnlyMastered)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
                showOnlyMastered
                  ? 'bg-emerald-600 text-white border-emerald-500 font-bold'
                  : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t.masteredGuides} ({mastered.length})</span>
            </button>
          </div>
        </div>

        {/* Search & Difficulty Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Search input */}
          <div className="sm:col-span-2 relative">
            <Search className="w-4 h-4 text-[#A5B88A] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic, gear, shelter, fire, first aid..."
              className="w-full bg-[#18231C] border border-[#202C23] rounded-xl pl-10 pr-10 py-3 text-xs text-[#F0F0E8] placeholder-[#A3ADA2]/60 focus:outline-none focus:border-[#A5B88A]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#A3ADA2] hover:text-[#F0F0E8]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Difficulty Filter */}
          <div className="relative">
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as any)}
              className="w-full bg-[#18231C] border border-[#202C23] rounded-xl px-4 py-3 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A] appearance-none"
            >
              <option value="all">All Difficulties</option>
              <option value="beginner">{t.beginner}</option>
              <option value="intermediate">{t.intermediate}</option>
              <option value="advanced">{t.advanced}</option>
              <option value="expert">{t.expert}</option>
            </select>
            <Filter className="w-3.5 h-3.5 text-[#A5B88A] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Category Chips Scroll Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors border ${
              selectedCategory === 'all'
                ? 'bg-[#A5B88A] text-[#101713] border-[#A5B88A]'
                : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
            }`}
          >
            All Categories ({articles.length})
          </button>

          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-colors border ${
                  isSelected
                    ? 'bg-[#202C23] text-[#A5B88A] border-[#A5B88A]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                {cat.title[language]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Article Grid Output */}
      <div>
        <div className="flex items-center justify-between mb-4 text-xs text-[#A3ADA2]">
          <span>
            Showing <strong className="text-[#F0F0E8]">{filteredArticles.length}</strong> field guides
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#18231C] border border-[#202C23] space-y-3">
            <p className="text-sm text-[#A3ADA2]">
              No field guides match your current search parameters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setShowOnlyFavs(false);
                setShowOnlyMastered(false);
              }}
              className="px-4 py-2 rounded-lg bg-[#202C23] border border-[#A5B88A]/30 text-xs font-bold text-[#A5B88A] hover:bg-[#A5B88A] hover:text-[#101713]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <ArticleCard key={art.id} article={art} onSelect={onSelectArticle} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
