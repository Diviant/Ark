import { ShelterItem } from '../types';

export const SHELTERS_CATALOG: ShelterItem[] = [
  {
    id: 'shelter-debris-hut',
    name: {
      en: 'Debris Hut (Insulated Double-Pitch)',
      de: 'Laubhütte (Doppeldach-Isolation)',
      ru: 'Шалаш-кокон из лапника и листвы (Debris Hut)',
    },
    category: 'Wilderness',
    description: {
      en: 'Self-insulating debris mound requiring zero tools or cordage. Traps body heat down to sub-zero temperatures.',
      de: 'Selbstisolierende Laubhütte ohne Werkzeug. Speichert Körperwärme bei Minusgraden.',
      ru: 'Укрытие-кокон с толстым слоем сухой листвы и лапника. Сохраняет тепло без спальника в минус.',
    },
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    suitableWhen: {
      en: 'Cold forested areas, emergency survival without tarp or sleeping bag, sub-zero nights.',
      de: 'Kalte Waldgebiete, Notfall ohne Tarp oder Schlafsack, Frostnächte.',
      ru: 'Холодный лес, отсутствие тента и спальника, ночевка при отрицательных температурах.',
    },
    requiredMaterials: [
      { en: '1 Ridgepole (3m long, 8-10cm thick)', de: '1 Firststange (3m lang)', ru: '1 несущая слега (3м)' },
      { en: '2 Y-support sticks (1.2m tall)', de: '2 Y-Stützen (1.2m hoch)', ru: '2 Y-стойки (1.2м)' },
      { en: '30-40 Rib sticks (1.5m long)', de: '30-40 Rippenäste', ru: '30-40 реберных ветвей' },
      { en: 'Massive pile of dry leaves, pine needles, moss (1 meter thick)', de: 'Großer Haufen trockenes Laub (1m dick)', ru: 'Большая куча сухой листвы и хвои (толщина 1м)' },
    ],
    difficulty: 'intermediate',
    prepTimeHours: 3.5,
    mainRisks: [
      { en: 'Insects and ticks in leaf debris layer.', de: 'Zecken und Insekten im Laub.', ru: 'Насекомые и клещи в сухой листве.' },
      { en: 'Structural collapse if rib sticks are too thin or decayed.', de: 'Einsturzgefahr bei morschen Ästen.', ru: 'Обрушение при использовании гнилых веток.' },
    ],
    constructionSteps: [
      { en: 'Set Y-sticks and rest ridgepole on them at a 30-degree incline.', de: 'Y-Stützen aufstellen und Firststange im 30°-Winkel auflegen.', ru: 'Установите рогули и уложите слегу под углом 30 градусов.' },
      { en: 'Lean rib sticks along ridgepole closely like ribs on a spine.', de: 'Rippenäste wie ein Skelett an die Firststange lehnen.', ru: 'Уложите ребра с шагом 15 см к главной слеге.' },
      { en: 'Weave twigs horizontally across ribs to form a tight grid mesh.', de: 'Quergitter aus Zweigen einweben.', ru: 'Сделайте поперечную обрешетку из тонких веток.' },
      { en: 'Pile dry leaves, needles, and moss to a depth of at least 1 meter.', de: 'Mindestens 1 Meter dick trockenes Laub auftragen.', ru: 'Насыпьте листву и мох толщиной не менее 1 метра.' },
    ],
  },

  {
    id: 'shelter-tarp-lean-to',
    name: {
      en: 'Tarp Lean-To with Campfire Reflector',
      de: 'Tarp-Schrägdach mit Wärmereflektor',
      ru: 'Односкатный тент (Lean-To) с отражателем',
    },
    category: 'Bushcraft',
    description: {
      en: 'Classic 3x3m tarp pitch angled at 45 degrees facing a long campfire reflector wall. Fast setup under 20 minutes.',
      de: 'Klassisches Schrägdach mit Tarp im 45°-Winkel vor einem Lagerfeuer-Reflektor. Aufbau unter 20 Min.',
      ru: 'Быстровозводимое укрытие из тента 3х3м под углом 45 градусов напротив костра с отражателем.',
    },
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80',
    suitableWhen: {
      en: 'Moderate cold, rainy weather with access to firewood and tarp equipment.',
      de: 'Mäßige Kälte, Regen mit Brennholz und Tarp-Ausrüstung.',
      ru: 'Умеренный холод, дождь, наличие дров и тента.',
    },
    requiredMaterials: [
      { en: '1 Waterproof Tarp (3x3m)', de: '1 Wasserdichtes Tarp (3x3m)', ru: '1 водонепроницаемый тент (3х3м)' },
      { en: '15m Paracord 550', de: '15m Paracord 550', ru: '15м паракорда 550' },
      { en: '4 Ground stakes', de: '4 Erdheringe', ru: '4 колышка' },
      { en: '2 Trees (3m apart)', de: '2 Bäume (3m Abstand)', ru: '2 дерева на расстоянии 3м' },
    ],
    difficulty: 'beginner',
    prepTimeHours: 0.5,
    mainRisks: [
      { en: 'Wind shift blowing smoke directly into sleeping area.', de: 'Drehender Wind bläst Rauch ins Lager.', ru: 'Смена ветра, направляющая дым костра в место сна.' },
      { en: 'Flying sparks melting synthetic tarp material.', de: 'Funkenflug schmilzt Tarp-Gewebe.', ru: 'Искры от костра, прожигающие синтетический тент.' },
    ],
    constructionSteps: [
      { en: 'Tie ridgeline cord between two trees at chest height.', de: 'Firstleine auf Brusthöhe spannen.', ru: 'Натяните веревку между деревьями на уровне груди.' },
      { en: 'Attach tarp edge to ridgeline using Prusik hitches.', de: 'Tarp mit Prusik-Schlingen befestigen.', ru: 'Зафиксируйте тент к коньку узлами Прусика.' },
      { en: 'Stake back corners down tightly away from wind at 45 degrees.', de: 'Hintere Ecken straff am Boden verankern.', ru: 'Закрепите задние углы колышками к земле.' },
      { en: 'Build fire reflector wall 2 meters in front of the open lean-to.', de: 'Wärmereflektor-Wand 2m vor dem Eingang aufstellen.', ru: 'Постройте экран для костра на расстоянии 2м от входа.' },
    ],
  },

  {
    id: 'shelter-snow-cave',
    name: {
      en: 'Winter Snow Cave & Quinzee',
      de: 'Schneehöhle & Quinzee',
      ru: 'Снежная пещера и Квинзи (Quinzee)',
    },
    category: 'Winter',
    description: {
      en: 'Engineered snow shelter carved into deep drifts or sintered snow mounds with elevated sleeping bench and cold trap.',
      de: 'Gegrabene Schneehöhle in tiefen Schneewehen mit Kältefalle und erhöhtem Schlafbereich.',
      ru: 'Укрытие в глубоком сугробе с выемкой для холодного воздуха и поднятой спальной полкой.',
    },
    image: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=800&q=80',
    suitableWhen: {
      en: 'Extreme arctic winter survival, heavy snowdrifts (>2.5m), blizzard storms.',
      de: 'Arktischer Winter, tiefe Schneewehen (>2,5m), Schneestürme.',
      ru: 'Экстремальная зима, глубокий снег (>2.5м), метель и сильный мороз.',
    },
    requiredMaterials: [
      { en: 'Snow shovel / aluminum avalanche blade', de: 'Schneeschaufel', ru: 'Снеговая лопата' },
      { en: 'Avalanche probe or depth sticks', de: 'Lawinensonde', ru: 'Лавинный щуп или колышки 30 см' },
      { en: 'Sleeping pad insulation layer', de: 'Isomatte', ru: 'Теплоизолирующий каремат' },
    ],
    difficulty: 'expert',
    prepTimeHours: 4.0,
    mainRisks: [
      { en: 'Cave roof collapse due to flat non-domed geometry.', de: 'Einsturz bei flacher Decke.', ru: 'Обвал плоского потолка.' },
      { en: 'Carbon dioxide asphyxiation if ventilation hole drifts over.', de: 'Erstickung bei verstopftem Belüftungsloch.', ru: 'Удушье при заносе вентиляции снежной пургой.' },
    ],
    constructionSteps: [
      { en: 'Piles snow into 2m dome and insert 30cm depth indicator sticks.', de: 'Schneehaufen zu 2m Kuppel auftürmen und Tiefen-Äste einstecken.', ru: 'Насыпьте холм 2м и вткните колышки 30см.' },
      { en: 'Wait 3 hours for snow crystals to sinter and bond solidly.', de: '3 Stunden warten, bis der Schnee aushärtet.', ru: 'Подождите 3 часа для затвердения снега.' },
      { en: 'Dig low entrance trench below sleeping chamber floor height.', de: 'Eingangstunnel unterhalb der Schlaffläche graben.', ru: 'Выройте вход ниже спальной полки.' },
      { en: 'Hollow interior ceiling into a smooth dome arch and poke airway hole.', de: 'Innenraum kuppelförmig aushöhlen und Lüftungsloch stechen.', ru: 'Выберите снег изнутри куполом и пробейте вытяжку.' },
    ],
  },
];
