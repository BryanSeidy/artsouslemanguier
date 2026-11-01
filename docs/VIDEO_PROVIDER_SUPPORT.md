# Support des plateformes vidéo

## Plateformes intégrées

| Plateforme | Mode de lecture | Statut | Lien externe |
|---|---|---|---|
| YouTube | Lecteur officiel via `youtube-nocookie.com` | ✅ Intégré | ✅ « Voir sur YouTube » |
| Vimeo | Lecteur Vimeo (`player.vimeo.com`) | ✅ Intégré | ✅ « Voir sur Vimeo » |
| TikTok | TikTok Embed Player officiel | ✅ Intégré | ✅ « Voir sur TikTok » |
| Facebook | — | ⚠️ Non testé | ✅ Lien externe uniquement |
| Instagram | — | ⚠️ Non testé | ✅ Lien externe uniquement |
| Dailymotion | — | ⚠️ Non testé | ✅ Lien externe uniquement |
| Autre | Carte éditoriale sans iframe | ✅ Fallback | ✅ Lien vers la source |

## Règles d'intégration

1. **Aucune iframe arbitraire** — seule l'URL source est acceptée.
2. **Aucun HTML embed non vérifié** — pas de `dangerouslySetInnerHTML`.
3. **HTTPS uniquement** — les URLs non sécurisées sont rejetées.
4. **Click-to-load** — aucun lecteur iframe n'est chargé automatiquement à l'ouverture de la page.
5. **Fallback externe** — si une plateforme ne permet pas une intégration fiable, une carte éditoriale avec lien externe est affichée.

## Facebook et Instagram

Certaines intégrations Facebook et Instagram dépendent des autorisations de Meta, de la disponibilité des publications et des mécanismes d'authentification. Ces plateformes ne sont pas déclarées comme intégrations fonctionnelles avant test de leurs mécanismes officiels.

## Ajout d'une nouvelle plateforme

Pour ajouter une plateforme :

1. Ajoutez l'option dans le schéma Sanity (`videoEpisode.ts`, champ `platform`).
2. Créez un adaptateur de lecteur dans `src/components/video/`.
3. Mettez à jour le résolveur de plateforme dans `VideoPlayer.tsx`.
4. Testez l'intégration officielle avant de déclarer le support.
