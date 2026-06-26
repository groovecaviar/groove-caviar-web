/**
 * Configuration analytics centralisée — L'UNIQUE endroit où changer les identifiants.
 *
 * Tout est piloté par Google Tag Manager (un seul conteneur).
 * GA4, Google Tag, et plus tard Meta Pixel / LinkedIn se configurent DANS GTM,
 * pas ici. Ces IDs sont conservés pour référence / documentation.
 */
export const ANALYTICS = {
  gtmId: 'GTM-K939WRS', // conteneur GTM (le seul script chargé sur le site)
  ga4Id: 'G-JNP77GV0GC', // configuré dans GTM
  googleTagId: 'GT-NMLTR5K', // configuré dans GTM
  debug: import.meta.env.DEV, // logs console en développement uniquement
};

/**
 * Mapping data-track → nom d'événement GA4 poussé dans le dataLayer.
 * Pour ajouter un événement : ajoute une entrée ici + crée le déclencheur
 * « Custom Event » correspondant dans GTM (voir docs/analytics.md).
 */
export const TRACK_EVENT_MAP: Record<string, string> = {
  'call-click': 'phone_click',
  'email-click': 'email_click',
  'whatsapp-click': 'whatsapp_click',
  'instagram-click': 'contact_click',
  'quote-wedding': 'quote_request',
  'quote-booking': 'quote_request',
  'cta-hero': 'cta_click',
  'cta-final': 'cta_click',
};
