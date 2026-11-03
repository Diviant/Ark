import React, { useState } from 'react';
import {
  CheckSquare,
  FileText,
  HeartPulse,
  Plus,
  Scale,
  Shield,
  Square,
  Trash2,
  Zap,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BUG_OUT_BAG_CATEGORIES } from '../data/emergencyBackpackData';
import { translations } from '../i18n/translations';

export const EmergencyBackpackView: React.FC = () => {
  const {
    language,
    backpackChecked,
    toggleBackpackChecked,
    customBackpackItems,
    addCustomBackpackItem,
    removeCustomBackpackItem,
  } = useApp();
  const t = translations[language];

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [customName, setCustomName] = useState('');
  const [customWeight, setCustomWeight] = useState(200);

  // Calculate totals
  let totalItemsCount = 0;
  let collectedCount = 0;
  let totalWeightGrams = 0;
  let collectedWeightGrams = 0;

  BUG_OUT_BAG_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      totalItemsCount += 1;
      totalWeightGrams += item.weightGrams;
      if (backpackChecked[item.id]) {
        collectedCount += 1;
        collectedWeightGrams += item.weightGrams;
      }
    });
  });

  customBackpackItems.forEach((item) => {
    totalItemsCount += 1;
    totalWeightGrams += item.weightGrams;
    if (backpackChecked[item.id]) {
      collectedCount += 1;
      collectedWeightGrams += item.weightGrams;
    }
  });

  const progressPercent =
    totalItemsCount > 0 ? Math.round((collectedCount / totalItemsCount) * 100) : 0;

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customName.trim()) return;
    addCustomBackpackItem({
      id: 'custom-bp-' + Date.now(),
      name: { en: customName, de: customName, ru: customName },
      weightGrams: customWeight,
      priority: 'recommended',
      categoryId: activeCategory === 'all' ? 'tools' : activeCategory,
    });
    setCustomName('');
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-[#C49A62] uppercase tracking-wider block mb-1">
              {t.emergencyCardSub}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] tracking-tight">
              {t.backpackTitle}
            </h1>
          </div>

          {/* Progress Badge */}
          <div className="bg-[#101713] p-4 rounded-xl border border-[#202C23] min-w-[200px] text-right">
            <span className="text-xs text-[#A3ADA2] block uppercase tracking-wider">
              {t.collectedItems}
            </span>
            <div className="text-2xl font-black font-mono text-[#A5B88A]">
              {collectedCount} / {totalItemsCount} ({progressPercent}%)
            </div>
            <div className="text-[11px] text-[#A3ADA2] mt-1 flex items-center justify-end gap-1">
              <Scale className="w-3.5 h-3.5 text-[#C49A62]" />
              <span>{(collectedWeightGrams / 1000).toFixed(2)} kg</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#101713] h-3 rounded-full overflow-hidden border border-[#202C23]">
          <div
            className="h-full bg-gradient-to-r from-[#C49A62] to-[#A5B88A] transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
            activeCategory === 'all'
              ? 'bg-[#A5B88A] text-[#101713]'
              : 'bg-[#18231C] text-[#A3ADA2] hover:text-[#F0F0E8] border border-[#202C23]'
          }`}
        >
          All Categories ({totalItemsCount})
        </button>

        {BUG_OUT_BAG_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-2 rounded-lg text-xs font-bold tracking-wider whitespace-nowrap transition-colors ${
              activeCategory === cat.id
                ? 'bg-[#A5B88A] text-[#101713]'
                : 'bg-[#18231C] text-[#A3ADA2] hover:text-[#F0F0E8] border border-[#202C23]'
            }`}
          >
            {cat.title[language]}
          </button>
        ))}
      </div>

      {/* Items Checklist Display */}
      <div className="space-y-6">
        {BUG_OUT_BAG_CATEGORIES.filter(
          (cat) => activeCategory === 'all' || activeCategory === cat.id
        ).map((cat) => (
          <div
            key={cat.id}
            className="rounded-2xl bg-[#18231C] border border-[#202C23] p-5 space-y-4"
          >
            <h3 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider border-b border-[#202C23] pb-2">
              {cat.title[language]}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {cat.items.map((item) => {
                const isChecked = !!backpackChecked[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleBackpackChecked(item.id)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'bg-[#202C23]/40 border-[#202C23] opacity-60'
                        : 'bg-[#101713] border-[#202C23] hover:border-[#A5B88A]/40'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#A5B88A]" />
                      ) : (
                        <Square className="w-5 h-5 text-[#A3ADA2]" />
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`text-xs font-bold ${
                            isChecked ? 'line-through text-[#A3ADA2]' : 'text-[#F0F0E8]'
                          }`}
                        >
                          {item.name[language]}
                        </span>

                        <span className="text-[10px] font-mono text-[#A3ADA2] shrink-0">
                          {item.weightGrams}g
                        </span>
                      </div>

                      {item.note && (
                        <p className="text-[11px] text-[#C49A62]">{item.note[language]}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Custom Items Section */}
        {customBackpackItems.length > 0 && (
          <div className="rounded-2xl bg-[#18231C] border border-[#C49A62]/40 p-5 space-y-4">
            <h3 className="text-sm font-bold text-[#C49A62] uppercase tracking-wider border-b border-[#202C23] pb-2">
              Custom Added Gear
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {customBackpackItems.map((ci) => {
                const isChecked = !!backpackChecked[ci.id];
                return (
                  <div
                    key={ci.id}
                    className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                      isChecked
                        ? 'bg-[#202C23]/40 border-[#202C23] opacity-60'
                        : 'bg-[#101713] border-[#C49A62]/30'
                    }`}
                  >
                    <div
                      onClick={() => toggleBackpackChecked(ci.id)}
                      className="flex items-center gap-3 cursor-pointer flex-1"
                    >
                      {isChecked ? (
                        <CheckSquare className="w-5 h-5 text-[#C49A62]" />
                      ) : (
                        <Square className="w-5 h-5 text-[#A3ADA2]" />
                      )}
                      <span
                        className={`text-xs font-bold ${
                          isChecked ? 'line-through text-[#A3ADA2]' : 'text-[#F0F0E8]'
                        }`}
                      >
                        {ci.name[language]}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#A3ADA2]">
                        {ci.weightGrams}g
                      </span>
                      <button
                        onClick={() => removeCustomBackpackItem(ci.id)}
                        className="p-1 text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Add Custom Item Form */}
        <form
          onSubmit={handleAddCustom}
          className="rounded-2xl bg-[#18231C] border border-[#202C23] p-5 flex flex-wrap gap-2 items-center"
        >
          <input
            type="text"
            value={customName}
            onChange={(e) => setCustomName(e.target.value)}
            placeholder="Add custom item to backpack..."
            className="flex-1 min-w-[200px] bg-[#101713] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
          />

          <input
            type="number"
            value={customWeight}
            onChange={(e) => setCustomWeight(Number(e.target.value))}
            placeholder="Weight (g)"
            className="w-28 bg-[#101713] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
          />

          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-[#A5B88A] text-[#101713] font-bold text-xs hover:bg-[#8e9e75] transition-colors flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Backpack</span>
          </button>
        </form>
      </div>
    </div>
  );
};
