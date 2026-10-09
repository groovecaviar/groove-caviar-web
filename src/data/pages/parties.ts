// Page pilier « Soirées » (FR /soirees ↔ EN /en/parties).
// ⚠️ Les TEXTES ne se modifient pas ici : ils sont dans
//    src/data/textes/soirees.fr.yaml et src/data/textes/soirees.en.yaml
import rawFr from '~/data/textes/soirees.fr.yaml?raw';
import rawEn from '~/data/textes/soirees.en.yaml?raw';
import { loadTextes, verifier, type Locale } from '~/utils/textes';

export type PartyPhoto = 'entreprise' | 'privees' | 'bars' | 'clubs' | 'reveillon';

export interface PartyLink {
  readonly texte: string;
  readonly page: string;
}

export interface PartySection {
  readonly ancre: string;
  readonly photo: PartyPhoto;
  readonly piste: string;
  readonly accroche: string;
  readonly titre: string;
  readonly sous_titre?: string;
  readonly texte: string;
  readonly image_alt: string;
  readonly liens?: readonly PartyLink[];
  readonly action?: PartyLink;
}

export interface PartiesContent {
  readonly seo: { readonly titre: string; readonly description: string };
  readonly hero: { readonly surtitre: string; readonly titre_blanc: string; readonly titre_or: string };
  readonly intro: { readonly titre: string; readonly texte: string };
  readonly sommaire: { readonly surtitre: string; readonly titre: string; readonly pochette: string };
  readonly sections: readonly PartySection[];
  readonly citation: string;
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
    readonly bouton_devis: PartyLink;
    readonly bouton_contact: PartyLink;
  };
}

const PHOTOS: readonly PartyPhoto[] = ['entreprise', 'privees', 'bars', 'clubs', 'reveillon'];

function charger(raw: string, fichier: string): PartiesContent {
  const data = loadTextes<PartiesContent>(raw, fichier);
  verifier(
    data,
    [
      'seo.titre', 'seo.description',
      'hero.surtitre', 'hero.titre_blanc', 'hero.titre_or',
      'intro.titre', 'intro.texte',
      'sommaire.surtitre', 'sommaire.titre', 'sommaire.pochette',
      'citation',
      'faq.titre', 'faq.questions',
      'cta.titre_blanc', 'cta.titre_or', 'cta.texte',
      'cta.bouton_devis.texte', 'cta.bouton_devis.page',
      'cta.bouton_contact.texte', 'cta.bouton_contact.page',
    ],
    fichier
  );
  data.sections.forEach((_, i) =>
    verifier(data, ['ancre', 'photo', 'piste', 'accroche', 'titre', 'texte', 'image_alt'].map((k) => `sections.${i}.${k}`), fichier)
  );
  data.faq.questions.forEach((_, i) =>
    verifier(data, [`faq.questions.${i}.question`, `faq.questions.${i}.reponse`], fichier)
  );
  const photoInconnue = data.sections.find((s) => !PHOTOS.includes(s.photo));
  if (photoInconnue) {
    throw new Error(
      `Fichier de textes « ${fichier} » : photo « ${photoInconnue.photo} » inconnue (choix possibles : ${PHOTOS.join(', ')})`
    );
  }
  return data;
}

export const parties: Record<Locale, PartiesContent> = {
  fr: charger(rawFr, 'soirees.fr.yaml'),
  en: charger(rawEn, 'soirees.en.yaml'),
};
