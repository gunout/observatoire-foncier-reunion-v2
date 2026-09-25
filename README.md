# Observatoire Foncier - La Réunion 2025

[![Deploy](https://github.com/gunout/observatoire-foncier-reunion-v2/actions/workflows/deploy.yml/badge.svg)](https://github.com/gunout/observatoire-foncier-reunion-v2/actions/workflows/deploy.yml)
[![Site](https://img.shields.io/badge/site-en%20ligne-18753C)](https://gunout.github.io/observatoire-foncier-reunion-v2/)
[![License](https://img.shields.io/badge/License-MIT-000091)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-000091?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-000091?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-B34000?logo=vite)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-18753C?logo=leaflet)](https://leafletjs.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-E1000F?logo=chart.js)](https://www.chartjs.org/)
[![Node](https://img.shields.io/badge/Node-20%2B-18753C?logo=node.js)](https://nodejs.org/)
[![Data INSEE](https://img.shields.io/badge/Data-INSEE-000091)](https://www.insee.fr/)
[![Data ARMOS OI](https://img.shields.io/badge/Data-ARMOS%20OI-18753C)](https://www.armos-oi.re/)
[![Data Notaires](https://img.shields.io/badge/Data-Notaires-B34000)](https://www.notaires.fr/)
[![Data BRGM](https://img.shields.io/badge/Data-BRGM-E1000F)](https://www.brgm.fr/)

Analyse du potentiel foncier et de la crise du logement à La Réunion.

**Site en ligne** : https://gunout.github.io/observatoire-foncier-reunion-v2/

---

## Sommaire

- [À propos](#à-propos)
- [Contexte](#contexte)
- [Contenu](#contenu)
- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Installation](#installation)
- [Configuration des APIs](#configuration-des-apis)
- [Déploiement](#déploiement)
- [Structure du projet](#structure-du-projet)
- [Accessibilité](#accessibilité)
- [Contribuer](#contribuer)
- [Licence](#licence)

---

## À propos

Plateforme de visualisation des données foncières, démographiques et socio-économiques du département 974.

Elle centralise et rend exploitables les données dispersées entre l'INSEE, l'ARMOS OI, les Notaires, le BRGM et la DEAL, pour éclairer les politiques publiques d'aménagement et de logement.

---

## Contexte

La Réunion fait face à une tension structurelle :

| Indicateur | Valeur |
|------------|--------|
| Population (INSEE RP 2023) | 889 679 hab. |
| Nombre de communes | 24 |
| Parc social (ARMOS OI 2026) | 86 293 logements |
| Taux de logements sociaux | 24 % des résidences principales |
| Taux de chômage (T2 2025) | 16 % |
| Prix médian appartement ancien | 2 700 €/m² |
| Prix médian appartement neuf | 5 230 €/m² |
| Logements sociaux > 30 ans | 25 000 |

---

## Contenu

### 5 modules

- **Vue d'ensemble** : carte, statistiques, tableau triable
- **Marché et Foncier** : construction, loyers, vacance, friches
- **Société** : démographie, ménages, emploi
- **Économie et Emploi** : mobilités, marché du travail
- **Risques et Environnement** : cyclones, contraintes, énergies

### 24 communes

| Région | Communes |
|--------|----------|
| Nord | Saint-Denis, Sainte-Marie, Sainte-Suzanne |
| Ouest | Saint-Paul, Le Port, La Possession, Saint-Leu, Les Trois-Bassins, L'Étang-Salé, Les Avirons |
| Sud | Saint-Pierre, Le Tampon, Saint-Louis, Saint-Joseph, Petite-Île, Saint-Philippe, Entre-Deux, Cilaos |
| Est | Saint-André, Saint-Benoît, Bras-Panon, Sainte-Rose, La Plaine-des-Palmistes, Salazie |

---

## Fonctionnalités

- Cartographie interactive avec Leaflet
- 23 graphiques Chart.js
- Tableau triable par population, parc social, prix
- Recherche instantanée par commune
- Export CSV des données filtrées
- Design Marianne (DSFR)
- Accessible RGAA 4.1 niveau AA

---

## Stack technique

| Couche | Technologie | Version |
|--------|-------------|---------|
| Frontend | React | 18.3 |
| | TypeScript | 5.6 |
| | Zustand | 5.0 |
| | Leaflet | 1.9 |
| | Chart.js | 4.4 |
| Build | Vite | 6.0 |
| CI/CD | GitHub Actions | — |
| Hébergement | GitHub Pages | — |

---

## Installation

Prérequis : Node.js 20 ou supérieur.

    git clone https://github.com/gunout/observatoire-foncier-reunion-v2.git
    cd observatoire-foncier-reunion-v2
    npm install
    npm run dev

Le navigateur s'ouvre sur http://localhost:5173

---

## Configuration des APIs

Le projet fonctionne avec des données embarquées (aucune API requise). Pour activer les données en temps réel, suivez les guides ci-dessous.

### API INSEE - Données Locales

**Objet** : récupérer les populations légales et données de recensement en temps réel.

**Étape 1 - Créer un compte**

1. Aller sur https://portail-api.insee.fr
2. Cliquer sur S'inscrire
3. Remplir le formulaire (nom, email, organisme)
4. Confirmer par email

**Étape 2 - Souscrire à l'API**

1. Se connecter sur le portail
2. Aller dans Catalogue
3. Chercher Données locales
4. Cliquer sur Souscrire
5. Choisir le plan Gratuit
6. Confirmer

**Étape 3 - Récupérer la clé**

1. Aller dans Mes applications
2. Créer une application nommée Observatoire Foncier
3. Copier la clé API (format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

**Étape 4 - Configurer en local**

Créer un fichier `.env.local` à la racine :

    VITE_INSEE_API_KEY=votre_cle_ici

**Étape 5 - Configurer sur GitHub**

1. Aller sur https://github.com/gunout/observatoire-foncier-reunion-v2/settings/secrets/actions
2. Cliquer New repository secret
3. Nom : VITE_INSEE_API_KEY
4. Valeur : coller la clé
5. Cliquer Add secret

**Étape 6 - Utiliser dans le code**

Créer `src/data/insee-api.ts` :

    const INSEE_API_KEY = import.meta.env.VITE_INSEE_API_KEY || "";

    export async function fetchPopulationInsee() {
      if (!INSEE_API_KEY) return {};
      const res = await fetch(
        "https://api.insee.fr/donnees-locales/V0.1/donnees/geo@poplegales/COM-974",
        { headers: { Authorization: "Bearer " + INSEE_API_KEY } }
      );
      const json = await res.json();
      const result: Record<string, number> = {};
      json.observations?.forEach((o: any) => {
        result[o.geo] = Number(o.valeur);
      });
      return result;
    }

---

### API DVF - Demandes de Valeurs Foncières

**Objet** : récupérer les transactions immobilières réelles (prix, surfaces, dates).

**Étape 1 - Accéder aux données**

1. Aller sur https://app.dvf.etalab.gouv.fr
2. Télécharger le fichier du département 974 (format CSV)
3. Ou utiliser l'API : https://api.data.gouv.fr

**Étape 2 - Alternative Apify**

1. Aller sur https://apify.com
2. Créer un compte gratuit
3. Chercher l'acteur dltik/dvf-france-transactions
4. Récupérer le token API

**Étape 3 - Utiliser dans le code**

    export async function fetchDVF() {
      const res = await fetch("https://api.apify.com/v2/acts/dltik~dvf-france-transactions/run-sync-get-dataset-items?token=VOTRE_TOKEN", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ departement: "974" })
      });
      return res.json();
    }

---

### API Géo - Contours communaux

**Objet** : récupérer les contours géographiques des 24 communes.

**Pas de clé requise.**

    export async function fetchContoursCommunes() {
      const res = await fetch(
        "https://geo.api.gouv.fr/departements/974/communes?geometry=contour&format=geojson"
      );
      return res.json();
    }

Utilisation dans MapView :

    fetch("https://geo.api.gouv.fr/departements/974/communes?geometry=contour&format=geojson")
      .then(r => r.json())
      .then(geojson => {
        L.geoJSON(geojson, {
          style: (feature) => ({
            fillColor: getColor(feature.properties.nom),
            weight: 1,
            color: "#fff",
            fillOpacity: 0.75
          })
        }).addTo(map);
      });

---

### API SITADEL - Permis de construire

**Objet** : récupérer les permis de construire par commune.

**Étape 1 - Accéder aux données**

1. Aller sur https://www.statistiques.developpement-durable.gouv.fr/sitadel
2. Télécharger les données département 974 (format CSV)

**Étape 2 - Alternative data.gouv.fr**

1. Aller sur https://www.data.gouv.fr
2. Chercher SITADEL
3. Télécharger le jeu de données

---

## Déploiement

### Automatique

Chaque git push sur main déclenche un déploiement automatique via GitHub Actions.

1. GitHub Actions détecte le push
2. Build (npm run build)
3. Publication sur GitHub Pages

Suivre le déploiement : https://github.com/gunout/observatoire-foncier-reunion-v2/actions

### Configuration initiale GitHub Pages

1. Aller sur Settings → Pages
2. Source : sélectionner GitHub Actions
3. Cliquer Save

### Déclenchement manuel

    git commit --allow-empty -m "ci: trigger deploy"
    git push

Ou via GitHub : Actions → Deploy to GitHub Pages → Run workflow.

---

## Structure du projet

    observatoire-foncier-reunion-v2/
      .github/
        workflows/
          deploy.yml
      src/
        components/
          Header.tsx
          SearchBar.tsx
          ExportButton.tsx
          StatsGrid.tsx
          MapView.tsx
          ChartsPanel.tsx
          DataTable.tsx
          MarketModule.tsx
          SocietyModule.tsx
          EconomyModule.tsx
          RiskModule.tsx
        data/
          modules-data.ts
          insee-api.ts
        stores/
          filterStore.ts
        App.tsx
        main.tsx
        index.css
      public/
      index.html
      package.json
      vite.config.ts
      tsconfig.json
      LICENSE
      README.md

---

## Accessibilité

Conformité RGAA 4.1 niveau AA :

- Lien d'évitement
- Structure sémantique
- Contrastes 4.5:1 minimum
- Navigation clavier complète
- Attributs ARIA
- Focus visible

---

## Contribuer

### Signaler un bug

Ouvrir une issue avec description, étapes de reproduction, comportement attendu.

### Workflow

    git checkout -b feature/ma-fonctionnalite
    git commit -m "feat: ajout de ma fonctionnalité"
    git push origin feature/ma-fonctionnalite

### Convention de commits

- feat : nouvelle fonctionnalité
- fix : correction de bug
- docs : documentation
- data : mise à jour des données
- style : formatage
- refactor : refactoring
- chore : maintenance

---

## Licence

MIT — voir LICENSE

---

## Crédits

**Données** : INSEE, ARMOS OI, Notaires, BRGM, DEAL, DGFiP, ADIL 974.

**Design** : DSFR, DINUM, Etalab, OpenStreetMap France.

**Bibliothèques** : React, Vite, TypeScript, Leaflet, Chart.js, Zustand.

---

République Française — Liberté, Égalité, Fraternité

Fait à La Réunion
