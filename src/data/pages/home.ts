/**
 * Contenu bilingue de la page d'accueil.
 * Le markup vit dans les composants ; ici uniquement le texte (FR + EN).
 *
 * Téléphone : en FR, appel classique (tel:). En EN, le visiteur anglophone
 * est routé vers WhatsApp (wa.me) — même numéro.
 */
export const home = {
  fr: {
    hero: {
      titleLine1: 'DJ & direction musicale',
      titleAccent: 'haut de gamme',
      titleLine3: "mariages, soirées & événements d'exception",
      ctaQuote: { text: 'Demander un devis', href: '/devis/mariages', track: 'quote-wedding' },
      ctaPhone: { text: '06 23 62 57 04', href: 'tel:+33623625704', type: 'tel', track: 'call-click' },
      socialProof: "Basé à Biarritz — prestations en France & à l'international",
    },
    editorial: {
      headline:
        'Savez-vous que <mark>100&nbsp;000</mark> nouveaux morceaux arrivent chaque jour sur les plateformes&nbsp;?',
      body: "Nous sélectionnons uniquement ceux que votre piste de danse mérite.<br>À l'ère des playlists automatiques, l'émotion d'un dancefloor reste humaine.<br>La différence entre une playlist et une vraie direction musicale, c'est l'expérience et la qualité du DJ.<br>Alors, pour vivre une soirée mémorable, choisissez <span class=\"brand\">Groove Caviar</span>.",
      quote: 'Une playlist remplit le silence. Un DJ remplit la piste.',
      quoteAuthor: 'Pierre HENNY DE BASSY (GROOVE CAVIAR)',
    },
  },
  en: {
    hero: {
      titleLine1: 'DJ & music curation',
      titleAccent: 'premium',
      titleLine3: 'weddings, parties & exceptional events',
      ctaQuote: { text: 'Request a quote', href: '/en/quote/wedding', track: 'quote-wedding' },
      ctaPhone: { text: '+33 6 23 62 57 04', href: 'https://wa.me/33623625704', type: 'whatsapp', track: 'whatsapp-click' },
      socialProof: 'Based in Biarritz — available across France & internationally',
    },
    editorial: {
      headline: 'Did you know <mark>100,000</mark> new tracks drop every day on streaming platforms?',
      body: 'We only select the ones your dancefloor deserves.<br>In the age of automated playlists, the emotion of a dancefloor stays human.<br>The difference between a playlist and true music curation is the experience and skill of the DJ.<br>So, for a night to remember, choose <span class="brand">Groove Caviar</span>.',
      quote: 'A playlist fills the silence. A DJ fills the floor.',
      quoteAuthor: 'Pierre HENNY DE BASSY (GROOVE CAVIAR)',
    },
  },
} as const;

export type Locale = keyof typeof home;
export type HomeContent = (typeof home)[Locale];
