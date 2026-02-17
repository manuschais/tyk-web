import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'th' ? 'en' : 'th';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-body font-medium">
        {i18n.language === 'th' ? 'TH' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
