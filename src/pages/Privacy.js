import React from 'react';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Politique de Confidentialité</h1>
        
        <p>Dernière mise à jour: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. Introduction</h2>
          <p>
            Chez Logiadapt, nous accordons une grande importance à la protection de vos données personnelles. 
            Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et 
            protégeons vos informations lorsque vous utilisez notre simulateur et nos services.
          </p>
        </section>
        
        <section>
          <h2>2. Données collectées</h2>
          <p>
            Nous collectons les informations suivantes lors de votre utilisation de notre simulateur:
          </p>
          <ul>
            <li>Informations personnelles (nom, prénom, adresse email)</li>
            <li>Informations professionnelles (statut, revenus, situation familiale)</li>
            <li>Documents téléchargés pour la simulation</li>
            <li>Données de navigation et d'utilisation du simulateur</li>
          </ul>
        </section>
        
        <section>
          <h2>3. Utilisation des données</h2>
          <p>
            Vos données sont utilisées pour:
          </p>
          <ul>
            <li>Fournir, personnaliser et améliorer nos services</li>
            <li>Effectuer des simulations précises basées sur votre situation</li>
            <li>Communiquer avec vous concernant votre simulation</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>
        
        <section>
          <h2>4. Protection des données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
            pour protéger vos données contre tout accès non autorisé, altération, divulgation 
            ou destruction.
          </p>
        </section>
        
        <section>
          <h2>5. Vos droits</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez 
            des droits suivants concernant vos données personnelles:
          </p>
          <ul>
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition</li>
          </ul>
        </section>
        
        <div className="page-navigation">
          <Link to="/" className="back-button">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

export default Privacy; 