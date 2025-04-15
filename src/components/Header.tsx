
import React from 'react';
import LanguageToggle from './LanguageToggle';
import BBKLogo from '../assets/BBK_Logo.png';

const Header: React.FC = () => {
  return (
    <header className="bg-[#00000] p-4 flex items-center justify-between relative">
      <div className="flex-1 flex justify-center">
        <img 
          src={BBKLogo} 
          alt="BBK Bank Logo" 
          className="w-[230px] object-contain"
        />
      </div>
      <LanguageToggle />
    </header>
  );
};

export default Header;
