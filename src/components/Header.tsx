
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#073374',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img 
        src="/bbk-logo.png" 
        alt="BBK Bank Logo" 
        style={{ height: '50px' }}
      />
    </header>
  );
};

export default Header;
