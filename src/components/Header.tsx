import React, { useState } from 'react';
import {
  Award,
  BookOpen,
  Compass,
  Download,
  Globe,
  Radio,
  Shield,
  ShieldAlert,
  Sliders,
  Sparkles,
  User,
  WifiOff,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { translations } from '../i18n/translations';
import { Language } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openSOSModal: () => void;
  openAdminModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openSOSModal,
  openAdminModal,
}) => {
  const { language, setLanguage, totalXP, currentLevel, isAdminAuth } = useApp();
  const isOnline = useOnlineStatus();
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  const t = translations[language];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#202C23] bg-[#101713]/95 backdrop-blur-md">
      {!isOnline && (
        <div className="bg-[#C49A62]/20 border-b border-[#C49A62]/30 px-4 py-1.5 text-center text-xs font-medium text-[#C49A62] flex items-center justify-center gap-2">
          <WifiOff className="w-3.5 h-3.5 animate-pulse text-[#C49A62]" />
          <span>{t.offlineStatus}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Brand Logo */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-lg bg-[#18231C] border border-[#202C23] flex items-center justify-center group-hover:border-[#A5B88A] transition-colors">
              <Compass className="w-5 h-5 text-[#A5B88A] group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div>
              <span className="text-lg font-black tracking-wider text-[#F0F0E8] font-mono block leading-none">
                WILDCRAFT
              </span>
              <span className="text-[10px] font-semibold text-[#A3ADA2] tracking-widest block mt-0.5 uppercase">
                SURVIVAL KNOWLEDGE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'home'
                  ? 'bg-[#202C23] text-[#A5B88A] border border-[#A5B88A]/30'
                  : 'text-[#A3ADA2] hover:text-[#F0F0E8] hover:bg-[#18231C]'
              }`}
            >
              {t.navHome}
            </button>

            <button
              onClick={() => setActiveTab('encyclopedia')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'encyclopedia'
                  ? 'bg-[#202C23] text-[#A5B88A] border border-[#A5B88A]/30'
                  : 'text-[#A3ADA2] hover:text-[#F0F0E8] hover:bg-[#18231C]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                {t.navEncyclopedia}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'tools'
                  ? 'bg-[#202C23] text-[#A5B88A] border border-[#A5B88A]/30'
                  : 'text-[#A3ADA2] hover:text-[#F0F0E8] hover:bg-[#18231C]'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Sliders className="w-4 h-4" />
                {t.navTools}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('fieldMode')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'fieldMode'
                  ? 'bg-[#C49A62]/20 text-[#C49A62] border border-[#C49A62]/40'
                  : 'text-[#C49A62] hover:bg-[#C49A62]/10'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Radio className="w-4 h-4" />
                {t.navFieldMode}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                activeTab === 'profile'
                  ? 'bg-[#202C23] text-[#A5B88A] border border-[#A5B88A]/30'
                  : 'text-[#A3ADA2] hover:text-[#F0F0E8] hover:bg-[#18231C]'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{t.navProfile}</span>
              <span className="px-1.5 py-0.5 rounded bg-[#101713] text-[10px] font-mono text-[#A5B88A] border border-[#A5B88A]/20">
                Lvl {currentLevel.levelNumber}
              </span>
            </button>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#18231C] border border-[#202C23] text-xs font-semibold text-[#F0F0E8] hover:border-[#A5B88A] transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-[#A5B88A]" />
                <span className="uppercase">{language}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-36 rounded-lg bg-[#18231C] border border-[#202C23] shadow-xl py-1 z-50">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLanguage(l.code);
                        setShowLangMenu(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 hover:bg-[#202C23] transition-colors ${
                        language === l.code ? 'text-[#A5B88A] font-bold' : 'text-[#A3ADA2]'
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PWA Install Button */}
            {!isInstalled && isInstallable && (
              <button
                onClick={install}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#202C23] border border-[#A5B88A]/40 text-xs font-semibold text-[#A5B88A] hover:bg-[#A5B88A] hover:text-[#101713] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PWA</span>
              </button>
            )}

            {!isInstalled && isIOS && (
              <button
                onClick={() => setShowIOSGuide(true)}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#202C23] border border-[#A5B88A]/40 text-xs font-semibold text-[#A5B88A] hover:bg-[#A5B88A] hover:text-[#101713] transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>iOS App</span>
              </button>
            )}

            {/* Admin Control Button */}
            <button
              onClick={openAdminModal}
              title="Admin Control Panel"
              className={`p-2 rounded-md border transition-colors ${
                isAdminAuth
                  ? 'bg-[#A5B88A]/20 border-[#A5B88A] text-[#A5B88A]'
                  : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]'
              }`}
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Emergency SOS Button */}
            <button
              onClick={openSOSModal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-red-950/80 border border-red-700/60 text-xs font-black text-red-200 hover:bg-red-800 hover:text-white transition-all shadow-md animate-pulse"
            >
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span className="tracking-wider">SOS</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="lg:hidden flex items-center justify-around py-2 border-t border-[#202C23]/60 text-xs">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-2.5 py-1 rounded ${
              activeTab === 'home' ? 'text-[#A5B88A] font-bold bg-[#202C23]' : 'text-[#A3ADA2]'
            }`}
          >
            {t.navHome}
          </button>
          <button
            onClick={() => setActiveTab('encyclopedia')}
            className={`px-2.5 py-1 rounded ${
              activeTab === 'encyclopedia' ? 'text-[#A5B88A] font-bold bg-[#202C23]' : 'text-[#A3ADA2]'
            }`}
          >
            {t.navEncyclopedia}
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-2.5 py-1 rounded ${
              activeTab === 'tools' ? 'text-[#A5B88A] font-bold bg-[#202C23]' : 'text-[#A3ADA2]'
            }`}
          >
            {t.navTools}
          </button>
          <button
            onClick={() => setActiveTab('fieldMode')}
            className={`px-2.5 py-1 rounded text-[#C49A62] font-semibold ${
              activeTab === 'fieldMode' ? 'bg-[#C49A62]/20 border border-[#C49A62]/30' : ''
            }`}
          >
            {t.fieldMode}
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={`px-2.5 py-1 rounded flex items-center gap-1 ${
              activeTab === 'profile' ? 'text-[#A5B88A] font-bold bg-[#202C23]' : 'text-[#A3ADA2]'
            }`}
          >
            <span>{t.navProfile}</span>
            <span className="text-[10px] font-mono text-[#A5B88A]">
              Lvl{currentLevel.levelNumber}
            </span>
          </button>
        </div>
      </div>

      {/* iOS Installation Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-sm rounded-xl bg-[#18231C] border border-[#202C23] p-6 text-[#F0F0E8] shadow-2xl">
            <h3 className="text-lg font-bold text-[#A5B88A] flex items-center gap-2">
              <Download className="w-5 h-5" />
              Install WILDCRAFT on iOS
            </h3>
            <p className="mt-3 text-sm text-[#A3ADA2] leading-relaxed">
              1. Tap the <strong className="text-[#F0F0E8]">Share</strong> button in your Safari browser toolbar.<br />
              2. Scroll down and select <strong className="text-[#F0F0E8]">Add to Home Screen</strong>.<br />
              3. Launch WILDCRAFT for offline survival access anytime.
            </p>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-5 w-full rounded-lg bg-[#202C23] border border-[#A5B88A]/30 py-2 text-sm font-semibold text-[#F0F0E8] hover:bg-[#A5B88A] hover:text-[#101713] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
