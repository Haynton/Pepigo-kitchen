# Pepigo Kitchen

Site vitrine one-page pour **Pepigo Kitchen**, une cuisine professionnelle partagée à Saint-Herblain (Nantes), destinée aux entrepreneurs de l'alimentaire, traiteurs et artisans.

🌐 **[pepigo-kitchen.fr](https://www.pepigo-kitchen.fr)**

---

## Aperçu

Pepigo Kitchen propose la location d'un laboratoire professionnel équipé, en formule mensuelle sans engagement. Le site présente l'offre, les équipements, les profils ciblés, les tarifs et un formulaire de contact.

## Stack technique

- **HTML5** · structure sémantique, balises `<section>`, `<nav>`, `<header>`, `<footer>`
- **CSS3** · styles personnalisés (sans framework), responsive design
- **JavaScript (module ES)** · accordéon FAQ interactif
- **Netlify** · hébergement + formulaire de contact natif (Netlify Forms)

## Structure du projet

```
Pepigo-kitchen/
├── assets/          # Images (.webp) et favicons
├── components/      # Scripts JS (accordion.js)
├── css/             # Feuille de style principale
├── legal/           # Page mentions légales
├── success/         # Page de confirmation après envoi du formulaire
├── 404.html         # Page d'erreur personnalisée
├── index.html       # Page principale
└── site.webmanifest # Manifest PWA
```

## Sections du site

- **Hero** — accroche et galerie photos
- **À propos** — présentation de la cuisine partagée
- **Équipements** — détail du matériel disponible (cuisson, postes de travail, stockage, lavage)
- **Pour qui ?** — profils compatibles (traiteur, pâtissier, chocolatier, food truck, chef à domicile) et exclusions (dark kitchen, ateliers)
- **Tarifs** — formule unique à 600 € HT/mois, sans engagement
- **FAQ** — accordéon avec réponses aux questions fréquentes
- **Contact** — formulaire Netlify Forms + informations pratiques (adresse, transports, horaires)

## Lancer le projet en local

Aucune dépendance à installer. Ouvrir `index.html` directement dans un navigateur, ou utiliser un serveur local :

```bash
npx serve .
# ou
python3 -m http.server
```

> Le formulaire de contact nécessite un déploiement sur Netlify pour fonctionner (Netlify Forms).

## Déploiement

Le site est déployé via **Netlify** avec détection automatique des formulaires HTML.

---

*Réalisé par [Anthony Quenet](https://www.anthonyquenet.com)*
