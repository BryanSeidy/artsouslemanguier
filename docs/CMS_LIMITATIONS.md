# Limites du CMS Sanity (forfait gratuit)

## Données publiques

Le forfait gratuit Sanity ne propose que des **datasets publics**. Cela signifie que :

- Tout le contenu du CMS est accessible en lecture publique via l'API.
- **Ne stockez jamais** de mots de passe, tokens, notes confidentielles ou informations internes dans Sanity.
- Les coordonnées officielles (courriel, téléphone, adresse) ne sont affichées que si elles sont vérifiées par l'association.

## Rôles et permissions

Le forfait gratuit ne propose pas le rôle **Editor**. Il n’y a pas de gestion fine des permissions d’édition. Tous les utilisateurs authentifiés ont un accès similaire au Studio.

## Quotas API

Le forfait gratuit possède des **quotas fermes**. Une fois certaines limites atteintes, les accès API du site peuvent être bloqués jusqu’à leur réinitialisation.

Pour atténuer cette contrainte :

- Le frontend utilise le cache de Next.js pour limiter les appels répétés.
- Aucune récupération automatique de contenu n’est effectuée à chaque rendu.
- Les appels oEmbed éventuels sont centralisés, limités et soumis à validation humaine.

## Authentification

Le Studio Sanity nécessite une authentification (`sanity login`) pour être lié au projet cloud. Cette étape doit être effectuée par le propriétaire du compte Sanity.

## Déploiement du Studio

Le Studio est déployé indépendamment via `npx sanity@latest deploy`. Cette opération est gratuite sur le forfait de base.
