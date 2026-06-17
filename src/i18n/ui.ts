import type { Locale } from './routes';
import { routeMap, reverseRouteMap } from './routes';
import { fr } from './fr';
import { en } from './en';

export const dictionaries = { fr, en } as const;

/** Détecte la locale à partir de l'URL (EN si préfixe /en, sinon FR par défaut). */
export function getLocale(url: URL): Locale {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'fr';
}

/** Renvoie le dictionnaire de libellés pour une locale. */
export function useTranslations(locale: Locale) {
  return dictionaries[locale];
}

/** Donne l'URL équivalente dans l'autre langue (pour le sélecteur de langue). */
export function getAlternateUrl(pathname: string, locale: Locale): string | undefined {
  const clean = pathname.replace(/\/$/, '') || '/';
  return locale === 'fr' ? routeMap[clean] : reverseRouteMap[clean];
}
