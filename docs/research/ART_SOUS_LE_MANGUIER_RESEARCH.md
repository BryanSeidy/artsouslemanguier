Tes choix permettent maintenant de définir une architecture beaucoup plus cohérente pour le projet.

Je retiens les trois décisions suivantes :
Gestion éditoriale
Sanity CMS

Un véritable espace d'administration accessible depuis un navigateur, sans modifier le code ni passer par GitHub pour publier une émission.
Archives audiovisuelles
Multiplateforme

YouTube, Vimeo, Facebook, Instagram, TikTok et autres sources compatibles, avec un système de lecture adapté à chaque fournisseur.
Direction artistique
Logo uniquement

Le logo devient le socle de l'identité visuelle. Les vidéos et leurs couvertures apporteront progressivement la richesse photographique du site.

1. Architecture technique recommandée
Je recommande Sanity CMS avec son Studio hébergé séparément, et le site Next.js existant comme interface publique.
Équipe Art Sous Le Manguier

Administrateurs et éditeurs

Sanity Studio

Back-office indépendant · Authentification · Édition · Publication

API de contenu
Sanity Content Lake

Émissions · Artistes · Pages · Projets · Paramètres

Site institutionnel Next.js

Pages publiques · Archives · Lecteurs vidéo · SEO

YouTube

Vimeo

Autres médias

Pourquoi Sanity ?
Le forfait gratuit actuel comprend notamment jusqu'à 20 utilisateurs, deux rôles, deux jeux de données publics et un nombre illimité de types de contenus. C'est suffisant pour démarrer avec une petite équipe éditoriale.
Sanity

Il y a cependant deux précautions :

- Les données du jeu de données gratuit sont publiques. Il ne faut donc pas y stocker de notes confidentielles, mots de passe ou informations internes.
- Le forfait gratuit possède des quotas fermes. Une fois certaines limites atteintes, les accès API du site peuvent être bloqués jusqu'à leur réinitialisation. Il faudra donc utiliser le cache du site et surveiller les consommations.
  Sanity Docs
Pourquoi ne pas installer directement le CMS dans Next.js ?

La documentation Sanity actuelle demande Next.js 16 ou supérieur pour son intégration Studio dans l'App Router. Plutôt que de risquer une migration majeure du projet existant, je recommande de maintenir le CMS dans un dossier et un déploiement indépendants.
Sanity Docs+1

Cela permet de conserver la stack actuelle et de déployer le Studio séparément avec la commande prévue par Sanity.
2. Ce que le CMS devra permettre de gérer
Je veux que l'équipe puisse véritablement administrer le contenu du site, et pas uniquement ajouter des vidéos.
Module Fonctionnalités
Tableau de bord Accès rapide aux contenus et aux publications
Émissions Ajouter, modifier, dépublier et organiser des vidéos
Artistes Profils, biographies et relations avec les émissions
Pages institutionnelles Modifier les textes de présentation et de mission
Projets Gérer les initiatives validées
Actualités Publier des articles et annonces
Paramètres Réseaux sociaux et coordonnées officielles

Le module vidéo sera prioritaire.
Le parcours d'ajout d'une vidéo

1. Ajouter une émission

   L'éditeur colle simplement une URL YouTube, Vimeo, Facebook, Instagram ou TikTok.
2. Détection automatique

   Le système identifie le fournisseur, vérifie la structure du lien et propose les informations récupérables.
3. Compléter la fiche

   Titre, présentation, artiste, date, numéro d'épisode, saison, couverture et crédits.
4. Prévisualiser

   L'éditeur vérifie la vignette, le format et la disponibilité du lecteur.
5. Publier

   L'émission devient visible dans les archives et peut être mise à la une.

Résultat

Aucun développeur nécessaire pour ajouter un nouvel épisode.

1. Gestion intelligente des différentes plateformes vidéo
Je recommande de construire un système d'adaptateurs, plutôt qu'un composant qui tente de lire n'importe quelle URL.
Plateforme Mode de lecture
YouTube Lecteur officiel, mode youtube-nocookie
Vimeo Lecteur Vimeo, avec conservation du hash des vidéos non répertoriées
TikTok Embed Player officiel actuel
Facebook Intégration officielle lorsque possible
Instagram Intégration officielle lorsque possible
Dailymotion Lecteur officiel si compatible
Autre plateforme Couverture éditoriale et lien vers la source

YouTube propose le mode de confidentialité avancé via youtube-nocookie.com.
Aide YouTube
 Vimeo nécessite notamment de préserver les paramètres des liens de vidéos non répertoriées.
developer.vimeo.com
 TikTok recommande son nouvel Embed Player pour les nouvelles intégrations, son ancien format d'intégration étant annoncé comme devant être déprécié.
TikTok for Developers+1

Pour Facebook et Instagram, il ne faut pas promettre une lecture intégrée systématique : certaines intégrations dépendent des autorisations, de la disponibilité des publications et des mécanismes d'authentification de Meta.
GitHub+1

La règle de conception sera donc :

Une seule expérience visuelle cohérente, plusieurs moteurs de lecture adaptés aux plateformes.

Cela signifie que les visiteurs retrouvent la même qualité de présentation, même lorsque la lecture doit se faire sur le site d'origine.
4. Nouvelle direction artistique avec le logo uniquement
Je ne recommande surtout pas de remplir le site avec des images de banques d'images ou des photographies générées artificiellement représentant des artistes fictifs.

À la place :

01. Composition éditoriale

Le logo, les titres, les espaces et les lignes graphiques créent l'identité.

 1. Architecture culturelle

Pages aérées, compositions asymétriques et hiérarchie visuelle.

 1. Archives audiovisuelles

Les vraies vidéos constituent progressivement le cœur visuel du site.

 1. Motif graphique

Inspirations abstraites du manguier, sans illustration folklorique ou artificielle.

Les couvertures des épisodes seront générées à partir des informations éditoriales réelles lorsqu'aucune miniature exploitable n'existe : titre, artiste, numéro d'épisode et identité graphique. Elles devront être traitées comme des affiches éditoriales, et non comme des photographies documentaires.

Le rapport de recherche contient déjà des informations utiles sur l'histoire de l'émission, notamment son lancement en 2017 et le chiffre historique de 54 épisodes en 2022. Il contient aussi des hypothèses sur certains partenaires, lieux et projets. Ces dernières ne doivent pas devenir automatiquement des affirmations institutionnelles sur le site.
