import React, { useState } from 'react';
import { AlertTriangle, Clock, Layers, ShieldAlert, Tent, Wrench } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SHELTERS_CATALOG } from '../data/sheltersData';
import { translations } from '../i18n/translations';
import { ShelterItem } from '../types';

export const ShelterGuideView: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const [selectedShelter, setSelectedShelter] = useState<ShelterItem>(SHELTERS_CATALOG[0]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#202C23] text-[#A5B88A]">
            <Tent className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] tracking-tight">
              {t.shelterTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#A3ADA2]">
              {t.shelterSub}
            </p>
          </div>
        </div>
      </div>

      {/* Catalog Grid Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {SHELTERS_CATALOG.map((sh) => {
          const isSelected = selectedShelter.id === sh.id;
          return (
            <div
              key={sh.id}
              onClick={() => setSelectedShelter(sh)}
              className={`group rounded-xl border overflow-hidden cursor-pointer transition-all ${
                isSelected
                  ? 'bg-[#202C23] border-[#A5B88A] ring-2 ring-[#A5B88A]/30'
                  : 'bg-[#18231C] border-[#202C23] hover:border-[#A5B88A]/40'
              }`}
            >
              <div className="h-36 w-full overflow-hidden relative">
                <img
                  src={sh.image}
                  alt={sh.name[language]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18231C] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-[#A5B88A] uppercase">
                  {sh.category}
                </span>
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-[#F0F0E8] group-hover:text-[#A5B88A] transition-colors">
                  {sh.name[language]}
                </h3>
                <div className="flex items-center gap-3 text-[11px] text-[#A3ADA2]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A5B88A]" />
                    {sh.prepTimeHours} {t.hours}
                  </span>
                  <span className="uppercase font-bold text-[#C49A62]">
                    {t[sh.difficulty]}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Shelter Detailed Specification */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] overflow-hidden space-y-6 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#202C23] pb-6">
          <div>
            <span className="text-xs font-bold text-[#A5B88A] uppercase tracking-wider block mb-1">
              Field Spec • {selectedShelter.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#F0F0E8]">
              {selectedShelter.name[language]}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-[#202C23] border border-[#A5B88A]/30 text-xs font-bold text-[#A5B88A]">
              {selectedShelter.prepTimeHours} {t.hours} Build Time
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#202C23] border border-[#C49A62]/30 text-xs font-bold text-[#C49A62] uppercase">
              {t[selectedShelter.difficulty]}
            </span>
          </div>
        </div>

        <p className="text-sm text-[#A3ADA2] leading-relaxed">
          {selectedShelter.description[language]}
        </p>

        {/* Suitable conditions */}
        <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-1">
          <span className="text-xs font-bold text-[#A5B88A] uppercase tracking-wider block">
            {t.suitableConditions}
          </span>
          <p className="text-xs text-[#F0F0E8]">{selectedShelter.suitableWhen[language]}</p>
        </div>

        {/* Two column breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Required Materials */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#A5B88A]" />
              {t.requiredMaterials}
            </h3>
            <ul className="space-y-2">
              {selectedShelter.requiredMaterials.map((m, idx) => (
                <li
                  key={idx}
                  className="p-2.5 rounded-lg bg-[#101713] border border-[#202C23] text-xs text-[#A3ADA2] flex items-center gap-2"
                >
                  <span className="text-[#A5B88A] font-bold">•</span>
                  <span>{m[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Risks */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              {t.mainRisks}
            </h3>
            <ul className="space-y-2">
              {selectedShelter.mainRisks.map((r, idx) => (
                <li
                  key={idx}
                  className="p-2.5 rounded-lg bg-red-950/20 border border-red-900/40 text-xs text-red-200 flex items-center gap-2"
                >
                  <span className="text-red-400 font-bold">!</span>
                  <span>{r[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-Step Construction Procedure */}
        <div className="space-y-3 pt-4 border-t border-[#202C23]">
          <h3 className="text-xs font-bold text-[#A5B88A] uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#A5B88A]" />
            Construction Steps
          </h3>

          <div className="space-y-3">
            {selectedShelter.constructionSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#101713] border border-[#202C23] flex items-start gap-3"
              >
                <span className="w-6 h-6 rounded-md bg-[#A5B88A] text-[#101713] font-black text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <p className="text-xs text-[#F0F0E8] leading-relaxed pt-0.5">{step[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
