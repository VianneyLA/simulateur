import React, { useState } from 'react';
import Header from './components/Header';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {currentStep === 1 && <StepOne onNext={nextStep} />}
        {currentStep === 2 && <StepTwo onNext={nextStep} onBack={prevStep} />}
        {currentStep === 3 && <StepThree onBack={prevStep} />}
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div>© {new Date().getFullYear()} Logiadapt - Tous droits réservés</div>
          <div className="footer-links">
            <a href="#">Confidentialité</a>
            <a href="#">Mentions légales</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 