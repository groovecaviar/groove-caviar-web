// Page pilier « Événements » (FR /evenements ↔ EN /en/events).
// ⚠️ Les TEXTES ne se modifient pas ici : ils sont dans
//    src/data/textes/evenements.fr.yaml et src/data/textes/evenements.en.yaml
import rawFr from '~/data/textes/evenements.fr.yaml?raw';
import rawEn from '~/data/textes/evenements.en.yaml?raw';
import { loadTextes, verifier, type Locale } from '~/utils/textes';

export type EventPhoto = 'cocktail' | 'vernissage' | 'lancement' | 'defile' | 'sportif' | 'festival' | 'salon';

export interface EventLink {
  readonly texte: string;
  readonly page: string;
}

export interface EventSection {
  readonly ancre: string;
  readonly photo: EventPhoto;
  readonly accroche: string;
  readonly titre: string;
  readonly texte: string;
  readonly image_alt: string;
  readonly liens?: readonly EventLink[];
  readonly action?: EventLink;
}

export interface EvenementsContent {
  readonly seo: { readonly titre: string; readonly description: string };
  readonly hero: { readonly surtitre: string; readonly titre_blanc: string; readonly titre_or: string };
  readonly intro: { readonly titre: string; readonly texte: string };
  readonly univers: {
    readonly surtitre: string;
    readonly titre_blanc: string;
    readonly titre_or: string;
    readonly texte: string;
  };
  readonly sections: readonly EventSection[];
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
    readonly bouton_devis: EventLink;
    readonly bouton_contact: EventLink;
  };
}

const PHOTOS: readonly EventPhoto[] = ['cocktail', 'vernissage', 'lancement', 'defile', 'sportif', 'festival', 'salon'];

function charger(raw: string, fichier: string): EvenementsContent {
  const data = loadTextes<EvenementsContent>(raw, fichier);
  verifier(
    data,
    [
      'seo.titre', 'seo.description',
      'hero.surtitre', 'hero.titre_blanc', 'hero.titre_or',
      'intro.titre', 'intro.texte',
      'univers.surtitre', 'univers.titre_blanc', 'univers.titre_or', 'univers.texte',
      'sections', 'citation',
      'faq.titre', 'faq.questions',
      'cta.titre_blanc', 'cta.titre_or', 'cta.texte',
      'cta.bouton_devis.texte', 'cta.bouton_devis.page',
      'cta.bouton_contact.texte', 'cta.bouton_contact.page',
    ],
    fichier
  );
  data.sections.forEach((_, i) =>
    verifier(data, ['ancre', 'photo', 'accroche', 'titre', 'texte', 'image_alt'].map((k) => `sections.${i}.${k}`), fichier)
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

export const evenements: Record<Locale, EvenementsContent> = {
  fr: charger(rawFr, 'evenements.fr.yaml'),
  en: charger(rawEn, 'evenements.en.yaml'),
};
