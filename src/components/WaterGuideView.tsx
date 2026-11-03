import React, { useState } from 'react';
import { Check, Droplets, Flame, ShieldAlert, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { WATER_METHODS } from '../data/waterData';
import { translations } from '../i18n/translations';
import { WaterMethod } from '../types';

export const WaterGuideView: React.FC = () => {
  const { language } = useApp();
  const t = translations[language];

  const [selectedMethod, setSelectedMethod] = useState<WaterMethod>(WATER_METHODS[0]);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#202C23] text-[#38BDF8]">
            <Droplets className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] tracking-tight">
              {t.waterTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#A3ADA2]">
              {t.waterSub}
            </p>
          </div>
        </div>
      </div>

      {/* Critical Comparison Matrix: Filtration vs Purification */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-4">
        <h2 className="text-sm font-bold text-[#38BDF8] uppercase tracking-wider">
          {t.filtrationVsPurification}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#101713] border border-[#202C23] space-y-2">
            <span className="font-bold text-[#38BDF8] uppercase tracking-wider block">
              1. Mechanical Filtration (Sawyer, Sand/Charcoal)
            </span>
            <p className="text-[#A3ADA2] leading-relaxed">
              Removes physical particles, dirt, parasites, and bacteria by trapping them in micro-pores (0.1 micron). DOES NOT kill or block tiny viral particles!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#101713] border border-[#202C23] space-y-2">
            <span className="font-bold text-amber-400 uppercase tracking-wider block">
              2. Chemical / Thermal Purification (Boiling, Chlorine)
            </span>
            <p className="text-[#A3ADA2] leading-relaxed">
              Destroys 100% of biological organisms including viruses (Hepatitis, Norovirus) at a cellular level. Best combined AFTER mechanical filtration.
            </p>
          </div>
        </div>
      </div>

      {/* Method Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {WATER_METHODS.map((method) => {
          const isSelected = selectedMethod.id === method.id;
          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-[#18231C] border-[#38BDF8] text-[#38BDF8] shadow-lg'
                  : 'bg-[#101713] border-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]'
              }`}
            >
              {method.name[language]}
            </button>
          );
        })}
      </div>

      {/* Selected Method Details */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
            Method Type • {selectedMethod.type}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#F0F0E8]">
            {selectedMethod.name[language]}
          </h2>
          <p className="text-xs sm:text-sm text-[#A3ADA2] mt-2 leading-relaxed">
            {selectedMethod.description[language]}
          </p>
        </div>

        {/* Pathogen Removal Checklist Matrix */}
        <div className="bg-[#101713] p-5 rounded-xl border border-[#202C23] space-y-3">
          <h3 className="text-xs font-bold text-[#F0F0E8] uppercase tracking-wider">
            {t.pathogenRemoval}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#18231C]">
              {selectedMethod.removesPathogens.bacteria ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
              <span className="text-[#F0F0E8]">Bacteria</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#18231C]">
              {selectedMethod.removesPathogens.viruses ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
              <span className="text-[#F0F0E8]">Viruses</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#18231C]">
              {selectedMethod.removesPathogens.protozoa ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
              <span className="text-[#F0F0E8]">Giardia</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#18231C]">
              {selectedMethod.removesPathogens.chemicals ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
              <span className="text-[#F0F0E8]">Chemicals</span>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#18231C]">
              {selectedMethod.removesPathogens.sediment ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
              <span className="text-[#F0F0E8]">Mud/Dirt</span>
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40 space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              Advantages
            </span>
            <ul className="space-y-1.5 text-xs text-emerald-200">
              {selectedMethod.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span>✓</span>
                  <span>{p[language]}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 space-y-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
              Limitations
            </span>
            <ul className="space-y-1.5 text-xs text-red-200">
              {selectedMethod.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span>!</span>
                  <span>{c[language]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step by step procedure */}
        <div className="space-y-3 pt-4 border-t border-[#202C23]">
          <h3 className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
            Step-by-Step Procedure
          </h3>

          <div className="space-y-2">
            {selectedMethod.stepByStep.map((step, idx) => (
              <div
                key={idx}
                className="p-3 rounded-lg bg-[#101713] border border-[#202C23] text-xs text-[#F0F0E8] flex items-center gap-3"
              >
                <span className="w-5 h-5 rounded bg-[#38BDF8] text-[#101713] font-bold text-xs flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span>{step[language]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
