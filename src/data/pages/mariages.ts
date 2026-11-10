// Page pilier « Mariages » (FR /mariages ↔ EN /en/weddings).
// ⚠️ Les TEXTES ne se modifient pas ici : ils sont dans
//    src/data/textes/mariages.fr.yaml (et mariages.en.yaml pour l'anglais).
import rawFr from '~/data/textes/mariages.fr.yaml?raw';
import { loadTextes, verifier, type Locale } from '~/utils/textes';

export interface Lien {
  readonly texte: string;
  readonly page: string;
}
export interface Ecoute {
  readonly texte: string;
  readonly lien: string;
}
export interface Moment {
  readonly heure: string;
  readonly titre: string;
  readonly texte: string;
  readonly etiquettes?: readonly string[];
  readonly ecoute?: Ecoute;
  readonly citation?: { readonly texte: string; readonly auteur: string };
  readonly image_alt: string;
}
export type SourceAvis = 'google' | 'trustpilot';
export interface AvisUne {
  readonly initiales: string;
  readonly date: string;
  readonly source: SourceAvis;
  readonly portrait: string;
  readonly texte: string;
}
export interface AvisCarte {
  readonly initiales: string;
  readonly titre?: string;
  readonly date: string;
  readonly source: SourceAvis;
  readonly texte: string;
}
export interface Dj {
  readonly nom: string;
  readonly role: string;
  readonly photo: string;
  readonly langues: string;
  readonly texte: string;
}
export interface Carte {
  readonly surtitre: string;
  readonly titre: string;
  readonly texte: string;
  readonly page?: string;
}
export interface Lieu {
  readonly nom: string;
  readonly ville: string;
}
export interface TitreDouble {
  readonly surtitre: string;
  readonly titre_blanc: string;
  readonly titre_or: string;
}

export interface MariagesContent {
  readonly compteurs_avis: { readonly google_avis: string };
  readonly seo: { readonly titre: string; readonly description: string };
  readonly hero: { readonly surtitre: string; readonly titre_blanc: string; readonly titre_or: string };
  readonly chiffres: readonly { readonly valeur: string; readonly libelle: string }[];
  readonly intro: { readonly titre: string; readonly texte: string };
  readonly deroule: TitreDouble & { readonly texte: string; readonly note: string; readonly moments: readonly Moment[] };
  readonly video?: { readonly description: string; readonly credit: string; readonly credit_lien?: string };
  readonly avis: TitreDouble & {
    readonly google_libelle: string;
    readonly bouton: string;
    readonly a_la_une: readonly AvisUne[];
    readonly liste: readonly AvisCarte[];
  };
  readonly djs: TitreDouble & {
    readonly texte: string;
    readonly liste: readonly Dj[];
    readonly promesse_titre: string;
    readonly promesse_texte: string;
  };
  readonly methode: TitreDouble & { readonly etapes: readonly { readonly titre: string; readonly texte: string }[] };
  readonly avantages: TitreDouble & {
    readonly texte: string;
    readonly points: readonly { readonly titre: string; readonly detail: string }[];
  };
  readonly tarifs: TitreDouble & {
    readonly formule: {
      readonly nom: string;
      readonly a_partir_de: string;
      readonly prix: string;
      readonly saison: string;
      readonly remise: string;
      readonly inclus: readonly string[];
      readonly mention?: string;
      readonly bouton: string;
    };
    readonly options_titre: string;
    readonly options_texte?: string;
    readonly options: readonly { readonly titre: string; readonly liste: readonly string[] }[];
  };
  readonly localisation: TitreDouble & {
    readonly texte: string;
    readonly carte_legende: string;
    readonly lieux_titre: string;
    readonly avec_photo: readonly Lieu[];
    readonly autres: string;
    readonly zones_titre: string;
    readonly zones: readonly Carte[];
    readonly lien_texte: string;
  };
  readonly couples: TitreDouble & {
    readonly exergue: string;
    readonly texte: string;
    readonly cartes: readonly Carte[];
    readonly lien_texte: string;
    readonly badges_titre?: string;
    readonly badges?: readonly { readonly nom: string; readonly image: string; readonly lien?: string }[];
  };
  readonly faq: {
    readonly surtitre: string;
    readonly titre: string;
    readonly intro?: string;
    readonly questions: readonly { readonly question: string; readonly reponse: string }[];
  };
  readonly cta: {
    readonly titre_blanc: string;
    readonly titre_or: string;
    readonly texte: string;
    readonly bouton_devis: Lien;
    readonly bouton_contact: Lien;
  };
  readonly barre_mobile: { readonly bouton: string };
}

/** Un texte encore « à compléter » (marqué ⚠️ dans le fichier) n'est pas affiché. */
export const estRempli = (s?: string): s is string => !!s && s.trim() !== '' && !s.includes('⚠️');

const TITRE_DOUBLE = ['surtitre', 'titre_blanc', 'titre_or'];

function charger(raw: string, fichier: string): MariagesContent {
  const data = loadTextes<MariagesContent>(raw, fichier);
  const sections = ['deroule', 'avis', 'djs', 'methode', 'avantages', 'tarifs', 'localisation', 'couples'];
  verifier(
    data,
    [
      'compteurs_avis.google_avis',
      'seo.titre', 'seo.description',
      'hero.surtitre', 'hero.titre_blanc', 'hero.titre_or',
      'chiffres', 'intro.titre', 'intro.texte',
      ...sections.flatMap((s) => TITRE_DOUBLE.map((k) => `${s}.${k}`)),
      'deroule.moments', 'avis.a_la_une', 'avis.liste', 'djs.liste', 'methode.etapes', 'avantages.points',
      'tarifs.formule.prix', 'tarifs.formule.inclus', 'tarifs.options_titre', 'tarifs.options',
      'localisation.avec_photo', 'localisation.zones', 'couples.cartes', 'couples.exergue',
      'faq.titre', 'faq.questions',
      'cta.titre_blanc', 'cta.titre_or', 'cta.texte',
      'cta.bouton_devis.texte', 'cta.bouton_devis.page',
      'cta.bouton_contact.texte', 'cta.bouton_contact.page',
      'barre_mobile.bouton',
    ],
    fichier
  );
  data.deroule.moments.forEach((_, i) =>
    verifier(data, ['heure', 'titre', 'texte', 'image_alt'].map((k) => `deroule.moments.${i}.${k}`), fichier)
  );
  data.faq.questions.forEach((_, i) =>
    verifier(data, [`faq.questions.${i}.question`, `faq.questions.${i}.reponse`], fichier)
  );
  data.localisation.avec_photo.forEach((_, i) =>
    verifier(data, [`localisation.avec_photo.${i}.nom`, `localisation.avec_photo.${i}.ville`], fichier)
  );
  return data;
}

export const mariages: Partial<Record<Locale, MariagesContent>> = {
  fr: charger(rawFr, 'mariages.fr.yaml'),
};
