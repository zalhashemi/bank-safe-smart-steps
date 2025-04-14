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
    'sections.risks': 'Common Security Risks',
    'sections.practices': 'Security Best Practices',
    'risks.phishing.title': 'Phishing Attacks',
    'risks.phishing.description': 'Fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity.',
    'risks.wifi.title': 'Public Wi-Fi',
    'risks.wifi.description': 'Using unsecured public networks can expose your banking data to cybercriminals.',
    'risks.passwords.title': 'Weak Passwords',
    'risks.passwords.description': 'Simple or reused passwords make your account vulnerable to unauthorized access.',
    'practices.2fa.title': 'Enable Two-Factor Authentication',
    'practices.2fa.content': 'Add an extra layer of security by requiring both your password and a verification code.',
    'practices.passwords.title': 'Create Strong Passwords',
    'practices.passwords.content': 'Use a combination of letters, numbers, and special characters. Never reuse passwords across accounts.',
    'practices.monitoring.title': 'Monitor Your Accounts',
    'practices.monitoring.content': 'Regularly check your account activity and enable notifications for all transactions.',
    'quiz.title': 'Test Your Security Knowledge',
    'quiz.tryAgain': 'Try Again',
    'quiz.complete': 'Quiz Complete!',
    'quiz.score': 'Your score:',
    'quiz.outOf': 'out of',
    'quiz.question1': 'What should you do if you receive an email asking for your banking credentials?',
    'quiz.q1.option1': 'Enter your credentials to verify your account',
    'quiz.q1.option2': 'Delete the email and report it as phishing',
    'quiz.q1.option3': 'Reply asking for more information',
    'quiz.q1.option4': 'Click on any links to check if they are legitimate',
    'quiz.question2': 'Which is the most secure password?',
    'quiz.q2.option1': 'password123',
    'quiz.q2.option2': 'birthdaydate',
    'quiz.q2.option3': 'P@ssw0rd!2023',
    'quiz.q2.option4': 'qwerty',
    'quiz.question3': 'When is it safe to use public Wi-Fi for banking?',
    'quiz.q3.option1': 'Only with a VPN connection',
    'quiz.q3.option2': 'When the network has a password',
    'quiz.q3.option3': 'During non-peak hours',
    'quiz.q3.option4': 'Anytime if the connection is strong'
  },
  ar: {
    'app.title': 'مركز التثقيف المصرفي الأمني',
    'app.subtitle': 'تعلم كيفية حماية معلوماتك المالية والخدمات المصرفية عبر الإنترنت بأمان',
    'sections.risks': 'المخاطر الأمنية الشائعة',
    'sections.practices': 'أفضل الممارسات الأمنية',
    'risks.phishing.title': 'هجمات التصيد',
    'risks.phishing.description': 'محاولات احتيالية للحصول على معلومات حساسة من خلال التنكر ككيان موثوق به.',
    'risks.wifi.title': 'شبكات الواي فاي العامة',
    'risks.wifi.description': 'استخدام الشبكات العامة غير المؤمنة يمكن أن يعرض بياناتك المصرفية للمخترقين.',
    'risks.passwords.title': 'كلمات المرور الضعيفة',
    'risks.passwords.description': 'كلمات المرور البسيطة أو المعاد استخدامها تجعل حسابك عرضة للوصول غير المصرح به.',
    'practices.2fa.title': 'تفعيل المصادقة الثنائية',
    'practices.2fa.content': 'أضف طبقة إضافية من الأمان من خلال طلب كلمة المرور ورمز التحقق.',
    'practices.passwords.title': 'إنشاء كلمات مرور قوية',
    'practices.passwords.content': 'استخدم مزيجًا من الحروف والأرقام والرموز الخاصة. لا تعيد استخدام كلمات المرور عبر الحسابات.',
    'practices.monitoring.title': 'مراقبة حساباتك',
    'practices.monitoring.content': 'تحقق بانتظام من نشاط حسابك وقم بتمكين الإشعارات لجميع المعاملات.',
    'quiz.title': 'اختبر معرفتك الأمنية',
    'quiz.tryAgain': 'حاول مرة أخرى',
    'quiz.complete': '!اكتمل الاختبار',
    'quiz.score': 'نتيجتك:',
    'quiz.outOf': 'من',
    'quiz.question1': 'ماذا يجب أن تفعل إذا تلقيت بريدًا إلكترونيًا يطلب بيانات اعتماد المصرف الخاصة بك؟',
    'quiz.q1.option1': 'أدخل بيانات الاعتماد الخاصة بك للتحقق من حسابك',
    'quiz.q1.option2': 'احذف البريد الإلكتروني وأبلغ عنه كتصيد احتيالي',
    'quiz.q1.option3': 'الرد لطلب المزيد من المعلومات',
    'quiz.q1.option4': 'انقر على أي روابط للتحقق مما إذا كانت شرعية',
    'quiz.question2': 'ما هي كلمة المرور الأكثر أمانًا؟',
    'quiz.q2.option1': 'password123',
    'quiz.q2.option2': 'birthdaydate',
    'quiz.q2.option3': 'P@ssw0rd!2023',
    'quiz.q2.option4': 'qwerty',
    'quiz.question3': 'متى يكون من الآمن استخدام شبكة Wi-Fi العامة للخدمات المصرفية؟',
    'quiz.q3.option1': 'فقط مع اتصال VPN',
    'quiz.q3.option2': 'عندما يكون للشبكة كلمة مرور',
    'quiz.q3.option3': 'خلال ساعات غير الذروة',
    'quiz.q3.option4': 'في أي وقت إذا كان الاتصال قويًا'
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
