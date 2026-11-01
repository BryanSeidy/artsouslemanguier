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

## CMS — Sanity (headless, studio indépendant)

Le Studio Sanity réside dans le dossier sibling `studio-art-sou-le-manguier/`. Il permet à l’équipe éditoriale de gérer les contenus sans toucher au code.

### Structure du dossier

```
C:\Dev\PROJECT\
  artsouslemanguier/          # Application Next.js (site public)
  studio-art-sou-le-manguier/ # Sanity Studio (back-office indépendant)
```

### Schémas Sanity (dans studio-art-sou-le-manguier/schemas/documentTypes/)

- `videoEpisode.ts` — Émissions et archives vidéo
- `artist.ts` — Profils d’artistes
- `sitePage.ts` — Pages institutionnelles
- `project.ts` — Projets et initiatives
- `article.ts` — Articles et actualités
- `siteSettings.ts` — Paramètres globaux du site

### Pages publiques

| Page | Chemin | Contenu |
|---|---|---|
| `/` | Accueil | Identité, présentation, vidéo en vedette, démarche, initiatives, contact |
| `/emissions` | Émission / Archives | Contexte, repères, grille d'archives, état vide si aucune vidéo |
| `/emissions/[slug]` | Détail d'émission | Lecteur, titre, description, artiste, crédits, source, vidéos associées |
| `/a-propos` | À propos | Contexte, démarche, mission, fondatrice, initiatives |
| `/contact` | Contact | Aucun canal non vérifié publié, expérience honnête |

## Vidéos

La collection audiovisuelle est gérée via Sanity CMS. Le registre local `src/data/videos.ts` sert de fallback quand Sanity n’est pas configuré.

Plateformes supportées : YouTube (youtube-nocookie.com), Vimeo, TikTok (lecteur officiel), autre (carte éditoriale avec lien externe).

Approche click-to-load : aucune iframe chargée automatiquement.

## Commandes

### Application Next.js (site public)

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

### Sanity Studio (back-office)

```bash
# Depuis le dossier studio-art-sou-le-manguier/
cd ../studio-art-sou-le-manguier

# Installation des dépendances
npm install

# Authentification (nécessaire pour lier au projet cloud)
sanity login

# Lancer le Studio en local
npm run dev

# Déployer le Studio sur l'hébergement Sanity
npx sanity@latest deploy
```

### Variables d'environnement

Copiez `.env.example` vers `.env.local` et renseignez vos valeurs :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=p1picvka
NEXT_PUBLIC_SANITY_DATASET=production
```

Sans ces variables, le site fonctionne avec les données locales (fallback).

## Documentation

- `docs/CMS_SETUP.md` — Installation et configuration du CMS
- `docs/CMS_USER_GUIDE.md` — Guide utilisateur pour l’équipe éditoriale
- `docs/ADDING_VIDEOS.md` — Comment ajouter une vidéo
- `docs/VIDEO_PROVIDER_SUPPORT.md` — Plateformes vidéo supportées
- `docs/CMS_LIMITATIONS.md` — Limites du forfait Sanity gratuit
- `docs/CONTENT_AUDIT.md` — Faits, contenus et médias vérifiés avec sources

## Identité visuelle

Palette issue du logo réel (`public/images/logo.jpg`) : vert forêt `#104020`, feuillage `#2e7a5f`, neutres chauds, encre sombre. Logo conservé sans déformation ni recoloration.

## Limites à la livraison

- Aucun épisode, invité, date ni lien vidéo n’est publié tant qu’il n’est pas confirmé par l’association.
- Aucun contact direct (e-mail, téléphone, adresse, réseau social) n’est publié tant qu’il n’est pas vérifié.
- Le rendu visuel n’a pas pu être contrôlé dans un navigateur de test aux largeurs 360/768/1440 (navigateur indisponible dans cet environnement) ; le code utilise des breakpoints Tailwind (`md:`, `lg:`) et un layout fluide.
- Le Studio Sanity nécessite une authentification (`sanity login`) pour être lié au projet cloud `p1picvka`.
