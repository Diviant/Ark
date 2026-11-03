import React, { useState } from 'react';
import {
  Check,
  Edit,
  Eye,
  Lock,
  Plus,
  Shield,
  Trash2,
  Unlock,
  X,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { translations } from '../i18n/translations';
import { Article, CategoryId, DifficultyLevel } from '../types';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    language,
    isAdminAuth,
    setAdminAuth,
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
  } = useApp();
  const t = translations[language];

  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);
  const [editingArticle, setEditingArticle] = useState<Article | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form State for create/edit
  const [formTitleEN, setFormTitleEN] = useState('');
  const [formTitleDE, setFormTitleDE] = useState('');
  const [formTitleRU, setFormTitleRU] = useState('');

  const [formDescEN, setFormDescEN] = useState('');
  const [formDescDE, setFormDescDE] = useState('');
  const [formDescRU, setFormDescRU] = useState('');

  const [formCategory, setFormCategory] = useState<CategoryId>('wilderness');
  const [formDifficulty, setFormDifficulty] = useState<DifficultyLevel>('beginner');
  const [formImage, setFormImage] = useState(
    'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80'
  );

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'admin') {
      setAdminAuth(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const startCreate = () => {
    setIsCreating(true);
    setEditingArticle(null);
    setFormTitleEN('');
    setFormTitleDE('');
    setFormTitleRU('');
    setFormDescEN('');
    setFormDescDE('');
    setFormDescRU('');
  };

  const startEdit = (art: Article) => {
    setEditingArticle(art);
    setIsCreating(false);
    setFormTitleEN(art.title.en);
    setFormTitleDE(art.title.de);
    setFormTitleRU(art.title.ru);
    setFormDescEN(art.shortDescription.en);
    setFormDescDE(art.shortDescription.de);
    setFormDescRU(art.shortDescription.ru);
    setFormCategory(art.category);
    setFormDifficulty(art.difficulty);
    setFormImage(art.mainImage);
  };

  const handleSaveArticle = (e: React.FormEvent) => {
    e.preventDefault();

    const newArtObj: Article = {
      id: editingArticle ? editingArticle.id : 'art-' + Date.now(),
      title: { en: formTitleEN || 'New Guide', de: formTitleDE || formTitleEN, ru: formTitleRU || formTitleEN },
      category: formCategory,
      shortDescription: { en: formDescEN || 'Field guide description', de: formDescDE || formDescEN, ru: formDescRU || formDescEN },
      mainImage: formImage,
      difficulty: formDifficulty,
      requiredEquipment: [{ en: 'Standard Bushcraft Knife', de: 'Messer', ru: 'Нож' }],
      requiredMaterials: [{ en: 'Natural Cordage / Wood', de: 'Holz', ru: 'Древесина' }],
      steps: [
        {
          stepNumber: 1,
          title: { en: 'Site Setup', de: 'Standort', ru: 'Подготовка места' },
          description: { en: 'Clear area down to dry soil.', de: 'Boden säubern.', ru: 'Очистите площадку.' },
        },
      ],
      commonErrors: [{ en: 'Inadequate preparation', de: 'Mangelhafte Vorbereitung', ru: 'Недостаточная подготовка' }],
      hazardsAndWarnings: [{ en: 'Always check weather forecast', de: 'Wetter prüfen', ru: 'Проверяйте прогноз погоды' }],
      practicalTips: [{ en: 'Keep tools dry', de: 'Werkzeug trocken halten', ru: 'Держите инструмент сухим' }],
      sources: ['WILDCRAFT Field Manual'],
      lastVerifiedDate: new Date().toISOString().slice(0, 10),
      isPublished: true,
      readTimeMinutes: 5,
    };

    if (editingArticle) {
      updateArticle(newArtObj);
    } else {
      addArticle(newArtObj);
    }

    setIsCreating(false);
    setEditingArticle(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#18231C] border border-[#202C23] p-6 sm:p-8 text-[#F0F0E8] overflow-y-auto flex flex-col my-auto space-y-6">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[#202C23] pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#202C23] text-[#A5B88A]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#F0F0E8]">{t.adminTitle}</h2>
              <p className="text-xs text-[#A3ADA2]">{t.adminSub}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#202C23] text-[#A3ADA2] hover:text-[#F0F0E8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* AUTHENTICATION STEP */}
        {!isAdminAuth ? (
          <form onSubmit={handleLogin} className="max-w-md mx-auto space-y-4 py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#202C23] border border-[#A5B88A]/30 flex items-center justify-center mx-auto text-[#A5B88A]">
              <Lock className="w-6 h-6" />
            </div>

            <h3 className="text-base font-bold text-[#F0F0E8]">{t.enterPasscode}</h3>

            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder={t.passcodePlaceholder}
              className="w-full bg-[#101713] border border-[#202C23] rounded-xl px-4 py-3 text-sm text-[#F0F0E8] text-center focus:outline-none focus:border-[#A5B88A]"
            />

            {authError && (
              <p className="text-xs font-bold text-red-400">Incorrect Passcode. Try: admin123</p>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#A5B88A] text-[#101713] font-bold text-xs uppercase tracking-wider hover:bg-[#8e9e75] transition-colors"
            >
              Unlock Control Panel
            </button>
          </form>
        ) : (
          /* AUTHENTICATED PANEL */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <Unlock className="w-4 h-4" />
                Authenticated Session Active
              </span>

              {!isCreating && !editingArticle && (
                <button
                  onClick={startCreate}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#A5B88A] text-[#101713] font-bold text-xs hover:bg-[#8e9e75] transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  <span>{t.createArticle}</span>
                </button>
              )}
            </div>

            {/* CREATE / EDIT ARTICLE FORM */}
            {(isCreating || editingArticle) && (
              <form onSubmit={handleSaveArticle} className="bg-[#101713] p-5 rounded-2xl border border-[#202C23] space-y-4">
                <h3 className="text-sm font-bold text-[#A5B88A] uppercase tracking-wider">
                  {editingArticle ? t.editArticle : t.createArticle}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={formTitleEN}
                    onChange={(e) => setFormTitleEN(e.target.value)}
                    placeholder="Title (English)"
                    required
                    className="bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                  />
                  <input
                    type="text"
                    value={formTitleDE}
                    onChange={(e) => setFormTitleDE(e.target.value)}
                    placeholder="Titel (Deutsch)"
                    className="bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                  />
                  <input
                    type="text"
                    value={formTitleRU}
                    onChange={(e) => setFormTitleRU(e.target.value)}
                    placeholder="Название (Русский)"
                    className="bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title.en}
                      </option>
                    ))}
                  </select>

                  <select
                    value={formDifficulty}
                    onChange={(e) => setFormDifficulty(e.target.value as any)}
                    className="bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>

                <input
                  type="text"
                  value={formDescEN}
                  onChange={(e) => setFormDescEN(e.target.value)}
                  placeholder="Short Description (English)"
                  className="w-full bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                />

                <input
                  type="text"
                  value={formImage}
                  onChange={(e) => setFormImage(e.target.value)}
                  placeholder="Main Photo Image URL (Unsplash or direct)"
                  className="w-full bg-[#18231C] border border-[#202C23] rounded-lg px-3 py-2 text-xs text-[#F0F0E8] focus:outline-none focus:border-[#A5B88A]"
                />

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingArticle(null);
                    }}
                    className="px-4 py-2 rounded-lg bg-[#202C23] text-[#A3ADA2] text-xs font-bold hover:text-[#F0F0E8]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#A5B88A] text-[#101713] text-xs font-bold hover:bg-[#8e9e75]"
                  >
                    {t.saveChanges}
                  </button>
                </div>
              </form>
            )}

            {/* ARTICLES LIST MANAGER */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#A3ADA2] uppercase tracking-wider">
                Article Library Database ({articles.length})
              </h3>

              <div className="space-y-2">
                {articles.map((art) => (
                  <div
                    key={art.id}
                    className="p-3.5 rounded-xl bg-[#101713] border border-[#202C23] flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#F0F0E8]">{art.title[language]}</h4>
                      <span className="text-[10px] text-[#A5B88A] uppercase font-mono">
                        {art.category} • {art.difficulty}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => startEdit(art)}
                        className="p-2 rounded-lg bg-[#202C23] text-[#A3ADA2] hover:text-[#A5B88A]"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => deleteArticle(art.id)}
                        className="p-2 rounded-lg bg-red-950/40 text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
