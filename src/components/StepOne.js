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

  return (
    <div className="container">
      <StepIndicator currentStep={1} />
      
      <h1>📋 Analyse de votre situation</h1>
      
      <div className="form-group">
        <label htmlFor="age">Quel est votre âge ? 👵👴</label>
        <input 
          type="number" 
          id="age" 
          name="age" 
          min="0" 
          max="120" 
          placeholder="Entrez votre âge"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Votre adresse 🏠</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          placeholder="Entrez votre adresse complète"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="household">Nombre de personnes dans le foyer 👨‍👩‍👧‍👦</label>
        <input 
          type="number" 
          id="household" 
          name="household" 
          min="1" 
          max="10" 
          placeholder="Nombre de personnes"
          value={formData.household}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="income">Revenu fiscal de référence (€) 💶</label>
        <input 
          type="number" 
          id="income" 
          name="income" 
          min="0" 
          placeholder="Entrez votre revenu fiscal"
          value={formData.income}
          onChange={handleChange}
        />
        <div className="help-text">Vous pouvez trouver cette information sur votre dernier avis d'imposition</div>
      </div>
      
      <div className="button-container">
        <button className="btn btn-secondary" disabled>Précédent</button>
        <button 
          className="btn btn-primary" 
          onClick={onNext}
        >
          Continuer
        </button>
      </div>
    </div>
  );
}

export default StepOne; 