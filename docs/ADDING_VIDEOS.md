# Ajouter une vidéo — Art Sous Le Manguier

Deux méthodes sont disponibles : via le CMS Sanity (recommandé) ou directement dans le code (fallback local).

## Méthode recommandée : via Sanity Studio

1. Ouvrez le Studio Sanity (`http://localhost:3333` en local, ou l'URL déployée sur Sanity Cloud).
2. Allez dans « Émissions » puis cliquez sur « Créer une émission ».
3. Collez l'URL de la vidéo (YouTube, Vimeo, TikTok, etc.) dans le champ **URL source**.
4. Le système détecte automatiquement la plateforme.
5. Complétez le titre, la description, l'artiste, la date, la couverture et les crédits.
6. Prévisualisez, puis cliquez sur « Publier ».

La vidéo apparaît automatiquement sur `/emissions` et, si « Mettre en vedette » est coché, sur l'accueil `/`.

## Méthode fallback : src/data/videos.ts

Si Sanity n'est pas configuré, les données locales dans `src/data/videos.ts` sont utilisées. Ce registre est vide par défaut : aucune vidéo n'est inventée.

Chaque entrée doit comporter :

| Champ | Type | Obligatoire | Description |
|---|---|---|---|
| `id` | string | Oui | Identifiant unique |
| `slug` | string | Oui | Slug d'URL |
| `title` | string | Oui | Titre complet |
| `platform` | `'youtube' \| 'vimeo' \| 'tiktok' \| 'other'` | Oui | Plateforme d'hébergement |
| `sourceUrl` | string | Oui | URL de la vidéo sur la plateforme d'origine |
| `providerVideoId` | string | Non | ID vidéo (déduit automatiquement si absent) |
| `artistName` | string | Non | Nom de l'artiste invité |
| `artistRole` | string | Non | Rôle de l'artiste |
| `episodeNumber` | number | Non | Numéro d'épisode, si vérifié |
| `publishedAt` | string | Non | Date de publication (ISO 8601) |
| `duration` | string | Non | Durée (ex: "23 min") |
| `featured` | boolean | Non | Mettre à `true` pour la vidéo en vedette |

## Règles importantes

- **Ne jamais inventer** de dates, durées, titres ou liens.
- **Ne pas télécharger** les vidéos depuis les plateformes.
- **Ne pas faire de scraping** massif.
- Les couvertures doivent être fournies par l'association ou réutilisables avec les droits nécessaires.
- **Aucune donnée fictive** n'est publiée sur le site.
