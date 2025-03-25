import React from 'react';

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={`${process.env.PUBLIC_URL}/logo-placeholder.svg`} alt="Logo Logiadapt" />
        <div className="logo-text">
          <div>Logiadapt</div>
          <div style={{ fontSize: '14px', color: '#666' }}>N°1 de l'adaptation en France</div>
        </div>
      </div>
      <div className="rating">
        <span>Avis Google :</span>
        <span className="stars">★★★★☆</span>
        <span>4.8/5</span>
      </div>
    </div>
  );
}

export default Header; 