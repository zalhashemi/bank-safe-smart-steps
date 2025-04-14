
import React from 'react';
import { Mail, Wifi, KeyRound } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SecurityRisks: React.FC = () => {
  const { t } = useLanguage();

  const risks = [
    {
      title: t('risks.phishing.title'),
      description: t('risks.phishing.description'),
      icon: <Mail className="h-6 w-6 text-[#f6ac5e]" />
    },
    {
      title: t('risks.wifi.title'),
      description: t('risks.wifi.description'),
      icon: <Wifi className="h-6 w-6 text-[#f6ac5e]" />
    },
    {
      title: t('risks.passwords.title'),
      description: t('risks.passwords.description'),
      icon: <KeyRound className="h-6 w-6 text-[#f6ac5e]" />
    }
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ color: '#073374', marginBottom: '1.5rem' }}>{t('sections.risks')}</h2>
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
        {risks.map((risk, index) => (
          <div
            key={index}
            style={{
              padding: '1.5rem',
              borderRadius: '8px',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e0e0e0'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              {risk.icon}
              <h3 style={{ color: '#f6ac5e' }}>{risk.title}</h3>
            </div>
            <p style={{ color: '#333' }}>{risk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityRisks;
