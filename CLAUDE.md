# Groove Caviar — Mémoire de projet (CLAUDE.md)

> Lu automatiquement par Claude Code au démarrage. Décrit le projet, les conventions et l'avancement.
> Pour la doc du framework AstroWind, voir aussi [AGENTS.md](./AGENTS.md).

## Le projet

Site vitrine **bilingue** (français à la racine `/`, anglais sous `/en/`) pour **Groove Caviar**,
agence de **DJ & direction musicale haut de gamme** à **Biarritz** (Pays Basque), spécialisée dans
les mariages, soirées et événements d'exception. Fondateur & DJ : **Pierre HENNY DE BASSY**.
Production : https://www.groovecaviar.com

## Interlocuteur & gouvernance

- Pierre n'est **pas développeur** et est peu à l'aise avec le terminal. Toujours **expliquer simplement,
  une étape à la fois**, donner le contexte avant d'agir.
- **Règle d'or** : Claude **explique** → Pierre **valide** → ensuite seulement on **code**.
- Toute la conversation se déroule **en français**.

## Stack technique

- **AstroWind 1.0.0-beta.63** / **Astro 6** (`output: 'static'`) / **Tailwind v4** (CSS-first, `@theme`).
- VS Code sur Mac. Dev : `npm run dev` → http://localhost:4321.
- Déploiement : **GitHub** (`main`) → **Hostinger** (auto-deploy).
  Dépôt : https://github.com/groovecaviar/groove-caviar-web

### Commandes
- `npm run dev` — serveur de développement
- `npm run build` — build de production (doit toujours passer sans erreur)
- `npx astro check` — vérification (viser 0 erreur / 0 warning / 0 hint)

## Conventions de code (IMPORTANT)

- **CSS 100% en classes sémantiques.** Pas de style inline, pas de prolifération d'utilitaires Tailwind
  dans le markup. Tout le style (layout, couleurs, tailles, responsive via media queries) vit dans le
  bloc `<style>` scopé du composant, avec des classes nommées `gc-*`.
- Les mentions de la marque « Groove Caviar » utilisent la classe **`.brand`** (or, capitales, graisse 800).
- Composants maison dans `src/components/gc/`.

### Charte
- **Couleurs** : or `#AF9453`, noir `#0D0D0D` (footer `#0A0A0A`), gris clair `#F2F2F2`.
- **Typos** : Josefin Sans (titres), Hanken Grotesk (texte), Cormorant Italic (citations).
  Variables `--aw-font-*` (utilisées SANS guillemets autour des `var()`).

## Internationalisation

- `src/i18n/routes.ts` — correspondance des slugs **FR ↔ EN** (source de vérité du switcher + hreflang).
  Ajouter chaque nouvelle page ici.
- `src/i18n/ui.ts` — `getLocale(url)`, `useTranslations(locale)`, `getAlternateUrl(pathname, locale)`.
- `src/i18n/fr.ts` & `src/i18n/en.ts` — dictionnaires de libellés.

## Architecture

- `src/layouts/PageLayout.astro` — layout principal ; branche `gc/Header.astro` et `gc/Footer.astro`.
- Accueil : données dans `src/data/pages/home.ts` (bilingue) ; sections dans `src/components/sections/`
  (`HeroHome.astro`, `EditorialStatement.astro`).

## Avancement

### Fait & validé
- **Analytics** : GTM + GA4 + Silktide Consent Manager (Consent Mode v2, défaut « refusé »), en français.
- **Accueil** : Hero plein écran (image `homepage-hero.webp`, N&B → couleur au survol desktop, H1 3 lignes,
  2 CTA) ; bloc éditorial (fond `#F2F2F2`, citation Cormorant).
- **Header** (`gc/Header.astro`) : sticky, transparent → noir au scroll ; logo 37px + wordmark `.brand` ;
  nav 6 items ; switcher FR/EN ; un bouton téléphone ; menu mobile. 100% classes sémantiques.
- **Footer** (`gc/Footer.astro`) : 3 colonnes (NAP+marque / nav / réseaux+newsletter) ; icônes réseaux ;
  formulaire **Brevo** réhabillé, `locale` dynamique FR/EN ; liens Politique de confidentialité & CGV ;
  **JSON-LD LocalBusiness**.

### À faire
- **Pages internes** (toutes en 404, normal) : Mariages, Soirées, Événements, Musique, À propos, FAQ,
  Contact, services, devis, et les **pages légales** :
  `/politique-de-confidentialite` ↔ `/en/privacy-policy` ; `/conditions-generales-de-vente` ↔ `/en/terms-of-sale`.
- Sections d'accueil restantes : carrousel de lieux, services, témoignages (4 portraits dispo),
  marquee de logos clients (17 logos dispo), FAQ, CTA final.
- **À tester au déploiement** : soumission Brevo (échoue en local, probablement origine `localhost`
  non autorisée par Brevo ; revérifier sur le domaine en ligne).

## Coordonnées & identifiants

- Adresse : 3 allée Gabrielle Doziat, 64200 Biarritz
- Tél : 06 23 62 57 04 / `tel:+33623625704` — WhatsApp : wa.me/33623625704
- Email : contact@groovecaviar.com — Maps : https://maps.app.goo.gl/5PteWHKmc19sPByR7
- SIRET : 503 532 616 00029
- GA4 : G-JNP77GV0GC · GTM : GTM-K939WRS · Google Tag : GT-NMLTR5K

### Réseaux sociaux
- Instagram : https://www.instagram.com/groove.caviar
- Facebook : https://www.facebook.com/groovecaviar
- Mixcloud : https://www.mixcloud.com/groovecaviar/
- Spotify : https://open.spotify.com/user/yvc9dh69dsfayamamf07z2p9w
- LinkedIn : https://www.linkedin.com/company/groovecaviar/about/
- (YouTube : à venir)

## Façon de travailler

- Proposer l'approche → attendre la validation de Pierre → coder.
- Après chaque modif : `npm run build` pour vérifier la compilation.
- Respecter les conventions CSS (classes sémantiques) et la charte.
- Committer par petites étapes claires une fois le rendu validé à l'écran.
