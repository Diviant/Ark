import React from 'react';
import {
  AlertCircle,
  Award,
  CheckCircle,
  RefreshCw,
  Shield,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PREPAREDNESS_AUDIT_QUESTIONS } from '../data/preparednessQuestions';
import { translations } from '../i18n/translations';

export const PreparednessScoreView: React.FC = () => {
  const { language, preparednessAnswers, setPreparednessAnswer, resetPreparednessAnswers } =
    useApp();
  const t = translations[language];

  // Calculate total score
  const totalQuestions = PREPAREDNESS_AUDIT_QUESTIONS.length;
  let earnedPoints = 0;
  let maxPossible = totalQuestions * 10;

  PREPAREDNESS_AUDIT_QUESTIONS.forEach((q) => {
    const selectedIdx = preparednessAnswers[q.id];
    if (selectedIdx !== undefined && q.options[selectedIdx]) {
      earnedPoints += q.options[selectedIdx].score;
    }
  });

  const overallPercent = Math.round((earnedPoints / maxPossible) * 100);

  // Determine readiness level tier
  let levelTitle = 'Novice Survivalist';
  let levelColor = 'text-amber-400 border-amber-400/40 bg-amber-950/20';

  if (overallPercent >= 80) {
    levelTitle = 'Autonomous Resilience Master';
    levelColor = 'text-emerald-400 border-emerald-400/40 bg-emerald-950/20';
  } else if (overallPercent >= 50) {
    levelTitle = 'Prepared Defender';
    levelColor = 'text-blue-400 border-blue-400/40 bg-blue-950/20';
  } else if (overallPercent >= 20) {
    levelTitle = 'Beginner Prepper';
    levelColor = 'text-amber-400 border-amber-400/40 bg-amber-950/20';
  } else {
    levelTitle = 'Vulnerable Household';
    levelColor = 'text-red-400 border-red-400/40 bg-red-950/20';
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-[#202C23] text-[#A5B88A]">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[#F0F0E8] tracking-tight">
                {t.scoreTitle}
              </h1>
              <p className="text-xs sm:text-sm text-[#A3ADA2]">
                {t.scoreSub}
              </p>
            </div>
          </div>

          <button
            onClick={resetPreparednessAnswers}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202C23] border border-[#202C23] text-xs font-bold text-[#A3ADA2] hover:text-[#F0F0E8] hover:border-[#A5B88A]/30 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.reCalculate}</span>
          </button>
        </div>

        {/* Readiness Level Badge */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="md:col-span-1 bg-[#101713] p-6 rounded-xl border border-[#202C23] flex flex-col items-center justify-center text-center">
            <span className="text-xs text-[#A3ADA2] font-bold uppercase tracking-wider block mb-1">
              {t.overallScore}
            </span>
            <div className="text-4xl font-black font-mono text-[#A5B88A]">
              {overallPercent}%
            </div>

            <div className={`mt-3 px-3 py-1 rounded-full text-xs font-bold border ${levelColor}`}>
              {levelTitle}
            </div>
          </div>

          {/* Progress gauge */}
          <div className="md:col-span-2 bg-[#101713] p-6 rounded-xl border border-[#202C23] flex flex-col justify-center space-y-3">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-[#A3ADA2]">Household Resilience Audit</span>
              <span className="text-[#A5B88A]">{earnedPoints} / {maxPossible} Points</span>
            </div>

            <div className="w-full bg-[#202C23] h-4 rounded-full overflow-hidden border border-[#202C23]">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-[#A5B88A] transition-all duration-700"
                style={{ width: `${overallPercent}%` }}
              />
            </div>

            <p className="text-xs text-[#A3ADA2]">
              Audit evaluates water storage, food reserves, emergency power, medical kits, and evacuation bags.
            </p>
          </div>
        </div>
      </div>

      {/* Audit Questions */}
      <div className="space-y-6">
        {PREPAREDNESS_AUDIT_QUESTIONS.map((q, qIdx) => {
          const currentAnswerIdx = preparednessAnswers[q.id];
          return (
            <div
              key={q.id}
              className="rounded-2xl bg-[#18231C] border border-[#202C23] p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-[#202C23] border border-[#A5B88A]/30 text-[#A5B88A] font-black text-xs flex items-center justify-center">
                  {qIdx + 1}
                </span>
                <span className="text-xs font-bold text-[#A5B88A] uppercase tracking-wider">
                  {q.categoryKey}
                </span>
              </div>

              <h3 className="text-sm font-bold text-[#F0F0E8] leading-snug">
                {q.questionText[language]}
              </h3>

              <div className="space-y-2.5">
                {q.options.map((opt, optIdx) => {
                  const isSelected = currentAnswerIdx === optIdx;
                  return (
                    <div
                      key={optIdx}
                      onClick={() => setPreparednessAnswer(q.id, optIdx)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#A5B88A]/20 border-[#A5B88A] text-[#F0F0E8] shadow-md'
                          : 'bg-[#101713] border-[#202C23] text-[#A3ADA2] hover:border-[#A5B88A]/40'
                      }`}
                    >
                      <span className="text-xs font-semibold leading-relaxed">
                        {opt.label[language]}
                      </span>

                      <span className="text-xs font-mono font-bold text-[#A5B88A] shrink-0">
                        +{opt.score} pts
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Actionable recommendation if selected lower score */}
              {currentAnswerIdx !== undefined &&
                q.options[currentAnswerIdx].recommendation && (
                  <div className="mt-3 p-3 rounded-xl bg-[#C49A62]/10 border-l-2 border-[#C49A62] text-xs text-[#C49A62]">
                    <span className="font-bold uppercase tracking-wider block mb-1">
                      Action Recommendation:
                    </span>
                    {q.options[currentAnswerIdx].recommendation![language]}
                  </div>
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
