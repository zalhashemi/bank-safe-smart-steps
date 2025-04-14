
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      onClick={toggleLanguage}
      variant="ghost"
      size="sm"
      className="fixed top-4 right-4 gap-2"
    >
      <Globe className="h-4 w-4" />
      {language === 'en' ? 'عربي' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
