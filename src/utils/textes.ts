// ════════════════════════════════════════════════════════════════════════
//  Fichiers de textes éditables (src/data/textes/*.yaml)
//  — lecture du YAML, contrôle des champs obligatoires (message clair en
//    français si un champ manque) et mise en forme automatique du texte.
// ════════════════════════════════════════════════════════════════════════
import yaml from 'js-yaml';

export type Locale = 'fr' | 'en';

/** Lit un fichier YAML (importé avec « ?raw ») et renvoie son contenu. */
export function loadTextes<T>(raw: string, fichier: string): T {
  try {
    return yaml.load(raw) as T;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(`Fichier de textes « ${fichier} » illisible (vérifie les décalages et les guillemets) :\n${msg}`);
  }
}

/** Vérifie la présence de champs obligatoires ; chemin du type « sections.0.titre ». */
export function verifier(data: unknown, chemins: string[], fichier: string): void {
  const manquants = chemins.filter((chemin) => {
    const val = chemin.split('.').reduce<unknown>((acc, k) => (acc as Record<string, unknown> | undefined)?.[k], data);
    return val === undefined || val === null || val === '';
  });
  if (manquants.length) {
    throw new Error(`Fichier de textes « ${fichier} » : champ(s) manquant(s) → ${manquants.join(', ')}`);
  }
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Typographie française : espaces insécables avant ? ! : ; » et après «. */
export function typo(s: string, locale: Locale): string {
  if (locale !== 'fr') return s;
  return s
    .replace(/[ \t  ]+([?!:;»])/g, ' $1')
    .replace(/«[ \t  ]*/g, '« ');
}

/** Mise en forme d'une ligne : gras, liens, marque « Groove Caviar » en .brand. */
export function ligne(s: string, locale: Locale): string {
  return typo(escapeHtml(s.trim()), locale)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/Groove Caviar/gi, '<span class="brand">Groove Caviar</span>');
}

/** Texte long : une ligne vide = un nouveau paragraphe <p>. */
export function paragraphes(s: string, locale: Locale): string {
  return s
    .trim()
    .split(/\n\s*\n/)
    .map((p) => `<p>${ligne(p.replace(/\s*\n\s*/g, ' '), locale)}</p>`)
    .join('');
}

/** Version texte brut (données structurées JSON-LD, balises meta). */
export function texteBrut(s: string, locale: Locale): string {
  return typo(
    s
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1')
      .replace(/\s+/g, ' ')
      .trim(),
    locale
  );
}

// Toutes les pages du site (chargement paresseux : rien n'est exécuté).
const pagesDuSite = import.meta.glob('/src/pages/**/*.astro');

/** true si l'adresse interne correspond à une page qui existe déjà. */
export function pageExiste(href: string): boolean {
  if (!href.startsWith('/')) return true; // lien externe, mailto, tel…
  const chemin = href.split(/[?#]/)[0].replace(/\/$/, '');
  if (chemin === '') return true;
  return [`/src/pages${chemin}.astro`, `/src/pages${chemin}/index.astro`].some((k) => k in pagesDuSite);
}
