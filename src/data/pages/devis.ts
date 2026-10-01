// Contenu bilingue des pages « Demande de devis » (mariage + autres événements).
// Même convention que contact.ts / services.ts : un objet { fr, en }.
// Le formulaire est décrit ici (étapes → champs) ; le rendu est fait par
// QuoteFormSections.astro. Les valeurs `value` des cases à cocher servent au
// calcul automatique du devis côté Google Apps Script — NE PAS les renommer
// sans mettre à jour ~/Groove Caviar/Claude/devis-automation/Code.gs.

import { WEDDING_VENUES } from '~/config/quote';

export type Opt = string | { readonly value: string; readonly label: string };

export interface ShowIf {
  readonly field: string;
  readonly equals?: string;
  readonly notEquals?: string;
  readonly includes?: string;
}

export interface QuoteField {
  readonly type: 'heading' | 'text' | 'email' | 'tel' | 'date' | 'number' | 'textarea' | 'select' | 'checks' | 'timerange';
  readonly name?: string;
  readonly label: string;
  readonly required?: boolean;
  readonly optional?: boolean; // affiche « (optionnel) »
  readonly half?: boolean; // moitié de largeur (desktop)
  readonly autocomplete?: string;
  readonly placeholder?: string;
  readonly hint?: string;
  readonly options?: readonly Opt[];
  readonly showIf?: ShowIf;
}

export interface QuoteStep {
  readonly title: string;
  readonly intro?: string;
  readonly fields: readonly QuoteField[];
}

export interface QuoteForm {
  readonly formKey: 'wedding' | 'booking';
  readonly meta: { readonly title: string; readonly description: string };
  readonly hero: { readonly eyebrow: string; readonly title: string };
  readonly intro: { readonly title: string; readonly paragraph: string; readonly phoneLead: string };
  readonly steps: readonly QuoteStep[];
}

export interface QuoteUi {
  readonly stepOf: string; // « Étape {n} sur {total} »
  readonly next: string;
  readonly back: string;
  readonly submit: string;
  readonly sending: string;
  readonly optional: string;
  readonly timeFrom: string;
  readonly timeTo: string;
  readonly timePlaceholder: string;
  readonly checksError: string;
  readonly consentBefore: string;
  readonly consentLinkText: string;
  readonly consentAfter: string;
  readonly consentHref: string;
  readonly successTitle: string;
  readonly successText: string;
  readonly successCta: { readonly text: string; readonly href: string };
  readonly errorMessage: string;
}

export interface QuoteContent {
  readonly ui: QuoteUi;
  readonly wedding: QuoteForm;
  readonly booking: QuoteForm;
}

const NB = ' '; // espace insécable (typographie française : « ? », « : »)

export const quote: Record<'fr' | 'en', QuoteContent> = {
  // ═══════════════════════════════════════════════════════════════════ FR ═══
  fr: {
    ui: {
      stepOf: 'Étape {n} sur {total}',
      next: 'Continuer',
      back: 'Retour',
      submit: 'Envoyer ma demande',
      sending: 'Envoi en cours…',
      optional: '(optionnel)',
      timeFrom: 'De',
      timeTo: 'À',
      timePlaceholder: '--:--',
      checksError: 'Merci de sélectionner au moins une option.',
      consentBefore: 'J’accepte que mes informations soient utilisées pour traiter ma demande et établir un devis, conformément à la ',
      consentLinkText: 'politique de confidentialité',
      consentAfter: '.',
      consentHref: '/politique-de-confidentialite',
      successTitle: 'Merci, votre demande est bien envoyée',
      successText:
        'Nous étudions votre projet et revenons vers vous sous 72h ouvrées. Vous recevrez ensuite votre devis personnalisé par e-mail.',
      successCta: { text: 'Retour à l’accueil', href: '/' },
      errorMessage:
        'Un problème est survenu lors de l’envoi. Merci de réessayer, ou de nous écrire directement à contact@groovecaviar.com.',
    },

    wedding: {
      formKey: 'wedding',
      meta: {
        title: 'Devis DJ mariage — Biarritz, Pays Basque & Landes | Groove Caviar',
        description:
          'Demandez votre devis gratuit pour un DJ de mariage à Biarritz, dans le Pays Basque, les Landes et partout en France. Réponse sous 72h ouvrées.',
      },
      hero: { eyebrow: 'Mariage', title: 'Demande de devis' },
      intro: {
        title: 'Parlez-nous de votre grand jour',
        paragraph:
          'Quelques minutes suffisent. Nous étudions votre demande et revenons vers vous sous 72h ouvrées avec un devis personnalisé — gratuit et sans engagement.',
        phoneLead: 'Vous préférez en parler de vive voix' + NB + '? Appelez-nous au',
      },
      steps: [
        {
          title: 'Vous',
          intro: 'Les informations des mariés, pour établir votre devis.',
          fields: [
            { type: 'heading', label: 'Marié(e) 1' },
            { type: 'text', name: 'marie1_prenom', label: 'Prénom', required: true, half: true, autocomplete: 'given-name' },
            { type: 'text', name: 'marie1_nom', label: 'Nom', required: true, half: true, autocomplete: 'family-name' },
            { type: 'heading', label: 'Marié(e) 2' },
            { type: 'text', name: 'marie2_prenom', label: 'Prénom', required: true, half: true },
            { type: 'text', name: 'marie2_nom', label: 'Nom', required: true, half: true },
            { type: 'heading', label: 'Pour vous joindre' },
            {
              type: 'tel',
              name: 'telephone',
              label: 'Téléphone',
              required: true,
              half: true,
              autocomplete: 'tel',
              hint: 'Pour vous contacter en cas de question.',
            },
            { type: 'email', name: 'email', label: 'E-mail', required: true, half: true, autocomplete: 'email' },
            {
              type: 'text',
              name: 'adresse_postale',
              label: 'Adresse postale des mariés',
              optional: true,
              autocomplete: 'street-address',
              hint: 'Elle figurera sur le devis.',
            },
          ],
        },
        {
          title: 'Le mariage',
          intro: 'Les grandes lignes de votre journée.',
          fields: [
            { type: 'date', name: 'date_evenement', label: 'Date du mariage', required: true, half: true },
            {
              type: 'select',
              name: 'invites',
              label: 'Nombre d’invités',
              required: true,
              half: true,
              placeholder: 'Choisir',
              options: ['Moins de 50', '50 à 100', '101 à 150', '151 à 200', '201 à 250', '251 à 300', 'Plus de 300'],
            },
            {
              type: 'select',
              name: 'lieu',
              label: 'Lieu de réception',
              required: true,
              placeholder: 'Choisir votre lieu',
              options: [...WEDDING_VENUES, { value: 'autre', label: 'Autre lieu (à préciser)' }],
            },
            {
              type: 'text',
              name: 'lieu_autre_nom',
              label: 'Nom du lieu',
              required: true,
              half: true,
              showIf: { field: 'lieu', equals: 'autre' },
            },
            {
              type: 'text',
              name: 'lieu_autre_adresse',
              label: 'Adresse du lieu',
              required: true,
              half: true,
              autocomplete: 'off',
              showIf: { field: 'lieu', equals: 'autre' },
            },
            {
              type: 'timerange',
              name: 'horaires',
              label: 'Horaires de la prestation DJ',
              required: true,
              hint: 'Début et fin de la musique, hors installation et démontage.',
            },
            {
              type: 'checks',
              name: 'deroule',
              label: 'Quels moments souhaitez-vous animer' + NB + '?',
              optional: true,
              options: [
                { value: 'ceremonie', label: 'Cérémonie laïque' },
                { value: 'cocktail', label: 'Vin d’honneur / cocktail' },
                { value: 'diner', label: 'Dîner' },
                { value: 'soiree', label: 'Soirée dansante' },
              ],
            },
          ],
        },
        {
          title: 'Vos besoins',
          intro: 'Sélectionnez ce dont vous avez besoin : votre devis en sera pré-établi.',
          fields: [
            {
              type: 'checks',
              name: 'besoins',
              label: 'Quels sont vos besoins' + NB + '?',
              required: true,
              options: [
                { value: 'dj', label: 'DJ' },
                { value: 'sono_principale', label: 'Sonorisation (intérieur / piste de danse)' },
                { value: 'sono_secondaire', label: 'Sonorisation (extérieur / cocktail)' },
                { value: 'eclairage_piste', label: 'Éclairage piste de danse' },
                { value: 'eclairage_ambiance', label: 'Éclairage d’ambiance' },
                { value: 'micro', label: 'Microphone' },
                { value: 'video', label: 'Système de vidéoprojection' },
                { value: 'autre', label: 'Autre besoin (à préciser dans le message)' },
              ],
            },
            {
              type: 'select',
              name: 'micros_nombre',
              label: 'Nombre de microphones',
              optional: true,
              placeholder: 'Choisir',
              showIf: { field: 'besoins', includes: 'micro' },
              options: [
                { value: '1', label: '1 microphone' },
                { value: '2', label: '2 microphones' },
                { value: '3', label: '3 microphones ou plus' },
              ],
            },
            {
              type: 'checks',
              name: 'prestataires',
              label: 'Auriez-vous également besoin d’autres prestataires' + NB + '?',
              optional: true,
              hint: 'Simplement pour mieux comprendre votre projet.',
              options: [
                'Musique live',
                'Barman + bar mobile',
                'Photographe',
                'Vidéaste',
                'Traiteur',
                'Wedding planner',
                'Décoration',
                'Identité visuelle',
                'Vidéo drone',
                'Autre',
              ],
            },
          ],
        },
        {
          title: 'Pour finir',
          intro: 'Quelques informations pour affiner notre proposition.',
          fields: [
            {
              type: 'number',
              name: 'budget',
              label: 'Avez-vous une idée de budget' + NB + '?',
              optional: true,
              half: true,
              placeholder: 'En euros',
              hint: 'Pour la prestation DJ et le matériel.',
            },
            {
              type: 'select',
              name: 'connu',
              label: 'Comment nous avez-vous connus' + NB + '?',
              optional: true,
              half: true,
              placeholder: 'Choisir',
              options: [
                { value: 'lieu', label: 'Référencement du lieu' },
                { value: 'google', label: 'Google' },
                { value: 'bouche_a_oreille', label: 'Bouche à oreille' },
                { value: 'ia', label: 'Suggestion IA' },
                { value: 'site_mariage', label: 'Site spécialisé mariages' },
                { value: 'deja_assiste', label: 'J’ai déjà assisté à une de vos prestations' },
                { value: 'autre', label: 'Autre' },
              ],
            },
            {
              type: 'textarea',
              name: 'message',
              label: 'Un message pour nous' + NB + '?',
              optional: true,
              placeholder: 'Ambiance recherchée, styles musicaux, moments clés, questions…',
            },
          ],
        },
      ],
    },

    booking: {
      formKey: 'booking',
      meta: {
        title: 'Devis DJ soirée & événement — Biarritz, Pays Basque | Groove Caviar',
        description:
          'Booker un DJ pour votre soirée privée, événement d’entreprise, défilé ou séminaire à Biarritz, dans le Pays Basque et partout en France. Devis gratuit sous 72h ouvrées.',
      },
      hero: { eyebrow: 'Soirées & événements', title: 'Demande de devis' },
      intro: {
        title: 'Parlez-nous de votre événement',
        paragraph:
          'Soirée privée, événement d’entreprise, défilé, séminaire, club… Quelques minutes suffisent. Nous revenons vers vous sous 72h ouvrées avec un devis personnalisé — gratuit et sans engagement.',
        phoneLead: 'Vous préférez en parler de vive voix' + NB + '? Appelez-nous au',
      },
      steps: [
        {
          title: 'Vous',
          intro: 'Comment vous joindre, et qui êtes-vous.',
          fields: [
            { type: 'text', name: 'prenom', label: 'Prénom', required: true, half: true, autocomplete: 'given-name' },
            { type: 'text', name: 'nom', label: 'Nom', required: true, half: true, autocomplete: 'family-name' },
            { type: 'tel', name: 'telephone', label: 'Téléphone', required: true, half: true, autocomplete: 'tel' },
            { type: 'email', name: 'email', label: 'E-mail', required: true, half: true, autocomplete: 'email' },
            {
              type: 'select',
              name: 'activite',
              label: 'Vous êtes',
              required: true,
              placeholder: 'Choisir',
              options: [
                { value: 'particulier', label: 'Particulier' },
                { value: 'club', label: 'Club' },
                { value: 'bar_restaurant', label: 'Bar / Restaurant' },
                { value: 'boutique', label: 'Boutique' },
                { value: 'promoteur_rp', label: 'Promoteur / RP' },
                { value: 'agence', label: 'Agence événementielle / communication' },
                { value: 'institution', label: 'Institution' },
                { value: 'independant', label: 'Indépendant' },
                { value: 'media', label: 'Média (presse / radio / TV)' },
                { value: 'musique', label: 'Musique (major / label)' },
                { value: 'autre', label: 'Autre' },
              ],
            },
            {
              type: 'text',
              name: 'societe',
              label: 'Société',
              optional: true,
              half: true,
              autocomplete: 'organization',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
            {
              type: 'text',
              name: 'site_web',
              label: 'Site web',
              optional: true,
              half: true,
              autocomplete: 'url',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
            {
              type: 'text',
              name: 'adresse_societe',
              label: 'Adresse de la société',
              optional: true,
              autocomplete: 'street-address',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
          ],
        },
        {
          title: 'L’événement',
          intro: 'Le quand, le où et le combien.',
          fields: [
            {
              type: 'select',
              name: 'type_evenement',
              label: 'Type d’événement',
              required: true,
              placeholder: 'Choisir',
              options: [
                { value: 'anniversaire', label: 'Anniversaire' },
                { value: 'cocktail', label: 'Cocktail' },
                { value: 'fete', label: 'Fête' },
                { value: 'soiree_privee', label: 'Soirée privée' },
                { value: 'soiree_entreprise', label: 'Soirée d’entreprise' },
                { value: 'soiree_club', label: 'Soirée en club / bar' },
                { value: 'seminaire', label: 'Séminaire' },
                { value: 'defile', label: 'Défilé' },
                { value: 'inauguration', label: 'Inauguration' },
                { value: 'vernissage', label: 'Vernissage' },
                { value: 'autre', label: 'Autre' },
              ],
            },
            {
              type: 'text',
              name: 'type_autre',
              label: 'Précisez le type d’événement',
              required: true,
              showIf: { field: 'type_evenement', equals: 'autre' },
            },
            { type: 'text', name: 'nom_evenement', label: 'Nom de l’événement / de la soirée', optional: true },
            { type: 'date', name: 'date_evenement', label: 'Date de l’événement', required: true, half: true },
            {
              type: 'select',
              name: 'participation',
              label: 'Participation attendue',
              optional: true,
              half: true,
              placeholder: 'Choisir',
              options: ['Moins de 50', '50 à 100', '100 à 150', '150 à 200', '200 à 300', 'Plus de 300'],
            },
            { type: 'text', name: 'lieu_nom', label: 'Nom du lieu', optional: true, half: true },
            { type: 'text', name: 'capacite', label: 'Capacité du lieu', optional: true, half: true },
            { type: 'text', name: 'lieu_adresse', label: 'Adresse du lieu', required: true, autocomplete: 'off' },
            {
              type: 'timerange',
              name: 'horaires',
              label: 'Horaires de la prestation DJ',
              required: true,
              hint: 'Début et fin de la musique, hors installation et démontage.',
            },
          ],
        },
        {
          title: 'Votre demande',
          intro: 'La musique et le matériel : votre devis en sera pré-établi.',
          fields: [
            {
              type: 'checks',
              name: 'musique',
              label: 'Musique souhaitée',
              required: true,
              options: [
                'Généraliste',
                'House',
                'Techno',
                'Tech house / Électro',
                'Hip-hop / RnB',
                'Funk / Soul',
                'Jazz / Swing',
                'Pop / Rock',
                'Dance',
                'Latin / World',
                'Autre',
              ],
            },
            {
              type: 'checks',
              name: 'besoins',
              label: 'Matériel requis',
              optional: true,
              hint: 'Le DJ et son matériel sont toujours inclus.',
              options: [
                { value: 'sono_principale', label: 'Système son (principal)' },
                { value: 'sono_secondaire', label: 'Système son (secondaire)' },
                { value: 'eclairage_piste', label: 'Éclairage dancefloor' },
                { value: 'eclairage_ambiance', label: 'Éclairage d’ambiance' },
                { value: 'micro', label: 'Microphone' },
                { value: 'video', label: 'Vidéoprojecteur + écran' },
                { value: 'autre', label: 'Autre (à préciser dans le message)' },
              ],
            },
            {
              type: 'select',
              name: 'micros_nombre',
              label: 'Nombre de microphones',
              optional: true,
              placeholder: 'Choisir',
              showIf: { field: 'besoins', includes: 'micro' },
              options: [
                { value: '1', label: '1 microphone' },
                { value: '2', label: '2 microphones' },
                { value: '3', label: '3 microphones ou plus' },
              ],
            },
          ],
        },
        {
          title: 'Pour finir',
          intro: 'Quelques informations pour affiner notre proposition.',
          fields: [
            {
              type: 'number',
              name: 'budget',
              label: 'Budget de la prestation artiste',
              optional: true,
              half: true,
              placeholder: 'En euros',
              hint: 'Hors voyage, hébergement et restauration.',
            },
            {
              type: 'select',
              name: 'connu',
              label: 'Comment nous avez-vous connus' + NB + '?',
              optional: true,
              half: true,
              placeholder: 'Choisir',
              options: [
                { value: 'lieu', label: 'Référencement du lieu' },
                { value: 'google', label: 'Google' },
                { value: 'bouche_a_oreille', label: 'Bouche à oreille' },
                { value: 'ia', label: 'Suggestion IA' },
                { value: 'deja_assiste', label: 'J’ai déjà assisté à une de vos prestations' },
                { value: 'autre', label: 'Autre' },
              ],
            },
            {
              type: 'textarea',
              name: 'message',
              label: 'Autres informations',
              optional: true,
              placeholder: 'Ambiance recherchée, déroulé de la soirée, contraintes techniques, questions…',
            },
          ],
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════════ EN ═══
  en: {
    ui: {
      stepOf: 'Step {n} of {total}',
      next: 'Continue',
      back: 'Back',
      submit: 'Send my request',
      sending: 'Sending…',
      optional: '(optional)',
      timeFrom: 'From',
      timeTo: 'To',
      timePlaceholder: '--:--',
      checksError: 'Please select at least one option.',
      consentBefore: 'I agree that my information will be used to process my request and prepare a quote, in accordance with the ',
      consentLinkText: 'privacy policy',
      consentAfter: '.',
      consentHref: '/en/privacy-policy',
      successTitle: 'Thank you — your request has been sent',
      successText:
        'We are reviewing your project and will get back to you within 72 business hours. You will then receive your personalised quote by email.',
      successCta: { text: 'Back to home', href: '/en' },
      errorMessage:
        'Something went wrong while sending your request. Please try again, or write to us directly at contact@groovecaviar.com.',
    },

    wedding: {
      formKey: 'wedding',
      meta: {
        title: 'Wedding DJ Quote — Biarritz, Basque Country & Landes | Groove Caviar',
        description:
          'Request your free quote for a wedding DJ in Biarritz, the Basque Country, the Landes and across France. We reply within 72 business hours.',
      },
      hero: { eyebrow: 'Wedding', title: 'Request a quote' },
      intro: {
        title: 'Tell us about your big day',
        paragraph:
          'It only takes a few minutes. We review your request and get back to you within 72 business hours with a personalised quote — free and with no commitment.',
        phoneLead: 'Prefer to talk it through? Call us on',
      },
      steps: [
        {
          title: 'You',
          intro: 'The couple’s details, so we can prepare your quote.',
          fields: [
            { type: 'heading', label: 'Partner 1' },
            { type: 'text', name: 'marie1_prenom', label: 'First name', required: true, half: true, autocomplete: 'given-name' },
            { type: 'text', name: 'marie1_nom', label: 'Last name', required: true, half: true, autocomplete: 'family-name' },
            { type: 'heading', label: 'Partner 2' },
            { type: 'text', name: 'marie2_prenom', label: 'First name', required: true, half: true },
            { type: 'text', name: 'marie2_nom', label: 'Last name', required: true, half: true },
            { type: 'heading', label: 'How to reach you' },
            {
              type: 'tel',
              name: 'telephone',
              label: 'Phone',
              required: true,
              half: true,
              autocomplete: 'tel',
              hint: 'In case we have questions.',
            },
            { type: 'email', name: 'email', label: 'Email', required: true, half: true, autocomplete: 'email' },
            {
              type: 'text',
              name: 'adresse_postale',
              label: 'Couple’s postal address',
              optional: true,
              autocomplete: 'street-address',
              hint: 'It will appear on the quote.',
            },
          ],
        },
        {
          title: 'The wedding',
          intro: 'The big picture of your day.',
          fields: [
            { type: 'date', name: 'date_evenement', label: 'Wedding date', required: true, half: true },
            {
              type: 'select',
              name: 'invites',
              label: 'Number of guests',
              required: true,
              half: true,
              placeholder: 'Select',
              options: ['Under 50', '50 to 100', '101 to 150', '151 to 200', '201 to 250', '251 to 300', 'Over 300'],
            },
            {
              type: 'select',
              name: 'lieu',
              label: 'Reception venue',
              required: true,
              placeholder: 'Select your venue',
              options: [...WEDDING_VENUES, { value: 'autre', label: 'Other venue (please specify)' }],
            },
            {
              type: 'text',
              name: 'lieu_autre_nom',
              label: 'Venue name',
              required: true,
              half: true,
              showIf: { field: 'lieu', equals: 'autre' },
            },
            {
              type: 'text',
              name: 'lieu_autre_adresse',
              label: 'Venue address',
              required: true,
              half: true,
              autocomplete: 'off',
              showIf: { field: 'lieu', equals: 'autre' },
            },
            {
              type: 'timerange',
              name: 'horaires',
              label: 'DJ performance hours',
              required: true,
              hint: 'When the music starts and ends, excluding set-up and take-down.',
            },
            {
              type: 'checks',
              name: 'deroule',
              label: 'Which moments would you like us to cover?',
              optional: true,
              options: [
                { value: 'ceremonie', label: 'Ceremony' },
                { value: 'cocktail', label: 'Cocktail reception' },
                { value: 'diner', label: 'Dinner' },
                { value: 'soiree', label: 'Dance party' },
              ],
            },
          ],
        },
        {
          title: 'Your needs',
          intro: 'Select what you need: your quote will be pre-filled accordingly.',
          fields: [
            {
              type: 'checks',
              name: 'besoins',
              label: 'What do you need?',
              required: true,
              options: [
                { value: 'dj', label: 'DJ' },
                { value: 'sono_principale', label: 'Sound system (indoor / dance floor)' },
                { value: 'sono_secondaire', label: 'Sound system (outdoor / cocktail)' },
                { value: 'eclairage_piste', label: 'Dance floor lighting' },
                { value: 'eclairage_ambiance', label: 'Ambient lighting' },
                { value: 'micro', label: 'Microphone' },
                { value: 'video', label: 'Video projection system' },
                { value: 'autre', label: 'Something else (tell us in the message)' },
              ],
            },
            {
              type: 'select',
              name: 'micros_nombre',
              label: 'Number of microphones',
              optional: true,
              placeholder: 'Select',
              showIf: { field: 'besoins', includes: 'micro' },
              options: [
                { value: '1', label: '1 microphone' },
                { value: '2', label: '2 microphones' },
                { value: '3', label: '3 microphones or more' },
              ],
            },
            {
              type: 'checks',
              name: 'prestataires',
              label: 'Do you also need other suppliers?',
              optional: true,
              hint: 'Just to help us understand your project.',
              options: [
                'Live music',
                'Bartender + mobile bar',
                'Photographer',
                'Videographer',
                'Caterer',
                'Wedding planner',
                'Decoration',
                'Visual identity',
                'Drone video',
                'Other',
              ],
            },
          ],
        },
        {
          title: 'Finally',
          intro: 'A few details to fine-tune our proposal.',
          fields: [
            {
              type: 'number',
              name: 'budget',
              label: 'Do you have a budget in mind?',
              optional: true,
              half: true,
              placeholder: 'In euros',
              hint: 'For the DJ performance and equipment.',
            },
            {
              type: 'select',
              name: 'connu',
              label: 'How did you hear about us?',
              optional: true,
              half: true,
              placeholder: 'Select',
              options: [
                { value: 'lieu', label: 'Recommended by the venue' },
                { value: 'google', label: 'Google' },
                { value: 'bouche_a_oreille', label: 'Word of mouth' },
                { value: 'ia', label: 'AI suggestion' },
                { value: 'site_mariage', label: 'Wedding directory website' },
                { value: 'deja_assiste', label: 'I have already attended one of your events' },
                { value: 'autre', label: 'Other' },
              ],
            },
            {
              type: 'textarea',
              name: 'message',
              label: 'A message for us?',
              optional: true,
              placeholder: 'Desired atmosphere, musical styles, key moments, questions…',
            },
          ],
        },
      ],
    },

    booking: {
      formKey: 'booking',
      meta: {
        title: 'DJ Quote for Parties & Events — Biarritz, Basque Country | Groove Caviar',
        description:
          'Book a DJ for your private party, corporate event, fashion show or seminar in Biarritz, the Basque Country and across France. Free quote within 72 business hours.',
      },
      hero: { eyebrow: 'Parties & events', title: 'Request a quote' },
      intro: {
        title: 'Tell us about your event',
        paragraph:
          'Private party, corporate event, fashion show, seminar, club… It only takes a few minutes. We get back to you within 72 business hours with a personalised quote — free and with no commitment.',
        phoneLead: 'Prefer to talk it through? Call us on',
      },
      steps: [
        {
          title: 'You',
          intro: 'How to reach you, and who you are.',
          fields: [
            { type: 'text', name: 'prenom', label: 'First name', required: true, half: true, autocomplete: 'given-name' },
            { type: 'text', name: 'nom', label: 'Last name', required: true, half: true, autocomplete: 'family-name' },
            { type: 'tel', name: 'telephone', label: 'Phone', required: true, half: true, autocomplete: 'tel' },
            { type: 'email', name: 'email', label: 'Email', required: true, half: true, autocomplete: 'email' },
            {
              type: 'select',
              name: 'activite',
              label: 'You are',
              required: true,
              placeholder: 'Select',
              options: [
                { value: 'particulier', label: 'An individual' },
                { value: 'club', label: 'Club' },
                { value: 'bar_restaurant', label: 'Bar / Restaurant' },
                { value: 'boutique', label: 'Boutique' },
                { value: 'promoteur_rp', label: 'Promoter / PR' },
                { value: 'agence', label: 'Event / communication agency' },
                { value: 'institution', label: 'Institution' },
                { value: 'independant', label: 'Freelancer' },
                { value: 'media', label: 'Media (press / radio / TV)' },
                { value: 'musique', label: 'Music (major / label)' },
                { value: 'autre', label: 'Other' },
              ],
            },
            {
              type: 'text',
              name: 'societe',
              label: 'Company',
              optional: true,
              half: true,
              autocomplete: 'organization',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
            {
              type: 'text',
              name: 'site_web',
              label: 'Website',
              optional: true,
              half: true,
              autocomplete: 'url',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
            {
              type: 'text',
              name: 'adresse_societe',
              label: 'Company address',
              optional: true,
              autocomplete: 'street-address',
              showIf: { field: 'activite', notEquals: 'particulier' },
            },
          ],
        },
        {
          title: 'The event',
          intro: 'When, where and how many.',
          fields: [
            {
              type: 'select',
              name: 'type_evenement',
              label: 'Event type',
              required: true,
              placeholder: 'Select',
              options: [
                { value: 'anniversaire', label: 'Birthday' },
                { value: 'cocktail', label: 'Cocktail' },
                { value: 'fete', label: 'Party' },
                { value: 'soiree_privee', label: 'Private party' },
                { value: 'soiree_entreprise', label: 'Corporate party' },
                { value: 'soiree_club', label: 'Club / bar night' },
                { value: 'seminaire', label: 'Seminar' },
                { value: 'defile', label: 'Fashion show' },
                { value: 'inauguration', label: 'Inauguration' },
                { value: 'vernissage', label: 'Exhibition opening' },
                { value: 'autre', label: 'Other' },
              ],
            },
            {
              type: 'text',
              name: 'type_autre',
              label: 'Please specify the event type',
              required: true,
              showIf: { field: 'type_evenement', equals: 'autre' },
            },
            { type: 'text', name: 'nom_evenement', label: 'Event / party name', optional: true },
            { type: 'date', name: 'date_evenement', label: 'Event date', required: true, half: true },
            {
              type: 'select',
              name: 'participation',
              label: 'Expected attendance',
              optional: true,
              half: true,
              placeholder: 'Select',
              options: ['Under 50', '50 to 100', '100 to 150', '150 to 200', '200 to 300', 'Over 300'],
            },
            { type: 'text', name: 'lieu_nom', label: 'Venue name', optional: true, half: true },
            { type: 'text', name: 'capacite', label: 'Venue capacity', optional: true, half: true },
            { type: 'text', name: 'lieu_adresse', label: 'Venue address', required: true, autocomplete: 'off' },
            {
              type: 'timerange',
              name: 'horaires',
              label: 'DJ performance hours',
              required: true,
              hint: 'When the music starts and ends, excluding set-up and take-down.',
            },
          ],
        },
        {
          title: 'Your request',
          intro: 'Music and equipment: your quote will be pre-filled accordingly.',
          fields: [
            {
              type: 'checks',
              name: 'musique',
              label: 'Music you would like',
              required: true,
              options: [
                'General / mixed',
                'House',
                'Techno',
                'Tech house / Electro',
                'Hip-hop / RnB',
                'Funk / Soul',
                'Jazz / Swing',
                'Pop / Rock',
                'Dance',
                'Latin / World',
                'Other',
              ],
            },
            {
              type: 'checks',
              name: 'besoins',
              label: 'Equipment needed',
              optional: true,
              hint: 'The DJ and DJ equipment are always included.',
              options: [
                { value: 'sono_principale', label: 'Sound system (main)' },
                { value: 'sono_secondaire', label: 'Sound system (secondary)' },
                { value: 'eclairage_piste', label: 'Dance floor lighting' },
                { value: 'eclairage_ambiance', label: 'Ambient lighting' },
                { value: 'micro', label: 'Microphone' },
                { value: 'video', label: 'Video projector + screen' },
                { value: 'autre', label: 'Other (tell us in the message)' },
              ],
            },
            {
              type: 'select',
              name: 'micros_nombre',
              label: 'Number of microphones',
              optional: true,
              placeholder: 'Select',
              showIf: { field: 'besoins', includes: 'micro' },
              options: [
                { value: '1', label: '1 microphone' },
                { value: '2', label: '2 microphones' },
                { value: '3', label: '3 microphones or more' },
              ],
            },
          ],
        },
        {
          title: 'Finally',
          intro: 'A few details to fine-tune our proposal.',
          fields: [
            {
              type: 'number',
              name: 'budget',
              label: 'Artist performance budget',
              optional: true,
              half: true,
              placeholder: 'In euros',
              hint: 'Excluding travel, accommodation and catering.',
            },
            {
              type: 'select',
              name: 'connu',
              label: 'How did you hear about us?',
              optional: true,
              half: true,
              placeholder: 'Select',
              options: [
                { value: 'lieu', label: 'Recommended by the venue' },
                { value: 'google', label: 'Google' },
                { value: 'bouche_a_oreille', label: 'Word of mouth' },
                { value: 'ia', label: 'AI suggestion' },
                { value: 'deja_assiste', label: 'I have already attended one of your events' },
                { value: 'autre', label: 'Other' },
              ],
            },
            {
              type: 'textarea',
              name: 'message',
              label: 'Any other information',
              optional: true,
              placeholder: 'Desired atmosphere, running order, technical constraints, questions…',
            },
          ],
        },
      ],
    },
  },
};
