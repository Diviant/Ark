import { WaterMethod } from '../types';

export const WATER_METHODS: WaterMethod[] = [
  {
    id: 'water-boiling',
    name: {
      en: 'Vigorous Thermal Boiling',
      de: 'Thermisches Abkochen',
      ru: 'Термическое кипячение ключом',
    },
    type: 'purification',
    description: {
      en: '100% effective gold standard method that kills all biological pathogens including viruses, bacteria, protozoa, and parasites.',
      de: '100% effektiver Goldstandard, der alle biologischen Krankheitserreger wie Viren, Bakterien und Parasiten abtötet.',
      ru: 'Золотой стандарт обеззараживания, на 100% уничтожающий вирусы, бактерии, простейших и гельминтов.',
    },
    removesPathogens: {
      bacteria: true,
      viruses: true,
      protozoa: true,
      chemicals: false,
      sediment: false,
    },
    pros: [
      { en: 'Kills 100% of biological organisms including viruses.', de: 'Tötet 100% aller biologischen Erreger ab.', ru: 'Уничтожает 100% вирусов, бактерий и яиц паразитов.' },
      { en: 'Requires no expensive chemical tablets or filter cartridges.', de: 'Keine teuren Chemikalien oder Ersatzfilter nötig.', ru: 'Не требует картриджей и таблеток.' },
    ],
    cons: [
      { en: 'Does NOT remove chemical toxins, heavy metals, or dirt sediment.', de: 'Entfernt KEINE Chemikalien, Schwermetalle oder Schlamm.', ru: 'НЕ убирает химические яды, тяжелые металлы и муть.' },
      { en: 'Requires fuel, fire source, metal pot, and cooling wait time.', de: 'Benötigt Brennholz, Kochgeschirr und Abkühlzeit.', ru: 'Требует дров, котелка и времени на остывание.' },
    ],
    requiredEquipment: [
      { en: 'Fire or camp stove', de: 'Feuerstelle oder Gaskocher', ru: 'Костер или горелка' },
      { en: 'Metal cooking pot or stainless bottle', de: 'Metalltopf oder Edelstahlflasche', ru: 'Металлический котелок или стальная фляга' },
    ],
    stepByStep: [
      { en: 'Pre-filter cloudy water through a cloth or sand layer to remove heavy dirt.', de: 'Trübes Wasser zuerst durch Tuch vorfiltern.', ru: 'Предварительно процедите воду от мути через ткань.' },
      { en: 'Bring water to a vigorous rolling boil with large breaking bubbles.', de: 'Wasser zum sprudelnden Kochen bringen.', ru: 'Доведите воду до бурлящего кипения ключом.' },
      { en: 'Maintain boil for 3 full minutes (5 mins at high altitudes above 2,000m).', de: '3 Minuten lang kochen lassen (5 Min. im Hochgebirge).', ru: 'Кипятите минимум 3 минуты (5 минут в горах выше 2000м).' },
      { en: 'Cover vessel and allow water to cool in clean environment before drinking.', de: 'Abgedeckt abkühlen lassen.', ru: 'Дайте остыть в закрытой емкости.' },
    ],
  },

  {
    id: 'water-sawyer-microfilter',
    name: {
      en: 'Sawyer 0.1 Micron Hollow-Fiber Membrane Filter',
      de: 'Sawyer 0.1 Mikron Hohlfaser-Membranfilter',
      ru: 'Мембранный микрофильтр 0.1 мкн (Sawyer / Katadyn)',
    },
    type: 'filtration',
    description: {
      en: 'Mechanical hollow-fiber tube that traps 99.9999% of bacteria and protozoa (Giardia / Cryptosporidium) instantly without chemicals.',
      de: 'Mechanischer Hohlfaserfilter, der 99,9999% aller Bakterien und Protozoen sofort ohne Chemie herausfiltert.',
      ru: 'Механический мембранный фильтр, задерживающий 99.9999% бактерий и простейших мгновенно без химии.',
    },
    removesPathogens: {
      bacteria: true,
      viruses: false,
      protozoa: true,
      chemicals: false,
      sediment: true,
    },
    pros: [
      { en: 'Instant clean drinking water with zero waiting time or fuel use.', de: 'Sofort sauberes Trinkwasser ohne Wartezeit oder Feuer.', ru: 'Мгновенное получение чистой воды без топлива.' },
      { en: 'Filter lifespan up to 300,000 liters with backflushing care.', de: 'Lebensdauer bis zu 300.000 Liter bei Rückspülung.', ru: 'Ресурс до 300 000 литров при промывке шприцем.' },
    ],
    cons: [
      { en: 'Pores (0.1 micron) are too large to block tiny viral particles (Hepatitis A, Norovirus).', de: 'Poren zu groß für winzige Viren (Hepatitis A, Norovirus).', ru: 'Поры 0.1 мкм не задерживают вирусы (гепатит А, норовирус).' },
      { en: 'Membrane breaks permanently if allowed to freeze solid while damp.', de: 'Membran bricht bei Frost in feuchtem Zustand.', ru: 'Мембрана разрушается при замерзании во влажном состоянии.' },
    ],
    requiredEquipment: [
      { en: 'Sawyer Squeeze or Micro Squeeze filter kit', de: 'Sawyer Squeeze Filterset', ru: 'Фильтр Sawyer Squeeze' },
      { en: 'Squeeze pouch or 28mm thread PET bottle', de: 'Trinkbeutel oder 28mm PET-Flasche', ru: 'Мягкий бурдюк или ПЭТ бутылка 28мм' },
    ],
    stepByStep: [
      { en: 'Collect raw water into dirty squeeze pouch.', de: 'Rohwasser im schmutzigen Beutel sammeln.', ru: 'Наберите необработанную воду в мягкий бурдюк.' },
      { en: 'Screw Sawyer filter onto pouch threads.', de: 'Filter auf das Gewinde schrauben.', ru: 'Накрутите фильтр на резьбу бурдюка.' },
      { en: 'Squeeze water directly into clean drinking bottle or mouth.', de: 'Wasser durch den Filter in saubere Flasche drücken.', ru: 'Выдавливайте чистую воду в чистую флягу.' },
      { en: 'Backflush with clean water syringe after filtering turbid water.', de: 'Filter nach Gebrauch mit der Spritze rückspülen.', ru: 'Промывайте мембрану шприцем из комплекта.' },
    ],
  },

  {
    id: 'water-diy-charcoal-sand',
    name: {
      en: 'DIY Multi-Stage Charcoal & Sand Column Filter',
      de: 'Do-It-Yourself Kohle- & Sand-Filterturm',
      ru: 'Самодельная угольно-песчаная фильтровальная колонка',
    },
    type: 'filtration',
    description: {
      en: 'Field-expedient emergency filter constructed from plastic bottle, crushed campfire charcoal, fine sand, and pebbles.',
      de: 'Improvisierter Notfallfilter aus Flasche, zerkleinerter Holzkohle, feinem Sand und Kieselsteinen.',
      ru: 'Самодельный полевой фильтр из бутылки, угля из костра, песка и гальки для первичной очистки воды.',
    },
    removesPathogens: {
      bacteria: false,
      viruses: false,
      protozoa: false,
      chemicals: true,
      sediment: true,
    },
    pros: [
      { en: 'Can be built 100% from wild natural materials and camp rubbish.', de: 'Kann zu 100% aus Naturmaterialien gebaut werden.', ru: 'Изготавливается на 100% из подручных природных материалов.' },
      { en: 'Activated charcoal absorbs bad odors, heavy tannins, and organic chemicals.', de: 'Aktivkohle bindet Gerüche, Gerbstoffe und Organik.', ru: 'Древесный уголь поглощает запахи, горечь и органические яды.' },
    ],
    cons: [
      { en: 'Does NOT sterilize bacteria or viruses; MUST BE BOILED AFTERWARD!', de: 'Tötet KEINE Viren oder Bakterien; MUSS DANACH GEKOCHT WERDEN!', ru: 'НЕ уничтожает микробы и вирусы. ТРЕБУЕТ ОБЯЗАТЕЛЬНОГО КИПЯЧЕНИЯ!' },
    ],
    requiredEquipment: [
      { en: '1.5L PET plastic bottle or birch bark cone', de: '1,5L PET-Flasche oder Birkenrinden-Trichter', ru: 'Пластиковая бутылка 1.5л или конус из бересты' },
    ],
    stepByStep: [
      { en: 'Cut bottle base off and invert cap down.', de: 'Flaschenboden abschneiden und umdrehen.', ru: 'Отрежьте дно бутылки и переверните горлышком вниз.' },
      { en: 'Plug bottle neck with clean cloth, bandana, or sphagnum moss.', de: 'Hals mit Tuch oder Moos zustopfen.', ru: 'Заткните горлышко тканью или мхом сфагнумом.' },
      { en: 'Layer crushed charcoal (5cm) -> Fine sand (8cm) -> Coarse sand (5cm) -> Pebbles (5cm).', de: 'Schichten: Kohle (5cm) -> Feiner Sand (8cm) -> Grober Sand (5cm) -> Kies (5cm).', ru: 'Уложите слои: Уголь (5см) -> Мелкий песок (8см) -> Крупный песок (5см) -> Галька (5см).' },
      { en: 'Pour muddy water slowly through top and flush until water runs clear. BOIL CLEAR WATER!', de: 'Wasser langsam durchgießen. KLARES WASSER DANACH ABKOCHEN!', ru: 'Медленно проливайте мутную воду. ПОЛУЧЕННУЮ ПРОЗРАЧНУЮ ВОДУ ОБЯЗАТЕЛЬНО СКИПЯТИТЕ!' },
    ],
  },
];
