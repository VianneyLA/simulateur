import React, { useState, useRef } from 'react';

// Helper to generate random errors like in the original script
const generateRandomError = (documentType) => {
  const errors = [
    `Le ${documentType} que vous avez soumis est de mauvaise qualité. Veuillez soumettre un document plus net.`,
    `Nous n'avons pas pu identifier les informations clés sur votre ${documentType}. Assurez-vous que le document est complet.`,
    `Le ${documentType} semble incomplet. Certaines pages semblent manquantes.`,
    `Le ${documentType} soumis ne semble pas être au bon format. Veuillez soumettre un document au format PDF, JPG ou PNG.`,
    `Le texte sur votre ${documentType} n'est pas lisible. Merci de scanner à nouveau le document avec une meilleure résolution.`
  ];
  
  return errors[Math.floor(Math.random() * errors.length)];
};

function DocumentUploader({ title, emoji, documentType, previewData, onDocumentProcessed }) {
  const [status, setStatus] = useState('upload'); // upload, processing, success, error
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setStatus('processing');
      
      // Simulate processing delay (2-4 seconds)
      setTimeout(() => {
        // 50% chance of success, 50% chance of error
        if (Math.random() < 0.5) {
          setStatus('success');
          
          // Notify parent that document is processed
          setTimeout(() => {
            onDocumentProcessed(true, documentType);
          }, 1000);
        } else {
          const error = generateRandomError(documentType);
          setErrorMessage(error);
          setStatus('error');
        }
      }, 2000 + Math.random() * 2000);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleEditClick = () => {
    alert('Fonctionnalité de modification en cours de développement');
  };

  return (
    <div className="document-container">
      <div className="document-title">
        <span className="emoji">{emoji}</span> {title}
      </div>
      
      {status === 'upload' && (
        <div className="upload-container">
          <div className="upload-icon">📤</div>
          <div className="upload-text">
            Déposez votre {documentType} ici ou cliquez pour parcourir
          </div>
          <input 
            type="file" 
            ref={fileInputRef}
            className="file-input" 
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />
          <button className="upload-btn" onClick={handleBrowseClick}>
            Parcourir mes fichiers
          </button>
        </div>
      )}
      
      {status === 'processing' && (
        <div className="document-status">
          <div className="spinner"></div>
          <span>Analyse de votre document en cours... Merci de patienter.</span>
        </div>
      )}
      
      {status === 'success' && (
        <>
          <div className="document-status status-success">
            <div className="status-icon">✅</div>
            <span>Document validé avec succès !</span>
          </div>
          
          <div className="document-preview">
            <div className="preview-title">
              Informations extraites de votre {documentType}
            </div>
            <div className="preview-info">
              {Object.entries(previewData).map(([key, { label, value }]) => (
                <div className="info-row" key={key}>
                  <div className="info-label">{label} :</div>
                  <div className="info-value">{value}</div>
                </div>
              ))}
            </div>
            <div className="preview-actions">
              <button className="btn btn-secondary" onClick={handleEditClick}>Modifier</button>
            </div>
          </div>
        </>
      )}
      
      {status === 'error' && (
        <div className="document-status status-error">
          <div className="status-icon">❌</div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
              Le document n'a pas pu être validé
            </div>
            <div>{errorMessage}</div>
            <button 
              className="btn btn-primary" 
              style={{ marginTop: '15px' }}
              onClick={() => setStatus('upload')}
            >
              Réessayer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DocumentUploader; 