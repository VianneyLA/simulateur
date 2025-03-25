# Logiadapt - Simulateur MaPrimeAdapt

Ce projet est un simulateur d'éligibilité pour le dispositif MaPrimeAdapt, permettant aux utilisateurs de vérifier leur admissibilité à cette aide financière.

## Structure du projet

Le projet est construit avec React et utilise une approche modulaire avec des composants réutilisables.

### Points clés :

- Application React simple avec des composants fonctionnels
- Gestion d'état avec useState et useEffect
- Stockage local des données utilisateur avec localStorage
- Interface utilisateur moderne et accessible

## Installation

1. Clonez le dépôt :
```
git clone [url-du-repo]
cd logiadapt-simulator
```

2. Installez les dépendances :
```
npm install
```

## Démarrage

Pour démarrer l'application en mode développement :

```
npm start
```

L'application sera disponible à l'adresse [http://localhost:3000](http://localhost:3000).

## Build de production

Pour créer une version optimisée pour la production :

```
npm run build
```

## Fonctionnalités

- **Étape 1** : Collecte d'informations personnelles (âge, adresse, revenu)
- **Étape 2** : Upload et validation de documents (avis d'imposition, justificatif de domicile)
- **Étape 3** : Résultat de l'éligibilité et estimation du montant d'aide

## Améliorations par rapport à la version originale

- Architecture modulaire facilitant la maintenance
- Suppression de la duplication de code
- Séparation claire des préoccupations (UI, logique, stockage)
- Gestion d'erreur plus robuste
- Code plus lisible et mieux organisé 