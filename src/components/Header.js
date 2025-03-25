import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">🏠</span>
          </div>
          <div className="logo-text">
            <div className="brand-name">Logiadapt</div>
            <div className="brand-tagline">N°1 de l'adaptation</div>
          </div>
        </div>
        <div className="header-right">
          <div className="rating">
            <div className="stars">★★★★★</div>
            <span className="rating-score">4.8/5 sur Google</span>
          </div>
          <div className="contact-button">
            <a href="tel:0123456789" className="contact-link">
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header; 