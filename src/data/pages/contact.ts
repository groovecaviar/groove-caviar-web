// Contenu bilingue de la page Contact — même convention que services.ts / privacy.ts.

interface ContactLink {
  readonly text: string;
  readonly href: string;
}

interface ContactMeta {
  readonly title: string;
  readonly description: string;
}

interface ContactHero {
  readonly eyebrow: string;
  readonly title: string;
}

interface ContactIntro {
  readonly title: string;
  readonly paragraph: string;
}

interface ContactNap {
  readonly title: string;
  readonly responseNote: string;
}

interface ContactFormContent {
  readonly title: string;
  readonly subtitle: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneOptional: string;
  readonly eventType: string;
  readonly eventTypeOptions: readonly string[];
  readonly eventDate: string;
  readonly eventDateOptional: string;
  readonly message: string;
  readonly messagePlaceholder: string;
  readonly consentBefore: string;
  readonly consentLinkText: string;
  readonly consentAfter: string;
  readonly consentHref: string;
  readonly newsletterLabel: string;
  readonly submitLabel: string;
  readonly submitLabelSending: string;
  readonly successMessage: string;
  readonly errorMessage: string;
}

interface ContactZones {
  readonly title: string;
  readonly items: readonly string[];
  readonly linkText: string;
  readonly linkHref: string;
}

interface FaqItem {
  readonly q: string;
  readonly a: string;
}

interface ContactFaq {
  readonly title: string;
  readonly items: readonly FaqItem[];
}

interface ContactCta {
  readonly titleWhite: string;
  readonly titleShimmer: string;
  readonly subtitle: string;
  readonly btnQuote: ContactLink;
  readonly btnCall: ContactLink;
}

export interface ContactContent {
  readonly meta: ContactMeta;
  readonly hero: ContactHero;
  readonly intro: ContactIntro;
  readonly nap: ContactNap;
  readonly form: ContactFormContent;
  readonly zones: ContactZones;
  readonly faq: ContactFaq;
  readonly cta: ContactCta;
}

export const contact: Record<'fr' | 'en', ContactContent> = {
  fr: {
    meta: {
      title: 'Contact — DJ à Biarritz & Pays Basque | Groove Caviar',
      description:
        "Contactez Groove Caviar pour votre mariage, soirée ou événement à Biarritz et dans tout le Pays Basque. Réponse sous 72h ouvrées, devis gratuit et sans engagement.",
    },

    hero: {
      eyebrow: 'Échangeons sur votre projet',
      title: 'Contact',
    },

    intro: {
      title: 'À votre écoute',
      paragraph:
        "DJ, design sonore, mariage, soirée privée ou événement professionnel : chaque projet commence par une conversation. Racontez-nous le vôtre — qu'il ait lieu à Biarritz, dans le Pays Basque ou ailleurs — nous vous proposerons une solution adéquate et vous enverrons si besoin un devis précis.",
    },

    nap: {
      title: 'Nos coordonnées',
      responseNote: '',
    },

    form: {
      title: 'Racontez-nous votre projet',
      subtitle: 'Plus vous nous en dites, plus vite nous pouvons vous proposer quelque chose de juste.',
      firstName: 'Prénom',
      lastName: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      phoneOptional: '(optionnel)',
      eventType: 'Type de prestation',
      eventTypeOptions: ['Mariage', 'Soirée privée', 'Événement professionnel', 'Design sonore', 'Autre'],
      eventDate: "Date de l'événement",
      eventDateOptional: '(optionnel)',
      message: 'Message',
      messagePlaceholder: 'Racontez-nous votre projet : date, lieu, ambiance recherchée…',
      consentBefore: "J'accepte que mes informations soient utilisées pour traiter ma demande, conformément à la ",
      consentLinkText: 'politique de confidentialité',
      consentAfter: '.',
      consentHref: '/politique-de-confidentialite',
      newsletterLabel: 'Je souhaite recevoir les actualités de Groove Caviar par email',
      submitLabel: 'Envoyer mon message',
      submitLabelSending: 'Envoi en cours…',
      successMessage: 'Votre message a bien été envoyé. Nous vous répondons sous 72h ouvrées.',
      errorMessage:
        "Une erreur est survenue, votre message n'a pas pu être envoyé. Vous pouvez nous écrire directement à contact@groovecaviar.com.",
    },

    zones: {
      title: 'Où intervenons-nous ?',
      items: ['Biarritz & Pays Basque', 'Landes', 'France entière', 'International'],
      linkText: 'Découvrir nos prestations',
      linkHref: '/services',
    },

    faq: {
      title: 'Questions fréquentes',
      items: [
        {
          q: 'Sous quel délai répondez-vous ?',
          a: 'Nous répondons à toutes les demandes sous 72h ouvrées maximum, souvent bien plus vite.',
        },
        {
          q: 'Intervenez-vous en dehors du Pays Basque ?',
          a: 'Oui, dans toute la France et à l’international, pour des mariages, soirées et événements professionnels.',
        },
        {
          q: 'Le devis est-il gratuit et sans engagement ?',
          a: 'Oui, chaque devis est personnalisé selon votre projet, gratuit et sans aucun engagement de votre part.',
        },
        {
          q: 'Peut-on se rencontrer ou échanger avant de réserver ?',
          a: 'Bien sûr : un échange téléphonique ou en visio est toujours possible avant de vous engager.',
        },
      ],
    },

    cta: {
      titleWhite: 'Prêt à',
      titleShimmer: 'donner le ton ?',
      subtitle: 'Chaque projet mérite une bande-son sur mesure. Parlons du vôtre.',
      btnQuote: { text: 'Demander un devis', href: '#form' },
      btnCall: { text: 'Appeler maintenant', href: 'tel:+33623625704' },
    },
  },

  en: {
    meta: {
      title: 'Contact — DJ in Biarritz & Basque Country | Groove Caviar',
      description:
        'Get in touch with Groove Caviar for your wedding, party or event in Biarritz and the Basque Country. Reply within 72 business hours, free no-obligation quote.',
    },

    hero: {
      eyebrow: "Let's talk about your project",
      title: 'Contact',
    },

    intro: {
      title: 'At your service',
      paragraph:
        "DJ sets, sound design, weddings, private parties or corporate events: every project starts with a conversation. Tell us about yours — wherever it takes place, in Biarritz, the Basque Country or beyond — we'll propose the right solution and send you a precise quote if needed.",
    },

    nap: {
      title: 'Get in touch directly',
      responseNote: '',
    },

    form: {
      title: 'Tell us about your project',
      subtitle: 'The more you share, the faster we can put together something that fits.',
      firstName: 'First name',
      lastName: 'Last name',
      email: 'Email',
      phone: 'Phone',
      phoneOptional: '(optional)',
      eventType: 'Type of service',
      eventTypeOptions: ['Wedding', 'Private party', 'Corporate event', 'Sound design', 'Other'],
      eventDate: 'Event date',
      eventDateOptional: '(optional)',
      message: 'Message',
      messagePlaceholder: 'Tell us about your project: date, venue, the mood you’re after…',
      consentBefore: 'I agree that my information will be used to process my request, in accordance with the ',
      consentLinkText: 'privacy policy',
      consentAfter: '.',
      consentHref: '/en/privacy-policy',
      newsletterLabel: "I'd like to receive Groove Caviar's news by email",
      submitLabel: 'Send my message',
      submitLabelSending: 'Sending…',
      successMessage: "Your message has been sent. We'll get back to you within 72 business hours.",
      errorMessage:
        'Something went wrong and your message could not be sent. You can email us directly at contact@groovecaviar.com.',
    },

    zones: {
      title: 'Where we perform',
      items: ['Biarritz & the Basque Country', 'Landes', 'All of France', 'International'],
      linkText: 'Discover our services',
      linkHref: '/en/services',
    },

    faq: {
      title: 'Frequently asked questions',
      items: [
        {
          q: 'How quickly do you reply?',
          a: 'We reply to every request within 72 business hours at the latest — often much sooner.',
        },
        {
          q: 'Do you travel outside the Basque Country?',
          a: 'Yes, throughout France and internationally, for weddings, parties and corporate events.',
        },
        {
          q: 'Is the quote free and non-binding?',
          a: 'Yes, every quote is tailored to your project, free of charge and with no obligation.',
        },
        {
          q: 'Can we talk before booking?',
          a: 'Of course — a phone or video call is always possible before you commit to anything.',
        },
      ],
    },

    cta: {
      titleWhite: 'Ready to',
      titleShimmer: 'set the tone?',
      subtitle: 'Every project deserves a soundtrack of its own. Let’s talk about yours.',
      btnQuote: { text: 'Request a quote', href: '#form' },
      btnCall: { text: 'Call now', href: 'tel:+33623625704' },
    },
  },
};
