# Cypress POM & Cucumber – SauceDemo E2E 🧪

Ce projet présente une suite de tests automatisés **End-to-End (E2E)** pour l’application **SauceDemo**, conçue selon les bonnes pratiques industrielles en **QA Automation**.  
Il combine **Cypress**, le **Behavior Driven Development (BDD)** avec **Cucumber**, et le **Page Object Model (POM)** afin de garantir lisibilité, maintenabilité et scalabilité.

---

## 🎯 Objectifs du projet

- Automatiser des parcours utilisateur réels (login, add to cart, checkout, logout)
- Mettre en place une architecture test professionnelle (BDD + POM)
- Séparer clairement :
  - les scénarios métier
  - la logique des tests
  - les sélecteurs et actions techniques
=> Fournir une base scalable 

---

## 🌟 Points forts

### ✅ Architecture hybride (BDD + POM)
- **Gherkin (.feature)** : description fonctionnelle lisible par tous (QA, PO, Dev)
- **Step Definitions** : implémentation des scénarios
- **Page Objects** : centralisation des sélecteurs et actions UI

### ✅ Réutilisabilité (DRY)
- Étapes communes (login, navigation…) factorisées
- Réduction de la duplication de code

### ✅ Maintenance facilitée
- Un changement de sélecteur = une seule modification dans le Page Object
- Impact minimal sur les scénarios existants

### ✅ Scalabilité
- Structure adaptée à des projets réels avec des dizaines ou centaines de tests
- Chaque fonctionnalité est testée indépendamment tout en restant E2E

---

## 🧠 Type de tests

- **End-to-End (E2E)**  
  Chaque scénario simule un comportement utilisateur réel via le navigateur, sans mock, sur une application réelle.

> ℹ️ Les tests E2E sont découpés par fonctionnalité (login, cart, checkout…), ce qui est une pratique standard.

---

## 🛠️ Stack technique

- **Framework** : Cypress
- **BDD** : `@badeball/cypress-cucumber-preprocessor`
- **Pattern** : Page Object Model (POM)
- **Langage** : JavaScript
- **Runner** : Cypress

---

## 📂 Structure du projet
```
├── cypress/
│   ├── e2e/
│   │   ├── features/           # Scénarios métier en Gherkin (.feature)
│   │   ├── pages/              # Classes Page Object (Sélecteurs & Actions)
│   │   └── step_definitions/   # Mapping Gherkin vers code JS
│   │       ├── common.js       # Étapes partagées (Login, etc.)
│   │       └── ...             # Étapes spécifiques par module
├── cypress.config.js           # Configuration hybride .feature / .cy.js
└── package.json                # Scripts et dépendances
```
## 🚀 Installation et Utilisation

### 1. Cloner le projet
git clone [https://github.com/achref-mhadhbi/cypress-pom-cucumber-saucedemo-e2e.git](https://github.com/achref-mhadhbi/cypress-pom-cucumber-saucedemo-e2e.git)

### 2. Installer les dépendances
npm install

### 3. Lancer les tests
npx cypress open
