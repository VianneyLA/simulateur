import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Header from './components/Header';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import Contact from './pages/Contact';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const MainContent = () => (
    <>
      <main className="main-content">
        {currentStep === 1 && <StepOne onNext={nextStep} />}
        {currentStep === 2 && <StepTwo onNext={nextStep} onBack={prevStep} />}
        {currentStep === 3 && <StepThree onBack={prevStep} />}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div>© {new Date().getFullYear()} Logiadapt - Tous droits réservés</div>
          <div className="footer-links">
            <Link to="/privacy">Confidentialité</Link>
            <Link to="/legal">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 