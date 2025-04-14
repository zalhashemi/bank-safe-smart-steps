
import React, { createContext, useContext, useState } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    'app.title': 'Banking Security Education Center',
    'app.subtitle': 'Learn how to protect your financial information and bank securely online.',
    'quiz.tryAgain': 'Try Again',
    'quiz.complete': 'Quiz Complete!',
    'quiz.score': 'Your score:',
    'quiz.outOf': 'out of',
    'quiz.title': 'Test Your Security Knowledge'
  },
  ar: {
    'app.title': 'مركز التثقيف المصرفي الأمني',
    'app.subtitle': 'تعلم كيفية حماية معلوماتك المالية والخدمات المصرفية عبر الإنترنت بأمان',
    'quiz.tryAgain': 'حاول مرة أخرى',
    'quiz.complete': '!اكتمل الاختبار',
    'quiz.score': 'نتيجتك:',
    'quiz.outOf': 'من',
    'quiz.title': 'اختبر معرفتك الأمنية'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
