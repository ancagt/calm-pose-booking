import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const { t } = useLanguage();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-primary">🧘‍♀️</div>
          <span className="text-xl font-semibold text-foreground">Calm Pose</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#classes" className="text-foreground hover:text-primary transition-colors">{t('nav.classes')}</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">{t('nav.about')}</a>
          <a href="#videos" className="text-foreground hover:text-primary transition-colors">{t('nav.videos')}</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Button variant="zen" size="lg">
            {t('nav.bookNow')}
          </Button>
        </div>
      </div>
    </header>
  );
};