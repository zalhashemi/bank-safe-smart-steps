
import React from 'react';
import Header from '../components/Header';
import SecurityRisks from '../components/SecurityRisks';
import BestPractices from '../components/BestPractices';
import SecurityQuiz from '../components/SecurityQuiz';
import { useLanguage } from '../contexts/LanguageContext';

const Index: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff' }}>
      <Header />
      <main>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: '#073374', marginBottom: '1rem' }}>
            {t('app.title')}
          </h1>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            {t('app.subtitle')}
          </p>
        </div>
        <SecurityRisks />
        <BestPractices />
        <SecurityQuiz />
      </main>
    </div>
  );
};

export default Index;
