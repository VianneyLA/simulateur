import React from 'react';

function StepIndicator({ currentStep }) {
  return (
    <>
      <div className="sidebar-title">Navigation</div>
      <div className="step-indicator">
        <div className={`step ${currentStep >= 1 ? (currentStep > 1 ? 'completed' : 'active') : ''}`}>
          <div className="step-circle">
            {currentStep > 1 ? '✓' : '1'}
          </div>
          <div className="step-label">Analyse situation</div>
        </div>
        <div className={`step ${currentStep >= 2 ? (currentStep > 2 ? 'completed' : 'active') : ''}`}>
          <div className="step-circle">
            {currentStep > 2 ? '✓' : '2'}
          </div>
          <div className="step-label">Documents</div>
        </div>
        <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
          <div className="step-circle">
            3
          </div>
          <div className="step-label">Éligibilité</div>
        </div>
      </div>
    </>
  );
}

export default StepIndicator; 