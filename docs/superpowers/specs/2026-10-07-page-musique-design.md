# Page Musique — descriptif de conception (à valider avant tout code)

Date : 2026-10-07 · Statut : EN ATTENTE DE VALIDATION (aucun code écrit)

## 1. Objectif
Page « Musique » (FR `/musique`, EN `/en/music`, routes déjà présentes dans `src/i18n/routes.ts`
et liens déjà présents dans Header/Footer). Elle montre la culture musicale de Groove Caviar
(mixes écoutables), propose des playlists Spotify pour les mariages, et convertit vers le devis.
Succès : cohérente avec la page Services (même hero, mêmes bandeaux, même CTA), rapide, RGPD-compatible.

## 2. Périmètre et contraintes
- Rien n'est modifié dans les pages déjà validées (Header, Footer, Services, Contact, CGV, Devis…).
- Nouveaux fichiers uniquement : `src/data/pages/music.ts`, `src/components/sections/MusicSections.astro`,
  `src/pages/musique.astro`, `src/pages/en/music.astro`, `src/assets/images/mixes/<titre-du-mix>.webp`
  (+ commit de `MUSIQUE-hero.webp`).
- Palette C (variables `--gc-*`), classes `gc-*`, hex uniquement, `.brand` pour « Groove Caviar »,
  helper `nbsp()`, fondu `gc-reveal`, boutons de largeur égale (`gc-btn-pair`).
- Aucun style ni composant partagé existant n'est modifié ; les nouveaux styles sont scopés
  (préfixe `gc-mus-`) dans le composant.

## 3. Structure de la page (de haut en bas)
1. **Hero** — même gabarit que Services : image `MUSIQUE-hero.webp` (1920×1080), eyebrow,
   H1 « Musique » (EN « Music ») avec shimmer doré, accroche « Let's groove », filet éditorial.
2. **Bandeau intro** (`gc-intro-band`) — titre « Du généraliste au pointu nous allons vous faire danser ! »
   + paragraphe (texte du brouillon, « vinyles », un seul point final).
3. **Section « Mixes »** (fond blanc) — grille 2 colonnes (1 sur mobile) de 7 cartes (cf. §4),
   puis phrase « Envie d'écouter d'autres mixes ? … » et bouton « Vers le profil Mixcloud »
   → https://www.mixcloud.com/groovecaviar (nouvel onglet, `rel="noopener noreferrer"`).
4. **Section « Playlists mariages »** (fond `--gc-surface-alt`) — texte d'intro, frise (cf. §5),
   disques des décennies (cf. §6), paragraphe sur le rôle de la musique dans le mariage.
5. **CTA final** (dégradé or → noir, comme Services) — « Envie de danser ? D'écouter de la bonne
   musique ? Nous avons le DJ qu'il vous faut ! » / « N'attendez plus, contactez-nous ! »
   Deux boutons de même largeur : « Demander un devis » → `/devis/mariages` (EN `/en/quote/wedding`),
   « Nous contacter » → `/contact` (EN `/en/contact`).

## 4. Mixes : façade « cliquer pour écouter » (Mixcloud conservé)
Décision : rester sur Mixcloud (licences des morceaux, bande passante, audience) ; ne pas héberger les mp3.
- Carte : cover carrée (1:1) + titre Mixcloud tel quel + bouton ▶ doré. Aucun libellé de style séparé.
- Au clic : la carte est remplacée par l'iframe officielle
  `https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=<chemin du mix>` (lecteur « mini », autoplay demandé).
- Rien de tiers n'est chargé avant le clic (page rapide, cookies Mixcloud uniquement après action volontaire) ;
  une courte mention sous la carte indique que l'écoute charge le lecteur Mixcloud.
- Accessibilité : la carte est un `<button>` avec libellé « Écouter : <titre> », focus visible.
- Mixes (titres et chemins Mixcloud, profil `groovecaviar`) :
  1. Groove Caviar Cocktail Mix Bossa Nova Mariage Wedding — `groove-caviar-cocktail-mix-bossa-nova-mariage-wedding`
  2. Cocktail Mix Musique Cubaine Mariage Wedding — `cocktail-mix-musique-cubaine-mariage-wedding`
  3. Dinner Mix Urban Smooth Jazz Mariage Wedding — `dinner-mix-urban-smooth-jazz-mariage-wedding`
  4. Party Mix Soul X Funk X Disco Mariage Wedding — `party-mix-soul-x-funk-x-disco-mariage-wedding`
  5. Party Mix Dance 90s Mariage Wedding — `party-mix-dance-90s-mariage-wedding`
  6. Party Mix Dance All Night Vol1 — `party-mix-dance-all-night-vol1`
  7. Party Mix Dance All Night Vol2 — `party-mix-dance-all-night-vol2`
- Covers à fournir : carrées, 1200×1200 px, WebP (qualité ~80), < 200 Ko, `<titre-du-mix>.webp` … `mix-07.webp`.

## 5. Playlists mariages : frise horizontale « en S »
12 étapes, 4 lignes de 3 points reliées par un trait doré :
- Ligne 1 « L'église » : Mise en place Église · Entrée dans l'Église · Sortie de l'Église
- Ligne 2 « La cérémonie » : Mise en place Cérémonie · Entrée de Cérémonie · Sortie de Cérémonie
- Lignes 3-4 (le « S ») : Lancer de bouquet · Entrée des mariés au dîner · Présentation du dessert
  puis (retour de droite à gauche) 1ère danse avec les parents · Première danse · Dernier morceau
- Chaque point = lien Spotify (nouvel onglet) : numéro, nom de l'étape, « Écouter ↗ ».
- Le trait se dessine au scroll (même IntersectionObserver, -25 %). Mobile : une seule ligne verticale.
- `prefers-reduced-motion` : tracé affiché sans animation.

## 6. Décennies : disques vinyle
Défilement horizontal (scroll-snap) de 8 disques « 50s » … « 2020s », libellé « Tubes 19xx »,
rotation légère au survol, chacun lié à sa playlist Spotify.

## 7. Liens Spotify (extraits du brouillon)
Étapes : 1wmBwRArLn0fLz1oYLHn7A · 0ovZ0eVYCpMeD41d2UInll · 1roBfgQu6CRql29KoZwWVg · 2NhOMMPbNhzV1wWFBMWmUI ·
0cbcwEudFVe8kC8oDMpGQJ · 15n9hotQHCfT73NAvvtwEa · 5zAlHGfP2aU3IK4yX1i7mR · 6uZiK0ekI0EGvsPyMkwZdt ·
1D2VIHoOjUzn2DmjRII4WS · 5sZO05NnfqwHoduxOKXLFC · 01QXNfwZ3GlEScDuaNIonN · 3S5KGTMxWi0e6o36dJiGsf
Décennies 50s→2020s : 63m3wIF02x1yU83ElZ7dux · 7qtu0thxtYG37Zg0qPfkw8 · 50sCBjpce1fS6OYcMvZlDr ·
2aRsz6LAF4Qd1yJtlEPnQ8 · 2GqH5DfcB65d9BU6qO9Olw · 5B8PE1tLFij4Kb4LWQqWjS · 1l9PGCGBVpwWYVPhkwcdqY · 7MTOik5WeNL927nzPnaCuE
(URL = `https://open.spotify.com/playlist/<id>` ; le paramètre `?si=` du brouillon est supprimé.)

## 8. FR / EN et SEO
Contenu dans `music.ts` (`fr`/`en`), traductions EN proposées pour relecture. Metadata FR/EN dédiées
(title, description), hreflang via `routeMap` existant. Images décoratives `alt=""`, covers avec alt = titre du mix.

## 9. Vérifications avant livraison
Build Astro sans erreur ; rendu desktop/tablette/mobile ; clic sur chaque mix (lecteur Mixcloud charge) ;
test des 20 liens Spotify ; navigation clavier ; Lighthouse (perf/a11y) ; page FR et EN ;
pages validées inchangées (`git diff` limité aux nouveaux fichiers).

## 10. Mises à jour validées (2026-10-07, après relecture)
- 8 mixes (2 colonnes × 4) : ajout de « Party Mix Funky House Classics Vol.1 »
  (Mixcloud : `party-mix-funky-house-classics-vol1-mariage-wedding`), cover `party-mix-funky-house-classics-vol1.webp`.
- Titres affichés sans « Mariage Wedding » (les chemins Mixcloud restent inchangés).
- Covers fournies en JPEG 1080×1080, converties en WebP (≈ 57 Ko) dans `src/assets/images/mixes/mix-01..08.webp`.
- Lancer de bouquet dans le « S » ; profil Mixcloud : https://www.mixcloud.com/groovecaviar ; CTA à 2 boutons.

- Covers renommées d'après le titre du mix (ex. `cocktail-mix-bossa-nova.webp`).
- Décennies : carrousel infini à défilement automatique (pause au survol), bords en fondu, ombres des disques sous le disque uniquement.
