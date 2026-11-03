import React, { useState } from 'react';
import {
  BookOpen,
  Calculator,
  Compass,
  Droplets,
  Radio,
  Shield,
  Sliders,
  Tent,
  Trees,
} from 'lucide-react';
import { AdminPanelModal } from './components/AdminPanelModal';
import { ArticleCard } from './components/ArticleCard';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { BadgeToast } from './components/BadgeToast';
import { EmergencyBackpackView } from './components/EmergencyBackpackView';
import { EmergencySOSModal } from './components/EmergencySOSModal';
import { EncyclopediaView } from './components/EncyclopediaView';
import { FieldModeView } from './components/FieldModeView';
import { Footer } from './components/Footer';
import { FreemiumModal } from './components/FreemiumModal';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PreparednessScoreView } from './components/PreparednessScoreView';
import { QuickCategories } from './components/QuickCategories';
import { ShelterGuideView } from './components/ShelterGuideView';
import { SurvivalCalculatorView } from './components/SurvivalCalculatorView';
import { UserProfileView } from './components/UserProfileView';
import { WaterGuideView } from './components/WaterGuideView';
import { AppProvider, useApp } from './context/AppContext';
import { INITIAL_ARTICLES } from './data/articlesData';
import { translations } from './i18n/translations';
import { Article, CategoryId } from './types';

function MainApp() {
  const { language, nightVision, articles } = useApp();
  const t = translations[language];

  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeTool, setActiveTool] = useState<
    'calculator' | 'backpack' | 'shelters' | 'water' | 'score'
  >('calculator');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');

  // Modals
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isSOSOpen, setIsSOSOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isFreemiumOpen, setIsFreemiumOpen] = useState(false);

  // Popular and Featured articles
  const featuredArticles = articles.filter((a) => a.isFeatured).slice(0, 3);
  const latestArticles = articles.slice(0, 6);

  const handleSelectCategoryFromHome = (catId: CategoryId) => {
    setSelectedCategory(catId);
    setActiveTab('encyclopedia');
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 flex flex-col ${
        nightVision ? 'bg-red-950 text-red-100' : 'bg-[#101713] text-[#F0F0E8]'
      }`}
    >
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openSOSModal={() => setIsSOSOpen(true)}
        openAdminModal={() => setIsAdminOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 space-y-12">
        {/* TAB 1: HOME */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* HERO SECTION */}
            <Hero
              onExplore={() => setActiveTab('encyclopedia')}
              onOpenTools={() => {
                setActiveTab('tools');
                setActiveTool('score');
              }}
              onOpenFieldMode={() => setActiveTab('fieldMode')}
            />

            {/* QUICK CATEGORIES */}
            <QuickCategories onSelectCategory={handleSelectCategoryFromHome} />

            {/* POPULAR GUIDES */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-[#F0F0E8] uppercase tracking-wider font-mono">
                  {t.popularGuides}
                </h2>
                <button
                  onClick={() => setActiveTab('encyclopedia')}
                  className="text-xs font-bold text-[#A5B88A] hover:underline"
                >
                  View All Field Manuals →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onSelect={(a) => setSelectedArticle(a)}
                  />
                ))}
              </div>
            </div>

            {/* INTERACTIVE MY PREPAREDNESS & BUG-OUT BAG CARD */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Bug-Out Bag */}
              <div
                onClick={() => {
                  setActiveTab('tools');
                  setActiveTool('backpack');
                }}
                className="group rounded-2xl bg-[#18231C] border border-[#202C23] hover:border-[#C49A62]/60 p-6 space-y-4 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C49A62] uppercase tracking-wider">
                    {t.emergencyCardTitle}
                  </span>
                  <span className="p-2 rounded-lg bg-[#202C23] text-[#C49A62]">
                    <Sliders className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F0F0E8] group-hover:text-[#C49A62] transition-colors">
                  Interactive 72-Hour Evacuation Bag
                </h3>

                <p className="text-xs text-[#A3ADA2] leading-relaxed">
                  Interactive checklist for essential documents, water, rations, IFAK medical gear, lighting, and survival tools.
                </p>

                <div className="pt-2 text-xs font-bold text-[#C49A62] group-hover:underline">
                  Open Bug-Out Checklist →
                </div>
              </div>

              {/* Card 2: Survival Calculator */}
              <div
                onClick={() => {
                  setActiveTab('tools');
                  setActiveTool('calculator');
                }}
                className="group rounded-2xl bg-[#18231C] border border-[#202C23] hover:border-[#A5B88A]/60 p-6 space-y-4 cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#A5B88A] uppercase tracking-wider">
                    {t.calcTitle}
                  </span>
                  <span className="p-2 rounded-lg bg-[#202C23] text-[#A5B88A]">
                    <Calculator className="w-5 h-5" />
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F0F0E8] group-hover:text-[#A5B88A] transition-colors">
                  Household Autonomy Reserve Calculator
                </h3>

                <p className="text-xs text-[#A3ADA2] leading-relaxed">
                  Calculate exact liters of drinking water, calories, batteries, hygiene, and medical supplies for 3 to 90 days.
                </p>

                <div className="pt-2 text-xs font-bold text-[#A5B88A] group-hover:underline">
                  Calculate Household Reserves →
                </div>
              </div>
            </div>

            {/* LATEST ADDITIONS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-black text-[#F0F0E8] uppercase tracking-wider font-mono">
                  {t.latestArticles}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestArticles.map((art) => (
                  <ArticleCard
                    key={art.id}
                    article={art}
                    onSelect={(a) => setSelectedArticle(a)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENCYCLOPEDIA */}
        {activeTab === 'encyclopedia' && (
          <EncyclopediaView
            initialCategory={selectedCategory}
            onSelectArticle={(art) => setSelectedArticle(art)}
          />
        )}

        {/* TAB 3: INTERACTIVE TOOLS */}
        {activeTab === 'tools' && (
          <div className="space-y-8">
            {/* Tool Selector Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#202C23]">
              <button
                onClick={() => setActiveTool('calculator')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2 border ${
                  activeTool === 'calculator'
                    ? 'bg-[#202C23] text-[#A5B88A] border-[#A5B88A]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>{t.calcTitle}</span>
              </button>

              <button
                onClick={() => setActiveTool('backpack')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2 border ${
                  activeTool === 'backpack'
                    ? 'bg-[#202C23] text-[#C49A62] border-[#C49A62]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>{t.backpackTitle}</span>
              </button>

              <button
                onClick={() => setActiveTool('shelters')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2 border ${
                  activeTool === 'shelters'
                    ? 'bg-[#202C23] text-[#4ADE80] border-[#4ADE80]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                <Tent className="w-4 h-4" />
                <span>{t.shelterTitle}</span>
              </button>

              <button
                onClick={() => setActiveTool('water')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2 border ${
                  activeTool === 'water'
                    ? 'bg-[#202C23] text-[#38BDF8] border-[#38BDF8]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                <Droplets className="w-4 h-4" />
                <span>{t.waterTitle}</span>
              </button>

              <button
                onClick={() => setActiveTool('score')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors flex items-center gap-2 border ${
                  activeTool === 'score'
                    ? 'bg-[#202C23] text-[#A5B88A] border-[#A5B88A]'
                    : 'bg-[#18231C] text-[#A3ADA2] border-[#202C23] hover:text-[#F0F0E8]'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>{t.scoreTitle}</span>
              </button>
            </div>

            {/* Active Tool Render */}
            {activeTool === 'calculator' && <SurvivalCalculatorView />}
            {activeTool === 'backpack' && <EmergencyBackpackView />}
            {activeTool === 'shelters' && <ShelterGuideView />}
            {activeTool === 'water' && <WaterGuideView />}
            {activeTool === 'score' && <PreparednessScoreView />}
          </div>
        )}

        {/* TAB 4: FIELD MODE */}
        {activeTab === 'fieldMode' && (
          <FieldModeView
            onSelectArticle={(art) => setSelectedArticle(art)}
            openSOSModal={() => setIsSOSOpen(true)}
          />
        )}

        {/* TAB 5: USER PROFILE */}
        {activeTab === 'profile' && <UserProfileView />}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} openSOSModal={() => setIsSOSOpen(true)} />

      {/* Modals */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <EmergencySOSModal isOpen={isSOSOpen} onClose={() => setIsSOSOpen(false)} />

      <AdminPanelModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />

      <FreemiumModal isOpen={isFreemiumOpen} onClose={() => setIsFreemiumOpen(false)} />

      {/* Gamification Badge Toast Notification */}
      <BadgeToast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
}
