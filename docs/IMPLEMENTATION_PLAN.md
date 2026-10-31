# Plan d'implémentation — Art Sous Le Manguier (MVP corrigé et enrichi)

## État du dépôt avant cette phase
Commit `38cfe57` (branche `main`). Première implémentation MVP Next.js 15 + TypeScript + Tailwind CSS. Quatre pages : `/`, `/emissions`, `/a-propos`, `/contact`.

## Corrections P0/P1 appliquées (audit Claude)

| Problème | Correction |
|---|---|
| Tailwind — pas de directives `@tailwind` | Ajout de `@tailwind base`, `@tailwind components`, `@tailwind utilities` dans `globals.css` |
| Unicode — séquences `\uXXXX` littérales dans le JSX | Remplacement par des caractères Unicode réels dans tous les fichiers source |
| SkipLink — ne fonctionne que sur `/`, pas de cible focusable | SkipLink présent sur toutes les pages, `tabIndex={-1}` sur `#main-content` |
| Menu mobile — pas de fermeture Échap, liens accessibles quand fermé | Fermeture avec Échap, attribut `hidden` quand fermé, `aria-expanded`/`aria-controls` |
| Focus piégé (non modal) | Supprimé ; focus revient au bouton quand le menu se ferme |
| Vérité éditoriale — claims non vérifiés sur Doual'art | Corrigé : Doual'art = lieu de naissance, pas de domiciliation |
| Notes internes exposées au public | Supprimées ("à confirmer", "statut documenté", etc.) |
| Contact — canaux inexistants | Aucun bouton vers des canaux non confirmés |
| SEO — title faible, pas de metadataBase, pas de favicon | `metadataBase` ajouté, favicon déclaré, titles améliorés, canonical URLs |
| Lint — `` au lieu de `<Image>` | Remplacé par `next/image` dans Header et Footer |

## Nouvelles fonctionnalités P2

### Architecture vidéo
- `src/data/videos.ts` — source de données centralisée, typée, vide par défaut
- `src/components/video/VideoPlayer.tsx` — résolution de plateforme, click-to-load
- `src/components/video/YouTubePlayer.tsx` — youtube-nocookie.com, pas d'autoplay, lien YouTube
- `src/components/video/VimeoPlayer.tsx` — player.vimeo.com, lien Vimeo
- `src/components/video/TikTokPlayer.tsx` — lecteur officiel TikTok Embed
- `src/components/video/ExternalVideoCard.tsx` — carte éditoriale sans iframe
- `src/components/video/VideoStoryCard.tsx` — carte individuelle avec couverture
- `src/components/video/VideoGrid.tsx` — grille asymétrique (premier élément plus grand)
- `src/components/video/VideoFeatured.tsx` — composition éditoriale large pour vidéo en vedette
- `docs/ADDING_VIDEOS.md` — guide d'ajout d'une nouvelle vidéo

### Pages
- `/` — Accueil : Hero, vidéo en vedette (si `featured`), mission, initiatives, contact
- `/emissions` — Émission / Archives : introduction, vidéo en vedette, grille d'archives, état vide
- `/emissions/[slug]` — Détail d'émission : lecteur, titre, description, artiste, crédits, source, vidéos associées
- `/a-propos` — À propos : contexte, démarche, mission, fondatrice, initiatives
- `/contact` — Contact : aucun canal inventé, expérience honnête

### Métadonnées SEO
- `metadataBase` centralisé via `SITE.url`
- `alternates.canonical` sur chaque page
- Favicon déclaré (`/favicon.png`)
- `sitemap.xml` et `robots.ts` utilisant `SITE.url`

## Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS v3
- Rendu statique, pas de backend, pas de base de données, pas de CMS
- Polices système uniquement (zéro requête externe de police)
- Aucune dépendance payante, aucune clé API

## Commandes
- `npm run dev` — serveur local (http://localhost:3000)
- `npm run build` — build de production (statique)
- `npm run start` — serveur de production (après build)
- `npx eslint src/` — lint

## Limites connues
- Aucune vidéo réelle n'est intégrée (le registre `VIDEOS` est vide en attendant confirmation par l'association).
- Aucun contact direct (e-mail, téléphone, adresse, réseau social) n'est publié.
- Le rendu visuel n'a pas pu être contrôlé dans un navigateur de test aux largeurs 360/768/1440 (navigateur indisponible dans cet environnement).
- Le build de production réussit ; le lint est propre.
