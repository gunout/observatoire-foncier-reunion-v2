<div align="center">

# 🏛️ Observatoire Foncier — La Réunion

### Analyse du potentiel foncier et de la crise du logement à La Réunion

*Plateforme de données ouvertes — République Française*

[![Deploy to GitHub Pages](https://github.com/gunout/observatoire-foncier-reunion-v2/actions/workflows/deploy.yml/badge.svg)](https://github.com/gunout/observatoire-foncier-reunion-v2/actions/workflows/deploy.yml)
[![Site en ligne](https://img.shields.io/badge/site-en%20ligne-18753C?style=for-the-badge)](https://gunout.github.io/observatoire-foncier-reunion-v2/)
[![License: MIT](https://img.shields.io/badge/License-MIT-000091?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-2.0.0-E1000F?style=for-the-badge)](https://github.com/gunout/observatoire-foncier-reunion-v2/releases)

[![React](https://img.shields.io/badge/React-18-000091?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-000091?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-B34000?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-18753C?style=flat-square&logo=leaflet&logoColor=white)](https://leafletjs.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-4.4-E1000F?style=flat-square&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0-000091?style=flat-square)](https://zustand-demo.pmnd.rs/)

[![Data INSEE](https://img.shields.io/badge/Data-INSEE-000091?style=flat-square)](https://www.insee.fr/)
[![Data ARMOS OI](https://img.shields.io/badge/Data-ARMOS%20OI-18753C?style=flat-square)](https://www.armos-oi.re/)
[![Data Notaires](https://img.shields.io/badge/Data-Notaires-B34000?style=flat-square)](https://www.notaires.fr/)
[![Data BRGM](https://img.shields.io/badge/Data-BRGM-E1000F?style=flat-square)](https://www.brgm.fr/)

[🌐 Voir le site](https://gunout.github.io/observatoire-foncier-reunion-v2/) · [📖 Documentation](#-à-propos) · [🐛 Signaler un bug](https://github.com/gunout/observatoire-foncier-reunion-v2/issues/new) · [✨ Proposer une amélioration](https://github.com/gunout/observatoire-foncier-reunion-v2/issues/new)

</div>

---

## 📋 Sommaire

- [À propos](#-à-propos)
- [Contexte](#-contexte)
- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Stack technique](#-stack-technique)
- [Installation](#-installation)
- [Configuration des APIs](#-configuration-des-apis)
- [Déploiement](#-déploiement)
- [Structure du projet](#-structure-du-projet)
- [Accessibilité](#-accessibilité)
- [Performance](#-performance)
- [Contribuer](#-contribuer)
- [Feuille de route](#-feuille-de-route)
- [Licence](#-licence)
- [Crédits](#-crédits)

---

## 🎯 À propos

L'**Observatoire Foncier de La Réunion** est une plateforme web de visualisation et d'analyse des données foncières, démographiques et socio-économiques du département 974.

Elle centralise et rend exploitables les données dispersées entre l'INSEE, l'ARMOS OI, les Notaires, le BRGM et la DEAL, afin d'éclairer les politiques publiques d'aménagement et de logement.

Le projet est **100 % statique** : aucune base de données, aucun serveur à maintenir. Les données sont embarquées dans le bundle et le déploiement est automatisé via GitHub Actions.

---

## 📊 Contexte

La Réunion fait face à une **tension structurelle** entre croissance démographique, objectif Zéro Artificialisation Nette (ZAN) et contraintes naturelles majeures.

| Indicateur | Valeur | Source |
|------------|--------|--------|
| Population totale | 889 679 hab. | INSEE RP 2023 |
| Nombre de communes | 24 | INSEE |
| Parc de logements sociaux | 86 293 | ARMOS OI / RPLS 2026 |
| Taux de logements sociaux | 24 % des résidences principales | ARMOS OI 2026 |
| Taux de chômage | 16 % | INSEE T2 2025 |
| Prix médian appartement ancien | 2 700 €/m² | Notaires 2025 |
| Prix médian appartement neuf | 5 230 €/m² | Notaires 2025 |
| Logements sociaux de plus de 30 ans | 25 000 | ARMOS OI 2026 |

---

## 🖼️ Aperçu

| Module | Description |
|--------|-------------|
| **Vue d'ensemble** | Carte interactive des 24 communes, indicateurs clés, tableau triable |
| **Marché & Foncier** | Construction neuve, loyers par intercommunalité, vacance, friches |
| **Société** | Démographie, composition des ménages, marché de l'emploi |
| **Économie & Emploi** | Mobilités, secteurs d'activité, marché du travail |
| **Risques & Environnement** | Cyclones, mouvements de terrain, contraintes réglementaires |

---

## ✨ Fonctionnalités

### Analyse territoriale

- 🗺️ **Cartographie interactive** des 24 communes (Leaflet + OpenStreetMap)
- 📊 **23 graphiques interactifs** (Chart.js)
- 📋 **Tableau triable** par population, parc social, prix, région
- 🔍 **Recherche instantanée** avec suggestions
- 🔄 **Filtres synchronisés** (carte ↔ graphiques ↔ tableau via Zustand)

### Données & export

- 📥 **Export CSV** des données filtrées
- 📌 **Sources officielles** citées pour chaque indicateur
- 🔄 **Rafraîchissement INSEE** (optionnel, via API)

### Interface & conformité

- 🎨 **Design System de l'État (DSFR)** — palette Marianne officielle
- 📱 **Responsive** — mobile, tablette, desktop
- ♿ **Accessible RGAA 4.1 niveau AA**
- 🌐 **Multilingue** (fr)

---

## 🛠️ Stack technique

| Couche | Technologie | Version | Rôle |
|--------|-------------|---------|------|
| Frontend | React | 18.3 | Interface utilisateur |
| | TypeScript | 5.6 | Typage statique |
| | Zustand | 5.0 | Gestion d'état |
| | Leaflet | 1.9 | Cartographie interactive |
| | Chart.js | 4.4 | Visualisations graphiques |
| Build | Vite | 6.0 | Bundler ultra-rapide |
| Design | DSFR | — | Système de Design de l'État |
| CI/CD | GitHub Actions | — | Déploiement automatique |
| Hébergement | GitHub Pages | — | CDN mondial gratuit |

---

## 🚀 Installation

### Prérequis

- **Node.js** ≥ 20 ([télécharger](https://nodejs.org/))
- **npm** ≥ 10
- **Git** (optionnel)

### Cloner et lancer

    git clone https://github.com/gunout/observatoire-foncier-reunion-v2.git
    cd observatoire-foncier-reunion-v2
    npm install
    npm run dev

Le navigateur s'ouvre automatiquement sur **http://localhost:5173**

### Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (génère `dist/`) |
| `npm run preview` | Prévisualiser le build |

---

## 🔌 Configuration des APIs

Le projet fonctionne **sans aucune API** grâce aux données embarquées dans `src/data/modules-data.ts`. Les sections ci-dessous expliquent comment activer les données en temps réel.

### 🇫🇷 API INSEE — Données Locales

**Objet** : populations légales, recensement, revenus (Filosofi).

**Étape 1 — Créer un compte**

1. Aller sur [https://portail-api.insee.fr](https://portail-api.insee.fr)
2. Cliquer sur **S'inscrire**
3. Remplir le formulaire et confirmer par email

**Étape 2 — Souscrire à l'API**

1. Se connecter au portail
2. Aller dans **Catalogue** → chercher **« Données locales »**
3. Cliquer sur **Souscrire** → choisir le plan **Gratuit**

**Étape 3 — Récupérer la clé**

1. Aller dans **Mes applications**
2. Créer une application (`Observatoire Foncier`)
3. Copier la **clé API**

**Étape 4 — Configurer en local**

Créer un fichier `.env.local` :

    VITE_INSEE_API_KEY=votre_cle_ici

**Étape 5 — Configurer sur GitHub**

1. Aller sur **Settings → Secrets and variables → Actions**
2. Cliquer **New repository secret**
3. Nom : `VITE_INSEE_API_KEY`
4. Valeur : coller la clé

**Étape 6 — Utiliser dans le code**

Créer `src/data/insee-api.ts` :

    const INSEE_API_KEY = import.meta.env.VITE_INSEE_API_KEY || "";

    export async function fetchPopulationInsee(): Promise<Record<string, number>> {
      if (!INSEE_API_KEY) return {};
      const res = await fetch(
        "https://api.insee.fr/donnees-locales/V0.1/donnees/geo@poplegales/COM-974",
        { headers: { Authorization: `Bearer ${INSEE_API_KEY}` } }
      );
      if (!res.ok) throw new Error(`INSEE ${res.status}`);
      const json = await res.json();
      const result: Record<string, number> = {};
      json.observations?.forEach((o: any) => {
        result[o.geo] = Number(o.valeur);
      });
      return result;
    }

---

### 💰 API DVF — Demandes de Valeurs Foncières

**Objet** : transactions immobilières réelles (prix, surfaces, dates).

**Option 1 — data.gouv.fr (gratuit)**

1. Aller sur [https://app.dvf.etalab.gouv.fr](https://app.dvf.etalab.gouv.fr)
2. Télécharger le fichier du département 974
3. Parser le CSV dans votre code

**Option 2 — Apify (API REST)**

1. Créer un compte sur [https://apify.com](https://apify.com)
2. Chercher l'acteur `dltik/dvf-france-transactions`
3. Récupérer le token API

    export async function fetchDVF() {
      const res = await fetch(
        "https://api.apify.com/v2/acts/dltik~dvf-france-transactions/run-sync-get-dataset-items?token=VOTRE_TOKEN",
        { method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ departement: "974" }) }
      );
      return res.json();
    }

---

### 🗺️ API Géo — Contours communaux

**Objet** : récupérer les contours géographiques des 24 communes (format GeoJSON).

**Pas de clé requise.**

    export async function fetchContoursCommunes() {
      const res = await fetch(
        "https://geo.api.gouv.fr/departements/974/communes?geometry=contour&format=geojson"
      );
      return res.json();
    }

Utilisation dans `MapView.tsx` pour une **choroplèthe** :

    fetch("https://geo.api.gouv.fr/departements/974/communes?geometry=contour&format=geojson")
      .then(r => r.json())
      .then(geojson => {
        L.geoJSON(geojson, {
          style: (feature) => ({
            fillColor: getColor(feature.properties.nom),
            weight: 1, color: "#fff", fillOpacity: 0.75
          })
        }).addTo(map);
      });

---

### 🏗️ API SITADEL — Permis de construire

**Objet** : permis de construire par commune.

1. Aller sur [https://www.statistiques.developpement-durable.gouv.fr/sitadel](https://www.statistiques.developpement-durable.gouv.fr/sitadel)
2. Télécharger les données du département 974 (CSV)

---

## 🚢 Déploiement

### Automatique (recommandé)

Chaque `git push` sur `main` déclenche un déploiement automatique :

1. GitHub Actions détecte le push
2. Build (`npm run build`)
3. Publication sur GitHub Pages

**Suivre le déploiement** : [onglet Actions](https://github.com/gunout/observatoire-foncier-reunion-v2/actions)

### Configuration initiale GitHub Pages

1. Aller sur **Settings → Pages**
2. **Source** : sélectionner **`GitHub Actions`**
3. Cliquer **Save**

### Déclenchement manuel

    git commit --allow-empty -m "ci: trigger deploy"
    git push

Ou via GitHub : **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

---

## 📁 Structure du projet

    observatoire-foncier-reunion-v2/
    ├── .github/
    │   └── workflows/
    │       └── deploy.yml              # CI/CD GitHub Actions
    ├── src/
    │   ├── components/
    │   │   ├── Header.tsx              # Bloc-marque Marianne
    │   │   ├── SearchBar.tsx           # Recherche par commune
    │   │   ├── ExportButton.tsx        # Export CSV
    │   │   ├── StatsGrid.tsx           # Cartes d'indicateurs
    │   │   ├── MapView.tsx             # Carte Leaflet
    │   │   ├── ChartsPanel.tsx         # Graphiques Chart.js
    │   │   ├── DataTable.tsx           # Tableau triable
    │   │   ├── MarketModule.tsx        # Module Marché & Foncier
    │   │   ├── SocietyModule.tsx       # Module Société
    │   │   ├── EconomyModule.tsx       # Module Économie
    │   │   └── RiskModule.tsx          # Module Risques
    │   ├── data/
    │   │   └── modules-data.ts         # Données embarquées
    │   ├── stores/
    │   │   └── filterStore.ts          # Zustand (état global)
    │   ├── App.tsx                     # Navigation 5 onglets
    │   ├── main.tsx                    # Point d'entrée React
    │   └── index.css                   # Styles DSFR
    ├── public/
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    ├── tsconfig.json
    ├── LICENSE
    └── README.md

---

## ♿ Accessibilité

Ce projet vise la conformité **RGAA 4.1 niveau AA** :

- ✅ **Lien d'évitement** (« Aller au contenu principal »)
- ✅ **Structure HTML sémantique** (`<header>`, `<main>`, `<table>`)
- ✅ **Contrastes de couleurs** ≥ 4.5:1
- ✅ **Navigation clavier** complète (Tab, Entrée)
- ✅ **Attributs ARIA** (`role="tab"`, `aria-selected`, `aria-controls`)
- ✅ **Focus visible** sur tous les éléments interactifs
- ✅ **`prefers-reduced-motion`** respecté
- ✅ **Pas de dépendance à la couleur seule**

---

## ⚡ Performance

- **100 % statique** — données embarquées, aucun backend
- **CDN GitHub Pages** — distribution mondiale
- **Bundle optimisé** — ~500 KB (159 KB gzip)
- **Lazy loading** — modules chargés à la demande
- **Cache navigateur** — assets fingerprintés

---

## 🤝 Contribuer

Les contributions sont **bienvenues** !

### Signaler un bug

Ouvrir une [issue](https://github.com/gunout/observatoire-foncier-reunion-v2/issues/new) avec :
- Description du problème
- Étapes de reproduction
- Comportement attendu vs observé

### Proposer une fonctionnalité

Ouvrir une [issue](https://github.com/gunout/observatoire-foncier-reunion-v2/issues/new) avec le label `enhancement`.

### Workflow de contribution

    git checkout -b feature/ma-fonctionnalite
    git commit -m "feat: ajout de ma fonctionnalité"
    git push origin feature/ma-fonctionnalite

Puis ouvrir une **Pull Request**.

### Convention de commits

Ce projet suit [Conventional Commits](https://www.conventionalcommits.org/) :

| Préfixe | Utilisation |
|---------|-------------|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `docs:` | Documentation |
| `data:` | Mise à jour des données |
| `style:` | Formatage |
| `refactor:` | Refactoring |
| `chore:` | Maintenance |

---

## 🗺️ Feuille de route

- [x] 24 communes avec données officielles
- [x] 5 modules d'analyse
- [x] 23 graphiques interactifs
- [x] Recherche par commune
- [x] Export CSV
- [x] Accessibilité RGAA AA
- [ ] **Comparateur** de 2 à 4 communes
- [ ] **Choroplèthe** avec contours communaux (API Géo)
- [ ] **Export PDF** du tableau filtré
- [ ] **Mode sombre**
- [ ] **API INSEE** temps réel
- [ ] **API DVF** transactions réelles
- [ ] **SITADEL** permis de construire
- [ ] **PWA** (mode hors-ligne)

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Crédits

### Données

| Source | Contribution |
|--------|--------------|
| **INSEE** | Recensement de la population (RP 2023) |
| **ARMOS OI** | Parc social (RPLS 2026) |
| **Notaires de France** | Prix immobilier (2026) |
| **BRGM** | Géorisques |
| **DEAL La Réunion** | Risques naturels |
| **DGFiP** | Demandes de valeurs foncières |
| **ADIL 974** | Observatoire des loyers |

### Design & outils

- **DSFR** — Système de Design de l'État
- **DINUM** — Direction interministérielle du numérique
- **Etalab** — API Géo
- **OpenStreetMap France** — Fond de carte

### Bibliothèques open source

Merci aux mainteneurs de : **React**, **Vite**, **TypeScript**, **Leaflet**, **Chart.js**, **Zustand**.

---

<div align="center">

**🏛️ République Française**

*Liberté · Égalité · Fraternité*

Fait avec ❤️ à La Réunion

[⬆ Retour en haut](#-observatoire-foncier--la-réunion)

</div>
