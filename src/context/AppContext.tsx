import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  ActivityLogEntry,
  Article,
  BadgeDef,
  Language,
  SurvivalCalcParams,
  SurvivalLevel,
  UserProfile,
} from '../types';
import { INITIAL_ARTICLES } from '../data/articlesData';
import { BADGES_CATALOG, SURVIVAL_LEVELS } from '../data/badgesData';

interface CustomBackpackItem {
  id: string;
  name: { en: string; de: string; ru: string };
  weightGrams: number;
  priority: 'critical' | 'recommended' | 'optional';
  categoryId: string;
}

interface CustomCalcItem {
  id: string;
  category: string;
  name: { en: string; de: string; ru: string };
  amount: number;
  unit: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  profile: UserProfile;
  updateProfile: (profile: Partial<UserProfile>) => void;
  articles: Article[];
  favorites: string[];
  toggleFavorite: (articleId: string) => void;
  mastered: string[];
  toggleMastered: (articleId: string) => void;
  readArticles: string[];
  recordArticleRead: (articleId: string) => void;

  // Backpack
  backpackChecked: Record<string, boolean>;
  toggleBackpackChecked: (itemId: string) => void;
  customBackpackItems: CustomBackpackItem[];
  addCustomBackpackItem: (item: CustomBackpackItem) => void;
  removeCustomBackpackItem: (itemId: string) => void;

  // Survival Calculator
  calcParams: SurvivalCalcParams;
  setCalcParams: (params: SurvivalCalcParams) => void;
  customCalcItems: CustomCalcItem[];
  addCustomCalcItem: (item: CustomCalcItem) => void;
  removeCustomCalcItem: (itemId: string) => void;

  // Preparedness Score
  preparednessAnswers: Record<string, number>;
  setPreparednessAnswer: (questionId: string, optionIndex: number) => void;
  resetPreparednessAnswers: () => void;

  // Field Mode & Admin
  nightVision: boolean;
  toggleNightVision: () => void;
  isAdminAuth: boolean;
  setAdminAuth: (auth: boolean) => void;

  // Admin Article Management
  addArticle: (article: Article) => void;
  updateArticle: (article: Article) => void;
  deleteArticle: (articleId: string) => void;

  // Gamification & Progress Tracking
  totalXP: number;
  currentLevel: SurvivalLevel;
  unlockedBadges: string[];
  activityLog: ActivityLogEntry[];
  unlockedToast: BadgeDef | null;
  dismissToast: () => void;
  recordActivity: (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => void;

  // Backup & Storage
  exportDataJSON: () => void;
  importDataJSON: (jsonStr: string) => boolean;
}

const DEFAULT_PROFILE: UserProfile = {
  name: 'Wildcraft Explorer',
  country: 'DE',
  region: 'Bavarian Alps',
  climateZone: 'temperate',
  adultsCount: 2,
  childrenCount: 1,
  petsCount: 1,
  experienceLevel: 'intermediate',
};

const DEFAULT_CALC_PARAMS: SurvivalCalcParams = {
  adults: 2,
  children: 1,
  pets: 1,
  days: 14,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'wildcraft_app_state_v3';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [articles, setArticles] = useState<Article[]>(INITIAL_ARTICLES);
  const [favorites, setFavorites] = useState<string[]>(['art-001', 'art-002', 'art-004']);
  const [mastered, setMastered] = useState<string[]>(['art-002', 'art-003']);
  const [readArticles, setReadArticles] = useState<string[]>([
    'art-001',
    'art-002',
    'art-003',
    'art-004',
    'art-005',
    'art-006',
    'art-007',
  ]);
  const [backpackChecked, setBackpackChecked] = useState<Record<string, boolean>>({
    'doc-passports': true,
    'wat-bottle': true,
    'wat-sawyer': true,
    'food-bars': true,
    'med-tourniquet': true,
    'too-knife': true,
    'too-ferro': true,
    'pow-headlamp': true,
  });
  const [customBackpackItems, setCustomBackpackItems] = useState<CustomBackpackItem[]>([]);
  const [calcParams, setCalcParamsState] = useState<SurvivalCalcParams>(DEFAULT_CALC_PARAMS);
  const [customCalcItems, setCustomCalcItems] = useState<CustomCalcItem[]>([]);
  const [preparednessAnswers, setPreparednessAnswers] = useState<Record<string, number>>({
    'q-water': 1,
    'q-food': 1,
    'q-power': 1,
    'q-medical': 1,
    'q-backpack': 2,
  });
  const [nightVision, setNightVision] = useState<boolean>(false);
  const [isAdminAuth, setIsAdminAuth] = useState<boolean>(false);

  // Gamification state
  const [activityLog, setActivityLog] = useState<ActivityLogEntry[]>([
    {
      id: 'act-1',
      timestamp: new Date().toISOString(),
      title: {
        en: 'Mastered Ferro Rod Sparks & Tinder Guide',
        de: 'Feuerstahl & Zunder-Leitfaden gemeistert',
        ru: 'Изучено руководство по разведению огня огнивом',
      },
      xpEarned: 150,
      type: 'article_mastered',
    },
    {
      id: 'act-2',
      timestamp: new Date().toISOString(),
      title: {
        en: 'Packed 8 Essential Bug-Out Bag Items',
        de: '8 Fluchtrucksack-Teile gepackt',
        ru: 'Собрано 8 предметов тревожного рюкзака',
      },
      xpEarned: 250,
      type: 'backpack',
    },
  ]);

  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([
    'badge-fire-starter',
    'badge-backpack-packed',
  ]);
  const [unlockedToast, setUnlockedToast] = useState<BadgeDef | null>(null);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.language) setLanguageState(parsed.language);
        if (parsed.profile) setProfile(parsed.profile);
        if (parsed.articles && Array.isArray(parsed.articles) && parsed.articles.length > 0) {
          setArticles(parsed.articles);
        }
        if (parsed.favorites) setFavorites(parsed.favorites);
        if (parsed.mastered) setMastered(parsed.mastered);
        if (parsed.readArticles) setReadArticles(parsed.readArticles);
        if (parsed.backpackChecked) setBackpackChecked(parsed.backpackChecked);
        if (parsed.customBackpackItems) setCustomBackpackItems(parsed.customBackpackItems);
        if (parsed.calcParams) setCalcParamsState(parsed.calcParams);
        if (parsed.customCalcItems) setCustomCalcItems(parsed.customCalcItems);
        if (parsed.preparednessAnswers) setPreparednessAnswers(parsed.preparednessAnswers);
        if (parsed.activityLog) setActivityLog(parsed.activityLog);
        if (parsed.unlockedBadges) setUnlockedBadges(parsed.unlockedBadges);
      }
    } catch (e) {
      console.warn('Could not load Wildcraft state from localStorage', e);
    }
  }, []);

  // Sync to localStorage on state change
  useEffect(() => {
    try {
      const stateToSave = {
        language,
        profile,
        articles,
        favorites,
        mastered,
        readArticles,
        backpackChecked,
        customBackpackItems,
        calcParams,
        customCalcItems,
        preparednessAnswers,
        activityLog,
        unlockedBadges,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.warn('Could not save Wildcraft state to localStorage', e);
    }
  }, [
    language,
    profile,
    articles,
    favorites,
    mastered,
    readArticles,
    backpackChecked,
    customBackpackItems,
    calcParams,
    customCalcItems,
    preparednessAnswers,
    activityLog,
    unlockedBadges,
  ]);

  // Compute Total XP
  const totalXP = activityLog.reduce((acc, log) => acc + log.xpEarned, 0);

  // Determine Current Survival Level
  const currentLevel =
    SURVIVAL_LEVELS.find((lvl) => totalXP >= lvl.minXP && totalXP < lvl.maxXP) ||
    SURVIVAL_LEVELS[SURVIVAL_LEVELS.length - 1];

  // Helper to trigger badge unlock & toast
  const checkAndUnlockBadge = (badgeId: string) => {
    if (!unlockedBadges.includes(badgeId)) {
      const badgeDef = BADGES_CATALOG.find((b) => b.id === badgeId);
      if (badgeDef) {
        setUnlockedBadges((prev) => [...prev, badgeId]);
        setUnlockedToast(badgeDef);
        recordActivity({
          title: {
            en: `Unlocked Achievement: ${badgeDef.title.en}`,
            de: `Erfolg freigeschaltet: ${badgeDef.title.de}`,
            ru: `Разблокировано достижение: ${badgeDef.title.ru}`,
          },
          xpEarned: badgeDef.xpReward,
          type: 'tool_view',
        });
      }
    }
  };

  const recordActivity = (entry: Omit<ActivityLogEntry, 'id' | 'timestamp'>) => {
    const newEntry: ActivityLogEntry = {
      ...entry,
      id: 'act-' + Date.now(),
      timestamp: new Date().toISOString(),
    };
    setActivityLog((prev) => [newEntry, ...prev.slice(0, 19)]);
  };

  const setLanguage = (lang: Language) => setLanguageState(lang);

  const updateProfile = (partial: Partial<UserProfile>) => {
    setProfile((prev) => ({ ...prev, ...partial }));
  };

  const recordArticleRead = (articleId: string) => {
    if (!readArticles.includes(articleId)) {
      const updatedReads = [...readArticles, articleId];
      setReadArticles(updatedReads);

      const art = articles.find((a) => a.id === articleId);
      recordActivity({
        title: {
          en: `Read Field Guide: ${art?.title.en || 'Guide'}`,
          de: `Anleitung gelesen: ${art?.title.de || 'Leitfaden'}`,
          ru: `Прочитано руководство: ${art?.title.ru || 'Инструкция'}`,
        },
        xpEarned: 50,
        type: 'article_read',
      });

      // Milestone Check: 10 Articles Read
      if (updatedReads.length >= 10) {
        checkAndUnlockBadge('badge-10-articles-read');
      }
    }
  };

  const toggleFavorite = (id: string) => {
    const isAdding = !favorites.includes(id);
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

    if (isAdding) {
      const art = articles.find((a) => a.id === id);
      recordActivity({
        title: {
          en: `Bookmarked Field Guide: ${art?.title.en || 'Guide'}`,
          de: `Anleitung gespeichert: ${art?.title.de || 'Leitfaden'}`,
          ru: `Сохранено в закладках: ${art?.title.ru || 'Инструкция'}`,
        },
        xpEarned: 30,
        type: 'article_read',
      });

      if (favorites.length + mastered.length >= 5) {
        checkAndUnlockBadge('badge-scholar');
      }
    }
  };

  const toggleMastered = (id: string) => {
    const isAdding = !mastered.includes(id);
    const updatedMastered = isAdding ? [...mastered, id] : mastered.filter((m) => m !== id);
    setMastered(updatedMastered);

    if (isAdding) {
      const art = articles.find((a) => a.id === id);
      recordActivity({
        title: {
          en: `Mastered Field Guide: ${art?.title.en || 'Guide'}`,
          de: `Gemeisterte Anleitung: ${art?.title.de || 'Leitfaden'}`,
          ru: `Изучена инструкция: ${art?.title.ru || 'Инструкция'}`,
        },
        xpEarned: 150,
        type: 'article_mastered',
      });

      // Check category badge conditions
      if (art?.category === 'fire') checkAndUnlockBadge('badge-fire-starter');
      if (art?.category === 'water') checkAndUnlockBadge('badge-water-purifier');
      if (art?.category === 'shelters') checkAndUnlockBadge('badge-shelter-builder');
      if (art?.category === 'navigation') checkAndUnlockBadge('badge-wayfinder');
      if (art?.category === 'first_aid') checkAndUnlockBadge('badge-first-aid');

      // Milestone Check: First Aid Expert (All First Aid guides mastered)
      const firstAidArticles = articles.filter((a) => a.category === 'first_aid');
      const allFirstAidMastered = firstAidArticles.every((a) => updatedMastered.includes(a.id));
      if (allFirstAidMastered && firstAidArticles.length > 0) {
        checkAndUnlockBadge('badge-first-aid-expert');
      }

      if (updatedMastered.length >= 5) checkAndUnlockBadge('badge-scholar');
    }
  };

  const toggleBackpackChecked = (id: string) => {
    const newChecked = !backpackChecked[id];
    setBackpackChecked((prev) => ({ ...prev, [id]: newChecked }));

    const checkedCount = Object.values({ ...backpackChecked, [id]: newChecked }).filter(Boolean).length;
    if (checkedCount >= 8) {
      checkAndUnlockBadge('badge-backpack-packed');
    }
  };

  const addCustomBackpackItem = (item: CustomBackpackItem) => {
    setCustomBackpackItems((prev) => [...prev, item]);
  };

  const removeCustomBackpackItem = (id: string) => {
    setCustomBackpackItems((prev) => prev.filter((i) => i.id !== id));
  };

  const setCalcParams = (params: SurvivalCalcParams) => {
    setCalcParamsState(params);
    recordActivity({
      title: {
        en: `Updated Survival Calculator Reserves (${params.days} Days)`,
        de: `Survival-Rechner aktualisiert (${params.days} Tage)`,
        ru: `Расчитаны запасы калькулятора (${params.days} дней)`,
      },
      xpEarned: 50,
      type: 'calculator',
    });
    checkAndUnlockBadge('badge-calc-complete');
  };

  const addCustomCalcItem = (item: CustomCalcItem) => {
    setCustomCalcItems((prev) => [...prev, item]);
  };

  const removeCustomCalcItem = (id: string) => {
    setCustomCalcItems((prev) => prev.filter((i) => i.id !== id));
  };

  const setPreparednessAnswer = (questionId: string, optionIndex: number) => {
    setPreparednessAnswers((prev) => {
      const next = { ...prev, [questionId]: optionIndex };
      if (Object.keys(next).length >= 4) {
        checkAndUnlockBadge('badge-preparedness-audit');
      }
      return next;
    });
  };

  const resetPreparednessAnswers = () => setPreparednessAnswers({});

  const toggleNightVision = () => setNightVision((prev) => !prev);

  const setAdminAuth = (auth: boolean) => setIsAdminAuth(auth);

  const addArticle = (newArt: Article) => {
    setArticles((prev) => [newArt, ...prev]);
  };

  const updateArticle = (updated: Article) => {
    setArticles((prev) => prev.map((a) => (a.id === updated.id ? updated : a)));
  };

  const deleteArticle = (id: string) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
  };

  const dismissToast = () => setUnlockedToast(null);

  const exportDataJSON = () => {
    const data = {
      exportDate: new Date().toISOString(),
      profile,
      favorites,
      mastered,
      readArticles,
      backpackChecked,
      customBackpackItems,
      calcParams,
      preparednessAnswers,
      activityLog,
      unlockedBadges,
      totalXP,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `WILDCRAFT_Backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed.profile) setProfile(parsed.profile);
      if (parsed.favorites) setFavorites(parsed.favorites);
      if (parsed.mastered) setMastered(parsed.mastered);
      if (parsed.readArticles) setReadArticles(parsed.readArticles);
      if (parsed.backpackChecked) setBackpackChecked(parsed.backpackChecked);
      if (parsed.calcParams) setCalcParamsState(parsed.calcParams);
      if (parsed.preparednessAnswers) setPreparednessAnswers(parsed.preparednessAnswers);
      if (parsed.activityLog) setActivityLog(parsed.activityLog);
      if (parsed.unlockedBadges) setUnlockedBadges(parsed.unlockedBadges);
      return true;
    } catch (e) {
      console.error('Failed to import JSON', e);
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        profile,
        updateProfile,
        articles,
        favorites,
        toggleFavorite,
        mastered,
        toggleMastered,
        readArticles,
        recordArticleRead,
        backpackChecked,
        toggleBackpackChecked,
        customBackpackItems,
        addCustomBackpackItem,
        removeCustomBackpackItem,
        calcParams,
        setCalcParams,
        customCalcItems,
        addCustomCalcItem,
        removeCustomCalcItem,
        preparednessAnswers,
        setPreparednessAnswer,
        resetPreparednessAnswers,
        nightVision,
        toggleNightVision,
        isAdminAuth,
        setAdminAuth,
        addArticle,
        updateArticle,
        deleteArticle,
        totalXP,
        currentLevel,
        unlockedBadges,
        activityLog,
        unlockedToast,
        dismissToast,
        recordActivity,
        exportDataJSON,
        importDataJSON,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
