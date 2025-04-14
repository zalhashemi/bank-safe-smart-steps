
import React, { useState } from 'react';

const BestPractices: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const practices = [
    {
      title: 'Enable Two-Factor Authentication',
      content: 'Add an extra layer of security by requiring both your password and a verification code.'
    },
    {
      title: 'Create Strong Passwords',
      content: 'Use a combination of letters, numbers, and special characters. Never reuse passwords across accounts.'
    },
    {
      title: 'Monitor Your Accounts',
      content: 'Regularly check your account activity and enable notifications for all transactions.'
    }
  ];

  return (
    <section style={{ padding: '2rem', backgroundColor: '#f5f5f5' }}>
      <h2 style={{ color: '#073374', marginBottom: '1.5rem' }}>Security Best Practices</h2>
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
                cursor: 'pointer'
              }}
            >
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
