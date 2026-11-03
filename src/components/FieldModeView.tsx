import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Eye,
  HeartPulse,
  Lightbulb,
  Radio,
  ShieldAlert,
  Sun,
  Volume2,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INITIAL_ARTICLES } from '../data/articlesData';
import { translations } from '../i18n/translations';
import { Article } from '../types';

interface FieldModeProps {
  onSelectArticle: (article: Article) => void;
  openSOSModal: () => void;
}

export const FieldModeView: React.FC<FieldModeProps> = ({
  onSelectArticle,
  openSOSModal,
}) => {
  const { language, favorites, mastered, nightVision, toggleNightVision } = useApp();
  const t = translations[language];

  const [activeSection, setActiveSection] = useState<'saved' | 'firstaid' | 'radio' | 'morse'>('saved');
  const [flashSOSActive, setFlashSOSActive] = useState(false);
  const [morsePlaying, setMorsePlaying] = useState(false);

  // Filter bookmarked / mastered / offline saved articles
  const savedArticles = INITIAL_ARTICLES.filter(
    (a) => favorites.includes(a.id) || mastered.includes(a.id)
  );

  const firstAidArticles = INITIAL_ARTICLES.filter((a) => a.category === 'first_aid');

  // Flash SOS screen effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (flashSOSActive) {
      interval = setInterval(() => {
        document.body.classList.toggle('bg-red-600');
      }, 500);
    } else {
      document.body.classList.remove('bg-red-600');
    }
    return () => {
      clearInterval(interval);
      document.body.classList.remove('bg-red-600');
    };
  }, [flashSOSActive]);

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 transition-colors duration-300 space-y-6 max-w-5xl mx-auto ${
        nightVision ? 'bg-red-950 text-red-100' : 'bg-[#101713] text-[#F0F0E8]'
      }`}
    >
      {/* Field Mode Control Banner */}
      <div
        className={`p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          nightVision
            ? 'bg-red-900/40 border-red-700 text-red-100'
            : 'bg-[#18231C] border-[#202C23] text-[#F0F0E8]'
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-[#C49A62] animate-pulse" />
            <h1 className="text-xl font-black tracking-wider uppercase font-mono">
              {t.fieldMode}
            </h1>
          </div>
          <p className="text-xs text-[#A3ADA2]">
            {t.fieldModeDesc}
          </p>
        </div>

        {/* Toggle Night-Vision Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleNightVision}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
              nightVision
                ? 'bg-red-600 text-white border-red-400'
                : 'bg-[#202C23] text-[#F0F0E8] border-[#A5B88A]/40 hover:bg-[#A5B88A] hover:text-[#101713]'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span>{t.nightVision}</span>
          </button>

          <button
            onClick={() => setFlashSOSActive(!flashSOSActive)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black border transition-colors shadow-lg ${
              flashSOSActive
                ? 'bg-red-600 text-white border-white animate-ping'
                : 'bg-red-950 border-red-700 text-red-300 hover:bg-red-800 hover:text-white'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
            <span>{flashSOSActive ? 'STOP FLASH' : t.flashSOS}</span>
          </button>
        </div>
      </div>

      {/* Large Quick Access Navigation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveSection('saved')}
          className={`p-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 transition-all ${
            activeSection === 'saved'
              ? 'bg-[#202C23] border-[#A5B88A] text-[#A5B88A]'
              : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2]'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span>{t.savedOfflineGuides} ({savedArticles.length})</span>
        </button>

        <button
          onClick={() => setActiveSection('firstaid')}
          className={`p-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 transition-all ${
            activeSection === 'firstaid'
              ? 'bg-[#202C23] border-[#A5B88A] text-[#A5B88A]'
              : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2]'
          }`}
        >
          <HeartPulse className="w-5 h-5 text-red-400" />
          <span>{t.quickFirstAid}</span>
        </button>

        <button
          onClick={() => setActiveSection('radio')}
          className={`p-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 transition-all ${
            activeSection === 'radio'
              ? 'bg-[#202C23] border-[#A5B88A] text-[#A5B88A]'
              : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2]'
          }`}
        >
          <Radio className="w-5 h-5 text-[#38BDF8]" />
          <span>{t.emergencyRadio}</span>
        </button>

        <button
          onClick={() => setActiveSection('morse')}
          className={`p-4 rounded-xl border font-bold text-xs uppercase tracking-wider flex flex-col items-center justify-center gap-2 transition-all ${
            activeSection === 'morse'
              ? 'bg-[#202C23] border-[#A5B88A] text-[#A5B88A]'
              : 'bg-[#18231C] border-[#202C23] text-[#A3ADA2]'
          }`}
        >
          <Zap className="w-5 h-5 text-[#C49A62]" />
          <span>{t.morseSignal}</span>
        </button>
      </div>

      {/* SECTION 1: OFFLINE SAVED GUIDES */}
      {activeSection === 'saved' && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#A5B88A]">
            {t.savedOfflineGuides}
          </h2>

          {savedArticles.length === 0 ? (
            <div className="p-8 rounded-2xl bg-[#18231C] border border-[#202C23] text-center text-xs text-[#A3ADA2]">
              No offline guides bookmarked yet. Bookmark guides in the Encyclopedia to access them offline in Field Mode.
            </div>
          ) : (
            <div className="space-y-3">
              {savedArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle(art)}
                  className="p-4 rounded-xl bg-[#18231C] border border-[#202C23] hover:border-[#A5B88A] cursor-pointer flex items-center justify-between gap-3"
                >
                  <div>
                    <h3 className="text-sm font-bold text-[#F0F0E8]">
                      {art.title[language]}
                    </h3>
                    <p className="text-xs text-[#A3ADA2] line-clamp-1 mt-1">
                      {art.shortDescription[language]}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#A5B88A] uppercase shrink-0">
                    Open →
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* SECTION 2: FIRST AID PROTOCOLS */}
      {activeSection === 'firstaid' && (
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-red-400">
            Emergency Wilderness First Aid Protocols
          </h2>

          <div className="space-y-3">
            {firstAidArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => onSelectArticle(art)}
                className="p-4 rounded-xl bg-[#18231C] border border-red-900/40 hover:border-red-500 cursor-pointer flex items-center justify-between gap-3"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#F0F0E8]">
                    {art.title[language]}
                  </h3>
                  <p className="text-xs text-red-200/80 line-clamp-1 mt-1">
                    {art.shortDescription[language]}
                  </p>
                </div>
                <span className="text-xs font-bold text-red-400 uppercase shrink-0">
                  Open Protocol →
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: EMERGENCY RADIO FREQUENCIES */}
      {activeSection === 'radio' && (
        <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#38BDF8]">
            International Emergency Radio Frequencies
          </h2>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-[#101713] border border-[#202C23] space-y-1">
              <span className="font-bold text-[#38BDF8] block">PMR446 Channel 8 (Wilderness Distress)</span>
              <p className="text-[#F0F0E8] font-mono">Frequency: 446.09375 MHz • CTCSS Tone 8 (88.5 Hz)</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#101713] border border-[#202C23] space-y-1">
              <span className="font-bold text-[#38BDF8] block">Marine VHF Channel 16 (International Distress)</span>
              <p className="text-[#F0F0E8] font-mono">Frequency: 156.800 MHz</p>
            </div>

            <div className="p-3.5 rounded-xl bg-[#101713] border border-[#202C23] space-y-1">
              <span className="font-bold text-[#38BDF8] block">CB Radio Emergency Channel 9</span>
              <p className="text-[#F0F0E8] font-mono">Frequency: 27.065 MHz AM/FM</p>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 4: MORSE SOS SIGNAL */}
      {activeSection === 'morse' && (
        <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#C49A62]">
            International Morse Code SOS Signal
          </h2>

          <div className="p-6 rounded-xl bg-[#101713] border border-[#202C23] text-center space-y-3">
            <span className="text-3xl font-black font-mono tracking-widest text-[#C49A62] block">
              • • • — — — • • •
            </span>
            <p className="text-xs text-[#A3ADA2]">
              3 Short (Dits) • 3 Long (Dahs) • 3 Short (Dits)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
