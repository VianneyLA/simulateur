import React, { useState, useEffect, useRef } from 'react';
import StepIndicator from './StepIndicator';
import { saveFormData, getFormData } from '../utils/storage';

function StepOne({ onNext }) {
  const [formData, setFormData] = useState({
    age: '',
    address: '',
    household: '',
    income: ''
  });
  const [selectedStatus, setSelectedStatus] = useState(null);
  const initialized = useRef(false);

  // Load saved form data when component mounts
  useEffect(() => {
    if (!initialized.current) {
      const savedData = getFormData();
      if (savedData) {
        setFormData(prevData => {
          const newFormData = { ...prevData };
          if (savedData.age) newFormData.age = savedData.age;
          if (savedData.address) newFormData.address = savedData.address;
          if (savedData.household) newFormData.household = savedData.household;
          if (savedData.income) newFormData.income = savedData.income;
          return newFormData;
        });
      }
      initialized.current = true;
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    saveFormData({ [name]: value });
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const isFormValid = () => {
    return formData.age && formData.address && formData.household && formData.income && selectedStatus;
  };

  const housingStatusOptions = [
    { id: 'proprietaire_occupant', name: 'Propriétaire Occupant', emoji: '🏠' },
    { id: 'locataire_prive', name: 'Locataire - Logement privé', emoji: '🔑' },
    { id: 'locataire_social', name: 'Locataire - Logement social', emoji: '🔑' },
    { id: 'heberge_gratuit', name: 'Hébergé à titre gratuit', emoji: '🙏' },
    { id: 'usufruitier', name: 'Usufruitier', emoji: '🏠' },
    { id: 'proprietaire_bailleur', name: 'Propriétaire Bailleur', emoji: '🏠' }
  ];

  return (
    <div className="container">
      <div className="sidebar">
        <StepIndicator currentStep={1} />
      </div>
      
      <div className="content-area">
        <h1>Concernant ce logement, vous êtes :</h1>
        
        <div className="form-section">
          <div className="project-options">
            {housingStatusOptions.map((status) => (
              <div 
                key={status.id}
                className={`project-option ${selectedStatus === status.id ? 'selected' : ''}`}
                onClick={() => handleStatusSelect(status.id)}
              >
                <span className="emoji">{status.emoji}</span>
                <span className="name">{status.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-section" style={{ marginTop: '30px' }}>
          <h2 className="section-title">Vos informations</h2>
          
          <div className="form-group">
            <label htmlFor="age">
              <span className="emoji">👵</span> Quel est votre âge ?
            </label>
            <input 
              type="number" 
              id="age" 
              name="age" 
              min="0" 
              max="120" 
              placeholder="Entrez votre âge"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="address">
              <span className="emoji">🏠</span> Votre adresse
            </label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              placeholder="Entrez votre adresse complète"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="household">
              <span className="emoji">👨‍👩‍👧‍👦</span> Nombre de personnes dans le foyer
            </label>
            <input 
              type="number" 
              id="household" 
              name="household" 
              min="1" 
              max="10" 
              placeholder="Nombre de personnes"
              value={formData.household}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="income">
              <span className="emoji">💶</span> Revenu fiscal de référence
            </label>
            <input 
              type="number" 
              id="income" 
              name="income" 
              min="0" 
              placeholder="Entrez votre revenu fiscal en euros"
              value={formData.income}
              onChange={handleChange}
              required
            />
            <div className="help-text">Vous pouvez trouver cette information sur votre dernier avis d'imposition</div>
          </div>
        </div>
        
        <div className="button-container">
          <button className="btn btn-secondary" disabled>
            <span className="btn-icon">←</span> Précédent
          </button>
          <button 
            className="btn btn-primary" 
            onClick={onNext}
            disabled={!isFormValid()}
          >
            Continuer <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StepOne; 