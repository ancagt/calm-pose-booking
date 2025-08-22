import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'ro' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Header
    'nav.classes': 'Clase',
    'nav.about': 'Despre',
    'nav.videos': 'Videouri',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Rezervă Acum',
    
    // Hero
    'hero.title': 'Găsește-ți',
    'hero.titleHighlight': 'Pacea Interioară',
    'hero.subtitle': 'Experimentează sesiuni transformatoare de yoga concepute să îți hrănească mintea, corpul și sufletul',
    'hero.startJourney': 'Începe Călătoria',
    'hero.watchVideos': 'Urmărește Videouri',
    
    // About
    'about.title': 'De ce să alegi Calm Pose?',
    'about.description': 'La Calm Pose, credem că yoga este mai mult decât doar exerciții fizice—este o călătorie de autodescoperire, vindecare și transformare. Instructorii noștri experimentați creează un mediu hrănitor unde îți poți explora practica în siguranță și cu atenție.',
    'about.benefit1.title': 'Îndrumare Expert',
    'about.benefit1.description': 'Instructori certificați cu ani de experiență în diverse tradiții de yoga',
    'about.benefit2.title': 'Abordare Personalizată',
    'about.benefit2.description': 'Clase adaptate nevoilor individuale și nivelului tău de fitness',
    'about.benefit3.title': 'Wellness Holistic',
    'about.benefit3.description': 'Focus pe bunăstarea mentală, fizică și spirituală',
    'about.happyStudents': 'Peste 500 de Studenți Fericiți',
    'about.communityText': 'Alătură-te comunității noastre de practicanți care au găsit pace, putere și bucurie prin yoga',
    
    // Video Section
    'videos.title': 'Practică Acasă',
    'videos.subtitle': 'Accesează biblioteca noastră de sesiuni de yoga ghidate, perfecte pentru toate nivelurile',
    'videos.watchNow': 'Urmărește Acum',
    'videos.duration': 'min',
    
    // Booking Section
    'booking.title': 'Rezervă Sesiunea Ta',
    'booking.subtitle': 'Programează o sesiune personalizată cu unul dintre instructorii noștri experimentați',
    'booking.name': 'Nume Complet',
    'booking.email': 'Email',
    'booking.phone': 'Telefon',
    'booking.classType': 'Tipul Clasei',
    'booking.selectType': 'Selectează tipul clasei',
    'booking.beginnerHatha': 'Hatha pentru Începători',
    'booking.vinyasaFlow': 'Vinyasa Flow',
    'booking.restorative': 'Yoga Restaurativă',
    'booking.meditation': 'Meditație & Mindfulness',
    'booking.date': 'Data Preferată',
    'booking.selectDate': 'Selectează data',
    'booking.time': 'Ora Preferată',
    'booking.selectTime': 'Selectează ora',
    'booking.message': 'Mesaj Opțional',
    'booking.messagePlaceholder': 'Spune-ne despre experiența ta cu yoga sau cerințe speciale...',
    'booking.submit': 'Rezervă Sesiunea',
    
    // Footer
    'footer.quickLinks': 'Link-uri Rapide',
    'footer.classes': 'Clase',
    'footer.about': 'Despre Noi',
    'footer.videos': 'Videouri',
    'footer.booking': 'Rezervări',
    'footer.contact': 'Contact',
    'footer.address': 'Str. Yogei nr. 123, București',
    'footer.phone': '+40 123 456 789',
    'footer.email': 'contact@calmpose.ro',
    'footer.followUs': 'Urmărește-ne',
    'footer.rights': 'Toate drepturile rezervate.',
  },
  en: {
    // Header
    'nav.classes': 'Classes',
    'nav.about': 'About',
    'nav.videos': 'Videos',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero
    'hero.title': 'Find Your',
    'hero.titleHighlight': 'Inner Peace',
    'hero.subtitle': 'Experience transformative yoga sessions designed to nurture your mind, body, and soul',
    'hero.startJourney': 'Start Your Journey',
    'hero.watchVideos': 'Watch Videos',
    
    // About
    'about.title': 'Why Choose Calm Pose?',
    'about.description': 'At Calm Pose, we believe yoga is more than just physical exercise—it\'s a journey of self-discovery, healing, and transformation. Our experienced instructors create a nurturing environment where you can explore your practice safely and mindfully.',
    'about.benefit1.title': 'Expert Guidance',
    'about.benefit1.description': 'Certified instructors with years of experience in various yoga traditions',
    'about.benefit2.title': 'Personalized Approach',
    'about.benefit2.description': 'Classes adapted to your individual needs and fitness level',
    'about.benefit3.title': 'Holistic Wellness',
    'about.benefit3.description': 'Focus on mental, physical, and spiritual well-being',
    'about.happyStudents': 'Over 500 Happy Students',
    'about.communityText': 'Join our community of practitioners who have found peace, strength, and joy through yoga',
    
    // Video Section
    'videos.title': 'Practice at Home',
    'videos.subtitle': 'Access our library of guided yoga sessions, perfect for all levels',
    'videos.watchNow': 'Watch Now',
    'videos.duration': 'min',
    
    // Booking Section
    'booking.title': 'Book Your Session',
    'booking.subtitle': 'Schedule a personalized session with one of our experienced instructors',
    'booking.name': 'Full Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.classType': 'Class Type',
    'booking.selectType': 'Select class type',
    'booking.beginnerHatha': 'Beginner Hatha',
    'booking.vinyasaFlow': 'Vinyasa Flow',
    'booking.restorative': 'Restorative Yoga',
    'booking.meditation': 'Meditation & Mindfulness',
    'booking.date': 'Preferred Date',
    'booking.selectDate': 'Select date',
    'booking.time': 'Preferred Time',
    'booking.selectTime': 'Select time',
    'booking.message': 'Optional Message',
    'booking.messagePlaceholder': 'Tell us about your yoga experience or any special requirements...',
    'booking.submit': 'Book Session',
    
    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.classes': 'Classes',
    'footer.about': 'About Us',
    'footer.videos': 'Videos',
    'footer.booking': 'Booking',
    'footer.contact': 'Contact',
    'footer.address': '123 Yoga Street, Bucharest',
    'footer.phone': '+40 123 456 789',
    'footer.email': 'contact@calmpose.ro',
    'footer.followUs': 'Follow Us',
    'footer.rights': 'All rights reserved.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ro');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};