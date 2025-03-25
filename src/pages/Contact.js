import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // In a real app, you would send the form data to a server here
    setSubmitted(true);
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Contactez-nous</h1>
        
        <div className="contact-info">
          <div className="contact-details">
            <h2>Nos coordonnées</h2>
            <p>
              <strong>Adresse :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
              <strong>Téléphone :</strong> +33 (0)1 23 45 67 89<br />
              <strong>Email :</strong> contact@logiadapt.fr<br />
              <strong>Horaires :</strong> Du lundi au vendredi, de 9h à 18h
            </p>
          </div>
        </div>
        
        {submitted ? (
          <div className="form-success">
            <h2>Message envoyé !</h2>
            <p>Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.</p>
            <button 
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
              }}
              className="button"
            >
              Envoyer un autre message
            </button>
          </div>
        ) : (
          <div className="contact-form-container">
            <h2>Formulaire de contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nom complet *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Sujet *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="button">Envoyer</button>
            </form>
          </div>
        )}
        
        <div className="page-navigation">
          <Link to="/" className="back-button">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact; 