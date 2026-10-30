# Plan d'implémentation — Art Sous Le Manguier (MVP)

## État du dépôt avant démarrage
Dépôt essentiellement vide : `README.md` (une ligne), `asm-site-cntx.md` (rapport de recherche/contexte), `asm.jpg` (logo couleur), `asm.png` (version monochrome). Aucune `package.json`, aucun framework, aucun site existant à préserver.

## Décisions techniques (pragmatiques, nul coût)
- Stack : **Next.js 15 (App Router)**, TypeScript, Tailwind CSS, rendu **statique** (`output: 'standalone'`), pas de backend, pas de base de données, pas de CMS.
- Hébergement : statique, déployable n'importe où (Vercel, Netlify, pages statiques). Aucun service payant, aucune clé API.
- Polices : **système uniquement** (Georgia pour les affichages, système sans-serif pour le corps) — aucune requête externe de police.
- Images : logo de l'association (`public/images/logo.jpg`, issu du dépôt) uniquement. Aucune image tierce, aucune illustration générée, aucune fausse œuvre.
- Données : source locale typée (`src/data/site.ts`, `src/data/episodes.ts`), facile à éditer, chaque fait sourcé.

## Pages livrées (MVP)
1. `/` — Accueil : identité (logo réel), titre éditorial, présentation fidèle, repères datés et sourcés, appel à découvrir l'émission, aperçu mission, aperçu initiatives documentées, contact.
2. `/emissions` — Émission / Archives : contexte, repères (54 épisodes en 2022, saison 6 début 5 août 2023), registre d'épisodes **intentionnellement vide** (aucun épisode inventé), état vide éditorial.
3. `/a-propos` — À propos : contexte, démarche, mission, fondatrice (Louise Abomba) avec attribution, citation attribuée, initiatives.
4. `/contact` — Contact : aucun canal inventé (pas d'e-mail/téléphone/adresse/lien social non vérifié), explication de l'absence de formulaire d'envoi.
- Métadonnées SEO par page, `sitemap.xml`, `robots.txt`.

## Ce qui est délibérément exclu (MVP)
Aucun blog, CMS, authentification, base de données, système de dons, newsletter, billetterie, tableau de bord, traduction complète, formulaire simulant un envoi, tracking, carrousel, animations longues.

## Livrables de documentation
- `docs/CONTENT_AUDIT.md` — faits, contenus et médias vérifiés avec sources.
- `README.md` — commande de lancement local et présentation.

## Commandes
- `npm run dev` — serveur local (http://localhost:3000)
- `npm run build` — build de production (statique)
- `npm run start` — serveur de production (après build)
- `npx eslint src/` — lint

## Limites connues à la livraison
- Le chiffre des épisodes (54 en 2022) est historique et daté ; aucune activité en cours n'est affirmée sans preuve récente.
- Aucun épisode, invité, date ni lien vidéo n'est publié tant qu'il n'est pas confirmé par l'association.
- Aucun contact direct (e-mail, téléphone, adresse, réseau social) n'est publié tant qu'il n'est pas vérifié.
- Le rendu visuel n'a pas pu être contrôlé dans un navigateur de test aux largeurs 360/768/1440 (navigateur indisponible dans cet environnement) ; le code utilise des breakpoints Tailwind (`md:`, `lg:`) et un layout fluide.
