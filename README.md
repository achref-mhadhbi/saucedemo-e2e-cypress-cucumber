# SauceDemo E2E - Cypress & Cucumber (BDD) 🧪

Ce projet présente une suite de tests automatisés **End-to-End (E2E)** pour l'application [SauceDemo](https://www.saucedemo.com/). L'objectif est de démontrer la mise en œuvre de la méthodologie **BDD (Behavior Driven Development)**.

---

## 🌟 Points Forts du Projet

* **Approche BDD :** Utilisation de Gherkin pour rédiger des scénarios compréhensibles par les équipes techniques et métiers.
* **Couverture E2E :** Automatisation du flux complet, du login jusqu'à la déconnexion, en passant par le tunnel d'achat.

---

## 🛠️ Stack Technique

* **Framework :** [Cypress](https://www.cypress.io/)
* **Plugin :** @badeball/cypress-cucumber-preprocessor
* **Langage :** JavaScript 
* **Méthodologie :** Cucumber / Gherkin

---

## 📂 Structure du Projet

```text
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Fichiers .feature (Scénarios Gherkin)
│   │   └── step_definitions/    # Fichiers .cy.js (Logique des tests)
├── cypress.config.js            # Configuration du préprocesseur Cucumber
└── package.json                 # Scripts et dépendances

## 🚀 Installation et Utilisation

### 1. Cloner le projet
git clone [https://github.com/achref-mhadhbi/saucedemo-e2e-cypress-cucumber.git](https://github.com/achref-mhadhbi/saucedemo-e2e-cypress-cucumber.git)

### 2. Installer les dépendances
npm install

### 3. Lancer les tests
npx cypress open
