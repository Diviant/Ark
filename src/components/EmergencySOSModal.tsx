import React, { useState } from 'react';
import {
  AlertTriangle,
  Lightbulb,
  PhoneCall,
  Radio,
  ShieldAlert,
  Volume2,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { EMERGENCY_CONTACTS } from '../data/emergencyContactsData';
import { translations } from '../i18n/translations';

interface EmergencySOSModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencySOSModal: React.FC<EmergencySOSModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useApp();
  const t = translations[language];

  const [selectedCountryCode, setSelectedCountryCode] = useState('EU');

  if (!isOpen) return null;

  const currentContact =
    EMERGENCY_CONTACTS.find((c) => c.countryCode === selectedCountryCode) ||
    EMERGENCY_CONTACTS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-red-950/90 border border-red-700/80 p-6 sm:p-8 text-[#F0F0E8] overflow-y-auto shadow-2xl my-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-red-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-900 border border-red-600 text-red-200 animate-pulse">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-wider font-mono">
                {t.emergencySOS}
              </h2>
              <p className="text-xs text-red-200">
                Direct Emergency Rescue Helplines & Visual Signals
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-red-900/60 text-red-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Country Selector */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-red-300 uppercase tracking-wider block">
            Select Your Location / Country
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {EMERGENCY_CONTACTS.map((c) => (
              <button
                key={c.countryCode}
                onClick={() => setSelectedCountryCode(c.countryCode)}
                className={`p-2.5 rounded-xl border text-xs font-bold flex items-center gap-2 transition-all ${
                  selectedCountryCode === c.countryCode
                    ? 'bg-red-800 border-white text-white shadow-lg'
                    : 'bg-red-900/40 border-red-800 text-red-200 hover:bg-red-900/80'
                }`}
              >
                <span className="text-base">{c.flag}</span>
                <span className="truncate">{c.countryCode}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Local Emergency Numbers Grid */}
        <div className="p-5 rounded-2xl bg-black/60 border border-red-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-lg">{currentContact.flag}</span>
              {currentContact.countryName[language]}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
            {/* General Emergency */}
            <a
              href={`tel:${currentContact.generalEmergency}`}
              className="p-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black transition-colors block border border-red-400 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 mx-auto mb-1" />
              <span className="text-lg font-mono block">{currentContact.generalEmergency}</span>
              <span className="text-[10px] uppercase block tracking-wider opacity-90">
                General Emergency
              </span>
            </a>

            {/* Ambulance */}
            <a
              href={`tel:${currentContact.ambulance}`}
              className="p-3.5 rounded-xl bg-red-900/80 hover:bg-red-800 text-white font-black transition-colors block border border-red-700"
            >
              <PhoneCall className="w-4 h-4 mx-auto mb-1 text-red-300" />
              <span className="text-base font-mono block">{currentContact.ambulance}</span>
              <span className="text-[10px] uppercase block tracking-wider text-red-300">
                Medical / Ambulance
              </span>
            </a>

            {/* Mountain Rescue */}
            <div className="p-3.5 rounded-xl bg-red-900/80 text-white font-black block border border-red-700">
              <Radio className="w-4 h-4 mx-auto mb-1 text-amber-300" />
              <span className="text-xs font-mono block truncate">
                {currentContact.mountainRescue || '112'}
              </span>
              <span className="text-[10px] uppercase block tracking-wider text-amber-300">
                Mountain Rescue
              </span>
            </div>
          </div>
        </div>

        {/* Ground-to-Air Visual Distress Signals Chart */}
        <div className="p-5 rounded-2xl bg-black/60 border border-red-800/80 space-y-3 text-xs">
          <span className="font-bold uppercase tracking-wider text-red-300 block">
            International Ground-to-Air Visual Distress Signals
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800">
              <span className="text-2xl font-black text-amber-300 block">X</span>
              <span className="text-[10px] text-red-200 block">Require Medical Doctor</span>
            </div>

            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800">
              <span className="text-2xl font-black text-amber-300 block">V</span>
              <span className="text-[10px] text-red-200 block">Require Assistance</span>
            </div>

            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800">
              <span className="text-2xl font-black text-amber-300 block">N</span>
              <span className="text-[10px] text-red-200 block">No / Negative</span>
            </div>

            <div className="p-2.5 rounded-lg bg-red-950/60 border border-red-800">
              <span className="text-2xl font-black text-amber-300 block">Y</span>
              <span className="text-[10px] text-red-200 block">Yes / Affirmative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
