import React from 'react';
import { Link } from 'react-router-dom';

function Legal() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Mentions Légales</h1>
        
        <p>Dernière mise à jour: {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>1. Informations légales</h2>
          <p>
            Le présent site web est édité par la société Logiadapt, société par actions simplifiée 
            au capital de 50 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris 
            sous le numéro SIRET 123 456 789 00012.
          </p>
          <p>
            <strong>Siège social :</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France<br />
            <strong>Téléphone :</strong> +33 (0)1 23 45 67 89<br />
            <strong>Email :</strong> contact@logiadapt.fr<br />
            <strong>Directeur de la publication :</strong> Jean Dupont
          </p>
        </section>
        
        <section>
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par AWS (Amazon Web Services), société d'hébergement dont le siège social 
            est situé en France.
          </p>
        </section>
        
        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, 
            vidéos, sons, plans, logos, marques, etc.) sont la propriété exclusive de Logiadapt ou font l'objet 
            d'une autorisation d'utilisation. Ces éléments sont protégés par les lois françaises et internationales 
            relatives à la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des 
            éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation 
            écrite préalable de Logiadapt.
          </p>
        </section>
        
        <section>
          <h2>4. Conditions d'utilisation</h2>
          <p>
            L'utilisation du présent site implique l'acceptation pleine et entière des conditions générales 
            d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles d'être modifiées 
            ou complétées à tout moment par Logiadapt.
          </p>
        </section>
        
        <section>
          <h2>5. Limitation de responsabilité</h2>
          <p>
            Les informations contenues sur ce site sont aussi précises que possible. Cependant, Logiadapt ne 
            saurait être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, 
            qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
        </section>
        
        <div className="page-navigation">
          <Link to="/" className="back-button">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

export default Legal; 