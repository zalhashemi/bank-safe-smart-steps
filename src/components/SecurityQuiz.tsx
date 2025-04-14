import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, X } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const SecurityQuiz: React.FC = () => {
  const { t } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const questions: Question[] = [
    {
      question: 'What should you do if you receive an email asking for your banking credentials?',
      options: [
        'Enter your credentials to verify your account',
        'Delete the email and report it as phishing',
        'Reply asking for more information',
        'Click on any links to check if they are legitimate'
      ],
      correctAnswer: 1
    },
    {
      question: 'Which is the most secure password?',
      options: [
        'password123',
        'birthdaydate',
        'P@ssw0rd!2023',
        'qwerty'
      ],
      correctAnswer: 2
    },
    {
      question: 'When is it safe to use public Wi-Fi for banking?',
      options: [
        'Only with a VPN connection',
        'When the network has a password',
        'During non-peak hours',
        'Anytime if the connection is strong'
      ],
      correctAnswer: 0
    }
  ];

  const handleAnswerClick = (selectedIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(selectedIndex);
    setAnswered(true);
    
    if (selectedIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowScore(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  return (
    <section style={{ padding: '2rem' }}>
      <h2 style={{ color: '#073374', marginBottom: '1.5rem' }}>{t('quiz.title')}</h2>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {showScore ? (
          <div style={{ textAlign: 'center' }}>
            <h3>{t('quiz.complete')}</h3>
            <p>{t('quiz.score')} {score} {t('quiz.outOf')} {questions.length}</p>
            <button
              onClick={resetQuiz}
              style={{
                backgroundColor: '#f6ac5e',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '1rem'
              }}
            >
              {t('quiz.tryAgain')}
            </button>
          </div>
        ) : (
          <>
            <p style={{ marginBottom: '1rem' }}>Question {currentQuestion + 1} of {questions.length}</p>
            <h3 style={{ marginBottom: '1.5rem' }}>{questions[currentQuestion].question}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {questions[currentQuestion].options.map((option, index) => {
                const isCorrect = index === questions[currentQuestion].correctAnswer;
                const isSelected = index === selectedAnswer;
                const showFeedback = answered && isSelected;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    style={{
                      padding: '1rem',
                      backgroundColor: showFeedback 
                        ? (isCorrect ? '#F2FCE2' : '#FFEBEE')
                        : '#f5f5f5',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                      cursor: answered ? 'not-allowed' : 'pointer',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span>{option}</span>
                    {showFeedback && (
                      isCorrect 
                        ? <Check className="text-green-600" />
                        : <X className="text-red-600" />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default SecurityQuiz;
