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

export const ORGANIZATION: Organization = {
  name: 'Art Sous Le Manguier',
  founder: 'Louise Abomba',
  founderRole: 'Curatrice et productrice culturelle camerounaise',
  established: 2017,
  place: 'Douala, Cameroun — Doual\u2019art (Bonanjo)',
  mission:
    'Accro\u00eetre la visibilit\u00e9 des artistes contemporains camerounais et ' +
    'contribuer \u00e0 la m\u00e9moire collective culturelle, par le documentaire vid\u00e9o ' +
    'et la transmission.',
  description:
    'L\u2019\u00e9mission \u00ab Art Sous Le Manguier \u00bb a d\u00e9but\u00e9 en 2017 sous un manguier ' +
    'dans l\u2019enceinte de Doual\u2019art \u00e0 Douala. Autour de Louise Abomba, plasticiens, ' +
    'peintres, sculpteurs et curateurs sont interview\u00e9s sur un plateau en plein air, ' +
    'dans des \u00e9missions d\u2019environ vingt minutes, pour \u00e9tablir des r\u00e9f\u00e9rents ' +
    'artistiques reconnus dans le temps.',
  formatNote:
    'Format flexible : un \u00e9pisode peut pr\u00e9senter un seul artiste ou plusieurs.',
  episodesCount: {
    value: 54,
    asOf: 2022,
    source: 'Vantaart, article sur l\u2019\u00e9mission de Louise Abomba (2022)',
  },
  season6FirstEpisode: {
    date: '5 ao\u00fbt 2023',
    source: 'Vantaart, saison 6 (premier \u00e9pisode mis en ligne le 5 ao\u00fbt 2023)',
  },
  initiatives: [
    {
      id: 'rhizomes-mag',
      title: 'Rhizomes Mag',
      summary:
        'S\u00e9rie de rencontres (vid\u00e9o ou podcasts) imagin\u00e9e par Art Sous Le Manguier ' +
        'pour d\u00e9couvrir des acteurs culturels \u00e9mergents.',
      status: 'documented',
      source: 'Rapport de contexte / mentions r\u00e9seaux sociaux',
    },
    {
      id: 'ateliers-residences',
      title: 'Ateliers et r\u00e9sidences',
      summary:
        'Ateliers d\u2019arts visuels lors de la biennale DOMAF \u00e0 Douala (cabinet de curiosit\u00e9s, 2024) ' +
        'et participation \u00e0 la r\u00e9sidence \u00ab Immersion \u00bb, festival Afropolitain Nomade \u00e0 Montr\u00e9al (f\u00e9vrier 2025).',
      status: 'documented',
      source: 'Rapport de contexte / biographie de Louise Abomba',
    },
  ],
  contactNote:
    'Les coordonn\u00e9es directes (courriel, t\u00e9l\u00e9phone, adresse) et les liens vers les ' +
    'comptes officiels sont en cours de v\u00e9rification aupr\u00e8s de l\u2019association et ' +
    'seront affich\u00e9s d\u00e8s validation.',
};

export const SITE = {
  title: 'Art Sous Le Manguier',
  shortTitle: 'ASM',
  description:
    'Site \u00e9ditorial de l\u2019association Art Sous Le Manguier (Douala, Cameroun) : ' +
    '\u00e9mission vid\u00e9o documentaire, archives audiovisuelles et m\u00e9moire des artistes contemporains.',
  lang: 'fr',
  url: 'https://artsouslemanguier.com',
} as const;
