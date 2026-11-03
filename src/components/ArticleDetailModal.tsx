import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  CheckCircle2,
  Clock,
  ExternalLink,
  Flame,
  Printer,
  ShieldAlert,
  ShieldCheck,
  Wrench,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';
import { Article } from '../types';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
}) => {
  const { language, favorites, toggleFavorite, mastered, toggleMastered, recordArticleRead } = useApp();
  const [activeTab, setActiveTab] = useState<'steps' | 'equipment' | 'safety' | 'sources'>('steps');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (article) {
      recordArticleRead(article.id);
    }
  }, [article, recordArticleRead]);

  if (!article) return null;

  const t = translations[language];
  const categoryDef = CATEGORIES.find((c) => c.id === article.category);
  const isFav = favorites.includes(article.id);
  const isLearned = mastered.includes(article.id);

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] rounded-2xl bg-[#18231C] border border-[#202C23] shadow-2xl overflow-hidden flex flex-col my-auto">
        {/* Top Header Banner */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 overflow-hidden bg-[#101713]">
          <img
            src={article.mainImage}
            alt={article.title[language]}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18231C] via-[#18231C]/60 to-black/60" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors z-20"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Title & Metadata Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 space-y-2 z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-2.5 py-1 rounded-md text-xs font-bold text-white uppercase tracking-wider shadow-md"
                style={{ backgroundColor: `${categoryDef?.accentColor || '#A5B88A'}` }}
              >
                {categoryDef?.title[language] || article.category}
              </span>

              <span className="px-2.5 py-1 rounded-md bg-[#202C23] border border-[#A5B88A]/30 text-xs font-bold text-[#A5B88A] uppercase">
                {t[article.difficulty]}
              </span>

              <span className="flex items-center gap-1 text-xs text-[#A3ADA2] bg-black/60 px-2.5 py-1 rounded-md">
                <Clock className="w-3.5 h-3.5 text-[#A5B88A]" />
                {article.readTimeMinutes} {t.hours.includes('h') ? 'min' : 'мин'}
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] leading-tight">
              {article.title[language]}
            </h1>
          </div>
        </div>

        {/* Floating SOS Safety Callout */}
        <div className="bg-red-950/50 border-y border-red-900/60 px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-red-200">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
            <span className="line-clamp-1">{t.safetyAlert}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => toggleMastered(article.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                isLearned
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]'
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isLearned ? 'Mastered' : 'Mark Mastered'}</span>
            </button>

            <button
              onClick={() => toggleFavorite(article.id)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                isFav
                  ? 'bg-[#C49A62] text-[#101713]'
                  : 'bg-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">{isFav ? 'Bookmarked' : 'Bookmark'}</span>
            </button>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-[#202C23] bg-[#101713] overflow-x-auto">
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'steps'
                ? 'border-[#A5B88A] text-[#A5B88A] bg-[#18231C]'
                : 'border-transparent text-[#A3ADA2] hover:text-[#F0F0E8]'
            }`}
          >
            {t.stepByStep} ({article.steps.length})
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'equipment'
                ? 'border-[#A5B88A] text-[#A5B88A] bg-[#18231C]'
                : 'border-transparent text-[#A3ADA2] hover:text-[#F0F0E8]'
            }`}
          >
            {t.equipmentNeeded}
          </button>

          <button
            onClick={() => setActiveTab('safety')}
            className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'safety'
                ? 'border-[#A5B88A] text-[#A5B88A] bg-[#18231C]'
                : 'border-transparent text-[#A3ADA2] hover:text-[#F0F0E8]'
            }`}
          >
            {t.hazards}
          </button>

          <button
            onClick={() => setActiveTab('sources')}
            className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'sources'
                ? 'border-[#A5B88A] text-[#A5B88A] bg-[#18231C]'
                : 'border-transparent text-[#A3ADA2] hover:text-[#F0F0E8]'
            }`}
          >
            {t.sources}
          </button>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-[#F0F0E8]">
          {/* TAB 1: STEPS */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <p className="text-sm text-[#A3ADA2] leading-relaxed bg-[#101713] p-4 rounded-xl border border-[#202C23]">
                {article.shortDescription[language]}
              </p>

              <div className="space-y-6">
                {article.steps.map((s, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl bg-[#202C23]/60 border border-[#202C23] p-4 sm:p-5 space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-[#A5B88A] text-[#101713] font-black flex items-center justify-center shrink-0">
                        {s.stepNumber}
                      </span>
                      <h3 className="text-base font-bold text-[#F0F0E8]">
                        {s.title[language]}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A3ADA2] leading-relaxed pl-11">
                      {s.description[language]}
                    </p>

                    {s.imageUrl && (
                      <div className="pl-11 pt-2">
                        <img
                          src={s.imageUrl}
                          alt={s.title[language]}
                          className="rounded-lg h-48 w-full object-cover border border-[#202C23]"
                        />
                      </div>
                    )}

                    {s.tip && (
                      <div className="ml-11 bg-[#C49A62]/10 border-l-2 border-[#C49A62] p-3 rounded-r-lg text-xs text-[#C49A62]">
                        <span className="font-bold uppercase tracking-wider block mb-1">PRO TIP:</span>
                        {s.tip[language]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: EQUIPMENT & MATERIALS */}
          {activeTab === 'equipment' && (
            <div className="space-y-6">
              {/* Required Equipment */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#A5B88A]" />
                  {t.equipmentNeeded}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {article.requiredEquipment.map((eq, i) => {
                    const key = `eq-${i}`;
                    const isChecked = checkedItems[key];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleCheck(key)}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-[#A5B88A]/20 border-[#A5B88A] text-[#F0F0E8]'
                            : 'bg-[#101713] border-[#202C23] text-[#A3ADA2] hover:border-[#A5B88A]/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded border-[#202C23] text-[#A5B88A] focus:ring-0"
                        />
                        <span className="text-xs font-medium">{eq[language]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Required Materials */}
              <div className="space-y-3 pt-4 border-t border-[#202C23]">
                <h3 className="text-sm font-bold text-[#C49A62] uppercase tracking-wider flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#C49A62]" />
                  {t.materialsNeeded}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {article.requiredMaterials.map((mat, i) => {
                    const key = `mat-${i}`;
                    const isChecked = checkedItems[key];
                    return (
                      <div
                        key={i}
                        onClick={() => toggleCheck(key)}
                        className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                          isChecked
                            ? 'bg-[#C49A62]/20 border-[#C49A62] text-[#F0F0E8]'
                            : 'bg-[#101713] border-[#202C23] text-[#A3ADA2] hover:border-[#C49A62]/40'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={!!isChecked}
                          onChange={() => {}}
                          className="w-4 h-4 rounded border-[#202C23] text-[#C49A62] focus:ring-0"
                        />
                        <span className="text-xs font-medium">{mat[language]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SAFETY & HAZARDS */}
          {activeTab === 'safety' && (
            <div className="space-y-6">
              {/* Hazards and Warnings */}
              <div className="rounded-xl bg-red-950/30 border border-red-900/50 p-4 space-y-3">
                <h3 className="text-sm font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  {t.hazards}
                </h3>
                <ul className="space-y-2 text-xs text-red-200">
                  {article.hazardsAndWarnings.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>{h[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Errors */}
              <div className="rounded-xl bg-amber-950/30 border border-amber-900/50 p-4 space-y-3">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-400" />
                  {t.commonErrors}
                </h3>
                <ul className="space-y-2 text-xs text-amber-200">
                  {article.commonErrors.map((err, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{err[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pro Tips */}
              <div className="rounded-xl bg-[#202C23] border border-[#A5B88A]/30 p-4 space-y-3">
                <h3 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A5B88A]" />
                  {t.proTips}
                </h3>
                <ul className="space-y-2 text-xs text-[#F0F0E8]">
                  {article.practicalTips.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#A5B88A] font-bold">✓</span>
                      <span>{pt[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 4: SOURCES & VERIFICATION */}
          {activeTab === 'sources' && (
            <div className="space-y-6">
              <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#A3ADA2]">
                  <span>{t.lastVerified}:</span>
                  <span className="font-mono text-[#A5B88A] font-bold">
                    {article.lastVerifiedDate}
                  </span>
                </div>

                <div className="border-t border-[#202C23] pt-3 space-y-2">
                  <span className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider block">
                    {t.sources}:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#A3ADA2]">
                    {article.sources.map((src, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5 text-[#A5B88A]" />
                        <span>{src}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#202C23] border border-[#A5B88A]/40 text-xs font-bold text-[#A5B88A] hover:bg-[#A5B88A] hover:text-[#101713] transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t.printPDF}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
