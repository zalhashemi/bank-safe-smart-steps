
import React from 'react';

const SecurityRisks: React.FC = () => {
  const risks = [
    {
      title: 'Phishing Attacks',
      description: 'Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.'
    },
    {
      title: 'Public Wi-Fi',
      description: 'Using unsecured public networks can expose your banking data to cybercriminals.'
    },
    {
      title: 'Weak Passwords',
      description: 'Simple or reused passwords make your account vulnerable to unauthorized access.'
    }
  ];

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ color: '#073374', marginBottom: '1.5rem' }}>Common Security Risks</h2>
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
            <h3 style={{ color: '#f6ac5e', marginBottom: '0.5rem' }}>{risk.title}</h3>
            <p style={{ color: '#333' }}>{risk.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecurityRisks;
