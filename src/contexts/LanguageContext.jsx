import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 'en' for English, 'xh' for Xhosa, 'ts' for Tsonga

  const switchLanguage = (language) => {
    console.log('switchLanguage called with:', language, 'current:', currentLanguage);
    if (language && ['en', 'xh', 'ts'].includes(language)) {
      console.log('Setting language to:', language);
      setCurrentLanguage(language);
    } else {
      // Cycle through languages if no specific language is provided
      const languageOrder = ['en', 'xh', 'ts'];
      const currentIndex = languageOrder.indexOf(currentLanguage);
      const nextIndex = (currentIndex + 1) % languageOrder.length;
      const nextLanguage = languageOrder[nextIndex];
      console.log('Cycling from', currentLanguage, 'to', nextLanguage);
      setCurrentLanguage(nextLanguage);
    }
  };

  const value = {
    currentLanguage,
    switchLanguage,
    isXhosa: currentLanguage === 'xh',
    isEnglish: currentLanguage === 'en',
    isTsonga: currentLanguage === 'ts',
    availableLanguages: [
      { code: 'en', name: 'English' },
      { code: 'xh', name: 'isiXhosa' },
      { code: 'ts', name: 'Xitsonga' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};