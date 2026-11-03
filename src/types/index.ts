export type Language = 'en' | 'de' | 'ru';

export type CategoryId =
  | 'wilderness'
  | 'bushcraft'
  | 'fire'
  | 'water'
  | 'shelters'
  | 'prepper'
  | 'first_aid'
  | 'navigation';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface MultiLangText {
  en: string;
  de: string;
  ru: string;
}

export interface ArticleStep {
  stepNumber: number;
  title: MultiLangText;
  description: MultiLangText;
  imageUrl?: string;
  tip?: MultiLangText;
}

export interface Article {
  id: string;
  title: MultiLangText;
  category: CategoryId;
  shortDescription: MultiLangText;
  mainImage: string;
  difficulty: DifficultyLevel;
  requiredEquipment: MultiLangText[];
  requiredMaterials: MultiLangText[];
  steps: ArticleStep[];
  commonErrors: MultiLangText[];
  hazardsAndWarnings: MultiLangText[];
  practicalTips: MultiLangText[];
  extraResources?: { title: string; url: string }[];
  sources: string[];
  lastVerifiedDate: string;
  isPublished: boolean;
  isFeatured?: boolean;
  readTimeMinutes: number;
}

export interface CategoryDef {
  id: CategoryId;
  title: MultiLangText;
  description: MultiLangText;
  iconName: string;
  bgGradient: string;
  accentColor: string;
}

export interface ShelterItem {
  id: string;
  name: MultiLangText;
  category: string;
  description: MultiLangText;
  image: string;
  suitableWhen: MultiLangText;
  requiredMaterials: MultiLangText[];
  difficulty: DifficultyLevel;
  prepTimeHours: number;
  mainRisks: MultiLangText[];
  constructionSteps: MultiLangText[];
}

export interface WaterMethod {
  id: string;
  name: MultiLangText;
  type: 'filtration' | 'purification' | 'combination';
  description: MultiLangText;
  removesPathogens: {
    bacteria: boolean;
    viruses: boolean;
    protozoa: boolean;
    chemicals: boolean;
    sediment: boolean;
  };
  pros: MultiLangText[];
  cons: MultiLangText[];
  requiredEquipment: MultiLangText[];
  stepByStep: MultiLangText[];
}

export interface BackpackCategory {
  id: string;
  title: MultiLangText;
  iconName: string;
  items: BackpackItem[];
}

export interface BackpackItem {
  id: string;
  name: MultiLangText;
  weightGrams: number;
  priority: 'critical' | 'recommended' | 'optional';
  defaultQuantity: number;
  note?: MultiLangText;
}

export interface SurvivalCalcParams {
  adults: number;
  children: number;
  pets: number;
  days: number;
}

export interface CalcResultItem {
  category: string;
  name: MultiLangText;
  amount: number;
  unit: string;
  details?: MultiLangText;
  isCollected?: boolean;
}

export interface PreparednessQuestion {
  id: string;
  categoryKey: string;
  questionText: MultiLangText;
  options: {
    label: MultiLangText;
    score: number; // 0 to 10
    recommendation?: MultiLangText;
  }[];
}

export interface UserProfile {
  name: string;
  country: string;
  region: string;
  climateZone: 'boreal' | 'temperate' | 'alpine' | 'arid' | 'tropical' | 'coastal';
  adultsCount: number;
  childrenCount: number;
  petsCount: number;
  experienceLevel: 'novice' | 'intermediate' | 'experienced' | 'expert';
}

export interface EmergencyContact {
  countryCode: string;
  countryName: MultiLangText;
  flag: string;
  generalEmergency: string;
  police: string;
  ambulance: string;
  fire: string;
  mountainRescue?: string;
}

export interface BadgeDef {
  id: string;
  title: MultiLangText;
  description: MultiLangText;
  iconName: string;
  category: string;
  xpReward: number;
  requirementHint: MultiLangText;
}

export interface ActivityLogEntry {
  id: string;
  timestamp: string;
  title: MultiLangText;
  xpEarned: number;
  type: 'article_read' | 'article_mastered' | 'calculator' | 'backpack' | 'audit' | 'tool_view';
}

export interface SurvivalLevel {
  levelNumber: number;
  title: MultiLangText;
  minXP: number;
  maxXP: number;
  badgeIcon: string;
}
