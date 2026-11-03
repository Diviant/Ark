import { Article } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-001',
    title: {
      en: 'Debris Hut Emergency Shelter Construction',
      de: 'Bau einer Laub-Notunterkunft (Debris Hut)',
      ru: 'Строительство укрытия из лапника и листвы (Debris Hut)',
    },
    category: 'shelters',
    shortDescription: {
      en: 'Construct a highly insulating debris hut that traps body heat without requiring sleeping bags or blankets in sub-zero conditions.',
      de: 'Baue eine hochisolierende Laub-Notunterkunft, die Körperwärme ohne Schlafsack speichert.',
      ru: 'Пошаговое возведение двухскатного лесного укрытия из лапника и сухой листвы для сохранения тепла без спального мешка.',
    },
    mainImage: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Fixed-blade survival knife or hatchet', de: 'Messer mit feststehender Klinge oder Beil', ru: 'Нож с фиксированным клинком или топорик' },
      { en: 'Work gloves', de: 'Arbeitshandschuhe', ru: 'Рабочие перчатки' },
    ],
    requiredMaterials: [
      { en: '1 Ridgepole (sturdy log, ~3m long, wrist-thick)', de: '1 Firststange (stabiler Stamm, ~3m lang)', ru: '1 несущая слега (прочное бревно длиною ~3м)' },
      { en: '2 Y-shaped support sticks (chest height)', de: '2 Y-förmige Stützäste', ru: '2 Y-образные стойки-рогули (высотой по грудь)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Site Selection & Ground Clearance', de: 'Standortwahl & Bodenreinigung', ru: 'Выбор места и расчистка площадки' },
        description: {
          en: 'Find flat ground safe from overhead hazard branches (widowmakers) and flash flooding. Clear away wet debris down to dry soil or build an insulated raised floor mattress.',
          de: 'Wähle flachen Boden ohne morsche Äste darüber. Entferne feuchten Unrat und baue eine trockene Bodenisolation.',
          ru: 'Найдите ровную площадку без сухих ветвей над головой и риска затопления. Очистите грунт от сырости и подготовьте подложку.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80',
        tip: { en: 'Always check overhead for dead tree limbs before breaking ground.', de: 'Prüfe immer Totholz in den Baumkronen.', ru: 'Всегда проверяйте деревья над головой на наличие сухих аварийных сучьев.' },
      },
      {
        stepNumber: 2,
        title: { en: 'Framework Skeleton Assembly', de: 'Gerüst-Rahmen aufbauen', ru: 'Сборка несущего каркаса' },
        description: {
          en: 'Interlock the ridgepole into the two Y-sticks at a 30-degree angle. Place rib sticks along both sides at a 45-degree pitch, spaced 15cm apart.',
          de: 'Verkeile die Firststange in den Y-Ästen. Platziere Rippenäste im 45-Grad-Winkel im Abstand von 15cm.',
          ru: 'Зафиксируйте несущую слегу в рогулинах под углом 30 градусов. Уложите ребра каркаса с шагом 15 см под углом 45 градусов.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      },
      {
        stepNumber: 3,
        title: { en: 'Latching Mesh Lattice', de: 'Quergitter auflegen', ru: 'Укладка поперечной обрешетки' },
        description: {
          en: 'Weave smaller twigs horizontally across the rib sticks to form a mesh that prevents leaves and debris from falling into the sleeping cavity.',
          de: 'Flicht kleine Zweige quer über die Rippen, damit das Laub nicht durchfällt.',
          ru: 'Переплетите мелкие ветви поперек ребер каркаса, чтобы листва не проваливалась внутрь укрытия.',
        },
      },
      {
        stepNumber: 4,
        title: { en: 'Thick Debris Layering (Minimum 1 Meter)', de: 'Dicke Laubschicht auftragen (Mind. 1 Meter)', ru: 'Укладка утеплителя из листвы (минимум 1 метр)' },
        description: {
          en: 'Pile dry leaves, pine needles, fern fronds, and moss over the frame to an arm’s length depth (at least 90-100cm). Cap with heavy branches to prevent wind blow-off.',
          de: 'Schichte trockenes Laub, Tannennadeln und Moos mindestens 90-100cm dick auf. Sichere alles mit Ästen gegen Wind.',
          ru: 'Насыпайте сухую листву, хвоинки и мох толщиной минимум 90-100 см. Сверху прижмите тяжелыми ветками от ветра.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80',
      },
    ],
    commonErrors: [
      { en: 'Making the interior cavity too high; dead space drains body warmth.', de: 'Innenraum zu groß bauen; Totraum entzieht Körperwärme.', ru: 'Слишком большой внутренний объем; лишний воздух отбирает тепло тела.' },
      { en: 'Thinner than 60cm debris layer, allowing rain wind penetration.', de: 'Weniger als 60cm Laubschicht, was Wind und Regen durchlässt.', ru: 'Слой утеплителя менее 60 см, из-за чего укрытие продувается и протекает.' },
    ],
    hazardsAndWarnings: [
      { en: 'Do NOT build fire inside a debris hut; risk of asphyxiation and instant flash fire.', de: 'Kein Feuer IN der Unterkunft entzünden; Erstickungs- und Brandgefahr.', ru: 'КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО разводить огонь внутри из-за мгновенного возгорания и угара.' },
    ],
    practicalTips: [
      { en: 'Pack the inside cavity tight with leaves, then burrow into them like a sleeping bag.', de: 'Stopfe den Innenraum voll Laub und grabe dich wie in einen Schlafsack ein.', ru: 'Набейте внутренность укрытия сухими листьями и зарывайтесь в них как в спальник.' },
    ],
    sources: ['SAS Survival Handbook - John "Lofty" Wiseman', 'US Army Survival Manual FM 21-76'],
    lastVerifiedDate: '2026-03-15',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 8,
  },

  {
    id: 'art-002',
    title: {
      en: 'Ferro Rod Sparks & Tinder Ignition Mastery',
      de: 'Feuerstahl & Zunder-Ignition Meisterkurs',
      ru: 'Разведение огня огнивом (Ferro Rod) и заготовка трута',
    },
    category: 'fire',
    shortDescription: {
      en: 'Reliable all-weather fire ignition technique using ferrocerium rods, natural birch bark, char cloth, and feather sticks.',
      de: 'Zuverlässige Allwetter-Feuerentzündung mit Feuerstahl, Birkenrinde, Char Cloth und Feathersticks.',
      ru: 'Гарантированный способ розжига огнивом в дождь и снег с использованием бересты, обугленной ткани и оперенных палочек.',
    },
    mainImage: 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: 'Ferrocerium rod with sharp 90-degree spine knife', de: 'Feuerstahl mit scharfkantigem Messer-Rücken', ru: 'Огниво с обухом ножа под 90 градусов' },
      { en: 'Bushcraft knife', de: 'Bushcraft-Messer', ru: 'Нож для бушкрафта' },
    ],
    requiredMaterials: [
      { en: 'Papery birch bark or fatwood shavings', de: 'Birkenrinde oder Harzholz-Späne', ru: 'Береста или смолистая древесина (Fatwood)' },
      { en: 'Dry tinder bundle (jute twine or dried grass)', de: 'Trockenes Zunderbündel', ru: 'Сухой гнездовой трут из жгута или джута' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Tinder Nest Preparation', de: 'Zundernest-Vorbereitung', ru: 'Подготовка гнезда из трута' },
        description: {
          en: 'Scrape natural birch bark into fine powdery dust and paper-thin curls. Fluff up jute twine until fibers resemble a bird nest.',
          de: 'Schabe Birkenrinde zu feinem Staub. Rauf Juteschnur zu einem Vogelnest auf.',
          ru: 'Наскоблите бересту в тончайшую стружку. Взрыхлите джутовый шнур до состояния мягкого пушистого гнезда.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=80',
      },
      {
        stepNumber: 2,
        title: { en: 'Feather Stick Carving', de: 'Feathersticks schnitzen', ru: 'Нарезка оперенных палочек (Feather sticks)' },
        description: {
          en: 'Take dry softwood, split down to thumb thickness. Slice long, razor-thin curls along the stick without detaching them.',
          de: 'Schnitze lange, hauchdünne Locken an einem trockenen Weichholzstab, ohne sie abzutrennen.',
          ru: 'Возьмите сухое полено, отколите лучину толщиной с палец. Нарезайте тонкие стружки, не отделяя их от основания.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Ferro Rod Striking Stance', de: 'Feuerstahl-Schlagtechnik', ru: 'Техника выбивания искры' },
        description: {
          en: 'Place the tip of the ferro rod directly into the tinder nest. Pull the ROD back while keeping the scraper stationary to avoid scattering tinder.',
          de: 'Halte den Rücken des Messers fest und ziehe den FEUERSTAHL nach hinten weg, damit der Zunder nicht verweht.',
          ru: 'Уприте кончик огнива прямо в трут. ТЯНИТЕ ОГНИВО НА СЕБЯ, удерживая скребок неподвижно, чтобы не рассыпать трут.',
        },
      },
      {
        stepNumber: 4,
        title: { en: 'Flame Transfer & Fuel Staging', de: 'Flammenübertragung & Holzaufbau', ru: 'Перенос пламени и раздувание' },
        description: {
          en: 'Once the spark catches, blow gently into the tinder nest to produce a flame. Immediately feed matchstick-sized dry twigs.',
          de: 'Puste sanft in das glühende Zundernest. Füttere die Flamme sofort mit streichholzgroßen Zweigen.',
          ru: 'При появлении тления плавно раздувайте гнездо до вспышки пламени. Сразу подкладывайте веточки толщиной со спичку.',
        },
      },
    ],
    commonErrors: [
      { en: 'Pushing the knife forward, smashing the tinder bundle.', de: 'Messer nach vorne stoßen und Zunder zerstören.', ru: 'Толкание ножа вперед, из-за чего трут разлетается в стороны.' },
      { en: 'Attempting to ignite damp thick firewood without kindling stages.', de: 'Versuch, feuchtes Scheitholz direkt zu zünden.', ru: 'Попытка поджечь толстые дрова без промежуточной мелочи.' },
    ],
    hazardsAndWarnings: [
      { en: 'Always clear 1.5 meters around the fire pit down to mineral earth.', de: 'Säubere den Untergrund im Radius von 1,5m bis auf die Erde.', ru: 'Очищайте кострище в радиусе 1.5м до минерального грунта.' },
    ],
    practicalTips: [
      { en: 'Fatwood resin shavings burn fiercely even when floating on water.', de: 'Harzreiche Späne brennen selbst auf der Wasseroberfläche.', ru: 'Смолистая стружка (Fatwood) горит даже при сильном ветре и сырости.' },
    ],
    sources: ['Mora Knife Survival Field Guide', 'Bushcraft 101 - Dave Canterbury'],
    lastVerifiedDate: '2026-02-10',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 6,
  },

  {
    id: 'art-003',
    title: {
      en: 'Multi-Stage Gravity Water Filtration & Purification',
      de: 'Mehrstufige Schwerkraft-Wasserfiltration & Entkeimung',
      ru: 'Многоступенчатая гравитационная фильтрация и обеззараживание воды',
    },
    category: 'water',
    shortDescription: {
      en: 'Construct a field-expedient sand, charcoal, and moss gravity filter paired with boiling or SODIS sterilization.',
      de: 'Baue einen Feld-Schwerkraftfilter aus Sand, Holzkohle und Moos in Kombination mit Abkochen oder SODIS.',
      ru: 'Изготовление полевого фильтра из угля, песка и мха в сочетании с кипячением для удаления 99.99% микробов.',
    },
    mainImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Plastic bottle or hollow birch bark cone', de: 'Plastikflasche oder Birkenrinden-Trichter', ru: 'Пластиковая бутылка или берестяной конус' },
      { en: 'Metal pot or mess kit for boiling', de: 'Metalltopf oder Kochgeschirr', ru: 'Металлический котелок для кипячения' },
    ],
    requiredMaterials: [
      { en: 'Crushed hardwood charcoal from campfire', de: 'Zerkleinerte Holzkohle aus dem Lagerfeuer', ru: 'Измельченный древесный уголь из костра' },
      { en: 'Coarse sand, fine sand, and small river pebbles', de: 'Grober Sand, feiner Sand und Kieselsteine', ru: 'Крупный и мелкий речной песок, галька' },
      { en: 'Clean sphagnum moss or cotton cloth', de: 'Sauberes Sphagnum-Moos oder Baumwolltuch', ru: 'Чистый мох сфагнум или хлопковая ткань' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Filter Vessel Inversion & Cloth Plug', de: 'Behälter vorbereiten & Stoffstopfen', ru: 'Подготовка емкости и тканевой пробки' },
        description: {
          en: 'Cut the bottom off a plastic bottle, invert cap down. Place a clean bandana or moss plug in the narrow neck to prevent media wash-out.',
          de: 'Schneide den Boden einer Flasche ab, drehe sie um. Platziere Tuch oder Moos im Hals als Rückhaltesicherungs-Pfropfen.',
          ru: 'Отрежьте дно бутылки, переверните горлышком вниз. Уложите ткань или сфагнум в горлышко для удержания фильтрующих слоев.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Layering Active Media (Charcoal, Sand, Gravel)', de: 'Schichtenaufbau (Kohle, Sand, Kies)', ru: 'Послойная укладка наполнителей' },
        description: {
          en: 'Layer 1: Crushed active charcoal (absorbs chemicals & odors). Layer 2: Fine sand. Layer 3: Coarse sand. Layer 4: Small pebbles (traps leaves & heavy debris).',
          de: 'Schicht 1: Zerkleinerte Kohle (bindet Chemie & Geruch). Schicht 2: Feiner Sand. Schicht 3: Grober Sand. Schicht 4: Kies.',
          ru: 'Слой 1: Измельченный уголь (сорбент запахов и химии). Слой 2: Мелкий песок. Слой 3: Крупный песок. Слой 4: Галька.',
        },
        imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=800&q=80',
      },
      {
        stepNumber: 3,
        title: { en: 'Gravity Clarification Run', de: 'Schwerkraft-Filtration durchführen', ru: 'Пролив воды самотеком' },
        description: {
          en: 'Pour turbid water slowly into the top. Discard the first 2 liters until water runs crystal clear.',
          de: 'Gieße trübes Wasser langsam oben hinein. Verwerfe die ersten 2 Liter, bis das Wasser klar rinnt.',
          ru: 'Медленно заливайте мутную воду сверху. Первые 2 литра слейте, пока фильтрат не станет прозрачным.',
        },
      },
      {
        stepNumber: 4,
        title: { en: 'Thermal Disinfection (Rolling Boil for 3 Mins)', de: 'Thermische Desinfektion (3 Min. sprudelnd kochen)', ru: 'Обеззараживание кипячением (3 минуты)' },
        description: {
          en: 'Mechanical filtration removes dirt, but NOT viruses or bacteria. Bring clarified water to a vigorous rolling boil for 3 full minutes (5 mins above 2,000m altitude).',
          de: 'Filtration entfernt Dreck, ABER keine Viren! Koche das geklärte Wasser 3 Minuten sprudelnd ab.',
          ru: 'Фильтр убирает муть, но НЕ убивает вирусы. Обязательно кипятите воду ключом минимум 3 минуты.',
        },
      },
    ],
    commonErrors: [
      { en: 'Confusing mechanical filtration with purification; drinking unboiled filtered water causes giardiasis.', de: 'Filtration mit Entkeimung verwechseln; ungekochtes Filterwasser kann Giardien enthalten.', ru: 'Путаница фильтрации и обеззараживания; некипяченая фильтрованная вода содержит гиардии и кишечную палочку.' },
    ],
    hazardsAndWarnings: [
      { en: 'Never harvest water near agricultural runoff or industrial chemical dumps.', de: 'Niemals Wasser aus der Nähe von Industrie- oder Düngerflächen nutzen.', ru: 'Запрещен забор воды вблизи сельхозугодий и промзон.' },
    ],
    practicalTips: [
      { en: 'Activated charcoal absorbs heavy organic tastes and toxic tannins from stagnant water.', de: 'Aktivkohle neutralisiert bitteren Geschmack und organische Schadstoffe.', ru: 'Активированный древесный уголь поглощает горечь и тосичные органические соединения.' },
    ],
    sources: ['CDC Water Disinfection Guidelines', 'WHO Guidelines for Drinking-water Quality'],
    lastVerifiedDate: '2026-01-20',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 7,
  },

  {
    id: 'art-004',
    title: {
      en: '72-Hour Family Bug-Out Bag Assembly Protocol',
      de: '72-Stunden Fluchtrucksack (Bug-Out Bag) Protokoll',
      ru: 'Комплектование тревожного рюкзака на 72 часа для всей семьи',
    },
    category: 'prepper',
    shortDescription: {
      en: 'Systematic guide to packing a balanced 12-15kg survival backpack with 72h water, food, shelter, comms, and medical gear.',
      de: 'Systematischer Leitfaden zum Packen eines 12-15kg Rucksacks mit Wasser, Nahrung, Notunterkunft und Erste Hilfe.',
      ru: 'Пошаговый регламент сборки 12-15 кг тревожного рюкзака с запасом воды, рационов, связи и документов.',
    },
    mainImage: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: '40-50L weather-resistant backpack with hip belt', de: '40-50L wetterfester Rucksack mit Hüftgurt', ru: 'Рюкзак 40-50 л с анатомическим поясом' },
      { en: 'Waterproof dry bags / ziplock sleeves', de: 'Wasserdichte Packbeutel', ru: 'Водонепроницаемые гермомешки' },
    ],
    requiredMaterials: [
      { en: '3L water bladder + Sawyer Squeeze filter', de: '3L Trinkblase + Sawyer Squeeze Filter', ru: 'Гидратор 3л + портативный фильтр Sawyer' },
      { en: 'High-calorie compact emergency food rations (3600 kcal)', de: 'Kompakte Notverpflegungs-Riegel (3600 kcal)', ru: 'Аварийные сублимированные рационы 3600 ккал' },
      { en: 'Document waterproof pouch & USB backup', de: 'Wasserdichte Dokumententasche & USB-Backup', ru: 'Водонепроницаемый чехол с документами и флешкой' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Weight Distribution & Layering Rules', de: 'Gewichtsverteilung & Packordnung', ru: 'Правила распределения веса и укладка' },
        description: {
          en: 'Place light sleeping gear at the bottom. Heavy water and food items directly against your spine at shoulder height. Frequently needed items in top lid.',
          de: 'Schlafsack nach unten. Schwere Wasser- und Verpflegungsbeutel nah an die Wirbelsäule auf Schulterhöhe.',
          ru: 'Спальные принадлежности укладывайте вниз. Тяжелую воду и еду — к спине на уровне лопаток. Аптечку — в верхний клапан.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Redundant Water & Hydration System', de: 'Redundantes Wassersystem', ru: 'Резервная система водообеспечения' },
        description: {
          en: 'Never rely on a single water container. Pack 3L total: 1L stainless steel bottle (for boiling), 2L flexible bladder + micro-filter straw.',
          de: 'Packe 3L Wasser: 1L Edelstahlflasche (zum Abkochen) + 2L Trinkblase + Hohlfasermembran-Filter.',
          ru: 'Берите минимум 3 литра воды: 1л в стальной фляге (для кипячения), 2л в мягкой медовухе + фильтр-трубку.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Shelter & Thermal Insulation Core', de: 'Schutz & Wärmeisolation', ru: 'Укрытие и сохранение тепла' },
        description: {
          en: 'Pack a 3x3m ripstop silnylon tarp, 6 aluminum stakes, 15m 550 paracord, and 2 mylar thermal emergency space blankets.',
          de: 'Packe ein 3x3m Silnylon-Tarp, 6 Heringe, 15m Paracord und 2 Rettungsdecken.',
          ru: 'Уложите силиконовый тент 3х3м, 6 колышков, 15м паракорда и 2 спасательных термоодеяла.',
        },
      },
      {
        stepNumber: 4,
        title: { en: 'Comms, Light & Power Bank Module', de: 'Kommunikation, Licht & Notstrom', ru: 'Модуль связи, света и питания' },
        description: {
          en: 'Pack a crank emergency NOAA radio, headlamp with spare lithium batteries, powerbank (10,000-20,000 mAh), and laminated emergency phone numbers.',
          de: 'Packe Kurbelradio, Stirnlampe mit Lithium-Akkus, Powerbank und laminierte Notfallnummern.',
          ru: 'Уложите динамо-радиоприемник, налобный фонарь с литиевыми батарейками, пауэрбанк и ламинированный список контактов.',
        },
      },
    ],
    commonErrors: [
      { en: 'Exceeding 20% of your body weight, causing total exhaustion after 5km walk.', de: 'Rucksack über 20% des Körpergewichts packen.', ru: 'Перегруз рюкзака более 20% веса тела, вызывающий истощение через 5 км.' },
      { en: 'Forgetting critical personal prescription medicines.', de: 'Vergessen von lebenswichtigen persönlichen Medikamenten.', ru: 'Забытые жизненно важные рецептурные медикаменты.' },
    ],
    hazardsAndWarnings: [
      { en: 'Regularly rotate stored food and battery charges every 6 months.', de: 'Rotationsprinzip: Nahrung und Batterien alle 6 Monate prüfen.', ru: 'Проводите ротацию продуктов и зарядку аккумуляторов каждые 6 месяцев.' },
    ],
    practicalTips: [
      { en: 'Line the entire inside of your pack with a heavy-duty trash bag for 100% waterproof protection.', de: 'Kleide das Rucksack-Innere mit einem dicken Müllbeutel als Wasserschutz aus.', ru: 'Вложите внутрь рюкзака плотный мусорный пакет на 120л для 100% защиты от ливня.' },
    ],
    sources: ['FEMA Emergency Supply Checklist', 'Red Cross Bug-Out Preparation Guide'],
    lastVerifiedDate: '2026-03-01',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 10,
  },

  {
    id: 'art-005',
    title: {
      en: 'Wilderness Hypothermia Triage & Treatment Protocol',
      de: 'Hypothermie Erste-Hilfe & Behandlung in der Wildnis',
      ru: 'Первая помощь при переохлаждении (гипотермии) в полевых условиях',
    },
    category: 'first_aid',
    shortDescription: {
      en: 'Recognize mild vs severe hypothermia symptoms, construct a burrito wrap insulation wrap, and safely rewarm a casualty.',
      de: 'Erkenne Hypothermie-Symptome und baue ein Burrito-Isolationssystem zur sicheren Wiedererwärmung.',
      ru: 'Распознавание степеней гипотермии, спасательное оборачивание "Бурито" и безопасность при отогревании.',
    },
    mainImage: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'advanced',
    requiredEquipment: [
      { en: 'Sleeping pad & insulating sleeping bag', de: 'Isomatte & Daunenschlafsack', ru: 'Каремат и спальный мешок' },
      { en: 'Emergency mylar thermal blanket + tarp', de: 'Rettungsdecke & Tarp', ru: 'Спасательное термоодеяло и тент' },
    ],
    requiredMaterials: [
      { en: 'Hot water bottles wrapped in socks', de: 'In Socken gewickelte Wärmflaschen', ru: 'Бутылки с теплой водой в носках' },
      { en: 'Warm sugary non-alcoholic beverages', de: 'Warme, gezuckerte alkoholfreie Getränke', ru: 'Теплый сладкий чай (без алкоголя)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Assess Severity & Prevent Further Heat Loss', de: 'Schweregrad prüfen & Wärmeverlust stoppen', ru: 'Оценка состояния и прекращение охлаждения' },
        description: {
          en: 'Mild: Shivering, slurred speech, clear mind. Severe: Shivering stops, confusion, collapse. Immediately shelter casualty from wind and wet ground.',
          de: 'MILD: Kältezittern, Verwirrung. SCHWER: Zittern hört auf, Bewusstlosigkeit. Sofort aus Wind & Nässe bringen.',
          ru: 'Легкая: Дрожь, невнятная речь. Тяжелая: Дрожь прекратилась, спутанность, угасание. Срочно укройте от ветра.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Strip Wet Clothes & Dry Body', de: 'Nasse Kleidung ausziehen & Trocknen', ru: 'Снятие мокрой одежды' },
        description: {
          en: 'Gently cut or strip off wet garments. Water transfers heat away from the body 25 times faster than air.',
          de: 'Ziehe nasse Kleidung vorsichtig aus. Wasser leitet Körperwärme 25-mal schneller ab als Luft.',
          ru: 'Аккуратно снимите или разрежьте мокрую одежду. Вода отводит тепло от тела в 25 раз быстрее воздуха.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Construct the "Hypothermia Burrito Wrap"', de: '"Hypothermie-Burrito" Isolationspaket bauen', ru: 'Сборка изолирующего кокона "Бурито"' },
        description: {
          en: 'Ground tarp -> Sleeping pad -> Sleeping bag -> Casualty -> Mylar blanket wrap. Place warm water bottles under armpits and groin (never direct skin contact).',
          de: 'Boden-Tarp -> Isomatte -> Schlafsack -> Patient -> Rettungsdecke. Platziere warme Flaschen in Achseln & Leiste.',
          ru: 'Тент -> Каремат -> Спальник -> Пострадавший -> Термоодеяло. Бутылки с теплой водой — в подмышки и пах.',
        },
      },
    ],
    commonErrors: [
      { en: 'Giving alcohol or caffeine; alcohol dilates blood vessels and accelerates core heat loss.', de: 'Alkohol geben; Alkohol erweitert die Gefäße und beschleunigt das Auskühlen.', ru: 'Давать алкоголь; он расширяет сосуды и ускоряет смертельное падение температуры ядра.' },
      { en: 'Rubbing frostbitten skin or putting victim in a hot bath (causes fatal rewarming cardiac arrest / afterdrop).', de: 'Erfrorene Haut reiben oder heißes Bad geben (Gefahr von Herzstillstand / Afterdrop).', ru: 'Растирание обморожений или горячая ванна (вызывает смертельную остановку сердца от перепада).' },
    ],
    hazardsAndWarnings: [
      { en: 'Handle severe hypothermia victims with extreme gentleness to prevent fatal cardiac ventricular fibrillation.', de: 'Schwer Unterkühlte extrem vorsichtig bewegen (Gefahr von Kammerflimmern).', ru: 'Перемещайте тяжелого больного предельно плавно, чтобы избегать фибрилляции желудочков сердца.' },
    ],
    practicalTips: [
      { en: 'Internal calories generate core body heat: feed conscious mild victims simple sugars and warm broth.', de: 'Zucker liefert schnelle Energie für die körpereigene Wärmeproduktion.', ru: 'Сладкие быстрые углеводы дают энергию для самостоятельного разогрева организма.' },
    ],
    sources: ['Wilderness Medical Society Clinical Practice Guidelines', 'International Red Cross First Aid Manual'],
    lastVerifiedDate: '2026-02-28',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 9,
  },

  {
    id: 'art-006',
    title: {
      en: 'Topographic Map & Lensatic Compass Navigation',
      de: 'Orientierung mit Topo-Karte & Peilkompass',
      ru: 'Работа с топографической картой и линзовым компасом',
    },
    category: 'navigation',
    shortDescription: {
      en: 'Master declination adjustment, taking bearings, plotting coordinates, and navigating dead reckoning without GPS signal.',
      de: 'Meistere Deklinationskorrektur, Peilung, Koordinatenbestimmung und Koppelnavigation ohne GPS.',
      ru: 'Расчет магнитного склонения, снятие азимута, определение координат и движение по азимуту без GPS.',
    },
    mainImage: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Baseplate or lensatic compass with declination scale', de: 'Spiegel- oder Peilkompass mit Deklinationsskala', ru: 'Компас с визиром и шкалой склонения' },
      { en: '1:25,000 or 1:50,000 topographic map', de: '1:25.000 oder 1:50.000 Topo-Karte', ru: 'Топографическая карта масштаба 1:25 000 или 1:50 000' },
    ],
    requiredMaterials: [
      { en: 'Map protractor ruler & waterproof map case', de: 'Kartenwinkelmesser & wasserdichte Kartentasche', ru: 'Курвиметр/линейка и прозрачный гермочехол' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Map Orienting to True North', de: 'Karte nach Nord eingenordet', ru: 'Ориентирование карты по северу' },
        description: {
          en: 'Align the compass edge along the map grid lines. Rotate map until the magnetic needle aligns inside the orienteering arrow, corrected for local declination.',
          de: 'Richte die Kartenkante nach den Nordlinien aus. Drehe die Karte, bis die Nadel in die Nordschild-Markierung zeigt.',
          ru: 'Совместите край компаса с линией сетки карты. Вращайте карту до совмещения стрелки с севером с учетом склонения.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Taking Bearing from Map to Field', de: 'Peilung von der Karte ins Gelände', ru: 'Снятие азимута с карты в поле' },
        description: {
          en: 'Place compass line connecting current position to target destination. Read bearing degree at index mark. Hold compass flat in hand and align red needle to red housing arrow.',
          de: 'Verbinde Start und Ziel mit der Kompasskante. Lies die Gradzahl ab und verfolge die Marschrichtung im Gelände.',
          ru: 'Соедините линейкой компаса точку старта и финиша. Считайте градус азимута. Держите компас ровно и идите по визиру.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Pace Counting & Dead Reckoning', de: 'Schrittzählung & Koppelnavigation', ru: 'Подсчет шагов и выдерживание направления' },
        description: {
          en: 'Know your pace count (average 62 double-steps per 100m on flat ground). Use ranger beads to keep track of every 100 meters walked.',
          de: 'Kenne deine Doppelschrittzahl per 100m (~62 Doppelschritte). Nutze eine Zählschnur (Ranger Beads).',
          ru: 'Знай свой шаг (около 62 двойных шагов на 100м). Используйте шагомер или узелки (Ranger Beads).',
        },
      },
    ],
    commonErrors: [
      { en: 'Holding compass near iron tools, cell phones, or vehicle engines (magnetic interference deflection).', de: 'Kompass nahe Metall oder Smartphone halten (Verfälschung der Nadel).', ru: 'Держать компас рядом с телефоном, ножом или металлом (магнитная девиация).' },
    ],
    hazardsAndWarnings: [
      { en: 'Always check magnetic declination values printed on the map margin.', de: 'Deklinationswert auf dem Kartenrand prüfen.', ru: 'Всегда проверяйте поправку на магнитное склонение на полях карты.' },
    ],
    practicalTips: [
      { en: 'Aim off target intentionally when walking to a linear landmark like a river or trail to know which way to turn.', de: 'Ziele absichtlich etwas neben eine Flussbiegung, um zu wissen, in welche Richtung du abbiegen musst.', ru: 'При выходе на линейный ориентир (реку) берите намеренное смещение азимута, чтобы знать, куда поворачивать.' },
    ],
    sources: ['US Army Map Reading and Land Navigation FM 3-25.26'],
    lastVerifiedDate: '2026-02-15',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 8,
  },

  {
    id: 'art-007',
    title: {
      en: 'Campfire Reflector Wall & Heat Conservation Design',
      de: 'Wärmereflektor-Wand & Lagerfeuer-Design',
      ru: 'Отражательный экран для костра и сохранение тепла',
    },
    category: 'fire',
    shortDescription: {
      en: 'Construct a timber or stone heat reflector wall behind your fire to radiate 300% more infrared heat directly into your open shelter.',
      de: 'Baue eine Holz- oder Stein-Reflektorwand hinter dem Feuer für 300% mehr Wärmestrahlung im Unterstand.',
      ru: 'Строительство отражающей стены из бревен или камня за костром для улавливания и направления 300% тепла в укрытие.',
    },
    mainImage: 'https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Axe or folding saw', de: 'Axt oder Klappsäge', ru: 'Топор или складная пила' },
    ],
    requiredMaterials: [
      { en: '4 Sturdy vertical stakes (1.5m tall)', de: '4 Stabile Vertikalpfähle (1,5m hoch)', ru: '4 прочных кола (высотой 1.5м)' },
      { en: '6-8 Green logs (wrist to thigh thick, 1.8m long)', de: '6-8 Grüne Holzstämme (1,8m lang)', ru: '6-8 сырых бревен (длиной 1.8м)' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Reflector Positioning relative to Shelter', de: 'Positionierung zum Unterstand', ru: 'Размещение экрана относительно укрытия' },
        description: {
          en: 'Position the reflector wall 1.5 meters from your shelter entrance, perpendicular to prevailing wind direction.',
          de: 'Positioniere die Wand 1,5 Meter vor dem Eingang der Unterkunft im 90-Grad-Winkel zum Wind.',
          ru: 'Установите стенку на расстоянии 1.5 м от входа в укрытие перпендикулярно господствующему ветру.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Staking & Log Stacking', de: 'Pfähle setzen & Stämme stapeln', ru: 'Вбивание кольев и укладка бревен' },
        description: {
          en: 'Drive two pairs of stakes into the ground 1.5m apart. Stack fresh green logs vertically inside the stake channels.',
          de: 'Schlage zwei Pfahlpaare in den Boden. Staple feuchte grüne Stämme dazwischen.',
          ru: 'Вбейте две пары кольев. Послойно уложите сырые тяжелые бревна между кольями.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Mud & Earth Backsealing', de: 'Erd- & Schlammabdichtung', ru: 'Замазка щелей глиной и землей' },
        description: {
          en: 'Pack wet mud, clay, and damp mineral soil into log gaps to block draft winds and prevent logs from catching fire.',
          de: 'Fülle Ritzen mit feuchtem Lehm und Erde auf, um Zugluft zu stoppen.',
          ru: 'Замажьте щели между бревнами сырой глиной и землей для защиты от продувания и прогорания.',
        },
      },
    ],
    commonErrors: [
      { en: 'Using dry pine logs for the reflector; dry wood catches fire and burns down your wall.', de: 'Trockenes Nadelholz nutzen; es fängt Feuer und brennt die Wand ab.', ru: 'Использование сухой сосны; сухая древесина мгновенно вспыхивает.' },
    ],
    hazardsAndWarnings: [
      { en: 'Never use wet river rocks for fire surrounds; trapped moisture causes explosive rock shattering.', de: 'Keine nassen Flusssteine nutzen; eingeschlossenes Wasser bringt Steine zum Explodieren.', ru: 'Запрещено использовать мокрые речные камни; закипающая влага раскалывает камни со взрывом.' },
    ],
    practicalTips: [
      { en: 'Angling the wall slightly forward reflects radiant heat down onto your body sleeping area.', de: 'Leichte Neigung nach vorne lenkt die Wärmestrahlung direkt auf den Liegebereich.', ru: 'Небольшой наклон стены вперед направляет инфракрасное тепло непосредственно на спальное место.' },
    ],
    sources: ['Woodcraft and Camping - Nessmuk (George W. Sears)'],
    lastVerifiedDate: '2026-01-18',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 5,
  },

  {
    id: 'art-008',
    title: {
      en: 'Emergency Water Procurement from Air Moisture & Vegetation',
      de: 'Notfall-Wassergewinnung aus Pflanzen & Luftfeuchtigkeit',
      ru: 'Добыча экстренной воды из растений и конденсата (Transpiration Bag)',
    },
    category: 'water',
    shortDescription: {
      en: 'Harvest up to 2 liters of pure distilled drinking water daily using clear transpiration plastic bags on non-toxic leafy tree branches.',
      de: 'Gewinne bis zu 2L reines destilliertes Trinkwasser pro Tag mit Plastiktüten an Laubbaum-Ästen.',
      ru: 'Получение до 2 литров дистиллированной питьевой воды в сутки с помощью прозрачных пакетов на ветвях деревьев.',
    },
    mainImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: 'Large clear heavy-duty plastic trash bag (100L)', de: 'Großer transparenter Plastiksack (100L)', ru: 'Прозрачный плотный полиэтиленовый пакет (100л)' },
      { en: 'Paracord or zip tie', de: 'Paracord oder Kabelbinder', ru: 'Паракорд или пластиковый хомут' },
    ],
    requiredMaterials: [
      { en: 'Healthy non-toxic broadleaf tree branch in direct sunlight', de: 'Gesunder Laubbaum-Ast in direkter Sonne', ru: 'Ветвь здорового лиственного дерева на солнце' },
      { en: 'Small clean stone', de: 'Kleiner sauberer Stein', ru: 'Небольшой чистый камень' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Tree Species Safety Check', de: 'Baumarten-Sicherheitsprüfung', ru: 'Проверка безопасности породы дерева' },
        description: {
          en: 'Select healthy, sun-exposed deciduous trees (birch, maple, oak, willow). NEVER use toxic trees like oleander, yew, or rhododendron.',
          de: 'Wähle sonnige Laubbäume (Birke, Ahorn, Eiche). NIEMALS giftige Pflanzen wie Eibe oder Rhododendron nutzen.',
          ru: 'Выбирайте лиственные деревья (береза, клен, ива). КАТЕГОРИЧЕСКИ НЕЛЬЗЯ использовать ядовитые тис и олеандр.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Bag Enclosure & Airtight Sealing', de: 'Eintüten & Luftdichtes Verschließen', ru: 'Запечатывание ветви в пакет' },
        description: {
          en: 'Slip the transparent bag over a dense leafy branch. Drop a small stone into the bag bottom corner to create a collection sump. Tie neck tightly.',
          de: 'Stülpe den Beutel über einen ast mit vielen Blättern. Lege einen Stein in die Ecke als Sammelpunkt und binde das Ende dicht zu.',
          ru: 'Наденьте прозрачный пакет на пушистую ветвь. Положите камень на дно пакета для стока. Плотно завяжите горловину.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Sun Transpiration & Gravity Collection', de: 'Kondensation durch Sonneneinstrahlung', ru: 'Сбор конденсата на солнце' },
        description: {
          en: 'As the sun heats leaves, moisture transpires, condenses on bag inner walls, and drips into the lower sump corner.',
          de: 'Durch die Sonne verdunstet Wasser aus den Blättern, kondensiert an der Folie und tropft in die Ecke.',
          ru: 'Солнце заставляет листья испарять влагу, которая конденсируется на стенках пакета и стекает к камню.',
        },
      },
    ],
    commonErrors: [
      { en: 'Using opaque black garbage bags; black bags block sunlight and halt transpiration.', de: 'Schwarze Beutel nutzen; sie blockieren das Sonnenlicht.', ru: 'Использование черных мусорных пакетов; они не пропускают свет и прекращают испарение.' },
    ],
    hazardsAndWarnings: [
      { en: 'Avoid trees spraying with agricultural pesticides.', de: 'Keine Bäume nahe gespritzter Felder nutzen.', ru: 'Избегайте деревьев в местах обработки пестицидами.' },
    ],
    practicalTips: [
      { en: 'Transpiration water is 100% naturally distilled and safe to drink directly without boiling.', de: 'Transpirationswasser ist auf natürliche Weise destilliert und sofort trinkbar.', ru: 'Конденсат растений естественно дистиллирован и безопасен для питья без кипячения.' },
    ],
    sources: ['US Army Survival Manual FM 21-76 - Chapter 6 Water Procurement'],
    lastVerifiedDate: '2026-02-05',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 5,
  },

  {
    id: 'art-009',
    title: {
      en: 'Tarp A-Frame & Lean-To Bushcraft Pitch Techniques',
      de: 'Tarp A-Frame & Lean-To Aufbau-Techniken',
      ru: 'Установка тента: варианты A-Frame и Lean-To',
    },
    category: 'shelters',
    shortDescription: {
      en: 'Fast setup configurations for 3x3m tarps providing maximum wind resistance, stormproofing, and fire reflection warmth.',
      de: 'Schnelle Aufbau-Varianten für 3x3m Tarps mit maximalem Sturmschutz und Wärmereflexion.',
      ru: 'Быстрые способы натягивания тента 3х3м с высокой ветроустойчивостью и штормовой защитой.',
    },
    mainImage: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: '3x3m Silnylon or polyurethane tarp with reinforced tie-outs', de: '3x3m Silnylon oder PU-Tarp mit verstärkten Ösen', ru: 'Тент 3х3м с усиленными петлями' },
      { en: '20m 550 Paracord', de: '20m 550 Paracord', ru: '20м паракорда 550' },
      { en: '4-6 Ultralight aluminum stakes', de: '4-6 Aluminium-Heringe', ru: '4-6 колышков' },
    ],
    requiredMaterials: [
      { en: '2 Sturdy trees (3-4 meters apart)', de: '2 Stabile Bäume (3-4 Meter Abstand)', ru: '2 дерева на расстоянии 3-4м' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Ridgeline Knotting (Taut-Line & Trucker Hitch)', de: 'Firstleine spannen (Spannknoten)', ru: 'Натягивание несущего конька (узлы)' },
        description: {
          en: 'String paracord between trees at waist height. Secure with Bowline on one end and Adjustable Trucker Hitch on the other.',
          de: 'Spanne Paracord zwischen zwei Bäumen. Sichere mit Palstek und Fuhrmannsknoten.',
          ru: 'Натяните паракорд между деревьями на высоте пояса. Используйте узлы Булинь и Затягивающаяся петля.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'A-Frame Storm Pitch Execution', de: 'A-Frame Sturmundicht aufbauen', ru: 'Установка штормового A-Frame' },
        description: {
          en: 'Drape tarp evenly over ridgeline. Attach Prusik loops to tension corners. Stake all 4 bottom corners flush to ground at 45 degrees.',
          de: 'Lefe das Tarp über die Leine. Fixiere Ecken mit Prusik-Schlingen und verankere alle 4 Ecken am Boden.',
          ru: 'Перекиньте тент через конек. Зафиксируйте края с помощью схватывающего узла Прусика и колышков.',
        },
      },
    ],
    commonErrors: [
      { en: 'Sagging ridgeline causing water pooling in center and collapse under heavy rain.', de: 'Durchhängende Firstleine, wodurch sich Wasser ansammelt.', ru: 'Провисание конька, вызывающее скопление воды и прорыв тента.' },
    ],
    hazardsAndWarnings: [
      { en: 'Never pitch tarp openings facing into prevailing wind during rainstorms.', de: 'Öffnungen niemals in die Windrichtung stellen.', ru: 'Не ставьте открытую сторону тента навстречу ветру.' },
    ],
    practicalTips: [
      { en: 'Use smooth wooden toggles inside Prusik loops to lock tarp grommets without damaging fabric.', de: 'Nutze kleine Holz-Knebel in den Prusik-Schlingen zum stoffschonenden Fixieren.', ru: 'Используйте деревянные колышки-клеванты для фиксации люверсов без повреждения ткани.' },
    ],
    sources: ['Ultralight Tarp Shelter Field Manual'],
    lastVerifiedDate: '2026-02-22',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 6,
  },

  {
    id: 'art-010',
    title: {
      en: 'Blackout Household Autonomy & Power Grid Failure Protocol',
      de: 'Blackout Notfallplan & Hausautonomie bei Stromausfall',
      ru: 'План автономии дома при блэкауте и веерных отключениях электроэнергии',
    },
    category: 'prepper',
    shortDescription: {
      en: 'Immediate emergency action plan for widespread electrical power failure, thermal retention, food preservation, and off-grid communications.',
      de: 'Sofort-Aktionsplan bei großflächigem Stromausfall, Wärmeerhalt, Lebensmittelkonservierung und Notfunk.',
      ru: 'Первоочередные шаги при полном отключении света: сохранение тепла, защита холодильников, автономное освещение и связь.',
    },
    mainImage: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: 'LiFePO4 Power Station or Generator', de: 'LiFePO4 Powerstation oder Generator', ru: 'Зарядная станция LiFePO4 или генератор' },
      { en: 'LED Lanterns & Rechargeable Headlamps', de: 'LED-Laternen & aufladbare Stirnlampen', ru: 'Светодиодные кемпинговые фонари' },
      { en: 'PMR446 / FMRS Walkie Talkies', de: 'PMR446 / FMRS Funkgeräte', ru: 'Портативные рации PMR/CB диапазона' },
    ],
    requiredMaterials: [
      { en: '14-day dry non-perishable canned food reserve', de: '14-Tage Trocken- & Konserven-Vorrat', ru: '14-дневный запас долговечных консервов' },
      { en: '100L bottled drinking water storage', de: '100L Trinkwasservorrat in Flaschen', ru: '100л питьевой бутилированной воды' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Immediate First 15-Minute Actions', de: 'Sofortmaßnahmen in den ersten 15 Minuten', ru: 'Действия в первые 15 минут' },
        description: {
          en: 'Fill bathtubs and containers with tap water before municipal pressure drops. Unplug sensitive electronics to prevent surge damage when power returns.',
          de: 'Fülle Badewannen und Behälter mit Wasser, bevor der Druck abfällt. Trenne empfindliche Geräte vom Netz.',
          ru: 'Наберите воду во все емкости и ванну до падения давления в водопроводе. Отключите чувствительную технику от розеток.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Cold Chain Protection for Refrigerators', de: 'Kühlkette der Lebensmittel sichern', ru: 'Защита продуктов в холодильнике' },
        description: {
          en: 'Do NOT open refrigerator doors unnecessarily. Sealed fridges stay cold for 4 hours; full freezers retain temperature for 48 hours.',
          de: 'Kühlschranktüren NICHT unnötig öffnen. Geschlossene Gefrierschränke halten die Kälte bis zu 48 Stunden.',
          ru: 'НЕ открывайте холодильник без необходимости. Закрытая морозилка держит холод до 48 часов.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Thermal Isolation Room Creation', de: 'Einrichtung eines Wärmeraums', ru: 'Организация одной теплой комнаты' },
        description: {
          en: 'Consolidate family members into one small central room. Seal windows with heavy blankets. Body heat keeps a small room warm without active heating.',
          de: 'Versammle die Familie in einem kleinen Raum. Isoliere Fenster mit dicken Decken. Körperwärme hält den Raum warm.',
          ru: 'Соберите всю семью в одной небольшой внутренней комнате. Завесьте окна и двери одеялами.',
        },
      },
    ],
    commonErrors: [
      { en: 'Running gas generators or charcoal grills inside home/garage; causes lethal silent carbon monoxide (CO) poisoning.', de: 'Betrieb von Stromerzeugern oder Holzkohlegrills in Innenräumen (tödliche CO-Vergiftung).', ru: 'Запуск бензогенератора или мангала внутри дома или гаража (смертельное отравление угарным газом).' },
    ],
    hazardsAndWarnings: [
      { en: 'Always install battery-powered Carbon Monoxide detectors on every floor.', de: 'Installiere batteriebetriebene Kohlenmonoxid-Melder in allen Etagen.', ru: 'Установите датчики угарного газа на батарейках на каждом этаже.' },
    ],
    practicalTips: [
      { en: 'Freeze water plastic bottles in freezer ahead of time to act as thermal ice bricks during power cuts.', de: 'Friere Plastikflaschen mit Wasser im Gefrierfach als Eisakkus ein.', ru: 'Заранее заморозьте пластиковые бутылки с водой в морозилке для поддержания холода.' },
    ],
    sources: ['German Federal Office for Civil Protection (BBK) Blackout Guide', 'FEMA Blackout Safety'],
    lastVerifiedDate: '2026-03-10',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 11,
  },

  {
    id: 'art-011',
    title: {
      en: 'Snakebite, Insect Stings & Anaphylaxis Wilderness Protocol',
      de: 'Schlangenbisse, Insektenstiche & Anaphylaxie in der Wildnis',
      ru: 'Первая помощь при укусах змей, ядовитых насекомых и анафилаксии',
    },
    category: 'first_aid',
    shortDescription: {
      en: 'Evidence-based wilderness protocol for venomous snakebites: pressure immobilization technique, avoiding archaic dangerous myths.',
      de: 'Evidenzbasiertes Protokoll bei Schlangenbissen: Druck-Immobilisationstechnik und Vermeidung von Mythen.',
      ru: 'Доказательный протокол при укусе гадюки и ядовитых змей: иммобилизация конечности и защита от анафилаксии.',
    },
    mainImage: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Broad elastic pressure bandage (10-15cm wide)', de: 'Breite elastische Kompressionsbinde', ru: 'Широкий эластичный бинт (10-15 см)' },
      { en: 'Improvised wooden splint', de: 'Holzschiene zur Ruhigstellung', ru: 'Шина для иммобилизации' },
      { en: 'EpiPen Auto-Injector (if prescribed)', de: 'EpiPen Auto-Injektor', ru: 'Автоинжектор адреналина ЭпиПен' },
    ],
    requiredMaterials: [
      { en: 'Clean water for gentle wound washing', de: 'Sauberes Wasser zum sanften Wundspülen', ru: 'Чистая вода для промывания' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Immobilize Casualty & Keep Heart Rate Low', de: 'Ruhigstellen & Puls niedrig halten', ru: 'Иммобилизация и снижение пульса' },
        description: {
          en: 'Keep victim strictly calm and lying flat. Move limb below heart level. Excitement speeds venom dissemination via lymphatic system.',
          de: 'Halte den Patienten absolut ruhig. Bisse unter Herzhöhe lagern. Aufregung beschleunigt Giftverbreitung.',
          ru: 'Уложите пострадавшего плашмя. Укушенная конечность ниже уровня сердца. Паника ускоряет разнос яда лимфой.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Pressure Immobilization Bandaging', de: 'Druck-Immobilisations-Verband anlegen', ru: 'Наложение иммобилизирующей повязки' },
        description: {
          en: 'Wrap elastic bandage firm as for a sprained ankle, starting from fingers/toes upwards to shoulder/hip. Splint the limb so joints cannot flex.',
          de: 'Wickle Binde fest von den Zehen/Fingern nach oben. Schiene das Gliedmaß komplett.',
          ru: 'Бинтуйте конечность с пальцев вверх со средним натяжением. Зафиксируйте шиной суставы выше и ниже укуса.',
        },
      },
    ],
    commonErrors: [
      { en: 'Cutting wound, sucking out venom, or applying tourniquet (causes tissue necrosis and gangrene).', de: 'Wunde aufschneiden, Gift aussaugen oder Stauen (führt zu Gewebsnekrose).', ru: 'КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО разрезать рану, отсасывать яд и накладывать жгут (вызывает некроз).' },
    ],
    hazardsAndWarnings: [
      { en: 'In case of severe allergic anaphylaxis (throat swelling), administer EpiPen into outer thigh muscle immediately.', de: 'Bei Anaphylaxie (Atemnot) sofort EpiPen in den Oberschenkel injizieren.', ru: 'При знаках анафилаксии (отек горла, удушье) немедленно введите адреналин в бедро.' },
    ],
    practicalTips: [
      { en: 'Mark the leading border of venom swelling with a marker pen and write down exact time timestamps for rescue doctors.', de: 'Markiere die Schwellungsgrenze mit einem Stift und notiere die Uhrzeit.', ru: 'Обведите границу отека маркером и напишите время для врачей скорой помощи.' },
    ],
    sources: ['WHO Snakebite Envenoming Guidelines', 'Australian Venom Research Unit Standards'],
    lastVerifiedDate: '2026-03-05',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 7,
  },

  {
    id: 'art-012',
    title: {
      en: 'Winter Snow Cave & Quinzee Shelter Construction',
      de: 'Schneehöhle & Quinzee Bau im tiefen Winter',
      ru: 'Строительство снежной пещеры и квинзи (Quinzee) зимой',
    },
    category: 'shelters',
    shortDescription: {
      en: 'Engineered snow cave design featuring a cold-trap entrance trench, domed structural roof, and ventilation airway.',
      de: 'Konstruktion einer Schneehöhle mit Kältefalle, gewölbtem Dach und Belüftungskanal.',
      ru: 'Возведение зимнего снежного укрытия с ямой-холодоуловителем, купольным сводом и вентиляцией.',
    },
    mainImage: 'https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'expert',
    requiredEquipment: [
      { en: 'Telescopic aluminum snow shovel', de: 'Teleskop-Aluminium-Schneeschaufel', ru: 'Алюминиевая лавинная лопата' },
      { en: 'Snow saw or long avalanche probe', de: 'Schneesäge oder Lawinensonde', ru: 'Снежная пила или щуп' },
    ],
    requiredMaterials: [
      { en: '3-meter deep snow drift or packed snow mound', de: '3 Meter tiefe Schneewehe oder aufgeschütteter Schneehaufen', ru: 'Плотный сугроб глубиной от 2.5-3 метров' },
      { en: 'Ski poles or branches for guide sticks', de: 'Skistöcke oder Äste als Tiefen-Messstöcke', ru: 'Лыжные палки или колышки 30 см' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Sintering Snow Mound (Quinzee Method)', de: 'Schneehaufen verfestigen (Quinzee-Prinzip)', ru: 'Формирование и спекание снежного холма' },
        description: {
          en: 'Shovel snow into a 2m high dome. Insert 30cm long guide sticks all over the mound. Wait 2-3 hours for snow crystals to sinter and harden.',
          de: 'Schaufle Schnee zu einer 2m Kuppel. Stecke 30cm lange Äste hinein. Warte 2-3 Stunden zum Aushärten.',
          ru: 'Насыпьте холм высотой 2м. Вткните по всей площади колышки 30 см. Дайте снегу затвердеть 2-3 часа.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Cold Trap Entrance & Elevated Bench', de: 'Kältefalle-Eingang & Erhöhte Schlafbank', ru: 'Выемка входа и формирование спальной полки' },
        description: {
          en: 'Dig an entrance trench lowest downhill. Hollow out chamber ceiling until stick tips appear (30cm wall thickness). Form sleeping bench ABOVE entrance level.',
          de: 'Grabe Eingang tief am Hang. Höhle Raum aus, bis Stöcke sichtbar werden. Schlafbank HÖHER als Eingang bauen.',
          ru: 'Ройте вход ниже уровня пола. Выбирайте снег изнутри до кончиков колышков (толщина стен 30 см). Спальная полка должна быть ВЫШЕ входа.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Smooth Ceiling Arch & Ventilation Shaft', de: 'Deckenwölbung glätten & Belüftungsrohr', ru: 'Выравнивание купола и вентиляционный шурф' },
        description: {
          en: 'Smooth interior ceiling into an arch to direct melt drips down walls. Poke a ski pole through the roof to maintain an open oxygen hole.',
          de: 'Glätte das Dach kuppelförmig gegen Tropfwasser. Stecke ein Skistock-Loch als Sauerstoffkanal durch das Dach.',
          ru: 'Загладьте потолок куполом, чтобы талая вода стекала по стенам. Пробейте лыжной палкой отверстие для вытяжки углекислоты.',
        },
      },
    ],
    commonErrors: [
      { en: 'Flat horizontal roof ceiling causing catastrophic roof collapse.', de: 'Flaches Dach bauen; führt zum Einsturz.', ru: 'Плоский горизонтальный потолок, приводящий к обрушению купола.' },
      { en: 'Blocking ventilation hole; results in asphyxiation from carbon dioxide buildup.', de: 'Belüftungsloch verstopfen; Erstickungsgefahr.', ru: 'Перекрытие вентиляции, приводящее к удушью от углекислого газа.' },
    ],
    hazardsAndWarnings: [
      { en: 'Keep a snow shovel inside the cave with you at all times in case entrance drifts shut.', de: 'Nimm die Schaufel immer mit nach DRINNEN für den Notfall.', ru: 'Всегда держите лопату ВНУТРИ пещеры на случай заноса входа.' },
    ],
    practicalTips: [
      { en: 'A single candle inside a well-sealed snow cave raises air temperature to 0°C even when outside is -30°C.', de: 'Eine kerze erhöht die Höhlentemperatur auf 0°C bei -30°C Außentemperatur.', ru: 'Одна свеча поднятие температуру внутри пещеры до 0°C при -30°C снаружи.' },
    ],
    sources: ['Canadian Forces Arctic Survival Manual'],
    lastVerifiedDate: '2026-01-30',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 12,
  },

  {
    id: 'art-013',
    title: {
      en: 'Knots Every Survivalist Must Master (Bowline, Taut-Line, Prusik)',
      de: 'Die wichtigsten Survival-Knoten (Palstek, Fuhrmannsknoten, Prusik)',
      ru: 'Главные узлы выживания: Булинь, Затягивающаяся петля, Штыки и Прусик',
    },
    category: 'bushcraft',
    shortDescription: {
      en: 'Master 5 essential load-bearing and adjustable friction knots for tarps, rescue lines, and heavy timber hauling.',
      de: 'Lerne die 5 wichtigsten tragfähigen und verstellbaren Knoten für Tarp, Rettung und Holztransport.',
      ru: '5 базовых незатягивающихся и регулируемых узлов для тентов, спасательных петель и связки бревен.',
    },
    mainImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: '2m length of 550 paracord or climbing accessory cord', de: '2m Stück 550 Paracord oder Reepschnur', ru: '2м паракорда 550 или репшнура' },
    ],
    requiredMaterials: [
      { en: 'Wooden post or branch for knot tying practice', de: 'Holzstab zum Üben', ru: 'Деревянный колышек для тренировки' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'The Bowline (King of Knots)', de: 'Der Palstek (König der Knoten)', ru: 'Узел Булинь (Королевский петельный узел)' },
        description: {
          en: 'Forms a secure fixed loop at rope end that will never slip or jam under immense load. Remember mnemonic: "Rabbit comes out of hole, around tree, back into hole".',
          de: 'Bildet eine feste Schlinge, die unter Last nicht zunimmt. Merkspruch: Das Kaninchen kommt aus dem Bau, läuft um den Baum...',
          ru: 'Формирует незатягивающуюся петлю на конце веревки. Легко развязывается даже после огромной нагрузки.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Taut-Line Hitch (Adjustable Tension)', de: 'Fuhrmannsknoten & Spannglied', ru: 'Регулируемый узел (Taut-Line Hitch)' },
        description: {
          en: 'Friction hitch that slides freely along standing line to adjust guyline tension, then locks solid under strain.',
          de: 'Reibungsknoten, der sich verschieben lässt und unter Zug sofort festklemmt.',
          ru: 'Фрикционный узел, легко скользящий по веревке для регулировки натяжения растяжки тента.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Prusik Loop (Ascender & Friction Slide)', de: 'Der Prusikknoten', ru: 'Схватывающий узел Прусика' },
        description: {
          en: 'Friction knot tied with a small cord loop around a main rope. Grips when loaded, slides easily when relaxed.',
          de: 'Greift bei Belastung an der Hauptleine und gleitet im entlasteten Zustand.',
          ru: 'Схватывает несущую веревку при нагрузке и легко передвигается рукой в расслабленном состоянии.',
        },
      },
    ],
    commonErrors: [
      { en: 'Tying Granny Knots instead of square knots, leading to sudden slip failure under load.', de: 'Oma-Knoten statt Kreuzknoten binden, die unter Last rutschen.', ru: 'Вязание "бабьих" узлов вместо прямых и булиня, приводящее к самопроизвольному развязыванию.' },
    ],
    hazardsAndWarnings: [
      { en: 'Fuse paracord cut ends with a flame immediately to prevent fraying core strands.', de: 'Verschmelze Paracord-Enden mit dem Feuerzeug gegen Aufdröseln.', ru: 'Оплавляйте концы паракорда огнем, чтобы предотвратить расплетение жил.' },
    ],
    practicalTips: [
      { en: 'Practice tying knots behind your back and with eyes closed until muscle memory takes over.', de: 'Übe Knoten hinter dem Rücken und mit geschlossenen Augen.', ru: 'Тренируйтесь вязать узлы за спиной и с закрытыми глазами до автоматизма.' },
    ],
    sources: ['The Ashley Book of Knots'],
    lastVerifiedDate: '2026-02-18',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 6,
  },

  {
    id: 'art-014',
    title: {
      en: 'Edible vs Toxic Plant Identification Fundamentals',
      de: 'Essbare vs Giftige Wildpflanzen Identifikation',
      ru: 'Основы сбора съедобных дикоросов и предотвращение отравлений',
    },
    category: 'water',
    shortDescription: {
      en: 'Strict rules for field botany, universal edibility test protocol, and avoiding lethal poisonous lookalikes.',
      de: 'Strenges Protokoll für Wildkräuter, den Universal-Essbarkeitstest und Giftpflanzen.',
      ru: 'Правила полевой ботаники, универсальный тест на съедобность и отличие опасных двойников.',
    },
    mainImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'advanced',
    requiredEquipment: [
      { en: 'Botanical loupe / magnifying glass', de: 'Botanische Lupe', ru: 'Ботаническая лупа' },
      { en: 'Regional plant field guide book', de: 'Regionales Pflanzen-Bestimmungsbuch', ru: 'Региональный определитель растений' },
    ],
    requiredMaterials: [
      { en: 'Clean water for testing steps', de: 'Sauberes Wasser für Tests', ru: 'Чистая вода' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Rule of Absolute Certainty', de: 'Regel der absoluten Sicherheit', ru: 'Правило 100% уверенности' },
        description: {
          en: 'NEVER consume any plant unless 100% positive of identification. Mistakes with Apiaceae family (Water Hemlock) cause fatal respiratory paralysis within 2 hours.',
          de: 'NIEMALS Pflanzen essen, die nicht zu 100% identifiziert sind. Doldenblütler (Wasserschierling) sind oft tödlich.',
          ru: 'НИКОГДА не ешьте растение без 100% гарантии породы. Ошибки с зонтичными (вех ядовитый) смертельны.' },
      },
      {
        stepNumber: 2,
        title: { en: 'Universal Edibility Test Protocol (8-Step Sequence)', de: 'Universal-Essbarkeitstest (8 Schritte)', ru: 'Универсальный тест на съедобность (8 этапов)' },
        description: {
          en: '1. Fast for 8h. 2. Test skin contact on wrist (wait 15m). 3. Touch lip (wait 15m). 4. Touch tongue (wait 15m). 5. Chew small piece (wait 15m). 6. Swallow (wait 8h).',
          de: '1. 8h fasten. 2. Hautkontakt Handgelenk (15m). 3. Lippenkontakt. 4. Zungenkontakt. 5. Kauen. 6. Schlucken (8h warten).',
          ru: '1. Голод 8ч. 2. Тест на запястье (15м). 3. Касание губы (15м). 4. Язык (15м). 5. Разжевать. 6. Проглотить кусочек (ждать 8ч).',
        },
      },
    ],
    commonErrors: [
      { en: 'Assuming animals eat a plant so it must be safe for humans; birds safely eat poison ivy berries.', de: 'Annehmen, dass Tieren essbare Pflanzen auch für Menschen sicher sind.', ru: 'Мнение, что съеденное птицами растение безопасно для человека.' },
    ],
    hazardsAndWarnings: [
      { en: 'Avoid all plants with milky sap, umbrella-shaped white flower clusters, or bitter almond smells.', de: 'Meide milchigen Saft, weiße Doldenblüten und bitteren Mandelgeruch.', ru: 'Избегайте млечного сока, зонтичных белых соцветий и запаха горького миндаля.' },
    ],
    practicalTips: [
      { en: 'Focus on easy unmistakable wilderness edibles: Dandelion leaves, Cattail roots, Nettle, Pine needle tea (Rich in Vitamin C).', de: 'Fokussiere dich auf Löwenzahn, Rohrkolben, Brennnessel und Kiefernnadel-Tee.', ru: 'Фокусируйтесь на безопасных видах: одуванчик, рогоз, крапива, хвойный чай с витамином C.' },
    ],
    sources: ['Peterson Field Guide to Edible Wild Plants'],
    lastVerifiedDate: '2026-03-02',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 9,
  },

  {
    id: 'art-015',
    title: {
      en: 'Field Dressing & Splinting Lower Extremity Traumas',
      de: 'Erstversorgung & Schienung von Beinbrüchen im Feld',
      ru: 'Первая помощь при переломах и вывихах нижних конечностей в лесу',
    },
    category: 'first_aid',
    shortDescription: {
      en: 'Construct improvised traction splints using saplings, triangular bandages, and sleeping pads for wilderness limb fractures.',
      de: 'Baue Schienen aus Ästen, Dreiecktüchern und Isomatten für Knochenbrüche in der Wildnis.',
      ru: 'Изготовление импровизированных шин из веток, каремата и косынок при травмах ног.',
    },
    mainImage: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'advanced',
    requiredEquipment: [
      { en: '2 Sturdy straight wooden saplings (hip to foot length)', de: '2 Stabile gerade Holzstangen', ru: '2 прочные прямые жерди (от бедра до стопы)' },
      { en: '4 Triangular bandages or torn cloth strips', de: '4 Dreiecktücher oder Stoffstreifen', ru: '4 треугольные косынки или полосы ткани' },
      { en: 'Foam sleeping pad cut section', de: 'Isomatten-Stück als Polsterung', ru: 'Отрезок вспененного каремата для мягкости' },
    ],
    requiredMaterials: [
      { en: 'Soft jacket or fleece for joint padding', de: 'Weiche Jacke als Gelenkpolster', ru: 'Мягкая одежда для подкладки суставов' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Neuro-Vascular Status Check (CMS Assessment)', de: 'Puls & Gefühl prüfen (DMS-Kontrolle)', ru: 'Проверка пульса и чувствительности (СМК)' },
        description: {
          en: 'Check Circulation (pedal pulse), Motor (toe movement), and Sensation (feeling touch) BEFORE applying any splint.',
          de: 'Prüfe Durchblutung (Puls), Motorik (Zehen bewegen) und Sensorik (Gefühl) VOR dem Schienen.',
          ru: 'Проверьте Пульс на стопе, Движения пальцев и Чувствительность ДО наложения шины.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Padding Joints & Rigid Support Placement', de: 'Gelenke polstern & Schienen anlegen', ru: 'Подкладка под суставы и наложение жердей' },
        description: {
          en: 'Place padded saplings on inner and outer sides of broken leg. Wrap sleeping pad insulation tightly around ankle.',
          de: 'Lege gepolsterte Stangen innen und außen an das Bein. Umwickle den Knöchel mit Isomatte.',
          ru: 'Уложите обернутые жерди с внешней и внутренней стороны ноги. Зафиксируйте голеностоп мягким материалом.',
        },
      },
    ],
    commonErrors: [
      { en: 'Tightening ties directly over the bone fracture site.', de: 'Knoten direkt über der Bruchstelle festziehen.', ru: 'Завязывание узлов непосредственно над местом перелома кости.' },
    ],
    hazardsAndWarnings: [
      { en: 'Re-check CMS (Circulation, Motor, Sensation) every 15 minutes after splinting.', de: 'Prüfe DMS alle 15 Minuten nach dem Schienen.', ru: 'Перепроверяйте пульс и чувствительность стопы каждые 15 минут.' },
    ],
    practicalTips: [
      { en: 'Always immobilize the joint ABOVE and the joint BELOW the fracture line.', de: 'Immobilisiere immer das Gelenk OBERHALB und UNTERHALB der Bruchstelle.', ru: 'Всегда фиксируйте сустав ВЫШЕ и сустав НИЖЕ места перелома.' },
    ],
    sources: ['NOLS Wilderness First Aid Field Guide'],
    lastVerifiedDate: '2026-02-12',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 8,
  },

  {
    id: 'art-016',
    title: {
      en: 'Off-Grid Radio Communications (PMR446, Baofeng, GMRS & SOS Frequency Lists)',
      de: 'Notfunk & Radiokommunikation (PMR446, Baofeng, Notfallfrequenzen)',
      ru: 'Аварийная радиосвязь (PMR, LPD, КВ/УКВ рации, частоты спасателей)',
    },
    category: 'navigation',
    shortDescription: {
      en: 'Complete frequency reference table, line-of-sight propagation tricks, antenna elevation, and standard emergency radio protocol.',
      de: 'Frequenztabellen, Reichweitenoptimierung, Antennenhöhe und Notfunk-Protokoll.',
      ru: 'Сетка частот, радиопротоколы вызова помощи, выносные антенны и правила работы в эфире.',
    },
    mainImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b2?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Dual-band UHF/VHF handheld radio transceiver (e.g. Baofeng UV-5R or PMR446 radio)', de: 'Dualband-Handfunkgerät (z.B. PMR446 oder Baofeng)', ru: 'Двухдиапазонная рация VHF/UHF (Baofeng, PMR)' },
      { en: 'High-gain foldable tactical whip antenna (Nagoya 771 or Abbree)', de: 'Hochgewinn-Taktikantenne', ru: 'Тактическая гибкая антенна с повышенным усилением' },
    ],
    requiredMaterials: [
      { en: 'Laminated radio channel cheat sheet card', de: 'Laminierte Notfunk-Frequenzkarte', ru: 'Ламинированная памятка частот и каналов' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'International Emergency Radio Frequencies', de: 'Internationale Notfunk-Frequenzen', ru: 'Аварийные частоты связи' },
        description: {
          en: 'PMR Channel 8 (446.09375 MHz, CTCSS 8 / 88.5 Hz) = International Alpine/Wilderness Emergency Channel. Marine VHF Channel 16 (156.800 MHz) = Maritime Distress.',
          de: 'PMR Kanal 8 (446,09375 MHz, CTCSS 8) = Notfunk-Kanal Berg/Wildnis. Seefunk Kanal 16 (156,800 MHz).',
          ru: 'PMR Канал 8 (446.09375 МГц, CTCSS 88.5 Гц) = Горный канал помощи. Морской канал 16 (156.800 МГц).',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Line-of-Sight Terrain Positioning', de: 'Geländewahl für maximale Reichweite', ru: 'Выбор высоты для максимальной дальности' },
        description: {
          en: 'UHF signals cannot penetrate dense mountains. Climb to the highest ridge or summit for 10x range expansion.',
          de: 'UHF-Signale durchdringen keine Berge. Steige auf den höchsten Grat für maximale Reichweite.',
          ru: 'УКВ радиоволна распространяется в пределах прямой видимости. Поднимитесь на вершину холма.' },
      },
    ],
    commonErrors: [
      { en: 'Transmitting on restricted aviation frequencies without emergency life hazard justification.', de: 'Senden auf Flugfunk-Frequenzen ohne Notfall.', ru: 'Передача на авиационных частотах без реальной угрозы жизни.' },
    ],
    hazardsAndWarnings: [
      { en: 'To conserve battery, keep transmission bursts under 15 seconds.', de: 'Halte Durchsagen kurz (unter 15 Sek.), um Akku zu sparen.', ru: 'Экономьте заряд: длина одного вызова не более 15 секунд.' },
    ],
    practicalTips: [
      { en: 'Deploy an improvised roll-up Slim Jim wire antenna hoisted up a tree for 30km coverage.', de: 'Ziehe eine Wurfantenne an einem Baum hoch für 30km Reichweite.', ru: 'Забросьте проволочную антенну на дерево для увеличения дальности до 30 км.' },
    ],
    sources: ['International Radio Emergency Calling Protocol'],
    lastVerifiedDate: '2026-03-08',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 7,
  },

  {
    id: 'art-017',
    title: {
      en: 'Primitive Forging & Cordage from Stinging Nettle & Willow Bark',
      de: 'Naturseile aus Brennnessel & Weidenrinde herstellen',
      ru: 'Изготовление прочных веревок из крапивы и ивового лыка',
    },
    category: 'bushcraft',
    shortDescription: {
      en: 'Extract natural inner bast fibers and reverse-twist 2-ply cordage capable of holding 25kg tensile strain.',
      de: 'Gewinne Bastfasern aus Brennnessel und webe 2-strängige Kordeln mit 25kg Zugfestigkeit.',
      ru: 'Извлечение волокон крапивы и сукна для скручивания двужильной веревки прочностью до 25 кг.',
    },
    mainImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Bushcraft knife with dull spine for scraping', de: 'Messer zum Schaben', ru: 'Нож для соскабливания коры' },
    ],
    requiredMaterials: [
      { en: 'Mature tall stinging nettle stalks or green willow saplings', de: 'Reife Brennnesselstängel oder Weidenruten', ru: 'Высокие стебли крапивы или прутья ивы' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Stalk Splitting & Inner Bast Separation', de: 'Stängel spalten & Bastfasern trennen', ru: 'Расщепление стеблей и отделение волокон' },
        description: {
          en: 'Flatten mature nettle stalks. Split open longitudinally with thumb. Peel outer bark away from inner woody core to yield long silky fiber ribbons.',
          de: 'Drücke Stängel flach und spalte sie. Ziehe die äußere Rinde ab, um lange Faserbänder zu gewinnen.',
          ru: 'Раплющите стебли крапивы. Расщепите вдоль и отделите внешние длинные шелковистые волокна лыка.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Reverse-Twist 2-Ply Technique', de: 'Gegendreh-Technik (Reverse Twist)', ru: 'Техника встречной скрутки (Reverse-Twist)' },
        description: {
          en: 'Twist fiber bundle clockwise with fingers until it kinks into a loop. Counter-rotate the two strands over each other to lock twists permanently.',
          de: 'Drehe die Faserbündel im Uhrzeigersinn, bis eine Schlinge entsteht. Verdrehe beide Stränge gegeneinander.',
          ru: 'Скручивайте пучок волокон по часовой стрелке до образования петли. Перекручивайте две жилы против часовой.',
        },
      },
    ],
    commonErrors: [
      { en: 'Using brittle dry dead stalks that snap during twisting.', de: 'Trockenes mürbes Material nutzen, das bricht.', ru: 'Использование сухих ломких стеблей, ломающихся при скрутке.' },
    ],
    hazardsAndWarnings: [
      { en: 'Wear gloves when harvesting nettles to prevent formic acid skin stings.', de: 'Trage Handschuhe beim Ernten von Brennnesseln.', ru: 'Работайте в перчатках при сборе крапивы для защиты от ожогов.' },
    ],
    practicalTips: [
      { en: 'Drying nettle fibers for 2 hours before twisting increases cordage tensile strength.', de: 'Leichtes Trocknen der Fasern erhöht die Zugfestigkeit.', ru: 'Подвяливание волокон на воздухе в течение 2 часов повышает прочность шнура.' },
    ],
    sources: ['Bushcraft Primitive Technology Handbook'],
    lastVerifiedDate: '2026-02-01',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 6,
  },

  {
    id: 'art-018',
    title: {
      en: 'Off-Grid Sanitation, Hygiene & Infectious Disease Prevention',
      de: 'Notfall-Sanitärversorgung & Hygiene ohne Kanalisation',
      ru: 'Полевая санитария, гигиена и предотвращение инфекций в лагере',
    },
    category: 'prepper',
    shortDescription: {
      en: 'Construct twin-bucket dry toilet systems, wood ash lye soap, and greywater disposal fields in grid collapses.',
      de: 'Baue Zwei-Eimer-Trockentoiletten, Holzasche-Seife und Grauwasser-Systeme bei Strom- und Wasserfall.',
      ru: 'Организация сухого туалета с опилками, мыла из древесной золы и правильной утилизации отходов.',
    },
    mainImage: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'beginner',
    requiredEquipment: [
      { en: 'Two 20L heavy plastic buckets with snap-on seats', de: 'Zwei 20L Plastikeimer mit Toilettensitz', ru: 'Два 20л пластиковых ведра с крышкой' },
      { en: 'Trench digging shovel', de: 'Klappspaten', ru: 'Малая пехотная лопата' },
    ],
    requiredMaterials: [
      { en: 'Dry pine sawdust, peat moss, or hardwood ash', de: 'Sägemehl, Torf oder Holzasche', ru: 'Сухие сосновые опилки, торф или зола' },
      { en: 'Heavy 50-micron trash bags', de: 'Dicke Müllbeutel', ru: 'Плотные мусорные пакеты' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Twin-Bucket Separation (Liquid vs Solid Waste)', de: 'Zwei-Eimer-Trennsystem (Flüssig vs Fest)', ru: 'Разделение жидких и твердых отходов' },
        description: {
          en: 'Bucket 1: Urine only (dilute with water 1:10 for garden fertilizer). Bucket 2: Solid waste lined with trash bag and topped with 2 cups of dry sawdust after every use.',
          de: 'Eimer 1: Urin. Eimer 2: Feststoffe mit Müllbeutel & Sägemehl-Abdeckung nach jedem Gang.',
          ru: 'Ведро 1: Моча. Ведро 2: Твердые отходы с мусорным пакетом. После каждого шага засыпайте 2 стакана опилок.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Wood Ash Hand Sanitizer Replacement', de: 'Holzasche als Seifenersatz', ru: 'Использование щелока и золы вместо мыла' },
        description: {
          en: 'Clean hardwood ash mixed with water creates mild potassium hydroxide lye that saponifies oils and kills bacteria when soap is unavailable.',
          de: 'Saubere Holzasche mit Wasser bildet eine milde Lauge, die Fett löst und Bakterien abtötet.',
          ru: 'Чистая зола лиственных пород с водой создает щелок, растворяющий жир и уничтожающий бактерии.',
        },
      },
    ],
    commonErrors: [
      { en: 'Digging latrines closer than 60 meters to lakes or rivers.', de: 'Sickergruben weniger als 60 Meter von Gewässern anlegen.', ru: 'Устройство туалета ближе 60 метров от источников воды.' },
    ],
    hazardsAndWarnings: [
      { en: 'Always cover waste trenches with 15cm of soil daily to prevent fly breeding and dysentery outbreaks.', de: 'Decke Notfallgruben täglich mit Erde ab gegen Fliegen.', ru: 'Ежедневно засыпайте ямы 15 см слоя почвы для предотвращения дизентерии.' },
    ],
    practicalTips: [
      { en: 'Sawdust completely eliminates odor by maintaining a carbon-to-nitrogen ratio that prevents anaerobic rot.', de: 'Sägemehl neutralisiert Gerüche durch das Kohlenstoff-Stickstoff-Verhältnis.', ru: 'Опилки полностью устраняют запах за счет поглощения аммиака.' },
    ],
    sources: ['Red Cross Sanitation in Emergencies Guidelines'],
    lastVerifiedDate: '2026-03-02',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 7,
  },

  {
    id: 'art-019',
    title: {
      en: 'Celestial Navigation by North Star (Polaris) & Southern Cross',
      de: 'Orientierung nach Sternen (Polarstern & Kreuz des Südens)',
      ru: 'Ориентирование по ночному небу (Полярная звезда и Южный Крест)',
    },
    category: 'navigation',
    shortDescription: {
      en: 'Locate True North in the Northern Hemisphere using Ursa Major (Big Dipper) and True South in the Southern Hemisphere.',
      de: 'Bestimme den echten Norden über den Großen Wagen und den Süden über das Kreuz des Südens.',
      ru: 'Определение точного севера по Большой Медведице и Полярной звезде без приборов.',
    },
    mainImage: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'intermediate',
    requiredEquipment: [
      { en: 'Night vision red lens flashlight', de: 'Rotlicht-Taschenlampe', ru: 'Фонарь с красным светодиодом' },
    ],
    requiredMaterials: [
      { en: 'Clear night sky view', de: 'Freier Nachthimmel', ru: 'Ясное ночное небо' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Big Dipper Pointer Stars Method', de: 'Großer Wagen - Zeigersterne Methode', ru: 'Поиск Полярной звезды по Большой Медведице' },
        description: {
          en: 'Locate the two outer bowl stars (Merak and Dubhe) of the Big Dipper constellation. Draw an imaginary line extending 5 times their distance straight to Polaris.',
          de: 'Finde die zwei hinteren Kastensterne des Großen Wagens. Verlängere ihren Abstand gedanklich um das 5-fache zum Polarstern.',
          ru: 'Найдите две крайние звезды ковша Большой Медведицы. Продлите линию между ними на 5 расстояний вверх до Полярной звезды.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Latitude Calculation from Polaris Angle', de: 'Breitengrad aus dem Polarstern-Winkel', ru: 'Определение широты по высоте Полярной звезды' },
        description: {
          en: 'The angle of Polaris above the horizon measured in degrees equals your exact geographic latitude.',
          de: 'Der Winkel des Polarsterns über dem Horizont entspricht exakt deinem geografischen Breitengrad.',
          ru: 'Угол Полярной звезды над горизонтом в градусах точно равен вашей географической широте.',
        },
      },
    ],
    commonErrors: [
      { en: 'Confusing Polaris with brighter planets like Venus or Jupiter.', de: 'Polarstern mit hellen Planeten wie der Venus verwechseln.', ru: 'Путаница Полярной звезды с более яркими планетами (Венерой или Юпитером).' },
    ],
    hazardsAndWarnings: [
      { en: 'Allow eyes 20 minutes to adapt to dark vision before stargazing.', de: 'Gönne deinen Augen 20 Minuten Dunkeladaption.', ru: 'Дайте глазам 20 минут на адаптацию к темноте.' },
    ],
    practicalTips: [
      { en: 'If Big Dipper is obscured by clouds, use Cassiopeia ("W" shape constellation) on opposite side of Polaris.', de: 'Nutze Cassiopeia (W-Form), wenn der Große Wagen verdeckt ist.', ru: 'Если ковш закрыт тучами, ищите Кассиопею в форме буквы W напротив.' },
    ],
    sources: ['Celestial Navigation Field Reference Guide'],
    lastVerifiedDate: '2026-02-25',
    isPublished: true,
    isFeatured: false,
    readTimeMinutes: 6,
  },

  {
    id: 'art-020',
    title: {
      en: 'Friction Fire via Bow Drill & Hand Drill Mechanics',
      de: 'Feuer bohren mit dem Bogenbohrer (Bow Drill)',
      ru: 'Добыча огня трением: Лучковый бурав (Bow Drill)',
    },
    category: 'fire',
    shortDescription: {
      en: 'Carve a balanced hearthboard, spindle, socket, and bow to produce a glowing 400°C wood dust ember without matches.',
      de: 'Schnitze ein Bohrbrett, Spindel, Druckholz und Bogen für ein 400°C heiße Glut ohne Streichhölzer.',
      ru: 'Изготовление комплекта лучкового бура: дощечка, веретено, упор и лук для получения угля температурой 400°C.',
    },
    mainImage: 'https://images.unsplash.com/photo-1525896650794-60ad4ec40d0e?auto=format&fit=crop&w=1200&q=80',
    difficulty: 'expert',
    requiredEquipment: [
      { en: 'Sharp fixed-blade knife', de: 'Scharfes Outdoor-Messer', ru: 'Острый нож' },
    ],
    requiredMaterials: [
      { en: 'Spindle: Straight dry softwood branch (thumb-thick, 25cm long)', de: 'Spindel: Trockener Weichholzstab (25cm lang)', ru: 'Веретено: Сухая прямая ветка мягких пород (25 см)' },
      { en: 'Hearthboard: Flat dry softwood plank (cedar, willow, basswood, poplar)', de: 'Bohrbrett: Trockenes Weichholzbrett (Zeder, Weide, Pappel)', ru: 'Дощечка: Плоская сухая дощечка (ива, липа, тополь, кедр)' },
      { en: 'Socket: Hardwood or lubricated stone socket', de: 'Druckholz: Hartholz oder Stein', ru: 'Упор: Твердое дерево или камень с выемкой' },
      { en: 'Bow: Curved flexible branch with paracord loop', de: 'Bogen: Gebogener Ast mit Paracord', ru: 'Лук: Изогнутая ветка с паракордом' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Carving Hearthboard Notch & Socket', de: 'Kerbe & Bohrloch einschnitzen', ru: 'Вырезание выемки и V-образного пропила' },
        description: {
          en: 'Carve a shallow depression near hearthboard edge. Drill until carbon dust accumulates, then cut a 45-degree V-notch into the socket center.',
          de: 'Bohre eine Vertiefung am Rand. Schneide eine 45-Grad V-Kerbe bis zur Mitte des Bohrlochs.',
          ru: 'Сделайте лунку у края дощечки. Просверлите до появления пыли, затем вырежьте V-образный пропил 45 градусов.',
        },
      },
      {
        stepNumber: 2,
        title: { en: 'Form & Rhythm Mechanical Drilling', de: 'Haltung & Rhythmus beim Bohren', ru: 'Стойка и ритм вращения' },
        description: {
          en: 'Lock left wrist against shin. Press socket firmly down with non-dominant hand. Draw long smooth full-length bow strokes.',
          de: 'Fixiere das Handgelenk am Schienbein. Drücke das Holz fest und ziehe lange gleichmäßige Bogenstriche.',
          ru: 'Прижмите запястье с упором к голени. Надавливайте сверху и делайте длинные ровные движения луком.',
        },
      },
      {
        stepNumber: 3,
        title: { en: 'Ember Formation & Tinder Nest Transfer', de: 'Glutbildung & Zundernest-Übertragung', ru: 'Формирование угля и перенос в трут' },
        description: {
          en: 'When heavy pungent smoke billows and dark black dust fills the notch, stop drilling. Tap hearthboard to drop glowing red ember into tinder nest.',
          de: 'Wenn dichter Rauch aufsteigt und schwarzbrauner Staub die Kerbe füllt, stoppe. Übertrage die Glut ins Zundernest.',
          ru: 'При появлении густого дыма и черной пыли остановитесь. Пересыпьте тлеющий уголек в гнездо из трута и раздуйте.',
        },
      },
    ],
    commonErrors: [
      { en: 'Using resinous green pine wood; sap acts as a lubricant and halts friction heat buildup.', de: 'Harziges grünes Kiefernholz nutzen; Harz hemmt die Reibungswerte.', ru: 'Использование смолистой сырой древесины; смола работает как смазка и убирает трение.' },
    ],
    hazardsAndWarnings: [
      { en: 'Protect eyes from flying hot wood embers.', de: 'Schütze deine Augen vor fliegenden Funken.', ru: 'Берегите глаза от вылетающих горячих угольков.' },
    ],
    practicalTips: [
      { en: 'Lubricate the top socket with green leaves or pine needles so friction happens ONLY at the hearthboard bottom.', de: 'Schmiere das obere Druckholz mit grünen Blättern für weniger Reibung oben.', ru: 'Смазывайте верхний упор зелеными листьями, чтобы трение происходило ТОЛЬКО снизу.' },
    ],
    sources: ['Traditional Primitive Fire Skills Manual'],
    lastVerifiedDate: '2026-03-01',
    isPublished: true,
    isFeatured: true,
    readTimeMinutes: 10,
  },
];
