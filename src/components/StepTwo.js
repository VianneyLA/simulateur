import React, { useState } from 'react';
import StepIndicator from './StepIndicator';
import DocumentUploader from './DocumentUploader';
import { clearFormData } from '../utils/storage';

function StepTwo({ onNext, onBack }) {
  const [processedDocuments, setProcessedDocuments] = useState({
    tax: false,
    home: false
  });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleDocumentProcessed = (success, type) => {
    if (success) {
      setProcessedDocuments(prev => ({
        ...prev,
        [type === 'avis d\'imposition' ? 'tax' : 'home']: true
      }));
    }
  };

  const handleNextClick = () => {
    // Clear saved form data when moving to the final step
    clearFormData();
    onNext();
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  // Sample data for the document previews
  const taxPreviewData = {
    name: { label: 'Nom', value: 'Martin Dupont' },
    address: { label: 'Adresse fiscale', value: '12 rue des Lilas, 75001 Paris' },
    income: { label: 'Revenu fiscal', value: '24 500 €' },
    parts: { label: 'Nombre de parts', value: '2' }
  };

  const homePreviewData = {
    name: { label: 'Nom du titulaire', value: 'Martin Dupont' },
    address: { label: 'Adresse', value: '12 rue des Lilas, 75001 Paris' },
    type: { label: 'Type de document', value: 'Facture d\'électricité' },
    date: { label: 'Date du document', value: '12/02/2025' }
  };

  const projectTypes = [
    { id: 'bathroom', name: 'Salle de bain', emoji: '🚿' },
    { id: 'access', name: 'Accès au logement', emoji: '🚪' },
    { id: 'kitchen', name: 'Cuisine adaptée', emoji: '🍳' },
    { id: 'other', name: 'Autre adaptation', emoji: '🔧' }
  ];

  return (
    <div className="container">
      <StepIndicator currentStep={2} />
      
      <h1>📄 Votre projet</h1>
      
      <div className="project-section">
        <h2 className="section-title">Quel type d'adaptation souhaitez-vous réaliser ? </h2>
        
        <div className="project-options">
          {projectTypes.map((project) => (
            <div 
              key={project.id}
              className={`project-option ${selectedProject === project.id ? 'selected' : ''}`}
              onClick={() => handleProjectSelect(project.id)}
            >
              <span className="emoji">{project.emoji}</span>
              <span className="name">{project.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <DocumentUploader 
        title="Avis d'imposition"
        emoji="📋"
        documentType="avis d'imposition"
        previewData={taxPreviewData}
        onDocumentProcessed={handleDocumentProcessed}
      />
      
      <DocumentUploader 
        title="Justificatif de domicile"
        emoji="🏠"
        documentType="justificatif de domicile"
        previewData={homePreviewData}
        onDocumentProcessed={handleDocumentProcessed}
      />
      
      <div className="button-container">
        <button className="btn btn-secondary" onClick={onBack}>
          <span className="btn-icon">←</span> Précédent
        </button>
        <button 
          className="btn btn-primary" 
          onClick={handleNextClick}
          disabled={!processedDocuments.tax || !processedDocuments.home || !selectedProject}
        >
          Continuer <span className="btn-icon">→</span>
        </button>
      </div>
    </div>
  );
}

export default StepTwo; 