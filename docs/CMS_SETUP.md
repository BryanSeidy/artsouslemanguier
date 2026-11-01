# Installation et configuration du CMS Sanity

## Structure du dépôt

Le dépôt est organisé en deux dossiers siblings :

```
C:\Dev\PROJECT\
  artsouslemanguier/          # Application Next.js (site public)
  studio-art-sou-le-manguier/ # Sanity Studio (back-office indépendant)
```

## 1. Créer le Studio Sanity

Le Studio Sanity a déjà été initialisé dans `studio-art-sou-le-manguier/` avec les schémas suivants :

- `videoEpisode` — Émissions et archives vidéo
- `artist` — Profils d’artistes
- `sitePage` — Pages institutionnelles
- `project` — Projets et initiatives
- `article` — Articles et actualités
- `siteSettings` — Paramètres globaux du site

## 2. Installer les dépendances du Studio

Depuis le dossier `studio-art-sou-le-manguier/` :

```bash
cd ../studio-art-sou-le-manguier
npm install
```

## 3. S'authentifier auprès de Sanity

Le Studio doit être lié à votre projet cloud Sanity (`p1picvka`). Cette étape nécessite les identifiants du propriétaire du compte Sanity :

```bash
sanity login
```

Ou avec un token :

```bash
echo "$SANITY_TOKEN" | sanity login --with-token
```

> **⚠️ Important :** Ne partagez jamais votre token Sanity. Cette étape doit être effectuée par le propriétaire du compte.

## 4. Configurer les variables d'environnement du frontend

Dans le dossier `artsouslemanguier/`, copiez `.env.example` vers `.env.local` :

```bash
cp .env.example .env.local
```

Puis renseignez les valeurs :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=p1picvka
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Sans ces variables, le site fonctionne avec les données locales (fallback dans `src/data/videos.ts`).

## 5. Lancer le Studio en local

Depuis `studio-art-sou-le-manguier/` :

```bash
npm run dev
```

Le Studio est accessible à `http://localhost:3333`.

## 6. Déployer le Studio

Pour déployer le Studio sur l'hébergement Sanity :

```bash
npx sanity@latest deploy
```

Cette commande est gratuite sur le forfait Sanity de base.

## 7. Vérifier l'intégration frontend

Depuis `artsouslemanguier/` :

```bash
npm run dev
npm run build
```

Le build doit réussir même sans variables Sanity (fallback vers les données locales).
