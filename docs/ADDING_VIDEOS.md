# Ajouter une vidéo — Art Sous Le Manguier

Ce document explique comment ajouter une nouvelle vidéo à la collection audiovisuelle du site.

## 1. Éditer src/data/videos.ts

Ajoutez une entrée dans le tableau `VIDEOS` avec les champs suivants :

| Champ | Type | Obligatoire | Description |
|---|---|---|---|
| `id` | string | Oui | Identifiant unique (ex: `episode-1`) |
| `slug` | string | Oui | Slug d'URL (ex: `episode-1-titre`) |
| `title` | string | Oui | Titre complet de la vidéo |
| `shortDescription` | string | Non | Description courte pour les cartes |
| `description` | string | Non | Description longue pour la page détail |
| `platform` | `'youtube' \| 'vimeo' \| 'tiktok' \| 'other'` | Oui | Plateforme d'hébergement |
| `sourceUrl` | string | Oui | URL de la vidéo sur la plateforme d'origine |
| `providerVideoId` | string | Non | ID vidéo YouTube/Vimeo/TikTok (déduit automatiquement si absent) |
| `thumbnail` | string | Non | URL de l'image de couverture |
| `artistName` | string | Non | Nom de l'artiste invité |
| `artistRole` | string | Non | Rôle de l'artiste (ex: peintre, sculpteur) |
| `episodeNumber` | number | Non | Numéro d'épisode, si vérifié |
| `publishedAt` | string | Non | Date de publication (ISO 8601) |
| `duration` | string | Non | Durée (ex: "23 min") |
| `category` | string | Non | Catégorie (ex: "peinture", "sculpture") |
| `tags` | string[] | Non | Mots-clés |
| `featured` | boolean | Non | Mettre à `true` pour la vidéo en vedette sur l'accueil |
| `orientation` | `'landscape' \| 'portrait'` | Non | Orientation de la vidéo |
| `credits` | string | Non | Crédits de réalisation |
| `externalSource` | string | Non | Source externe supplémentaire |

### Exemple YouTube

```ts
{
  id: 'episode-1',
  slug: 'episode-1-titre',
  title: 'Titre de l\'épisode',
  shortDescription: 'Description courte...',
  platform: 'youtube',
  sourceUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  providerVideoId: 'dQw4w9WgXcQ',
  artistName: 'Nom de l\'artiste',
  artistRole: 'Peintre',
  publishedAt: '2023-08-05',
  duration: '23 min',
  category: 'Peinture',
  featured: true,
  orientation: 'landscape',
}
```

### Exemple Vimeo

```ts
{
  id: 'episode-2',
  slug: 'episode-2-titre',
  title: 'Titre de l\'épisode 2',
  platform: 'vimeo',
  sourceUrl: 'https://vimeo.com/123456789',
  artistName: 'Nom de l\'artiste',
  artistRole: 'Sculpteur',
  orientation: 'portrait',
}
```

### Exemple TikTok

```ts
{
  id: 'episode-3',
  slug: 'episode-3-titre',
  title: 'Titre de l\'épisode 3',
  platform: 'tiktok',
  sourceUrl: 'https://www.tiktok.com/@utilisateur/video/123456789',
  orientation: 'portrait',
}
```

## 2. Règles importantes

- **Ne jamais inventer** de dates, durées, titres ou liens. Seuls des éléments confirmés par l'association.
- **Ne pas télécharger** les vidéos depuis les plateformes.
- **Ne pas faire de scraping** massif.
- **Ne pas stocker** de copies de vidéos sans autorisation.
- Les couvertures (`thumbnail`) doivent être fournies par l'association ou réutilisables avec les droits nécessaires.
- Une plateforme sans intégration fiable affiche une carte éditoriale avec un lien externe (`platform: 'other'`).
- **Ne jamais** utiliser `dangerouslySetInnerHTML` ni construire une iframe à partir d'une URL arbitraire.

## 3. Après l'ajout

1. Sauvegardez `src/data/videos.ts`
2. Lancez `npm run build` pour vérifier qu'il n'y a pas d'erreur de type
3. La vidéo apparaît automatiquement sur `/emissions` et, si `featured: true`, sur l'accueil `/`
4. Une page détail est créée automatiquement à `/emissions/[slug]`

## 4. Plateformes supportées

| Plateforme | Intégration | Click-to-load | Lien externe |
|---|---|---|---|
| YouTube | youtube-nocookie.com | ✅ | ✅ |
| Vimeo | player.vimeo.com | ✅ | ✅ |
| TikTok | Embed Player officiel | ✅ | ✅ |
| Autre | — | — | ✅ (carte éditoriale) |
