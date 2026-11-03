import { PreparednessQuestion } from '../types';

export const PREPAREDNESS_AUDIT_QUESTIONS: PreparednessQuestion[] = [
  {
    id: 'q-water',
    categoryKey: 'Water Reserves',
    questionText: {
      en: 'How many days of drinking and sanitation water reserves does your household currently possess?',
      de: 'Für wie viele Tage besitzt dein Haushalt Wasser-Reserven (3L pro Person/Tag)?',
      ru: 'На сколько дней у вашей семьи заготовлен резерв питьевой и технической воды (3л на чел/день)?',
    },
    options: [
      {
        label: { en: 'Less than 24 hours (Tap water only)', de: 'Weniger als 24 Stunden (Nur Leitungswasser)', ru: 'Менее 24 часов (только водопровод)' },
        score: 1,
        recommendation: { en: 'Immediately store at least 12L bottled water per person for a 72h minimum baseline.', de: 'Lagere sofort mindestens 12L Flaschenwasser pro Person.', ru: 'Срочно заготовьте минимум 12 литров бутилированной воды на каждого члена семьи.' },
      },
      {
        label: { en: '3 Days Reserve (9 Liters per person stored)', de: '3-Tage-Vorrat (9L pro Person)', ru: 'Запас на 3 дня (по 9 литров на человека)' },
        score: 5,
        recommendation: { en: 'Good 72h baseline. Add a portable micro-filter (Sawyer) for emergency water sources.', de: 'Gutes 72h-Fundament. Eränze einen Wasserfilter.', ru: 'Хорошая базовая норма. Дополните запас портативным фильтром (Sawyer).' },
      },
      {
        label: { en: '14+ Days Reserve + Filtration System (Boiling / Sawyer / Chlorine)', de: '14+ Tage Vorrat + Filtersystem (Sawyer / Chlor)', ru: 'Запас на 14+ дней + многоступенчатый фильтр и методы очистки' },
        score: 10,
      },
    ],
  },

  {
    id: 'q-food',
    categoryKey: 'Food Reserves',
    questionText: {
      en: 'How long could your family survive on non-perishable stored food without electricity or grocery stores?',
      de: 'Wie lange kann deine Familie ohne Supermärkte von haltbaren Vorräten leben?',
      ru: 'Сколько дней ваша семья продержится на автономных запасах продуктов без магазинов и электричества?',
    },
    options: [
      {
        label: { en: '1-2 Days (Mostly refrigerated perishables)', de: '1-2 Tage (Hauptsächlich Kühlschrankware)', ru: '1-2 дня (в основном продукты из холодильника)' },
        score: 2,
        recommendation: { en: 'Stock up on canned protein, rice, beans, and high-calorie emergency rations.', de: 'Bevorrate Konserven, Reis und Notfall-Riegel.', ru: 'Сформируйте запас мясных и рыбных консервов, круп, сублиматов и каш.' },
      },
      {
        label: { en: '7-14 Days of canned and dried food requiring no refrigeration', de: '7-14 Tage haltbare Nahrungsmittel', ru: 'Запас сухих продуктов и консервов на 7-14 дней' },
        score: 7,
      },
      {
        label: { en: '30+ Days of rotating non-perishable food & freeze-dried rations', de: '30+ Tage rotierende Vorräte & Gefriertrocknung', ru: '30+ дней ротируемого запаса долговечных консервов и рационов' },
        score: 10,
      },
    ],
  },

  {
    id: 'q-power',
    categoryKey: 'Lighting & Off-Grid Power',
    questionText: {
      en: 'What backup lighting and electric power options are ready in your home for blackouts?',
      de: 'Welche Notstrom- und Lichtquellen stehen bei Stromausfall bereit?',
      ru: 'Какие средства автономного освещения и резервного питания у вас готовы на случай блэкаута?',
    },
    options: [
      {
        label: { en: 'Smartphone flashlights only', de: 'Nur Smartphone-Taschenlampen', ru: 'Только фонарик в телефоне' },
        score: 1,
        recommendation: { en: 'Purchase dedicated LED headlamps with spare lithium batteries and a 20,000 mAh power bank.', de: 'Kaufe LED-Stirnlampen mit Batterien und eine Powerbank.', ru: 'Приобретите налобные светодиодные фонари и пауэрбанк на 20 000 мАч.' },
      },
      {
        label: { en: 'LED Headlamps, Lanterns, and 20,000 mAh Powerbank', de: 'LED-Stirnlampen, Laternen & Powerbank', ru: 'Налобные фонари, кемпинговые лампы и пауэрбанк' },
        score: 6,
      },
      {
        label: { en: 'Solar Generators / LiFePO4 Station + Fuel Generator + Headlamps', de: 'LiFePO4 Powerstation / Solar / Generator', ru: 'Портативная зарядная станция LiFePO4 / генератор + солнечные панели' },
        score: 10,
      },
    ],
  },

  {
    id: 'q-medical',
    categoryKey: 'Medical Kit & Trauma',
    questionText: {
      en: 'Does your home possess a tactical IFAK trauma kit with tourniquets and 30-day chronic prescription medicines?',
      de: 'Besitzt du ein Trauma-IFAK-Set mit Tourniquet und 30-Tage Medikamentenvorrat?',
      ru: 'Есть ли у вас расширенная домашняя аптечка и тактический набор (IFAK) с жгутом-турникетом?',
    },
    options: [
      {
        label: { en: 'Basic adhesive band-aids only', de: 'Nur einfache Heftpflaster', ru: 'Только пластыри и анальгин' },
        score: 2,
        recommendation: { en: 'Assemble an emergency IFAK with CAT Tourniquet, Israeli Trauma Bandage, and a 30-day prescription backup.', de: 'Rüste ein Notfall-Set mit Tourniquet und Bandagen auf.', ru: 'Соберите расширенную аптечку с жгутом CAT, израильским бандажом и запасом рецептурных средств.' },
      },
      {
        label: { en: 'Comprehensive first aid kit with trauma dressings & medications', de: 'Umfangreiche Notfallapotheke mit Bandagen', ru: 'Комплексная аптечка с перевязочными материалами и медикаментами' },
        score: 7,
      },
      {
        label: { en: 'Tactical IFAK (Tourniquet, Hemostatic, Chest Seal) + Advanced First Aid certified', de: 'Taktisches IFAK + Erste-Hilfe-Zertifizierung', ru: 'Тактическая аптечка IFAK (турникет, гемостатик) + прохождение курсов первой помощи' },
        score: 10,
      },
    ],
  },

  {
    id: 'q-backpack',
    categoryKey: 'Evacuation & Bug-Out Bag',
    questionText: {
      en: 'Is a packed 72-hour evacuation backpack (Bug-Out Bag) ready near your front door right now?',
      de: 'Steht ein gepackter 72h-Fluchtrucksack griffbereit an der Tür?',
      ru: 'Собран ли у вас тревожный рюкзак на 72 часа, стоящий у входа для немедленной эвакуации?',
    },
    options: [
      {
        label: { en: 'No evacuation bag assembled', de: 'Kein Fluchtrucksack gepackt', ru: 'Рюкзак не собран' },
        score: 0,
        recommendation: { en: 'Use the WILDCRAFT Emergency Backpack Checklist to assemble a 72-hour bug-out bag.', de: 'Nutze die WILDCRAFT Checkliste zum Packen eines Fluchtrucksacks.', ru: 'Используйте чек-лист WILDCRAFT для сборки рюкзака на 72 часа.' },
      },
      {
        label: { en: 'Partial gear scattered, takes 30 minutes to pack', de: 'Teilweise vorhanden, dauert 30 Min. zum Packen', ru: 'Вещи разбросаны, на сбор уйдет более 30 минут' },
        score: 5,
      },
      {
        label: { en: 'Fully assembled 72h Bug-Out Bag for every family member', de: 'Vollständig gepackter Rucksack für jedes Familienmitglied', ru: 'Полностью собранный и подогнанный рюкзак на каждого члена семьи' },
        score: 10,
      },
    ],
  },
];
