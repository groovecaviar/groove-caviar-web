// Contenu de la page Musique (FR/EN). Les identifiants Spotify et les chemins Mixcloud
// sont communs aux deux langues ; seuls les textes changent.

export interface MusicMix {
  /** Chemin Mixcloud du mix (profil groovecaviar) */
  readonly slug: string;
  readonly title: string;
}

export interface MusicStep {
  /** Identifiant de la playlist Spotify */
  readonly id: string;
  readonly name: string;
}

export interface MusicGroup {
  readonly label: string;
  readonly steps: readonly MusicStep[];
  /** true = lignes 3 et 4 reliées en « S » (la seconde se lit de droite à gauche) */
  readonly serpentine?: boolean;
}

export interface MusicDecade {
  readonly id: string;
  /** Texte au centre du disque, ex. « 50s » */
  readonly short: string;
  readonly label: string;
}

interface MusicLink {
  readonly text: string;
  readonly href: string;
}

export interface MusicContent {
  readonly hero: { readonly eyebrow: string; readonly title: string };
  readonly intro: { readonly title: string; readonly paragraphs: readonly string[] };
  readonly mixes: {
    readonly accroche: string;
    readonly title: string;
    readonly hint: string;
    readonly hintNote: string;
    readonly playLabel: string;
    readonly playerTitle: string;
    readonly items: readonly MusicMix[];
    readonly outro: string;
    readonly profile: MusicLink;
  };
  readonly playlists: {
    readonly accroche: string;
    readonly title: string;
    /** Ancre de la section (lien direct : /musique#<anchor>) */
    readonly anchor: string;
    readonly intro: string;
    readonly listen: string;
    readonly groups: readonly MusicGroup[];
    readonly decadesTitle: string;
    readonly decadesSubtitle: string;
    readonly prevLabel: string;
    readonly nextLabel: string;
    readonly decades: readonly MusicDecade[];
    readonly outro: readonly string[];
  };
  readonly cta: {
    readonly titleWhite: string;
    readonly titleShimmer: string;
    readonly subtitle: string;
    readonly btnQuote: MusicLink;
    readonly btnContact: MusicLink;
  };
}

export const MIXCLOUD_USER = 'groovecaviar';
export const MIXCLOUD_PROFILE = 'https://www.mixcloud.com/groovecaviar';
export const spotifyUrl = (id: string) => `https://open.spotify.com/playlist/${id}`;

const mixSlugs = [
  'groove-caviar-cocktail-mix-bossa-nova-mariage-wedding',
  'cocktail-mix-musique-cubaine-mariage-wedding',
  'dinner-mix-urban-smooth-jazz-mariage-wedding',
  'party-mix-soul-x-funk-x-disco-mariage-wedding',
  'party-mix-funky-house-classics-vol1-mariage-wedding',
  'party-mix-dance-90s-mariage-wedding',
  'party-mix-dance-all-night-vol1',
  'party-mix-dance-all-night-vol2',
] as const;

const mixTitles = [
  'Cocktail Mix Bossa Nova',
  'Cocktail Mix Musique Cubaine',
  'Dinner Mix Urban Smooth Jazz',
  'Party Mix Soul X Funk X Disco',
  'Party Mix Funky House Classics Vol.1',
  'Party Mix Dance 90s',
  'Party Mix Dance All Night Vol.1',
  'Party Mix Dance All Night Vol.2',
] as const;

const mixItems: readonly MusicMix[] = mixSlugs.map((slug, i) => ({ slug, title: mixTitles[i] }));

const stepIds = [
  '1wmBwRArLn0fLz1oYLHn7A', '0ovZ0eVYCpMeD41d2UInll', '1roBfgQu6CRql29KoZwWVg',
  '2NhOMMPbNhzV1wWFBMWmUI', '0cbcwEudFVe8kC8oDMpGQJ', '15n9hotQHCfT73NAvvtwEa',
  '5zAlHGfP2aU3IK4yX1i7mR', '6uZiK0ekI0EGvsPyMkwZdt', '1D2VIHoOjUzn2DmjRII4WS',
  '5sZO05NnfqwHoduxOKXLFC', '01QXNfwZ3GlEScDuaNIonN', '3S5KGTMxWi0e6o36dJiGsf',
] as const;

const decadeIds = [
  '63m3wIF02x1yU83ElZ7dux', '7qtu0thxtYG37Zg0qPfkw8', '50sCBjpce1fS6OYcMvZlDr',
  '2aRsz6LAF4Qd1yJtlEPnQ8', '2GqH5DfcB65d9BU6qO9Olw', '5B8PE1tLFij4Kb4LWQqWjS',
  '1l9PGCGBVpwWYVPhkwcdqY', '7MTOik5WeNL927nzPnaCuE',
] as const;

const decadeYears = ['1950', '1960', '1970', '1980', '1990', '2000', '2010', '2020'] as const;

const steps = (names: readonly string[]) =>
  names.map((name, i) => ({ id: stepIds[i], name })) as readonly MusicStep[];

const stepsFr = [
  'Mise en place Église', "Entrée dans l'Église", "Sortie de l'Église",
  'Mise en place Cérémonie', 'Entrée de Cérémonie', 'Sortie de Cérémonie',
  'Lancer de bouquet', 'Entrée des mariés au dîner', 'Présentation du dessert',
  '1ère danse avec les parents', 'Première danse', 'Dernier morceau',
];
const stepsEn = [
  'Church set-up', 'Church entrance', 'Church exit',
  'Ceremony set-up', 'Ceremony entrance', 'Ceremony exit',
  'Bouquet toss', "Newlyweds' dinner entrance", 'Dessert presentation',
  'First dance with parents', 'First dance', 'Last song',
];

const buildGroups = (names: readonly string[], labels: readonly [string, string, string]): readonly MusicGroup[] => {
  const all = steps(names);
  return [
    { label: labels[0], steps: all.slice(0, 3) },
    { label: labels[1], steps: all.slice(3, 6) },
    { label: labels[2], steps: all.slice(6, 12), serpentine: true },
  ];
};

const buildDecades = (prefix: string): readonly MusicDecade[] =>
  decadeYears.map((y, i) => ({
    id: decadeIds[i],
    short: `${y.slice(2)}s`,
    label: `${prefix} ${y}s`,
  }));

export const music: Record<'fr' | 'en', MusicContent> = {
  fr: {
    hero: { eyebrow: "Let's groove", title: 'Musique' },
    intro: {
      title: 'Du généraliste au pointu<br class="gc-br-lg"> nous allons vous faire danser !',
      paragraphs: [
        "Un bon DJ, c'est quelqu'un qui possède une très large culture musicale et capable de passer le bon titre au bon moment. Avec une discothèque digitale de plus de 25 000 titres en haute qualité et plusieurs centaines de vinyles, nous saurons à coup sûr combler tous vos désirs.",
        'Écoutez ci-après quelques mixes pour agrémenter votre visite sur notre site et découvrez une sélection de playlists spécialement concoctées pour un mariage.',
      ],
    },
    mixes: {
      accroche: 'Écouter',
      title: 'Mixes',
      hint: 'Cliquez sur une cover pour lancer le lecteur Mixcloud !',
      hintNote: "(il ne se charge qu'à ce moment-là)",
      playLabel: 'Écouter :',
      playerTitle: 'Lecteur Mixcloud :',
      items: mixItems,
      outro:
        "Envie d'écouter d'autres mixes ? Faites votre choix directement sur notre profil Mixcloud !<br>Du cocktail à la soirée en passant par le dîner vous trouverez plein de styles différents…",
      profile: { text: 'Vers le profil Mixcloud', href: MIXCLOUD_PROFILE },
    },
    playlists: {
      accroche: 'Spotify',
      title: 'Playlists mariages',
      anchor: 'playlists-mariages',
      intro:
        "Voici quelques playlists de morceaux choisis pour l'animation d'un mariage, libre à vous de vous en servir.",
      listen: 'Écouter',
      groups: buildGroups(stepsFr, ["L'église", 'La cérémonie', 'Le reste de la journée']),
      decadesTitle: 'Les tubes par décennie',
      decadesSubtitle: 'pour la soirée dansante',
      prevLabel: 'Décennies précédentes',
      nextLabel: 'Décennies suivantes',
      decades: buildDecades('Tubes'),
      outro: [
        "La musique joue un rôle essentiel dans votre mariage, créant l'ambiance de chaque moment important. Que vous recherchiez un morceau intemporel, tendance ou totalement original, la chanson parfaite vous attend. Et grâce à nos playlists soigneusement sélectionnées, la trouver est désormais un jeu d'enfant.",
        'Si toutefois vous souhaitez une prestation professionnelle, plus adaptée et plus qualitative, nous sommes à votre disposition pour vous aider et contribuer à la réussite de ce jour spécial. Contactez-nous pour un événement unique et sans fausse note !',
      ],
    },
    cta: {
      titleWhite: 'Envie de danser ?',
      titleShimmer: "D'écouter de la bonne musique ?",
      subtitle: "Nous avons le DJ qu'il vous faut !<br>N'attendez plus, contactez-nous !",
      btnQuote: { text: 'Demander un devis', href: '/devis/mariages' },
      btnContact: { text: 'Nous contacter', href: '/contact' },
    },
  },

  en: {
    hero: { eyebrow: "Let's groove", title: 'Music' },
    intro: {
      title: "From mainstream to deep cuts,<br class=\"gc-br-lg\"> we'll get you dancing!",
      paragraphs: [
        "A good DJ is someone with a very broad musical culture, able to play the right track at the right moment. With a digital library of more than 25,000 high-quality tracks and several hundred vinyl records, we'll surely fulfil your every wish.",
        'Listen to a few mixes below to enrich your visit to our site, and discover a selection of playlists specially crafted for a wedding.',
      ],
    },
    mixes: {
      accroche: 'Listen',
      title: 'Mixes',
      hint: 'Click a cover to launch the Mixcloud player!',
      hintNote: '(it only loads at that point)',
      playLabel: 'Listen:',
      playerTitle: 'Mixcloud player:',
      items: mixItems,
      outro:
        "Want to hear more mixes? Browse our Mixcloud profile directly!<br>From cocktail to party, via dinner, you'll find plenty of different styles…",
      profile: { text: 'Go to our Mixcloud profile', href: MIXCLOUD_PROFILE },
    },
    playlists: {
      accroche: 'Spotify',
      title: 'Wedding playlists',
      anchor: 'wedding-playlists',
      intro: 'Here are a few playlists of hand-picked tracks to set the mood at a wedding — feel free to use them.',
      listen: 'Listen',
      groups: buildGroups(stepsEn, ['The church', 'The ceremony', 'The rest of the day']),
      decadesTitle: 'Hits by decade',
      decadesSubtitle: 'for the dance party',
      prevLabel: 'Previous decades',
      nextLabel: 'Next decades',
      decades: buildDecades('Hits'),
      outro: [
        "Music plays an essential role in your wedding, setting the mood for every key moment. Whether you're after a timeless, trending or totally original track, the perfect song is waiting for you. And thanks to our carefully selected playlists, finding it is now child's play.",
        "If you'd rather have a professional, more tailored and higher-quality service, we're at your disposal to help make this special day a success. Get in touch for a unique event without a single wrong note!",
      ],
    },
    cta: {
      titleWhite: 'Feel like dancing?',
      titleShimmer: 'Like listening to great music?',
      subtitle: "We have the DJ you need!<br>Don't wait any longer, get in touch!",
      btnQuote: { text: 'Request a quote', href: '/en/quote/wedding' },
      btnContact: { text: 'Contact us', href: '/en/contact' },
    },
  },
};
