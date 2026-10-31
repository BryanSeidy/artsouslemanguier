# artsouslemanguier

Site institutionnel et éditorial de **Art Sous Le Manguier** — initiative culturelle camerounaise fondée par Louise Abomba en 2017 sous un manguier à Doual’art (Douala). Émission vidéo documentaire, archives audiovisuelles et mémoire des artistes contemporains.

## Objectif du site

Un site sobre, élégant, rapide, accessible et responsive, sans backend, sans base de données, sans dépendance payante. Il permet de :

- Comprendre l’identité et la mission de l’association
- Découvrir son histoire et sa démarche
- Explorer les émissions et les archives audiovisuelles
- Visionner des vidéos (YouTube, Vimeo, TikTok) via intégration officielle
- Découvrir les initiatives réellement documentées
- Trouver des moyens de contacter l’organisation

## Stack

- **Next.js 15** (App Router), TypeScript, Tailwind CSS v3
- Rendu statique, déployable n’importe où (hôte statique)
- Polices système uniquement (aucune requête externe)
- Aucune bibliothèque visuelle lourde, aucun formulaire simulant un envoi, aucun tracking
- Aucune dépendance payante, aucune clé API

## Pages

| Page | Contenu |
|---|---|
| `/` | Accueil : identité, présentation, vidéo en vedette, démarche, initiatives, contact |
| `/emissions` | Émission / Archives : contexte, repères, grille d'archives, état vide si aucune vidéo |
| `/emissions/[slug]` | Détail d'émission : lecteur, titre, description, artiste, crédits, source, vidéos associées |
| `/a-propos` | Contexte, démarche, mission, fondatrice, initiatives |
| `/contact` | Aucun canal non vérifié publié, expérience honnête |

## Vidéos

La collection audiovisuelle est déclarée dans `src/data/videos.ts`. Le registre est vide par défaut : aucune vidéo n’est inventée. Pour ajouter une vidéo, voir `docs/ADDING_VIDEOS.md`.

Plateformes supportées : YouTube (youtube-nocookie.com), Vimeo, TikTok (lecteur officiel), autre (carte éditoriale avec lien externe).

Approche click-to-load : aucune iframe chargée automatiquement.

## Commandes

```bash
# Installation
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

- `docs/IMPLEMENTATION_PLAN.md` — plan d’implantation, corrections P0/P1, nouvelles fonctionnalités P2
- `docs/CONTENT_AUDIT.md` — faits, contenus et médias vérifiés avec sources (hiérarchie de confiance)
- `docs/ADDING_VIDEOS.md` — guide pour ajouter une nouvelle vidéo à la collection
- `src/data/site.ts` — données organisationnelles typées et sourcées
- `src/data/videos.ts` — registre des vidéos (vide en attendant confirmation)

## Identité visuelle

Palette issue du logo réel (`public/images/logo.jpg`) : vert forêt `#104020`, feuillage `#2e7a5f`, neutres chauds, encre sombre. Logo conservé sans déformation ni recoloration.

## Limites à la livraison

- Aucun épisode, invité, date ni lien vidéo n’est publié tant qu’il n’est pas confirmé par l’association.
- Aucun contact direct (e-mail, téléphone, adresse, réseau social) n’est publié tant qu’il n’est pas vérifié.
- Le rendu visuel n’a pas pu être contrôlé dans un navigateur de test aux largeurs 360/768/1440 (navigateur indisponible dans cet environnement) ; le code utilise des breakpoints Tailwind (`md:`, `lg:`) et un layout fluide.
