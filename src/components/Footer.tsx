import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer id="contact" className="bg-sage text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🧘‍♀️</div>
              <span className="text-xl font-semibold">Calm Pose</span>
            </div>
            <p className="text-white/80 mb-4">
              Your journey to inner peace and physical wellness starts here.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">📘</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">📷</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                <span className="text-sm">🐦</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#classes" className="hover:text-white transition-colors">{t('footer.classes')}</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">{t('footer.about')}</a></li>
              <li><a href="#videos" className="hover:text-white transition-colors">{t('footer.videos')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.booking')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📧 {t('footer.email')}</p>
              <p>📞 {t('footer.phone')}</p>
              <p>📍 {t('footer.address')}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="space-y-2 text-white/80 text-sm">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>YouTube</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Calm Pose. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};