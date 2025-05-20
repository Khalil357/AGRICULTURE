
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'sw' | 'es';

// Define the shape of our translations
export interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

// Define common translations
export const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    sw: 'Nyumbani',
    es: 'Inicio',
  },
  'nav.crops': {
    en: 'Crops',
    sw: 'Mazao',
    es: 'Cultivos',
  },
  'nav.about': {
    en: 'About',
    sw: 'Kuhusu',
    es: 'Acerca de',
  },
  'nav.contact': {
    en: 'Contact',
    sw: 'Wasiliana',
    es: 'Contacto',
  },
  
  // Hero section
  'hero.title': {
    en: 'Grow Better with KilimoSmart',
    sw: 'Kulima Vizuri na KilimoSmart',
    es: 'Cultiva Mejor con KilimoSmart',
  },
  'hero.subtitle': {
    en: 'Your smart farming assistant for sustainable agriculture',
    sw: 'Msaidizi wako wa kilimo cha kisasa kwa kilimo endelevu',
    es: 'Tu asistente de agricultura inteligente para una agricultura sostenible',
  },
  'hero.cta': {
    en: 'Explore Crops',
    sw: 'Chunguza Mazao',
    es: 'Explorar Cultivos',
  },
  
  // Crops section
  'crops.title': {
    en: 'Select a Crop',
    sw: 'Chagua Zao',
    es: 'Seleccionar un Cultivo',
  },
  'crops.subtitle': {
    en: 'Get detailed information about various crops',
    sw: 'Pata maelezo ya kina kuhusu mazao mbalimbali',
    es: 'Obtén información detallada sobre varios cultivos',
  },
  'crops.search': {
    en: 'Search crops...',
    sw: 'Tafuta mazao...',
    es: 'Buscar cultivos...',
  },
  
  // Crop details
  'crop.soil': {
    en: 'Soil Requirements',
    sw: 'Mahitaji ya Udongo',
    es: 'Requisitos de Suelo',
  },
  'crop.climate': {
    en: 'Climate Conditions',
    sw: 'Hali ya Hewa',
    es: 'Condiciones Climáticas',
  },
  'crop.methods': {
    en: 'Farming Methods',
    sw: 'Mbinu za Kilimo',
    es: 'Métodos de Cultivo',
  },
  'crop.tips': {
    en: 'Farming Tips',
    sw: 'Vidokezo vya Kilimo',
    es: 'Consejos de Cultivo',
  },
  
  // Footer
  'footer.rights': {
    en: 'All rights reserved',
    sw: 'Haki zote zimehifadhiwa',
    es: 'Todos los derechos reservados',
  },
  'footer.about': {
    en: 'About KilimoSmart',
    sw: 'Kuhusu KilimoSmart',
    es: 'Acerca de KilimoSmart',
  },
  'footer.privacy': {
    en: 'Privacy Policy',
    sw: 'Sera ya Faragha',
    es: 'Política de Privacidad',
  },
  'footer.terms': {
    en: 'Terms of Service',
    sw: 'Masharti ya Huduma',
    es: 'Términos de Servicio',
  },
};

// Define context type
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Create provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    
    // Return key if translation not found
    console.warn(`Translation not found for key: ${key} in language: ${language}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => useContext(LanguageContext);
