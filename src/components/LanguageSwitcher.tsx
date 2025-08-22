import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant={language === 'ro' ? 'zen' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('ro')}
        className="text-xs px-3 py-1 h-8"
      >
        RO
      </Button>
      <Button
        variant={language === 'en' ? 'zen' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-xs px-3 py-1 h-8"
      >
        EN
      </Button>
    </div>
  );
};