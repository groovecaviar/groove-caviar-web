// Table de correspondance des slugs FR ↔ EN.
// Source de vérité pour le sélecteur de langue et les balises hreflang.
export type Locale = 'fr' | 'en';

export const routeMap: Record<string, string> = {
  '/': '/en/',
  '/services': '/en/services',
  '/services/prestation-dj': '/en/services/dj-services',
  '/services/speaker-mc': '/en/services/speaker-mc',
  '/services/sonorisation-eclairage': '/en/services/sound-lighting',
  '/services/design-sonore': '/en/services/sound-design',
  '/services/production-evenementielle': '/en/services/event-production',
  '/mariages': '/en/weddings',
  '/mariages/pays-basque': '/en/weddings/basque-country',
  '/mariages/landes': '/en/weddings/landes',
  '/mariages/international': '/en/weddings/international',
  '/mariages/lgbt': '/en/weddings/lgbtq',
  '/soirees': '/en/parties',
  '/soirees/entreprise': '/en/parties/corporate',
  '/soirees/seminaire': '/en/parties/seminars',
  '/soirees/bars-restaurants': '/en/parties/bars-restaurants',
  '/soirees/clubs-discotheques': '/en/parties/clubs',
  '/soirees/privees': '/en/parties/private',
  '/soirees/privees/anniversaire': '/en/parties/private/birthday',
  '/soirees/privees/bar-mitzvah': '/en/parties/private/bar-mitzvah',
  '/soirees/reveillons': '/en/parties/new-years-eve',
  '/evenements': '/en/events',
  '/evenements/cocktail': '/en/events/cocktails',
  '/evenements/vernissage': '/en/events/exhibition-openings',
  '/evenements/lancement-produit': '/en/events/product-launches',
  '/evenements/defile-mode': '/en/events/fashion-shows',
  '/evenements/evenement-sportif': '/en/events/sporting-events',
  '/evenements/fetes-festivals': '/en/events/festivals',
  '/musique': '/en/music',
  '/a-propos': '/en/about',
  '/faq': '/en/faq',
  '/contact': '/en/contact',
  '/devis/mariages': '/en/quote/wedding',
  '/devis/booking-dj': '/en/quote/dj-booking',
};

// Correspondance inverse EN -> FR.
export const reverseRouteMap: Record<string, string> = Object.fromEntries(
  Object.entries(routeMap).map(([fr, en]) => [en, fr])
);
