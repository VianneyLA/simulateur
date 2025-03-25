import React from 'react';

function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator">
      <div className={`step ${currentStep >= 1 ? (currentStep > 1 ? 'completed' : 'active') : ''}`}>
        {currentStep > 1 ? '✓' : '1'}
        <div className="step-label">Analyse situation</div>
      </div>
      <div className={`step ${currentStep >= 2 ? (currentStep > 2 ? 'completed' : 'active') : ''}`}>
        {currentStep > 2 ? '✓' : '2'}
        <div className="step-label">Documents</div>
      </div>
      <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
        3
        <div className="step-label">Éligibilité</div>
      </div>
    </div>
  );
}

export default StepIndicator; 