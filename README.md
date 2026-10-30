# artsouslemanguier

Site institutionnel et éditorial de **Art Sous Le Manguier** — initiative culturelle camerounaise fondée par Louise Abomba en 2017 sous un manguier à Doual'art (Douala). Émission vidéo documentaire, archives audiovisuelles et mémoire des artistes contemporains.

## Objectif du MVP
Un site sobre, élégant, rapide, accessible et responsive, sans backend, sans base de données, sans dépendance payante. Présente fidèlement l'association, valorise l'émission et ses archives, facilite la découverte et la prise de contact.

## Stack
- **Next.js 15** (App Router), TypeScript, Tailwind CSS
- Rendu statique, déployable n'importe où (hôte statique)
- Polices système uniquement (aucune requête externe)
- Aucune bibliothèque visuelle lourde, aucun formulaire simulant un envoi, aucun tracking

## Pages
- `/` — Accueil : identité, présentation, repères, initiatives, contact
- `/emissions` — Émission / Archives (registre vide en attendant validation des épisodes)
- `/a-propos` — Contexte, démarche, mission, fondatrice
- `/contact` — Aucun canal non vérifié publié

## Commandes
```bash
# Installation (déjà faite)
npm install

# Serveur de développement (http://localhost:3000)
npm run dev

# Build de production (statique)
npm run build

# Serveur de production (après le build)
npm run start

# Lint
npx eslint src/
```

## Documentation
- `docs/IMPLEMENTATION_PLAN.md` — plan d'implémentation et décisions techniques
- `docs/CONTENT_AUDIT.md` — faits, contenus et médias vérifiés avec sources (hiérarchie de confiance)
- `src/data/site.ts` — données organisationnelles typées et sourcées
- `src/data/episodes.ts` — registre des épisodes (vide en attendant confirmation)

## Limites à la livraison
- Aucun épisode, invité, date ni lien vidéo n'est publié tant qu'il n'est pas confirmé par l'association.
- Aucun contact direct (e-mail, téléphone, adresse, réseau social) n'est publié tant qu'il n'est pas vérifié.
- Le rendu visuel n'a pas pu être contrôlé dans un navigateur de test aux largeurs 360/768/1440 (navigateur indisponible dans cet environnement) ; le code utilise des breakpoints Tailwind (`md:`, `lg:`) et un layout fluide.

## Identité visuelle
Palette issue du logo réel (`public/images/logo.jpg`) : vert forêt `#104020`, feuillage `#2e7a5f`, neutres chauds, encre sombre. Logo conservé sans déformation ni recoloration.
