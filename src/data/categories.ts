import { CategoryDef } from '../types';

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'wilderness',
    title: {
      en: 'Wilderness Survival',
      de: 'Überleben in der Wildnis',
      ru: 'Выживание в лесу и природе',
    },
    description: {
      en: 'Core survival priorities, mental fortitude, seasonal adaptation, and wilderness navigation.',
      de: 'Grundlegende Überlebensprioritäten, mentale Stärke, saisonale Anpassung.',
      ru: 'Правило трех, психологическая стойкость, адаптация к сезонам и дикой природе.',
    },
    iconName: 'Trees',
    bgGradient: 'from-[#1B2C20] to-[#121B14]',
    accentColor: '#A5B88A',
  },
  {
    id: 'bushcraft',
    title: {
      en: 'Bushcraft & Camp Craft',
      de: 'Bushcraft & Lagerbau',
      ru: 'Бушкрафт и полевой лагерь',
    },
    description: {
      en: 'Field craft, working with wood, natural cordage, camp layout, and primitive toolmaking.',
      de: 'Handwerk in der Natur, Holzverarbeitung, Seile aus Naturfasern, Lagerbau.',
      ru: 'Работа с деревом, извлечение волокон, самодельные инструменты и обустройство лагеря.',
    },
    iconName: 'Axe',
    bgGradient: 'from-[#2A241A] to-[#16120E]',
    accentColor: '#C49A62',
  },
  {
    id: 'fire',
    title: {
      en: 'Fire & Heat',
      de: 'Feuer & Wärme',
      ru: 'Огонь и сохранение тепла',
    },
    description: {
      en: 'Ignition methods, tinder preparation, fire structures, windbreaks, and reflector walls.',
      de: 'Zündmethoden, Zunderzubereitung, Holzarten, Wärmereflektoren.',
      ru: 'Способы добычи искры, заготовка трута, типы костров и отражательные экраны.',
    },
    iconName: 'Flame',
    bgGradient: 'from-[#2E1E14] to-[#17100B]',
    accentColor: '#D97706',
  },
  {
    id: 'water',
    title: {
      en: 'Water & Food Procurement',
      de: 'Wasser & Nahrung',
      ru: 'Добыча и очистка воды',
    },
    description: {
      en: 'Water locating, mechanical multi-stage filtration, boiling, SODIS, chemical purification, and emergency rations.',
      de: 'Wasserfindung, Stufenfiltration, Abkochen, SODIS und Notverpflegung.',
      ru: 'Поиск источников, многоступенчатая фильтрация, кипячение, УФ-обработка и рационы.',
    },
    iconName: 'Droplets',
    bgGradient: 'from-[#17252A] to-[#0E171A]',
    accentColor: '#38BDF8',
  },
  {
    id: 'shelters',
    title: {
      en: 'Emergency Shelters',
      de: 'Notunterkünfte',
      ru: 'Укрытия и защита от непогоды',
    },
    description: {
      en: 'Lean-tos, debris huts, tarp A-frames, snow trenches, and site safety assessment.',
      de: 'Schrägdächer, Laubhätten, Tarp-Konzepte, Schneehöhlen und Standortwahl.',
      ru: 'Навесы, шалаши из ветвей и листвы, тенты, снеговые пещеры и выбор сухого места.',
    },
    iconName: 'Tent',
    bgGradient: 'from-[#222B20] to-[#121812]',
    accentColor: '#4ADE80',
  },
  {
    id: 'prepper',
    title: {
      en: 'Prepper & Home Autonomy',
      de: 'Prepper & Hausautonomie',
      ru: 'Подготовка дома и резервы (Prepper)',
    },
    description: {
      en: '72h to 90-day supply stockpiling, blackouts, bug-out bags, off-grid power, and family evacuation.',
      de: 'Vorräte für 72h bis 90 Tage, Stromausfälle, Fluchtrucksäcke, Notstrom.',
      ru: 'Создание запасов на 72ч - 90 дней, подстраховка при блэкаутах, планах эвакуации и автономии.',
    },
    iconName: 'ShieldAlert',
    bgGradient: 'from-[#292218] to-[#15120C]',
    accentColor: '#EAB308',
  },
  {
    id: 'first_aid',
    title: {
      en: 'Wilderness First Aid',
      de: 'Erste Hilfe in der Wildnis',
      ru: 'Первая помощь и медицина',
    },
    description: {
      en: 'Trauma care, hypothermia treatment, heat exhaustion, burns, improvised splints, and evacuation triage.',
      de: 'Traumaversorgung, Unterkühlung, Hitzschlag, Verbrennungen, Notfall-Triage.',
      ru: 'Противошоковые меры, гипотермия, ожоги, импровизированные шины и эвакуация.',
    },
    iconName: 'HeartPulse',
    bgGradient: 'from-[#2D1B1B] to-[#170E0E]',
    accentColor: '#EF4444',
  },
  {
    id: 'navigation',
    title: {
      en: 'Land Navigation',
      de: 'Orientierung & Navigation',
      ru: 'Навигация и ориентирование',
    },
    description: {
      en: 'Compass triangulation, topographic maps, celestial orientation, and lost person protocols.',
      de: 'Kompass-Triangulation, Topo-Karten, Orientierung nach Sonne & Sternen.',
      ru: 'Триангуляция по компасу, работа с топокартами, ориентирование по звездам и солнцу.',
    },
    iconName: 'Compass',
    bgGradient: 'from-[#1B242C] to-[#0E1317]',
    accentColor: '#818CF8',
  },
];
