import React, { useState } from 'react';
import {
  Award,
  Axe,
  Bookmark,
  Calculator,
  CheckCircle2,
  Compass,
  Download,
  Droplets,
  FileJson,
  Flame,
  Globe,
  HeartPulse,
  History,
  Lock,
  Radio,
  Scale,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sliders,
  Sparkles,
  Tent,
  Trees,
  TrendingUp,
  Upload,
  User,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BADGES_CATALOG, SURVIVAL_LEVELS } from '../data/badgesData';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';

export const UserProfileView: React.FC = () => {
  const {
    language,
    profile,
    updateProfile,
    favorites,
    mastered,
    articles,
    totalXP,
    currentLevel,
    unlockedBadges,
    activityLog,
    preparednessAnswers,
    exportDataJSON,
    importDataJSON,
  } = useApp();
  const t = translations[language];

  const [badgeFilter, setBadgeFilter] = useState<'all' | 'unlocked' | 'locked'>('all');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Next level calculations
  const nextLevel =
    SURVIVAL_LEVELS.find((l) => l.levelNumber === currentLevel.levelNumber + 1) ||
    currentLevel;
  const levelXPRange = nextLevel.minXP - currentLevel.minXP;
  const levelXPProgress = totalXP - currentLevel.minXP;
  const levelPercent =
    levelXPRange > 0 ? Math.min(100, Math.round((levelXPProgress / levelXPRange) * 100)) : 100;

  // Compute Preparedness Score
  let auditScore = 0;
  Object.entries(preparednessAnswers).forEach(([qId, optIdx]) => {
    auditScore += optIdx * 20;
  });
  const preparednessPercent = Math.min(100, auditScore);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5" />;
      case 'Tent':
        return <Tent className="w-5 h-5" />;
      case 'Sliders':
        return <Sliders className="w-5 h-5" />;
      case 'Calculator':
        return <Calculator className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredBadges = BADGES_CATALOG.filter((b) => {
    const isUnlocked = unlockedBadges.includes(b.id);
    if (badgeFilter === 'unlocked') return isUnlocked;
    if (badgeFilter === 'locked') return !isUnlocked;
    return true;
  });

  const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importDataJSON(content);
      if (success) {
        setImportStatus('Backup restored successfully!');
      } else {
        setImportStatus('Failed to parse backup JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* HEADER PROGRESS DASHBOARD CARD */}
      <div className="rounded-3xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A5B88A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* User Rank Title & Avatar */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#202C23] border-2 border-[#A5B88A] flex items-center justify-center text-[#A5B88A] shadow-xl shrink-0">
              <Award className="w-8 h-8" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#A5B88A] uppercase tracking-wider">
                  Level {currentLevel.levelNumber} • {t.levelTitleLabel}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-[#F0F0E8] tracking-tight">
                {currentLevel.title[language]}
              </h1>
              <p className="text-xs text-[#A3ADA2] mt-0.5">
                {profile.name} • {profile.region}, {profile.country}
              </p>
            </div>
          </div>

          {/* XP Badge Metric */}
          <div className="bg-[#101713] p-4 rounded-2xl border border-[#202C23] flex items-center gap-4 min-w-[220px]">
            <div className="p-3 rounded-xl bg-[#A5B88A]/20 text-[#A5B88A]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black font-mono text-[#A5B88A]">
                {totalXP} XP
              </span>
              <span className="text-[10px] font-bold text-[#A3ADA2] uppercase tracking-wider block">
                {t.earnedXP}
              </span>
            </div>
          </div>
        </div>

        {/* Level XP Progress Bar */}
        <div className="space-y-2 bg-[#101713] p-4 rounded-2xl border border-[#202C23]">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-[#A3ADA2]">
              Level {currentLevel.levelNumber} Rank Progress
            </span>
            <span className="text-[#A5B88A]">
              {totalXP} / {nextLevel.minXP} XP ({levelPercent}%)
            </span>
          </div>

          <div className="w-full bg-[#202C23] h-3.5 rounded-full overflow-hidden border border-[#202C23]">
            <div
              className="h-full bg-gradient-to-r from-[#C49A62] to-[#A5B88A] transition-all duration-700"
              style={{ width: `${levelPercent}%` }}
            />
          </div>
        </div>

        {/* Core Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-[#101713] p-3.5 rounded-xl border border-[#202C23]">
            <span className="text-[10px] font-bold text-[#A3ADA2] uppercase block">
              {t.masteredGuides}
            </span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              {mastered.length} / {articles.length}
            </span>
          </div>

          <div className="bg-[#101713] p-3.5 rounded-xl border border-[#202C23]">
            <span className="text-[10px] font-bold text-[#A3ADA2] uppercase block">
              {t.badgesUnlocked}
            </span>
            <span className="text-xl font-bold font-mono text-[#A5B88A]">
              {unlockedBadges.length} / {BADGES_CATALOG.length}
            </span>
          </div>

          <div className="bg-[#101713] p-3.5 rounded-xl border border-[#202C23]">
            <span className="text-[10px] font-bold text-[#A3ADA2] uppercase block">
              {t.favorites}
            </span>
            <span className="text-xl font-bold font-mono text-[#C49A62]">
              {favorites.length}
            </span>
          </div>

          <div className="bg-[#101713] p-3.5 rounded-xl border border-[#202C23]">
            <span className="text-[10px] font-bold text-[#A3ADA2] uppercase block">
              Preparedness Score
            </span>
            <span className="text-xl font-bold font-mono text-[#38BDF8]">
              {preparednessPercent}%
            </span>
          </div>
        </div>
      </div>

      {/* BADGES GALLERY & ACHIEVEMENTS GRID */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#202C23] pb-4">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-[#A5B88A]" />
            <h2 className="text-base font-bold text-[#F0F0E8] uppercase tracking-wider font-mono">
              {t.badgeGallery}
            </h2>
          </div>

          {/* Badge Filter Chips */}
          <div className="flex items-center gap-2 text-xs">
            <button
              onClick={() => setBadgeFilter('all')}
              className={`px-3 py-1.5 rounded-lg border font-bold ${
                badgeFilter === 'all'
                  ? 'bg-[#A5B88A] text-[#101713] border-[#A5B88A]'
                  : 'bg-[#101713] text-[#A3ADA2] border-[#202C23]'
              }`}
            >
              All ({BADGES_CATALOG.length})
            </button>

            <button
              onClick={() => setBadgeFilter('unlocked')}
              className={`px-3 py-1.5 rounded-lg border font-bold ${
                badgeFilter === 'unlocked'
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-[#101713] text-[#A3ADA2] border-[#202C23]'
              }`}
            >
              Unlocked ({unlockedBadges.length})
            </button>

            <button
              onClick={() => setBadgeFilter('locked')}
              className={`px-3 py-1.5 rounded-lg border font-bold ${
                badgeFilter === 'locked'
                  ? 'bg-[#202C23] text-[#F0F0E8] border-[#A5B88A]/30'
                  : 'bg-[#101713] text-[#A3ADA2] border-[#202C23]'
              }`}
            >
              Locked ({BADGES_CATALOG.length - unlockedBadges.length})
            </button>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBadges.map((badge) => {
            const isUnlocked = unlockedBadges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border transition-all space-y-3 relative overflow-hidden ${
                  isUnlocked
                    ? 'bg-[#101713] border-[#A5B88A]/60 shadow-lg'
                    : 'bg-[#101713]/40 border-[#202C23] opacity-65'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                        isUnlocked
                          ? 'bg-[#202C23] border-[#A5B88A] text-[#A5B88A]'
                          : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2]'
                      }`}
                    >
                      {isUnlocked ? getBadgeIcon(badge.iconName) : <Lock className="w-5 h-5" />}
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#F0F0E8]">
                        {badge.title[language]}
                      </h3>
                      <span className="text-[10px] font-bold font-mono text-[#A5B88A]">
                        +{badge.xpReward} XP
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      isUnlocked
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                        : 'bg-[#202C23] text-[#A3ADA2]'
                    }`}
                  >
                    {isUnlocked ? t.unlockedAt : 'Locked'}
                  </span>
                </div>

                <p className="text-xs text-[#A3ADA2] leading-relaxed">
                  {badge.description[language]}
                </p>

                {!isUnlocked && (
                  <div className="pt-2 border-t border-[#202C23] text-[11px] text-[#C49A62]">
                    <span className="font-bold uppercase block">Requirement:</span>
                    {badge.requirementHint[language]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* DOMAIN MASTERY BREAKDOWN BY CATEGORY */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-4">
        <h2 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider font-mono">
          {t.skillBreakdown}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => {
            const categoryArticles = articles.filter((a) => a.category === cat.id);
            const categoryMastered = categoryArticles.filter((a) => mastered.includes(a.id));
            const catPercent =
              categoryArticles.length > 0
                ? Math.round((categoryMastered.length / categoryArticles.length) * 100)
                : 0;

            return (
              <div
                key={cat.id}
                className="p-4 rounded-xl bg-[#101713] border border-[#202C23] space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#F0F0E8]">{cat.title[language]}</span>
                  <span className="text-[#A5B88A]">
                    {categoryMastered.length} / {categoryArticles.length} ({catPercent}%)
                  </span>
                </div>

                <div className="w-full bg-[#202C23] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#A5B88A] transition-all duration-500"
                    style={{ width: `${catPercent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RECENT ACCOMPLISHMENTS LOG */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-4">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-[#C49A62]" />
          <h2 className="text-sm font-bold text-[#F0F0E8] uppercase tracking-wider font-mono">
            {t.activityLogTitle}
          </h2>
        </div>

        <div className="space-y-2">
          {activityLog.slice(0, 8).map((log) => (
            <div
              key={log.id}
              className="p-3 rounded-xl bg-[#101713] border border-[#202C23] flex items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-0.5">
                <span className="font-bold text-[#F0F0E8] block">
                  {log.title[language]}
                </span>
                <span className="text-[10px] text-[#A3ADA2] font-mono">
                  {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              <span className="px-2.5 py-1 rounded-md bg-[#202C23] text-[#A5B88A] font-bold font-mono text-xs">
                +{log.xpEarned} XP
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HOUSEHOLD PROFILE SETTINGS */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-6">
        <h2 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider">
          Explorer Parameters & Climate Settings
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider block">
              Explorer Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
              className="w-full bg-[#101713] border border-[#202C23] rounded-xl px-4 py-2.5 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider block">
              {t.countryRegion}
            </label>
            <select
              value={profile.country}
              onChange={(e) => updateProfile({ country: e.target.value })}
              className="w-full bg-[#101713] border border-[#202C23] rounded-xl px-4 py-2.5 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
            >
              <option value="EU">European Union (112)</option>
              <option value="US">United States / Canada (911)</option>
              <option value="DE">Germany (112 / 110)</option>
              <option value="RU">Russian Federation (112)</option>
              <option value="UK">United Kingdom (999)</option>
              <option value="CH">Switzerland (144 / Rega)</option>
              <option value="AU">Australia (000)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={exportDataJSON}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#A5B88A] text-[#101713] text-xs font-bold hover:bg-[#8e9e75] transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>{t.exportData}</span>
          </button>

          <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#202C23] border border-[#A5B88A]/30 text-[#A5B88A] text-xs font-bold hover:bg-[#A5B88A] hover:text-[#101713] transition-colors cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Restore Backup (JSON)</span>
            <input
              type="file"
              accept=".json"
              onChange={handleFileImport}
              className="hidden"
            />
          </label>
        </div>

        {importStatus && (
          <p className="text-xs font-mono font-bold text-[#A5B88A]">{importStatus}</p>
        )}
      </div>
    </div>
  );
};
