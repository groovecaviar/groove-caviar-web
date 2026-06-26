import { ANALYTICS, TRACK_EVENT_MAP } from '~/config/analytics';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

type Params = Record<string, unknown>;

/**
 * Pousse un événement dans le dataLayer (consommé par GTM).
 * À utiliser pour les événements déclenchés manuellement (ex. soumission Jotform).
 */
export function trackEvent(event: string, params: Params = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
  if (ANALYTICS.debug) console.log('[analytics] →', event, params);
}

/**
 * Écouteur délégué unique : au clic sur un élément portant data-track,
 * pousse l'événement GA4 correspondant. Aucun listener à dupliquer ailleurs.
 */
export function initAnalytics(): void {
  if (typeof document === 'undefined') return;
  if ((window as unknown as { __gcAnalytics?: boolean }).__gcAnalytics) return;
  (window as unknown as { __gcAnalytics?: boolean }).__gcAnalytics = true;

  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;
    const key = el.getAttribute('data-track') || '';
    const event = TRACK_EVENT_MAP[key] || 'cta_click';
    const label = el.getAttribute('data-track-label') || key;
    trackEvent(event, { track_key: key, label });
  });

  if (ANALYTICS.debug) console.log('[analytics] écouteur data-track initialisé');
}
