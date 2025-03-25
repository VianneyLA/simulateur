import React from 'react';
import StepIndicator from './StepIndicator';

function StepThree({ onBack }) {
  return (
    <div className="container">
      <div className="sidebar">
        <StepIndicator currentStep={3} />
      </div>
      
      <div className="content-area">
        <h1>Résultats de votre simulation</h1>
        
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: '28px', margin: '16px 0' }}>
            Félicitations ! Vous êtes éligible à MaPrimeAdapt
          </div>
          
          <div style={{ 
            background: '#E8F5E9', 
            borderRadius: '8px', 
            padding: '16px',
            margin: '24px 0',
            fontSize: '22px',
            color: '#2E7D32'
          }}>
            Montant estimé : <strong>5 000 €</strong>
          </div>
          
          <div style={{ margin: '24px 0' }}>
            <p>Un conseiller Logiadapt va vous contacter dans les 24h pour vous accompagner dans vos démarches.</p>
            <p>Vous recevrez également un email récapitulatif de votre simulation.</p>
          </div>
          
          <div style={{ margin: '32px 0' }}>
            <button 
              className="btn btn-primary" 
              style={{ padding: '12px 24px', fontSize: '16px' }}
              onClick={() => window.location.reload()}
            >
              Nouvelle simulation
            </button>
          </div>
        </div>
        
        <div className="button-container">
          <button className="btn btn-secondary" onClick={onBack}>Précédent</button>
          <button className="btn btn-secondary" disabled>Continuer</button>
        </div>
      </div>
    </div>
  );
}

export default StepThree; 