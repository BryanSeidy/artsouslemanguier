/* Art Sous Le Manguier — verified editorial content.
   Every factual item carries a source reference. Anything unconfirmed is
   omitted from the public render or flagged internally in docs/CONTENT_AUDIT.md.
   No invented emails, phones, addresses, social links, team members, figures,
   or episodes are published. */

export interface Organization {
  name: string;
  founder: string;
  founderRole: string;
  established: number;
  place: string;
  mission: string;
  description: string;
  formatNote: string;
  episodesCount?: { value: number; asOf: number; source: string };
  season6FirstEpisode?: { date: string; source: string };
  initiatives: Initiative[];
  /* contact & socials: only verified items are published */
  contactNote: string;
}

export interface Initiative {
  id: string;
  title: string;
  summary: string;
  status: 'documented' | 'awaiting-validation';
  source: string;
}

export const ORGANIZATION = {
  name: 'Art Sous Le Manguier',
  founder: 'Louise Abomba',
  founderRole: 'Curatrice et productrice culturelle camerounaise',
  established: 2017,
  place: 'Douala, Cameroun',
  mission:
    'Accroître la visibilité des artistes contemporains camerounais et ' +
    'contribuer à la mémoire collective culturelle, par le documentaire vidéo ' +
    'et la transmission.',
  description:
    "L'émission « Art Sous Le Manguier » a débuté en 2017 sous un manguier " +
    'dans l’enceinte de Doual’art à Douala. Autour de Louise Abomba, plasticiens, ' +
    'peintres, sculpteurs et curateurs sont interviewés sur un plateau en plein air, ' +
    'dans des émissions d’environ vingt minutes, pour établir des référents ' +
    'artistiques reconnus dans le temps.',
  formatNote:
    'Format flexible : un épisode peut présenter un seul artiste ou plusieurs.',
  episodesCount: {
    value: 54,
    asOf: 2022,
    source: 'Vantaart, article sur l’émission de Louise Abomba (2022)',
  },
  season6FirstEpisode: {
    date: '5 août 2023',
    source: 'Vantaart, saison 6 (premier épisode mis en ligne le 5 août 2023)',
  },
  initiatives: [
    {
      id: 'rhizomes-mag',
      title: 'Rhizomes Mag',
      summary:
        'Série de rencontres (vidéo ou podcasts) imaginée par Art Sous Le Manguier ' +
        'pour découvrir des acteurs culturels émergents.',
      status: 'documented',
      source: 'Rapport de contexte / mentions réseaux sociaux',
    },
    {
      id: 'ateliers-residences',
      title: 'Ateliers et résidences',
      summary:
        'Ateliers d’arts visuels lors de la biennale DOMAF à Douala (cabinet de curiosités, 2024) ' +
        'et participation à la résidence « Immersion », festival Afropolitain Nomade à Montréal (février 2025).',
      status: 'documented',
      source: 'Rapport de contexte / biographie de Louise Abomba',
    },
  ],
  contactNote:
    'Les coordonnées directes (courriel, téléphone, adresse) et les liens vers les ' +
    'comptes officiels sont en cours de vérification auprès de l’association et ' +
    'seront affichés dès validation.',
};

export const SITE = {
  title: 'Art Sous Le Manguier',
  shortTitle: 'ASM',
  description:
    'Site éditorial de l’association Art Sous Le Manguier (Douala, Cameroun) : ' +
    'émission vidéo documentaire, archives audiovisuelles et mémoire des artistes contemporains.',
  lang: 'fr',
  url: 'https://artsouslemanguier.com',
} as const;
