import { useLanguage } from "@/contexts/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  
  const benefits = [
    {
      title: t('about.benefit1.title'),
      description: t('about.benefit1.description')
    },
    {
      title: t('about.benefit2.title'), 
      description: t('about.benefit2.description')
    },
    {
      title: t('about.benefit3.title'),
      description: t('about.benefit3.description')
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-primary p-1">
              <div className="w-full h-full rounded-3xl bg-background/95 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🧘‍♀️</div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t('about.happyStudents')}
                  </h3>
                  <p className="text-muted-foreground">
                    {t('about.communityText')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};