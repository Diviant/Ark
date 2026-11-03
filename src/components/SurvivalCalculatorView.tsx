import React, { useState } from 'react';
import {
  BatteryCharging,
  Calculator,
  CheckSquare,
  Droplets,
  HeartPulse,
  Plus,
  Printer,
  Trash2,
  Utensils,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { translations } from '../i18n/translations';
import { CalcResultItem } from '../types';

export const SurvivalCalculatorView: React.FC = () => {
  const {
    language,
    calcParams,
    setCalcParams,
    customCalcItems,
    addCustomCalcItem,
    removeCustomCalcItem,
  } = useApp();
  const t = translations[language];

  const [collectedMap, setCollectedMap] = useState<Record<string, boolean>>({});
  const [newItemName, setNewItemName] = useState('');
  const [newItemCat, setNewItemCat] = useState('General');
  const [newItemAmount, setNewItemAmount] = useState(1);
  const [newItemUnit, setNewItemUnit] = useState('pcs');

  const { adults, children, pets, days } = calcParams;

  // Exact survival standards calculations
  // Water: 3.5 Liters per adult per day, 2.5L per child, 1L per pet
  const totalWaterLiters = Math.ceil((adults * 3.5 + children * 2.5 + pets * 1.0) * days);

  // Food Calories: 2200 kcal per adult/day, 1600 kcal per child/day, 600 kcal per pet/day
  const totalCalories = Math.ceil((adults * 2200 + children * 1600 + pets * 600) * days);
  const totalMrePacks = Math.ceil(totalCalories / 2000);

  // Lighting & Power
  const AA_Batteries = Math.ceil((adults + children) * 2 * Math.ceil(days / 7));
  const PowerbankCapacitymAh = Math.ceil((adults + children) * 10000 * Math.ceil(days / 7));

  // Hygiene & Medical
  const WetWipesPacks = Math.ceil(((adults + children) * days) / 10);
  const ToiletPaperRolls = Math.ceil(((adults + children) * days) / 5);

  const calculatedResults: CalcResultItem[] = [
    {
      category: 'Water',
      name: {
        en: 'Drinking & Basic Hygiene Water',
        de: 'Trink- & Hygiene-Wasser',
        ru: 'Питьевая и техническая вода',
      },
      amount: totalWaterLiters,
      unit: 'Liters',
      details: {
        en: '3.5L/adult/day, 2.5L/child/day, 1L/pet/day',
        de: '3,5L/Erw/Tag, 2,5L/Kind/Tag, 1L/Tier/Tag',
        ru: '3.5л/взр/день, 2.5л/реб/день, 1л/пит/день',
      },
    },
    {
      category: 'Food',
      name: {
        en: 'Total Food Calories Reserve',
        de: 'Kalorien-Gesamtreserve',
        ru: 'Калорийность суточных рационов',
      },
      amount: totalCalories,
      unit: 'kcal',
      details: {
        en: 'Equivalent to ~' + totalMrePacks + ' MRE/Ration packs',
        de: 'Entspricht ca. ' + totalMrePacks + ' Notrationen',
        ru: 'Эквивалентно ~' + totalMrePacks + ' пакетам MRE / рационов',
      },
    },
    {
      category: 'Power',
      name: {
        en: 'AA / AAA Alkaline Batteries',
        de: 'AA / AAA Batterien',
        ru: 'Батарейки АА / ААА',
      },
      amount: AA_Batteries,
      unit: 'pcs',
    },
    {
      category: 'Power',
      name: {
        en: 'Power Bank Capacity Storage',
        de: 'Powerbank-Kapazität',
        ru: 'Емкость пауэрбанков',
      },
      amount: PowerbankCapacitymAh,
      unit: 'mAh',
    },
    {
      category: 'Hygiene',
      name: {
        en: 'Wet Wipes Packs (50-ct)',
        de: 'Feuchttücher-Packungen',
        ru: 'Упаковки влажных салфеток (50 шт)',
      },
      amount: WetWipesPacks,
      unit: 'packs',
    },
    {
      category: 'Hygiene',
      name: {
        en: 'Sanitary Toilet Paper Rolls',
        de: 'Toilettenpapier-Rollen',
        ru: 'Рулоны туалетной бумаги',
      },
      amount: ToiletPaperRolls,
      unit: 'rolls',
    },
  ];

  const toggleCollected = (idxKey: string) => {
    setCollectedMap((prev) => ({ ...prev, [idxKey]: !prev[idxKey] }));
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;
    addCustomCalcItem({
      id: 'custom-' + Date.now(),
      category: newItemCat,
      name: { en: newItemName, de: newItemName, ru: newItemName },
      amount: newItemAmount,
      unit: newItemUnit,
    });
    setNewItemName('');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Title */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-[#202C23] text-[#A5B88A]">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] tracking-tight">
              {t.calcTitle}
            </h1>
            <p className="text-xs sm:text-sm text-[#A3ADA2]">
              {t.calcSub}
            </p>
          </div>
        </div>
      </div>

      {/* Input Parameters Controls */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-6">
        <h2 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider">
          Household Autonomy Parameters
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Adults */}
          <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-2">
            <label className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider block">
              {t.adultsLabel}
            </label>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setCalcParams({ ...calcParams, adults: Math.max(1, adults - 1) })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                -
              </button>
              <span className="text-xl font-mono font-bold text-[#F0F0E8]">{adults}</span>
              <button
                onClick={() => setCalcParams({ ...calcParams, adults: adults + 1 })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                +
              </button>
            </div>
          </div>

          {/* Children */}
          <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-2">
            <label className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider block">
              {t.childrenLabel}
            </label>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setCalcParams({ ...calcParams, children: Math.max(0, children - 1) })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                -
              </button>
              <span className="text-xl font-mono font-bold text-[#F0F0E8]">{children}</span>
              <button
                onClick={() => setCalcParams({ ...calcParams, children: children + 1 })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                +
              </button>
            </div>
          </div>

          {/* Pets */}
          <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-2">
            <label className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider block">
              {t.petsLabel}
            </label>
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setCalcParams({ ...calcParams, pets: Math.max(0, pets - 1) })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                -
              </button>
              <span className="text-xl font-mono font-bold text-[#F0F0E8]">{pets}</span>
              <button
                onClick={() => setCalcParams({ ...calcParams, pets: pets + 1 })}
                className="w-8 h-8 rounded-lg bg-[#202C23] text-[#F0F0E8] font-bold text-lg hover:bg-[#A5B88A] hover:text-[#101713]"
              >
                +
              </button>
            </div>
          </div>

          {/* Days */}
          <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] space-y-2">
            <label className="text-xs font-bold text-[#C49A62] uppercase tracking-wider block">
              {t.daysLabel}
            </label>
            <select
              value={days}
              onChange={(e) => setCalcParams({ ...calcParams, days: Number(e.target.value) })}
              className="w-full bg-[#202C23] border border-[#C49A62]/40 rounded-lg py-1.5 px-3 text-sm font-bold text-[#F0F0E8] focus:outline-none focus:border-[#C49A62]"
            >
              <option value={3}>3 Days (72-Hour Emergency)</option>
              <option value={7}>7 Days (1 Week Autonomy)</option>
              <option value={14}>14 Days (2 Weeks Standard)</option>
              <option value={30}>30 Days (1 Month Supply)</option>
              <option value={90}>90 Days (3 Months Master)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Calculated Results Output Grid */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 space-y-6">
        <div className="flex items-center justify-between border-b border-[#202C23] pb-4">
          <h2 className="text-base font-bold text-[#F0F0E8] uppercase tracking-wider">
            Calculated Reserves for {days} Days
          </h2>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202C23] border border-[#A5B88A]/30 text-xs font-bold text-[#A5B88A] hover:bg-[#A5B88A] hover:text-[#101713] transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Reserve Plan</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {calculatedResults.map((res, i) => {
            const key = `calc-res-${i}`;
            const isDone = collectedMap[key];
            return (
              <div
                key={i}
                onClick={() => toggleCollected(key)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isDone
                    ? 'bg-[#202C23]/40 border-[#202C23] opacity-60 line-through'
                    : 'bg-[#101713] border-[#202C23] hover:border-[#A5B88A]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A5B88A]">
                      {res.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#F0F0E8]">
                      {res.name[language]}
                    </h3>
                    {res.details && (
                      <p className="text-xs text-[#A3ADA2]">{res.details[language]}</p>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="text-xl font-black font-mono text-[#A5B88A]">
                      {res.amount.toLocaleString()}
                    </span>
                    <span className="text-xs font-bold text-[#A3ADA2] block uppercase">
                      {res.unit}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Custom Items */}
          {customCalcItems.map((ci) => {
            const key = ci.id;
            const isDone = collectedMap[key];
            return (
              <div
                key={ci.id}
                className={`p-4 rounded-xl border transition-all ${
                  isDone
                    ? 'bg-[#202C23]/40 border-[#202C23] opacity-60 line-through'
                    : 'bg-[#101713] border-[#C49A62]/40'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C49A62]">
                      Custom • {ci.category}
                    </span>
                    <h3 className="text-sm font-bold text-[#F0F0E8]">
                      {ci.name[language]}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-xl font-black font-mono text-[#C49A62]">
                        {ci.amount}
                      </span>
                      <span className="text-xs font-bold text-[#A3ADA2] block uppercase">
                        {ci.unit}
                      </span>
                    </div>

                    <button
                      onClick={() => removeCustomCalcItem(ci.id)}
                      className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/40 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add Custom Position Form */}
        <form
          onSubmit={handleAddCustom}
          className="pt-4 border-t border-[#202C23] flex flex-wrap gap-2 items-center"
        >
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Add custom reserve item (e.g. Pet Dry Food, Insulin)..."
            className="flex-1 min-w-[200px] bg-[#101713] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
          />

          <input
            type="number"
            value={newItemAmount}
            onChange={(e) => setNewItemAmount(Number(e.target.value))}
            className="w-20 bg-[#101713] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
          />

          <input
            type="text"
            value={newItemUnit}
            onChange={(e) => setNewItemUnit(e.target.value)}
            placeholder="Unit (kg/pcs)"
            className="w-24 bg-[#101713] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#A5B88A] text-[#101713] font-bold text-xs hover:bg-[#8e9e75] transition-colors flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </button>
        </form>
      </div>
    </div>
  );
};
