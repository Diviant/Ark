import { BackpackCategory } from '../types';

export const BUG_OUT_BAG_CATEGORIES: BackpackCategory[] = [
  {
    id: 'documents',
    title: {
      en: '1. Documents & Funds',
      de: '1. Dokumente & Geld',
      ru: '1. Документы и деньги',
    },
    iconName: 'FileText',
    items: [
      {
        id: 'doc-passports',
        name: { en: 'Passports & National IDs (Copies in drybag)', de: 'Pässe & Personalausweise (Kopien in Beutel)', ru: 'Паспорта и свидетельства (копии в гермопакете)' },
        weightGrams: 150,
        priority: 'critical',
        defaultQuantity: 1,
        note: { en: 'Keep original documents in waterproof pouch.', de: 'Originale wasserdicht verpacken.', ru: 'Храните в непромокаемом гермочехле.' },
      },
      {
        id: 'doc-cash',
        name: { en: 'Emergency Cash ($200-$500 in small notes)', de: 'Notfall-Bargeld in kleinen Scheinen', ru: 'Наличные мелким номиналом' },
        weightGrams: 80,
        priority: 'critical',
        defaultQuantity: 1,
        note: { en: 'ATM credit card networks fail during blackouts.', de: 'Geldautomaten fallen bei Stromausfall aus.', ru: 'Банкоматы не работают при отключении света.' },
      },
      {
        id: 'doc-usb',
        name: { en: 'Encrypted USB Flash Drive (Property deeds, insurance)', de: 'Verschlüsselter USB-Stick (Versicherungen, Verträge)', ru: 'Зашифрованная флешка (документы, права на жилье)' },
        weightGrams: 30,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'water',
    title: {
      en: '2. Water & Hydration',
      de: '2. Wasser & Hydratisierung',
      ru: '2. Вода и гидратация',
    },
    iconName: 'Droplet',
    items: [
      {
        id: 'wat-bottle',
        name: { en: '1L Stainless Steel Water Bottle (Single wall for boiling)', de: '1L Edelstahl-Trinkflasche (einwandig zum Kochen)', ru: 'Стальная одностенная фляга 1 л (для кипячения)' },
        weightGrams: 220,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'wat-sawyer',
        name: { en: 'Sawyer Squeeze / Katadyn BeFree Water Filter', de: 'Sawyer Squeeze Wasserfilter', ru: 'Портативный фильтр Sawyer Squeeze' },
        weightGrams: 90,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'wat-bladder',
        name: { en: '2L Water Hydration Bladder (Filled)', de: '2L Trinkblase (befüllt)', ru: 'Гидратор 2 литра (заполненный)' },
        weightGrams: 2100,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'wat-tablets',
        name: { en: 'Aquatabs / Chlorine Purification Tablets (50 count)', de: 'Wasserentkeimungs-Tabletten (50 Stück)', ru: 'Таблетки для обеззараживания воды (50 шт)' },
        weightGrams: 25,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'food',
    title: {
      en: '3. Food & High Energy Rations',
      de: '3. Verpflegung & Notrationen',
      ru: '3. Питание и рационы',
    },
    iconName: 'Utensils',
    items: [
      {
        id: 'food-bars',
        name: { en: 'Compact Emergency Food Ration Blocks (3600 kcal / 72h)', de: 'Kompakte Notverpflegungs-Riegel (3600 kcal)', ru: 'Аварийные сублимированные рационы 3600 ккал' },
        weightGrams: 500,
        priority: 'critical',
        defaultQuantity: 1,
        note: { en: 'Ready to eat, requires no cooking or extra water.', de: 'Sofort verzehrfertig ohne Wasser.', ru: 'Готовы к употреблению, не требуют варки.' },
      },
      {
        id: 'food-mre',
        name: { en: 'Freeze-dried MRE Meals (3 pouches)', de: 'Gefriergetrocknete MRE-Mahlzeiten (3 Beutel)', ru: 'Сублимированные обеды MRE (3 пакета)' },
        weightGrams: 450,
        priority: 'recommended',
        defaultQuantity: 3,
      },
      {
        id: 'food-multitool-spork',
        name: { en: 'Titanium Spork & Can Opener', de: 'Titan-Spork & Dosenöffner', ru: 'Титановая ложка-вилка и консервный нож' },
        weightGrams: 45,
        priority: 'optional',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'first_aid',
    title: {
      en: '4. First Aid & Medical IFAK',
      de: '4. Erste Hilfe & Notfallapotheke',
      ru: '4. Аптечка первой помощи (IFAK)',
    },
    iconName: 'HeartPulse',
    items: [
      {
        id: 'med-tourniquet',
        name: { en: 'CAT Gen 7 Tactical Tourniquet', de: 'CAT Gen 7 Arterien-Aderpresse (Tourniquet)', ru: 'Кровоостанавливающий жгут-турникет CAT Gen 7' },
        weightGrams: 85,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'med-hemostatic',
        name: { en: 'QuikClot Hemostatic Gauze', de: 'QuikClot Blutstillende Gaze', ru: 'Гемостатический бинт QuikClot' },
        weightGrams: 60,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'med-prescriptions',
        name: { en: '7-Day Prescription Medications Supply', de: '7-Tage-Vorrat persönlicher Medikamente', ru: 'Запас рецептурных лекарств на 7 дней' },
        weightGrams: 100,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'med-bandage-kit',
        name: { en: 'Israel Trauma Bandage, Shears, Elastic Wraps', de: 'Israel-Notfallbandage, Kleiderschere, Binden', ru: 'Израильский перевязочный пакет, ножницы, бинты' },
        weightGrams: 280,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'clothing',
    title: {
      en: '5. Clothing & Weather Protection',
      de: '5. Kleidung & Wetter-Protektion',
      ru: '5. Одежда и защита от погоды',
    },
    iconName: 'Shirt',
    items: [
      {
        id: 'clo-socks',
        name: { en: 'Merino Wool Heavy Hiking Socks (2 pairs)', de: 'Merinowolle-Wandersocken (2 Paar)', ru: 'Носки из шерсти мериноса (2 пары)' },
        weightGrams: 180,
        priority: 'critical',
        defaultQuantity: 2,
      },
      {
        id: 'clo-poncho',
        name: { en: 'Ripstop Waterproof Rain Poncho / Tarp', de: 'Ripstop Regen-Poncho / Tarp', ru: 'Дождевик-пончо Ripstop (с функцией тента)' },
        weightGrams: 320,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'clo-thermal-base',
        name: { en: 'Thermal Underwear Base Layer (Top & Bottom)', de: 'Thermo-Unterwäsche Set', ru: 'Комплект термобелья (верхи и низы)' },
        weightGrams: 380,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'lighting_power',
    title: {
      en: '6. Lighting, Power & Comms',
      de: '6. Licht, Strom & Funk',
      ru: '6. Освещение, питание и связь',
    },
    iconName: 'Zap',
    items: [
      {
        id: 'pow-headlamp',
        name: { en: 'Rechargeable LED Headlamp (Red light mode, 350 lm)', de: 'Aufladbare LED-Stirnlampe (Rotlicht-Modus)', ru: 'Налобный фонарь (с режимом красного света, 350 лм)' },
        weightGrams: 95,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'pow-bank',
        name: { en: 'Rugged Power Bank (20,000 mAh) + Cables', de: 'Robuste Powerbank (20.000 mAh) + Kabel', ru: 'Ударный пауэрбанк (20 000 мАч) + кабели' },
        weightGrams: 420,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'pow-radio',
        name: { en: 'Emergency Hand-Crank AM/FM/NOAA Radio', de: 'Kurbelradio AM/FM/NOAA', ru: 'Динамо-радиоприемник AM/FM' },
        weightGrams: 310,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },

  {
    id: 'tools',
    title: {
      en: '7. Tools & Survival Hardware',
      de: '7. Werkzeug & Hardware',
      ru: '7. Инструменты и снаряжение',
    },
    iconName: 'Wrench',
    items: [
      {
        id: 'too-knife',
        name: { en: 'Full-Tang Fixed Blade Survival Knife (e.g. Mora Garberg)', de: 'Full-Tang Outdoor-Messer (z.B. Mora Garberg)', ru: 'Нож с фиксированным клинком Full-Tang (Mora Garberg)' },
        weightGrams: 240,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'too-ferro',
        name: { en: 'Ferrocerium Rod (12mm thick) + Tinder', de: 'Feuerstahl (12mm dick) + Zunder', ru: 'Огниво 12 мм + заготовка трута' },
        weightGrams: 110,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'too-paracord',
        name: { en: 'Commercial 550 Paracord (30 meters)', de: 'Paracord 550 (30 Meter)', ru: 'Паракорд 550 (30 метров)' },
        weightGrams: 220,
        priority: 'critical',
        defaultQuantity: 1,
      },
      {
        id: 'too-duct-tape',
        name: { en: 'Gorilla Duct Tape (Wrapped on card, 5m)', de: 'Panzerband / Panzer-Tape (5m)', ru: 'Армированный скотч Gorilla Tape (5м)' },
        weightGrams: 120,
        priority: 'recommended',
        defaultQuantity: 1,
      },
    ],
  },
];
