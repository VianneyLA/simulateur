import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo">
            <span className="logo-icon">L</span>
          </div>
          <div className="logo-text">
            <div className="brand-name">Logiadapt</div>
          </div>
        </div>
        <div className="header-right">
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