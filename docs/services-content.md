# Brief — Reconstruction de la page Services

Ce document décrit la page **Services** à reconstruire dans le projet actuel (Astro + Tailwind v4),
en reprenant le contenu et l'esprit de l'ancienne version, mais avec **nos conventions actuelles**.

## ⛔ Périmètre strict (à respecter par Claude Code)

- Créer / modifier **uniquement** : la page Services (`src/pages/services.astro` + version EN `src/pages/en/services.astro`)
  et un nouveau fichier de données `src/data/pages/services.ts`.
- **Ne toucher à AUCUN autre fichier** : ni `Header.astro`, ni `Footer.astro`, ni `tailwind.css`, ni les classes
  `btn-gc*`, ni la page d'accueil.
- **Réutiliser l'existant** : `PageLayout` (qui fournit déjà header + footer), les boutons `btn-gc-primary`
  et `btn-gc-outline`, la classe `.brand`, les variables de police, l'or `#AF9453`.
- **Bilingue** : suivre le même schéma que `src/data/pages/home.ts` (contenu FR + EN dans un fichier de données,
  rendu selon la locale). Les routes existent déjà dans `routes.ts` (`/services` ↔ `/en/services`).
- **CSS** : 100 % classes sémantiques `gc-*` dans des blocs `<style>` scopés. Aucun style inline.

## Esprit visuel (à recréer dans le nouveau système)

- **Hero** : pleine hauteur, image de fond + voile sombre, sur-titre doré en capitales très espacées,
  titre « Nos Services » (« Nos » en blanc, « Services » en **or, italique**), puis une **fine ligne dorée**
  qui s'étire horizontalement (animation à l'apparition).
- **Sections de prestations** : fond **clair** (blanc ou `#F2F2F2`), texte sombre, accents or — en contraste
  avec le hero et le CTA sombres. Disposition en **zigzag** : image à gauche pour les sections 01, 03, 05 ;
  image à droite pour 02 et 04.
- **Images** : carrées, `object-cover`, **noir & blanc → couleur + léger zoom au survol** (même traitement que
  le hero d'accueil).
- **Numéro doré** (01 /, 02 / …) en sur-titre de chaque prestation, titre en Josefin gras capitales,
  sous-titre en gris capitales, corps en texte courant.
- **CTA final** : section **sombre**, titre « Votre événement commence ici » (dernier mot en or), sous-titre,
  puis deux boutons (`btn-gc-primary` « Demander un devis » + `btn-gc-outline` « Contacter l'agence »).
- **Animation d'apparition** : créer une petite classe réutilisable (ex. `gc-reveal`) qui fait apparaître
  les sections en fondu + glissement vers le haut au scroll (IntersectionObserver). Respecter
  `prefers-reduced-motion`.

## Images à fournir (à copier depuis l'ancien projet vers `src/assets/images/`)

- `SERVICES-hero.webp` (image de fond du hero)
- `SERVICES-prestation-dj.webp`
- `SERVICES-prestation-speaker.webp`
- `SERVICES-sonorisation.webp`
- `SERVICES-design-sonore.webp`
- `SERVICES-prod-event.webp`

---

## CONTENU

### Hero
- Sur-titre — FR : « L'excellence artistique » · EN : “Artistic excellence”
- Titre — FR : Nos **Services** · EN : Our **Services** (1er mot blanc, 2e mot or italique)

---

### 01 — Prestation DJ
- Numéro / accroche — FR : « 01 / La meilleure musique, bien mixée » · EN : “01 / The finest music, perfectly mixed”
- Titre — FR : « Prestation DJ » · EN : “DJ Services”
- Sous-titre — FR : « Booking DJ & Direction Artistique » · EN : “DJ Booking & Artistic Direction”
- Corps FR :
  - **GROOVE CAVIAR** accompagne vos projets en musique et propose des DJ professionnels pour tout type
    d'événements privés ou publics. Nous sommes là pour répondre à vos besoins en vous apportant notre
    savoir-faire dans l'animation musicale de vos manifestations ou de vos établissements.
  - Basés à Biarritz, nous intervenons dans toute l'Aquitaine (Pays Basque, Landes, Gironde, Béarn…)
    et au-delà pour offrir une signature musicale unique à vos événements.
  - **Styles & culture musicale :** notre culture musicale éclectique (Pop, Soul, Funk, Disco, House,
    Hip-hop, Electro…) nous permet de construire des sets sur-mesure. Notre différence réside dans la lecture
    de la foule : nous adaptons l'énergie en temps réel.
- Corps EN :
  - **GROOVE CAVIAR** brings music to your projects and provides professional DJs for every kind of private
    or public event. We meet your needs with genuine expertise in the musical animation of your celebrations
    and venues.
  - Based in Biarritz, we operate throughout the Aquitaine region (Basque Country, Landes, Gironde, Béarn…)
    and beyond, to give your events a unique musical signature.
  - **Styles & musical culture:** our eclectic culture (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…)
    lets us build bespoke sets. Our difference lies in reading the crowd: we adapt the energy in real time.
- Lien — FR : « Booker un DJ → » · EN : “Book a DJ →” (vers la page de devis / contact)

---

### 02 — Prestation Speaker / MC  *(image à droite)*
- Numéro / accroche — FR : « 02 / Donnez de la voix à vos événements » · EN : “02 / Give your events a voice”
- Titre — FR : « Prestation Speaker / MC » · EN : “Speaker / MC Services”
- Sous-titre — FR : « L'art de l'éloquence » · EN : “The art of eloquence”
- Corps FR :
  - La dimension sonore d'un événement ne s'arrête pas à la musique. La voix est l'élément conducteur qui lie
    vos invités à votre message. Chez **GROOVE CAVIAR**, nous comprenons que l'animation d'un micro est un
    exercice de haute précision.
  - Liste (puce ▶ dorée) :
    - **Journalistes & présentateurs :** idéals pour vos conférences et salons professionnels.
    - **Commentateurs sportifs :** spécialistes du direct pour vos compétitions.
    - **Maîtres de cérémonie :** des voix élégantes pour dynamiser vos lancements de produits.
    - **Speakers bilingues (FR/EN) :** un atout indispensable pour vos événements internationaux.
  - **Rythme, sobriété et charisme :** nos speakers agissent avec charisme mais surtout avec sobriété,
    évitant les clichés de l'animation traditionnelle pour se concentrer sur l'essentiel.
- Corps EN :
  - The sound of an event doesn't stop at music. The voice is the thread that connects your guests to your
    message. At **GROOVE CAVIAR**, we know that working a microphone is an exercise in precision.
  - List (gold ▶ bullet):
    - **Journalists & presenters:** ideal for your conferences and trade shows.
    - **Sports commentators:** live specialists for your competitions.
    - **Masters of ceremony:** elegant voices to energise your product launches.
    - **Bilingual speakers (FR/EN):** an essential asset for your international events.
  - **Rhythm, restraint and charisma:** our speakers perform with charisma but above all with restraint,
    avoiding the clichés of traditional hosting to focus on what matters.
- Lien — FR : « Réserver un speaker → » · EN : “Book a speaker →”

---

### 03 — Sonorisation & éclairage
- Numéro / accroche — FR : « 03 / Haute-fidélité & mise en lumière adaptée » · EN : “03 / High-fidelity sound & tailored lighting”
- Titre — FR : « Sonorisation & éclairage » · EN : “Sound & Lighting”
- Sous-titre — FR : « L'excellence technique au service de l'émotion » · EN : “Technical excellence in service of emotion”
- Corps FR :
  - La réussite d'un événement d'exception repose sur une synergie parfaite entre l'art et la technique.
    Pour éviter tout imprévu technique, nous investissons exclusivement dans des parcs matériels de pointe
    (marques leaders du marché audio et light).
  - **La clarté avant tout :** diffusion cristalline et discrète pour vos cocktails en extérieur, gestion de
    la dynamique pour les discours, et puissance maîtrisée pour une immersion totale façon « club » sur le
    dancefloor.
  - Encadré (citation, bordure or) : « Notre obsession : l'esthétique. Câblage dissimulé, couleurs sobres,
    régies discrètes. La technique doit s'effacer pour laisser place à la magie de l'instant. »
- Corps EN :
  - The success of an exceptional event rests on a perfect synergy between art and technique. To rule out any
    technical surprise, we invest exclusively in state-of-the-art equipment (leading audio and lighting brands).
  - **Clarity above all:** crystal-clear, discreet sound for your outdoor cocktails, dynamic control for
    speeches, and mastered power for a full “club” immersion on the dancefloor.
  - Quote box (gold border): “Our obsession: aesthetics. Hidden cabling, sober colours, discreet control
    booths. The technique must fade away to make room for the magic of the moment.”
- Lien : (aucun dans l'original — laisser sans lien)

---

### 04 — Design sonore  *(image à droite)*
- Numéro / accroche — FR : « 04 / Identité auditive » · EN : “04 / Auditory identity”
- Titre — FR : « Design sonore » · EN : “Sound Design”
- Citation (Cormorant italique) — FR : « L'ADN sonore de votre marque est aussi important que son identité
  visuelle. » · EN : “Your brand's sonic DNA is as important as its visual identity.”
- Corps FR :
  - Vous gérez une boutique, un restaurant ou un hôtel ? Nous vous aidons à définir l'ambiance musicale de
    votre établissement et à élaborer sa programmation sur-mesure.
  - Le design sonore est un levier marketing puissant. Nous concevons des chartes audio et des bandes-son
    originales qui incarnent vos valeurs et renforcent votre positionnement sensoriel.
- Corps EN :
  - Do you run a shop, a restaurant or a hotel? We help you define your venue's musical atmosphere and craft
    its bespoke programming.
  - Sound design is a powerful marketing lever. We create audio guidelines and original soundtracks that
    embody your values and strengthen your sensory positioning.
- Lien — FR : « Évaluer vos besoins → » · EN : “Assess your needs →”

---

### 05 — Production événementielle
- Numéro / accroche — FR : « 05 / Direction artistique et technique » · EN : “05 / Artistic and technical direction”
- Titre — FR : « Production événementielle » · EN : “Event Production”
- Sous-titre — FR : « Créateurs de moments d'exception » · EN : “Creators of exceptional moments”
- Corps FR :
  - Au-delà du booking, **GROOVE CAVIAR** est un moteur de création événementielle. Nous concevons, produisons
    et gérons des concepts de soirées et des événements innovants qui marquent l'identité culturelle du
    Pays Basque.
  - **Une approche « full service » :** étude de faisabilité, logistique globale, sélection des talents,
    déploiement des systèmes de sonorisation, communication et branding en temps réel.
- Corps EN :
  - Beyond booking, **GROOVE CAVIAR** is an engine of event creation. We design, produce and manage innovative
    party concepts and events that shape the cultural identity of the Basque Country.
  - **A “full service” approach:** feasibility study, end-to-end logistics, talent selection, sound-system
    deployment, communication and real-time branding.
- Lien — FR : « Faisons la fête ! → » · EN : “Let's celebrate! →”

---

### CTA final (section sombre)
- Titre — FR : « Votre événement **commence ici** » · EN : “Your event **starts here**” (dernier segment en or)
- Sous-titre — FR : « Prêt à transformer votre vision en une réalité sonore et visuelle exceptionnelle ?
  Nous sommes à votre écoute pour concevoir l'inattendu. » · EN : “Ready to turn your vision into an
  exceptional audio and visual reality? We're here to design the unexpected.”
- Bouton 1 (`btn-gc-primary`) — FR : « Demander un devis » · EN : “Request a quote” (vers la page de devis)
- Bouton 2 (`btn-gc-outline`) — FR : « Contacter l'agence » · EN : “Contact the agency” (vers `/contact` / `/en/contact`)

---

## Liens (à adapter aux routes du projet)
Les liens « Booker un DJ », « Réserver un speaker », etc. pointaient vers une page de contact dans l'ancienne
version. Dans le projet actuel, les faire pointer vers la page de devis si elle existe, sinon vers `/contact`
(et `/en/contact` côté anglais). À confirmer avec Pierre si besoin.
