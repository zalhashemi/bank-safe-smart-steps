
import React from 'react';
import Header from '../components/Header';
import SecurityRisks from '../components/SecurityRisks';
import BestPractices from '../components/BestPractices';
import SecurityQuiz from '../components/SecurityQuiz';

const Index: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff' }}>
      <Header />
      <main>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: '#073374', marginBottom: '1rem' }}>
            Banking Security Education Center
          </h1>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            Learn how to protect your financial information and bank securely online.
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
