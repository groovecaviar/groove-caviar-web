# Brief — Page Services (v3 : mise en page + cohérence globale)

Refonte de la page **Services** (Astro + Tailwind v4), avec une **mise en page revue** et la création
d'un **système de styles globaux partagés** pour garantir la cohérence sur toutes les pages à venir.

## ⛔ Périmètre (à respecter par Claude Code)

Créer / modifier **uniquement** :
- `src/pages/services.astro` + `src/pages/en/services.astro`
- `src/data/pages/services.ts` (contenu bilingue FR/EN)
- `src/assets/styles/tailwind.css` — **UNIQUEMENT en AJOUTANT une nouvelle section à la toute fin du fichier**
  (les classes réutilisables décrites plus bas). ⚠️ **NE MODIFIE AUCUNE règle existante** de ce fichier,
  en particulier `btn-gc`, `btn-gc-primary`, `btn-gc-outline`, `.brand`, `@theme`, les `@utility`.
  Ajoute seulement **après la dernière ligne existante**.

**Ne toucher à AUCUN autre fichier** : ni `Header.astro`, ni `Footer.astro`, ni la page d'accueil.
Réutiliser `PageLayout`, les boutons `btn-gc-*`, la classe `.brand`, les variables de police, l'or `#AF9453`.
**Aucun style inline.**

---

## 🎯 Cohérence globale (point 11) — classes réutilisables dans `tailwind.css`

Ajouter, **à la toute fin de `src/assets/styles/tailwind.css`** (dans une nouvelle section commentée, sans
modifier une seule ligne existante), les classes réutilisables ci-dessous. Comme `tailwind.css` est déjà
importé globalement, elles seront disponibles sur **toutes** les pages — rien d'autre à configurer. Toutes
les futures pages devront s'appuyer dessus.

```css
/* ===================================================================
   Composants Groove Caviar réutilisables (ne pas mélanger avec le reste)
   =================================================================== */

/* 1. Apparition au scroll : fade + slide-up (appliquée à une SECTION entière) */
.gc-reveal { opacity: 0; transform: translateY(40px);
  transition: opacity .9s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
  will-change: opacity, transform; }
.gc-reveal.is-visible { opacity: 1; transform: none; }

/* 2. Ligne dorée éditoriale (style WordPress) — s'étire à l'apparition */
.gc-editorial-line { height: 1px; width: 420px; max-width: 80%;
  background: linear-gradient(to right, rgba(175,148,83,0) 0%, rgba(175,148,83,1) 50%, rgba(175,148,83,0) 100%);
  margin: 2rem auto 0; transform: scaleX(0); transform-origin: center;
  animation: gc-stretch 1.4s cubic-bezier(.25,1,.5,1) forwards; animation-delay: .35s; }
@keyframes gc-stretch { to { transform: scaleX(1); } }

/* 3. Images : noir & blanc → couleur + léger zoom au survol (sections) */
.gc-media-hover img { filter: grayscale(1); transform: scale(1);
  transition: filter .8s ease, transform .8s ease; }
@media (hover:hover){ .gc-media-hover:hover img { filter: grayscale(0); transform: scale(1.05); } }
@media (hover:none){ .gc-media-hover img { filter: grayscale(0); } }

/* 4. Image de hero : N&B → couleur au survol (comme la homepage) */
@media (hover:hover){
  .gc-hero-media { filter: grayscale(1) brightness(1.1); transition: filter .8s ease; }
  .gc-hero-section:hover .gc-hero-media { filter: grayscale(0); }
}

/* 5. Shimmer doré sur du texte (CSS pur, sûr pour les Core Web Vitals) */
.gc-shimmer { background: linear-gradient(110deg,#8a7440 0%,#af9453 20%,#f3e4bd 50%,#af9453 80%,#8a7440 100%);
  background-size: 200% auto; -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: gc-shimmer 5s linear infinite; }
@keyframes gc-shimmer { to { background-position: 200% center; } }

/* 6. Bandeau citation éditoriale (réutilisable sur toutes les pages) */
.gc-quote-banner { display:flex; align-items:center; justify-content:center;
  min-height:55vh; padding: clamp(3rem,8vh,6rem) 1.5rem; background:#F2F2F2; text-align:center; }
.gc-quote-banner blockquote { max-width:60ch; margin:0; font-style:italic;
  font-family: var(--font-quote, 'Cormorant Garamond', serif);
  font-size: clamp(1.6rem,3.4vw,2.6rem); line-height:1.35; color:#0D0D0D; }
.gc-quote-banner blockquote::before { content:""; display:block; width:64px; height:2px;
  margin:0 auto 1.75rem;
  background:linear-gradient(to right, rgba(175,148,83,0), #af9453, rgba(175,148,83,0)); }

/* Respect du réglage « réduire les animations » */
@media (prefers-reduced-motion: reduce){
  .gc-reveal { opacity:1; transform:none; transition:none; }
  .gc-editorial-line { animation:none; transform:scaleX(1); }
  .gc-media-hover img { transition:none; }
  .gc-shimmer { animation:none; color:#af9453; -webkit-text-fill-color:#af9453; }
}
```

L'animation `.gc-reveal` est déclenchée par un petit `IntersectionObserver` (ajoute `is-visible` quand la
section entre dans l'écran), placé dans un `<script>` de la page.

---

## 🧱 Structure de la page (de haut en bas)

1. **HERO** (plein écran, `min-height:100svh`)
   - Image de fond avec la classe `.gc-hero-media` (N&B → couleur au survol) — section parente `.gc-hero-section`.
   - **Voile sombre LÉGER** (point 1 : l'actuel est trop sombre) — ex. `linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.45))`.
   - Sur-titre doré en capitales très espacées : « L'excellence artistique ».
   - **H1 « NOS SERVICES »** — DOIT respecter exactement la charte du H1 de la homepage (point 2) :
     police `font-heading` (Josefin), `uppercase`, tailles `text-4xl sm:text-5xl md:text-6xl`,
     « Nos » en blanc `font-bold`, « Services » en or `text-primary font-semibold italic`.
     Ajouter un **léger zoom à l'apparition** (ex. `scale(1.04) → scale(1)` sur ~1.2s, doux).
   - **Ligne dorée** `.gc-editorial-line` sous le titre.

2. **BANDEAU INTRO** (point 3 : bandeau indépendant sous le hero, fond clair)
   - Centré, pleine largeur, fond clair (#FFFFFF).
   - Titre : « Une expertise musicale & technique au service de l'émotion ».
   - Paragraphe d'intro (voir contenu).

3. **5 SECTIONS DE PRESTATIONS** — voir mise en page détaillée ci-dessous.

4. **BANDEAU CITATION** (`.gc-quote-banner`, réutilisable) — **après la section 05**, juste avant le CTA.

5. **CTA FINAL** « Votre événement commence ici » (seule section sombre, voir plus bas).

---

## 📐 Mise en page des 5 sections (points 4, 6, 7, 9, 10)

- Chaque section : **`min-height:100svh`**, contenu **centré verticalement**.
- **Fonds alternés CLAIRS** (point 4 : on enlève TOUS les fonds noirs sauf le CTA final) :
  section 01 `#FFFFFF`, 02 `#F2F2F2`, 03 `#FFFFFF`, 04 `#F2F2F2`, 05 `#FFFFFF`, puis **bandeau citation
  `#F2F2F2`** (après la 05). Texte sombre `#0D0D0D`.
- **Disposition (desktop ≥1024px)** : deux colonnes —
  - **Image = 1/3 de la largeur** (point 4), **texte = 2/3**.
  - **Zigzag** : image à gauche pour 01, 03, 05 ; image à droite pour 02, 04.
  - **Image** : hauteur **80vh**, **centrée** horizontalement et verticalement dans son tiers → il reste une
    **bande vide de ~10vh en haut et en bas** de chaque section (points 4, 7, 9). `object-cover`,
    classe `.gc-media-hover`.
  - **Texte** : **centré verticalement** dans sa colonne 2/3, largeur de lecture confortable.
- **Mobile (<1024px)** : empilé (image au-dessus, puis texte), `min-height:auto`, image ~50vh, marges généreuses.
- **Animation** (point 10) : la classe `.gc-reveal` est posée sur **la section entière** → chaque section
  apparaît en **fade + slide-up** quand on scrolle vers elle.
- **Listes à puces** : puce **▶ dorée**. Pour la **section 05 (Production)**, afficher la liste sur **2 colonnes**
  (point 6 : `columns: 2` ou grille 2 colonnes en desktop, 1 colonne en mobile).
- Pas de bande noire de séparation : les **10vh vides** + l'**alternance de fonds** suffisent à aérer (point 9).

---

## ✨ CTA final « Votre événement commence ici » (point 5)

- Seule section **sombre**, avec **fond en dégradé** (reproduction de l'effet WordPress) — ex. :
  `radial-gradient(ellipse at center, rgba(175,148,83,.15), transparent 60%), linear-gradient(180deg,#0D0D0D,#17130c)`.
- Titre : « Votre événement » (blanc) + « **commence ici** » avec la classe **`.gc-shimmer`** (effet doré qui
  ondule, en CSS pur, sans nuire aux Core Web Vitals).
- Sous-titre + 2 boutons : `btn-gc-primary` « Demander un devis » + `btn-gc-outline` « Contacter l'agence ».

---

## 🔍 SEO (point 8)

- **Un seul H1** par page (« Nos Services » / « Our Services »). Titres de prestations en **H2**, sous-titres en **H3**.
- **Meta title** : « Services — DJ & direction musicale | Groove Caviar Biarritz » (EN : “Services — DJ & music
  curation | Groove Caviar Biarritz”).
- **Meta description** FR : « Une expertise musicale & technique au service de l'émotion. Découvrez les
  prestations sur-mesure de Groove Caviar à Biarritz : DJ, speaker, sonorisation, design sonore, production. »
  (EN équivalent.)
- **Attributs `alt`** descriptifs et naturels sur chaque image (ex. « DJ Groove Caviar en prestation », etc.).
- Conserver les mots-clés naturels présents (DJ Biarritz, Pays Basque, mariage, séminaire, sonorisation,
  éclairage, design sonore, production événementielle…). Ne pas appauvrir le texte.

---

## Images (copier de l'ancien projet vers `src/assets/images/`)

`SERVICES-hero.webp`, `SERVICES-prestation-dj.webp`, `SERVICES-prestation-speaker.webp`, `SERVICES-sono.webp`,
`SERVICES-design-sonore.webp`, `SERVICES-prod-event.webp`

## Liens des prestations
- **01 — « Booker un DJ »** → page de devis **Booking DJ** : `/booking-dj` (FR) · `/en/booking-dj` (EN).
  *(Page de devis à créer / slug à confirmer.)*
- **02 — « Réserver un speaker »** → lien `mailto:` pré-rempli vers `contact@groovecaviar.com` (voir section 02).
- **04 — « Évaluer vos besoins »** et **05 — « Faisons la fête ! »** → cible à confirmer (devis ou `/contact`).
- **CTA final** → « Demander un devis » (page devis) + « Contacter l'agence » (`/contact` · `/en/contact`).

---

# CONTENU (FR + EN)

> Hiérarchie : titre de prestation = **H2**, sous-titre = **H3**.

### Hero
- Sur-titre — FR « L'excellence artistique » / EN “Artistic excellence”
- H1 — FR « Nos **Services** » / EN “Our **Services**”

### Bandeau intro
- Titre — FR « Une expertise musicale & technique au service de l'émotion » /
  EN “Musical & technical expertise in service of emotion”
- Para FR : « GROOVE CAVIAR sublime vos événements avec une approche sur-mesure, alliant excellence artistique
  et maîtrise technique pour créer des moments inoubliables. Chaque prestation est pensée comme une œuvre d'art
  unique, où le luxe rencontre la performance. »
- Para EN : “GROOVE CAVIAR elevates your events with a bespoke approach, blending artistic excellence and
  technical mastery to create unforgettable moments. Every service is conceived as a unique work of art, where
  luxury meets performance.”

### 01 — Prestation DJ  *(image à gauche, fond #FFFFFF)*
- Accroche : FR « 01 / La meilleure musique, bien mixée » / EN “01 / The finest music, perfectly mixed”
- Titre (H2) : FR « Prestation DJ » / EN “DJ Services”
- Sous-titre (H3) : FR « Booking DJ & Direction Artistique » / EN “DJ Booking & Artistic Direction”
- Corps FR :
  - **GROOVE CAVIAR** accompagne vos projets en musique et propose des DJ professionnels pour tout type
    d'événements privés ou publics, en vous apportant notre savoir-faire dans l'animation musicale de vos
    manifestations et établissements. Basés à Biarritz, nous intervenons dans toute l'Aquitaine (Pays Basque,
    Landes, Gironde, Béarn…) et au-delà pour offrir une signature musicale unique à vos événements.
  - **Styles & culture musicale.** Notre culture musicale éclectique (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…)
    nous permet de construire des sets sur-mesure. Notre différence : la lecture de la foule, en adaptant
    l'énergie en temps réel pour une piste de danse magnétique.
  - **Professionnalisme & sérénité.** Au-delà de la performance artistique, nous garantissons ponctualité,
    présentation impeccable et matériel haut de gamme. Confiez-nous la direction artistique et technique, et
    profitez pleinement de vos clients et invités.
- Corps EN :
  - **GROOVE CAVIAR** brings music to your projects and provides professional DJs for every kind of private or
    public event, with genuine expertise in the musical animation of your celebrations and venues. Based in
    Biarritz, we operate throughout Aquitaine (Basque Country, Landes, Gironde, Béarn…) and beyond, to give your
    events a unique musical signature.
  - **Styles & musical culture.** Our eclectic musical culture (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…)
    lets us build bespoke sets. Our difference: reading the crowd and adapting the energy in real time for a
    magnetic dancefloor.
  - **Professionalism & peace of mind.** Beyond the artistic performance, we guarantee punctuality, impeccable
    presentation and high-end equipment. Entrust us with the artistic and technical direction, and fully enjoy
    your clients and guests.
- Lien : FR « Booker un DJ → » vers la page de devis **Booking DJ** : `/booking-dj`
  (EN “Book a DJ →” vers `/en/booking-dj`). ⚠️ *Page de devis à créer / slug à confirmer avec Pierre.*

### 02 — Prestation Speaker / MC  *(image à droite, fond #F2F2F2)*
- Accroche : FR « 02 / Donnez de la voix à vos événements » / EN “02 / Give your events a voice”
- Titre (H2) : FR « Prestation Speaker / MC » / EN “Speaker / MC Services”
- Sous-titre (H3) : FR « L'art de l'éloquence » / EN “The art of eloquence”
- Corps FR :
  - La dimension sonore d'un événement ne s'arrête pas à la musique : la voix lie vos invités à votre message.
    Chez **GROOVE CAVIAR**, l'animation d'un micro est un exercice de haute précision. Gala de charité à
    Biarritz, séminaire à Hossegor ou remise de prix internationale : nos intervenants apportent l'étincelle de
    professionnalisme qui transforme une simple annonce en véritable expérience.
  - **Des profils d'experts pour une prestation haut de gamme.** Nos intervenants ne sont pas de simples
    « animateurs », mais de véritables spécialistes de la prise de parole en public :
  - Liste (▶) :
    - **Journalistes & présentateurs** — conférences, salons et foires : crédibilité et structure.
    - **Commentateurs sportifs** — spécialistes du direct pour vos compétitions et démonstrations sportives.
    - **Maîtres de cérémonie** — des voix pétillantes pour vos lancements de produits ou défilés de mode.
    - **Speakers bilingues (FR/EN)** — indispensables pour vos événements internationaux.
  - **Rythme, sobriété et charisme.** Mettons en valeur l'image de votre entreprise ou de votre marque. Nos
    speakers agissent avec charisme mais surtout avec sobriété, évitant les clichés de l'animation
    traditionnelle pour se concentrer sur l'essentiel : capter l'attention, rythmer l'événement et valoriser vos
    messages clés.
- Corps EN :
  - The sound of an event doesn't stop at music: the voice connects your guests to your message. At
    **GROOVE CAVIAR**, working a microphone is an exercise in precision. A charity gala in Biarritz, a seminar in
    Hossegor or an international awards ceremony: our speakers bring the spark of professionalism that turns a
    simple announcement into a genuine experience.
  - **Expert profiles for a premium service.** Our speakers are not mere “hosts”, but true public-speaking
    specialists:
  - List (▶):
    - **Journalists & presenters** — conferences, trade shows and fairs: credibility and structure.
    - **Sports commentators** — live specialists for your competitions and sporting demonstrations.
    - **Masters of ceremony** — sparkling voices for your product launches or fashion shows.
    - **Bilingual speakers (FR/EN)** — essential for your international events.
  - **Rhythm, restraint and charisma.** We put your company or brand image in the spotlight. Our speakers perform
    with charisma but above all with restraint, avoiding the clichés of traditional hosting to focus on what
    matters: capturing attention, pacing the event and highlighting your key messages.
- Lien : FR « Réserver un speaker → » = lien `mailto:` pré-rempli (objet + corps avec 3 lignes à compléter).
  Utiliser **exactement** ce `href` (déjà encodé) :
  `mailto:contact@groovecaviar.com?subject=Je%20souhaite%20r%C3%A9server%20un%20MC/speaker&body=Bonjour%2C%0D%0A%0D%0AJe%20souhaite%20r%C3%A9server%20un%20MC/speaker%20pour%20mon%20%C3%A9v%C3%A9nement.%20Voici%20quelques%20informations%20%3A%0D%0A%0D%0ADate%20%3A%20%0D%0ALieu%20%3A%20%0D%0ALe%20num%C3%A9ro%20o%C3%B9%20me%20joindre%20%3A%20%0D%0A%0D%0AMerci%20de%20me%20recontacter.%0D%0ABien%20cordialement%2C`
  EN « Book a speaker → » = version anglaise du `mailto:` :
  `mailto:contact@groovecaviar.com?subject=I%20would%20like%20to%20book%20an%20MC/speaker&body=Hello%2C%0D%0A%0D%0AI%20would%20like%20to%20book%20an%20MC/speaker%20for%20my%20event.%20Here%20are%20a%20few%20details%3A%0D%0A%0D%0ADate%3A%20%0D%0ALocation%3A%20%0D%0ABest%20phone%20number%20to%20reach%20me%3A%20%0D%0A%0D%0AThank%20you%20for%20getting%20back%20to%20me.%0D%0AKind%20regards%2C`

### 03 — Sonorisation & éclairage  *(image à gauche, fond #FFFFFF)*
- Accroche : FR « 03 / Haute-fidélité & mise en lumière adaptée » / EN “03 / High-fidelity sound & tailored lighting”
- Titre (H2) : FR « Sonorisation & éclairage » / EN “Sound & Lighting”
- Sous-titre (H3) : FR « L'excellence technique au service de l'émotion » / EN “Technical excellence in service of emotion”
- Corps FR :
  - La réussite d'un événement d'exception — mariage au Pays Basque ou séminaire de prestige — repose sur une
    synergie parfaite entre l'art et la technique. Pour éviter tout imprévu, nous investissons exclusivement
    dans des parcs matériels de pointe, parmi les marques leaders de l'audio et du light.
  - **La clarté avant tout.** Une sonorisation réussie, on l'oublie mais on la ressent. Nos systèmes s'adaptent
    à votre lieu :
  - Liste (▶) :
    - **Cérémonie & cocktails** — diffusion cristalline et discrète, même en extérieur.
    - **Dîner & discours** — chaque mot intelligible, sans jamais agresser l'oreille.
    - **Dancefloor** — une puissance maîtrisée pour une immersion façon « club », un son chaud et équilibré.
  - **Design lumière & architecture.** La lumière sculpte l'espace. Nos solutions de mise en lumière
    architecturale (uplighting) transforment instantanément l'atmosphère de votre réception.
  - Encadré citation (bordure or) : « Notre obsession : l'esthétique. Câblage dissimulé, couleurs sobres,
    régies discrètes. La technique doit s'effacer pour laisser place à la magie de l'instant. »
- Corps EN :
  - The success of an exceptional event — a wedding in the Basque Country or a prestige seminar — rests on a
    perfect synergy between art and technique. To rule out surprises, we invest exclusively in state-of-the-art
    equipment from the leading audio and lighting brands.
  - **Clarity above all.** A successful sound setup is forgotten but felt. Our systems adapt to your venue:
  - List (▶):
    - **Ceremony & cocktails** — crystal-clear, discreet sound, even outdoors.
    - **Dinner & speeches** — every word intelligible, without ever straining the ear.
    - **Dancefloor** — mastered power for a “club” immersion, with warm, balanced sound.
  - **Lighting design & architecture.** Light sculpts space. Our architectural lighting solutions (uplighting)
    instantly transform the atmosphere of your reception.
  - Quote box (gold border): “Our obsession: aesthetics. Hidden cabling, sober colours, discreet control booths.
    The technique must fade away to make room for the magic of the moment.”
- Lien : (aucun)

### 04 — Design sonore  *(image à droite, fond #F2F2F2)*
- Accroche : FR « 04 / Identité auditive » / EN “04 / Auditory identity”
- Titre (H2) : FR « Design sonore » / EN “Sound Design”
- Sous-titre (H3) : FR « La création de sons et d'ambiances musicales à votre service » /
  EN “Crafting sounds and musical atmospheres at your service”
  *(la citation « L'ADN sonore… » n'est plus ici : elle devient le bandeau citation placé après cette section)*
- Corps FR :
  - **Boutique, restaurant ou hôtel ?** Nous définissons l'ambiance musicale de votre établissement et élaborons
    sa programmation, en imaginant une identité sonore à votre image.
  - **Événement, salon ou marché de Noël ?** Nous créons et gérons la bande sonore de votre manifestation, de la
    direction artistique à la création de contenus musicaux spécifiques.
  - **Film, spectacle, application ou produit nécessitant de l'audio ?** Scoring, création de bande-son,
    direction musicale ou product sound design : nous mettons vos projets en musique.
  - **La musique à votre service.** Le design sonore est un levier marketing puissant : nous concevons des
    chartes audio et des bandes-son originales qui incarnent vos valeurs et renforcent votre positionnement
    sensoriel. Chez GROOVE CAVIAR, la musique fait partie intégrante de notre quotidien, et notre culture
    musicale est un atout majeur pour la création de contenus riches et variés qui répondront au plus juste à
    vos demandes.
- Corps EN :
  - **Shop, restaurant or hotel?** We define your venue's musical atmosphere and craft its programming, imagining
    a sonic identity in your image.
  - **Event, trade show or Christmas market?** We create and manage your event's soundtrack, from artistic
    direction to bespoke musical content.
  - **Film, show, app or product that needs audio?** Scoring, soundtrack creation, music direction or product
    sound design: we set your projects to music.
  - **Music at your service.** Sound design is a powerful marketing lever: we craft audio guidelines and original
    soundtracks that embody your values and strengthen your sensory positioning. At GROOVE CAVIAR, music is part
    of our everyday life, and our musical culture is a major asset for creating rich, varied content that meets
    your needs precisely.
- Lien : FR « Évaluer vos besoins → » / EN “Assess your needs →”

### 05 — Production événementielle  *(image à gauche, fond #FFFFFF — liste sur 2 colonnes)*
- Accroche : FR « 05 / Direction artistique et technique » / EN “05 / Artistic and technical direction”
- Titre (H2) : FR « Production événementielle » / EN “Event Production”
- Sous-titre (H3) : FR « Créateurs de moments d'exception » / EN “Creators of exceptional moments”
- Corps FR :
  - Au-delà du booking, **GROOVE CAVIAR** est un moteur de création événementielle. Nous concevons, produisons
    et gérons des concepts de soirées et des événements innovants qui marquent l'identité culturelle du
    Pays Basque. De l'intimité d'un club à l'immensité d'une plage, nous transformons chaque lieu en une
    expérience immersive.
  - **Une approche « full service ».** La réussite d'un événement repose sur une coordination millimétrée. Nous
    assurons une direction artistique et technique globale pour garantir la fluidité de chaque projet :
  - Liste (▶, **sur 2 colonnes**) :
    - **Planification & stratégie** — faisabilité, logistique, gestion de projet.
    - **Curation & direction artistique** — identité du concept, sélection des talents.
    - **Programmation DJ** — line-up pointus, cohérents avec l'ADN de l'événement.
    - **Production technique** — sonorisation et éclairage haute performance.
    - **Communication & branding** — création visuelle, stratégie digitale, relations presse.
    - **Réseaux sociaux** — création de contenu et community management en temps réel.
  - **Des soirées et événements mémorables.** De la conception à la coordination terrain, nous orchestrons chaque
    détail avec précision et créativité, pour une exécution irréprochable. Notre mission : faire de chaque
    événement une expérience forte, cohérente et parfaitement maîtrisée.
- Corps EN :
  - Beyond booking, **GROOVE CAVIAR** is an engine of event creation. We design, produce and manage innovative
    party and event concepts that shape the cultural identity of the Basque Country. From the intimacy of a club
    to the vastness of a beach, we transform every venue into an immersive experience.
  - **A “full service” approach.** A successful event rests on millimetre-perfect coordination. We provide global
    artistic and technical direction to guarantee the smooth running of every project:
  - List (▶, **two columns**):
    - **Planning & strategy** — feasibility, logistics, project management.
    - **Curation & artistic direction** — concept identity, talent selection.
    - **DJ programming** — sharp line-ups, coherent with the event's DNA.
    - **Technical production** — high-performance sound and lighting.
    - **Communication & branding** — visual creation, digital strategy, press relations.
    - **Social media** — content creation and real-time community management.
  - **Memorable parties and events.** From concept to on-site coordination, we orchestrate every detail with
    precision and creativity, for flawless execution. Our mission: to make every event a powerful, coherent and
    perfectly mastered experience.
- Lien : FR « Faisons la fête ! → » / EN “Let's celebrate! →”

### Bandeau citation (`.gc-quote-banner`, APRÈS la section 05, juste avant le CTA)
- Citation, **sans auteur** —
  FR : « L'ADN sonore de votre marque est aussi important que son identité visuelle. »
  EN : “Your brand's sonic DNA is as important as its visual identity.”

### CTA final (section sombre, dégradé + shimmer)
- Titre : FR « Votre événement **commence ici** » / EN “Your event **starts here**”
  (le segment en gras utilise la classe `.gc-shimmer`)
- Sous-titre : FR « Prêt à transformer votre vision en une réalité sonore et visuelle exceptionnelle ? Nous
  sommes à votre écoute pour concevoir l'inattendu. » / EN “Ready to turn your vision into an exceptional audio
  and visual reality? We're here to design the unexpected.”
- Bouton 1 (`btn-gc-primary`) : FR « Demander un devis » / EN “Request a quote”
- Bouton 2 (`btn-gc-outline`) : FR « Contacter l'agence » / EN “Contact the agency”
