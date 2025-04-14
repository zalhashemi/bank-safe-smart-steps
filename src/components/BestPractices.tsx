
import React, { useState } from 'react';
import { Shield, Key, LineChart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const BestPractices: React.FC = () => {
  const { t } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const practices = [
    {
      title: t('practices.2fa.title'),
      content: t('practices.2fa.content'),
      icon: <Shield className="h-5 w-5" />
    },
    {
      title: t('practices.passwords.title'),
      content: t('practices.passwords.content'),
      icon: <Key className="h-5 w-5" />
    },
    {
      title: t('practices.monitoring.title'),
      content: t('practices.monitoring.content'),
      icon: <LineChart className="h-5 w-5" />
    }
  ];

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ color: '#073374', marginBottom: '1.5rem' }}>{t('sections.practices')}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {practices.map((practice, index) => (
          <div
            key={index}
            style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              style={{
                width: '100%',
                padding: '1rem',
                textAlign: 'left',
                backgroundColor: expandedIndex === index ? '#fad02e' : 'white',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {practice.icon}
              {practice.title}
            </button>
            {expandedIndex === index && (
              <div style={{ padding: '1rem' }}>
                {practice.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPractices;
