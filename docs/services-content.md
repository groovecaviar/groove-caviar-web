# Brief — Reconstruction de la page Services (v2, contenu complet)

Reconstruire la page **Services** dans le projet actuel (Astro + Tailwind v4), en reprenant le contenu
**complet de la version en ligne** et l'esprit du design, avec **nos conventions actuelles**.

## ⛔ Périmètre strict (à respecter par Claude Code)

- Créer / modifier **uniquement** : la page Services (`src/pages/services.astro` + version EN `src/pages/en/services.astro`)
  et un fichier de données `src/data/pages/services.ts`.
- **Ne toucher à AUCUN autre fichier** : ni `Header.astro`, ni `Footer.astro`, ni `tailwind.css`, ni les classes
  `btn-gc*`, ni la page d'accueil.
- **Réutiliser l'existant** : `PageLayout` (header + footer fournis), les boutons `btn-gc-primary` /
  `btn-gc-outline`, la classe `.brand`, les variables de police, l'or `#AF9453`.
- **Bilingue** : même schéma que `src/data/pages/home.ts` (contenu FR + EN dans le fichier de données,
  rendu selon la locale). Routes déjà présentes : `/services` ↔ `/en/services`.
- **CSS** : 100 % classes sémantiques `gc-*` dans des blocs `<style>` scopés. **Aucun style inline.**

## ✅ Précisions de design demandées (IMPORTANT)

1. **Chaque section de prestation occupe toute la hauteur de l'écran** : `min-height: 100svh`
   (au moins plein écran ; la section peut grandir si le contenu est plus long). Contenu centré verticalement.
2. **Apparition au scroll** : chaque section apparaît en **fondu + glissement vers le haut** (fade + slide-up).
   Créer une classe réutilisable **`.gc-reveal`** (état initial `opacity:0; translateY(40px)`, état visible
   `opacity:1; translateY(0)`), déclenchée via un `IntersectionObserver`. Respecter `prefers-reduced-motion`
   (pas d'animation si l'utilisateur la désactive).
3. **Ligne dorée animée sous le titre du hero** : doit être une **classe CSS réutilisable** (ex. `.gc-editorial-line`),
   surtout **pas de valeurs hardcodées en inline**. Elle s'étire horizontalement à l'apparition
   (`transform: scaleX(0) → scaleX(1)`), dégradé or transparent → `#AF9453` → transparent.
   *(Note : on la centralisera dans une feuille de style globale quand on traitera les animations de titres
   sur tout le site. Pour l'instant, l'écrire proprement comme une classe autonome, facilement déplaçable.)*
4. **Images des sections** : carrées, `object-cover`, en **noir & blanc → couleur** ET avec un **léger zoom**
   au survol. En faire une **classe réutilisable** (ex. `.gc-media-hover` : `filter: grayscale(1)` + `scale(1)`
   par défaut → `grayscale(0)` + `scale(1.05)` au survol, transition douce ~0.8s).

## Esprit visuel

- **Hero** : pleine hauteur, image de fond + voile sombre, sur-titre doré en capitales très espacées,
  titre « Nos Services » (« Nos » blanc, « Services » **or italique**), ligne dorée animée, puis le sous-titre
  et le paragraphe d'introduction.
- **Sections de prestations** : fond **clair** (blanc ou `#F2F2F2`), texte sombre, accents or — en contraste
  avec le hero et le CTA sombres. **Zigzag** : image à gauche pour 01, 03, 05 ; image à droite pour 02, 04.
- **Numéro doré** (01 /, 02 / …) en sur-titre, titre Josefin gras capitales, sous-titre gris capitales,
  listes à puce **▶ dorée**, encadrés de citation à bordure or, citation Cormorant italique pour la 04.
- **CTA final** : section **sombre**, titre « Votre événement commence ici » (dernier segment en or), sous-titre,
  deux boutons (`btn-gc-primary` « Demander un devis » + `btn-gc-outline` « Contacter l'agence »).

## Images à fournir (copier de l'ancien projet vers `src/assets/images/`)

`SERVICES-hero.webp`, `SERVICES-prestation-dj.webp`, `SERVICES-prestation-speaker.webp`,
`SERVICES-sono.webp`, `SERVICES-design-sonore.webp`, `SERVICES-prod-event.webp`

## Liens
Les liens des prestations pointaient vers la page Soirées/contact. Dans le projet actuel : les faire pointer
vers la page de devis si elle existe, sinon vers `/contact` (et `/en/contact`). À confirmer avec Pierre.

---

## CONTENU (FR + EN)

### Hero
- Sur-titre — FR : « L'excellence artistique » · EN : “Artistic excellence”
- Titre — FR : Nos **Services** · EN : Our **Services** (1er mot blanc, 2e or italique)
- Sous-titre — FR : « Une expertise musicale & technique au service de l'émotion » ·
  EN : “Musical & technical expertise in service of emotion”
- Intro FR : « GROOVE CAVIAR sublime vos événements avec une approche sur-mesure, alliant excellence artistique
  et maîtrise technique pour créer des moments inoubliables. Chaque prestation est pensée comme une œuvre d'art
  unique, où le luxe rencontre la performance. »
- Intro EN : “GROOVE CAVIAR elevates your events with a bespoke approach, blending artistic excellence and
  technical mastery to create unforgettable moments. Every service is conceived as a unique work of art, where
  luxury meets performance.”

---

### 01 — Prestation DJ  *(image à gauche)*
- Accroche — FR : « 01 / La meilleure musique, bien mixée » · EN : “01 / The finest music, perfectly mixed”
- Titre — FR : « Prestation DJ » · EN : “DJ Services”
- Sous-titre — FR : « Booking DJ & Direction Artistique » · EN : “DJ Booking & Artistic Direction”
- Corps FR :
  - **GROOVE CAVIAR** accompagne vos projets en musique et propose des DJ professionnels pour tout type
    d'événements privés ou publics. Nous sommes là pour répondre à vos besoins en vous apportant notre
    savoir-faire dans l'animation musicale de vos manifestations ou de vos établissements. Basés à Biarritz,
    nous intervenons dans toute l'Aquitaine (Pays Basque, Landes, Gironde, Béarn…) et au-delà pour offrir une
    signature musicale unique à vos événements.
  - **Styles & culture musicale.** Notre culture musicale éclectique (Pop, Soul, Funk, Disco, House, Hip-hop,
    Electro…) nous permet de construire des sets sur-mesure. Notre différence réside dans la lecture de la
    foule : nous adaptons l'énergie en temps réel pour une piste de danse magnétique.
  - **Professionnalisme & sérénité.** Au-delà de la performance artistique, nous garantissons un
    professionnalisme absolu : ponctualité, présentation impeccable et matériel haut de gamme. Gagnez du temps
    en nous confiant la direction artistique et technique, et profitez pleinement de vos clients et invités.
- Corps EN :
  - **GROOVE CAVIAR** brings music to your projects and provides professional DJs for every kind of private or
    public event. We meet your needs with genuine expertise in the musical animation of your celebrations and
    venues. Based in Biarritz, we operate throughout Aquitaine (Basque Country, Landes, Gironde, Béarn…) and
    beyond, to give your events a unique musical signature.
  - **Styles & musical culture.** Our eclectic culture (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…) lets
    us build bespoke sets. Our difference lies in reading the crowd: we adapt the energy in real time for a
    magnetic dancefloor.
  - **Professionalism & peace of mind.** Beyond the artistic performance, we guarantee absolute professionalism:
    punctuality, impeccable presentation and high-end equipment. Save time by entrusting us with the artistic
    and technical direction, and fully enjoy your clients and guests.
- Lien — FR : « Booker un DJ → » · EN : “Book a DJ →”

---

### 02 — Prestation Speaker / MC  *(image à droite)*
- Accroche — FR : « 02 / Donnez de la voix à vos événements » · EN : “02 / Give your events a voice”
- Titre — FR : « Prestation Speaker / MC » · EN : “Speaker / MC Services”
- Sous-titre — FR : « L'art de l'éloquence » · EN : “The art of eloquence”
- Corps FR :
  - La dimension sonore d'un événement ne s'arrête pas à la musique. La voix est l'élément conducteur qui lie
    vos invités à votre message. Chez **GROOVE CAVIAR**, nous comprenons que l'animation d'un micro est un
    exercice de haute précision. Que ce soit pour un gala de charité à Biarritz, un séminaire d'entreprise à
    Hossegor ou une remise de prix internationale, nos intervenants apportent cette étincelle de
    professionnalisme qui fait la différence entre une simple annonce et une véritable expérience.
  - **Des profils d'experts pour une prestation haut de gamme.** Nous avons sélectionné les meilleurs
    spécialistes de l'animation pour répondre aux exigences les plus élevées. Nos intervenants ne sont pas de
    simples « animateurs », mais de véritables experts de la prise de parole en public :
  - Liste (puce ▶ dorée) :
    - **Journalistes & présentateurs :** idéals pour vos conférences, salons professionnels et foires,
      apportant crédibilité et structure.
    - **Commentateurs sportifs :** spécialistes du direct pour vos compétitions et démonstrations sportives.
    - **Maîtres de cérémonie :** des voix familières et pétillantes pour dynamiser vos lancements de produits
      ou défilés de mode.
    - **Speakers bilingues (FR/EN) :** un atout indispensable pour vos événements internationaux, garantissant
      une compréhension parfaite de tous vos convives.
  - **Rythme, sobriété et charisme.** L'objectif de **GROOVE CAVIAR** est de valoriser l'image de votre
    entreprise ou de votre marque. Nos speakers agissent avec charisme mais surtout avec sobriété, évitant les
    clichés de l'animation traditionnelle pour se concentrer sur l'essentiel : capter l'attention, rythmer
    l'événement et valoriser vos messages clés.
- Corps EN :
  - The sound of an event doesn't stop at music. The voice is the thread that connects your guests to your
    message. At **GROOVE CAVIAR**, we know that working a microphone is an exercise in precision. Whether for a
    charity gala in Biarritz, a corporate seminar in Hossegor or an international awards ceremony, our speakers
    bring that spark of professionalism that turns a simple announcement into a genuine experience.
  - **Expert profiles for a premium service.** We have selected the very best hosting specialists to meet the
    highest standards. Our speakers are not mere “hosts”, but true experts in public speaking:
  - List (gold ▶ bullet):
    - **Journalists & presenters:** ideal for your conferences, trade shows and fairs, bringing credibility and
      structure.
    - **Sports commentators:** live specialists for your competitions and sporting demonstrations.
    - **Masters of ceremony:** familiar, sparkling voices to energise your product launches or fashion shows.
    - **Bilingual speakers (FR/EN):** an essential asset for your international events, ensuring perfect
      understanding for all your guests.
  - **Rhythm, restraint and charisma.** GROOVE CAVIAR's goal is to enhance the image of your company or brand.
    Our speakers perform with charisma but above all with restraint, avoiding the clichés of traditional hosting
    to focus on what matters: capturing attention, pacing the event and highlighting your key messages.
- Lien — FR : « Réserver un speaker → » · EN : “Book a speaker →”

---

### 03 — Sonorisation & éclairage  *(image à gauche)*
- Accroche — FR : « 03 / Haute-fidélité & mise en lumière adaptée » ·
  EN : “03 / High-fidelity sound & tailored lighting”
- Titre — FR : « Sonorisation & éclairage » · EN : “Sound & Lighting”
- Sous-titre — FR : « L'excellence technique au service de l'émotion » ·
  EN : “Technical excellence in service of emotion”
- Corps FR :
  - La réussite d'un événement d'exception, qu'il s'agisse d'un mariage au Pays Basque ou d'un séminaire de
    prestige, repose sur une synergie parfaite entre l'art et la technique. Chez **GROOVE CAVIAR**, nous
    considérons que la qualité sonore et l'immersion visuelle sont les piliers de votre soirée. Pour éviter
    tout imprévu technique, nous investissons exclusivement dans des parcs matériels de pointe, sélectionnés
    parmi les marques leaders du marché audio et light.
  - **La clarté avant tout.** Une sonorisation réussie est une sonorisation que l'on oublie, mais que l'on
    ressent. Nous déployons des systèmes adaptés à la configuration de votre lieu :
  - Liste (puce ▶ dorée) :
    - **Cérémonie & cocktails :** diffusion cristalline et discrète pour vos vœux et vos ambiances lounge,
      même en extérieur.
    - **Dîner & discours :** gestion parfaite de la dynamique pour que chaque mot soit intelligible sans jamais
      agresser l'oreille.
    - **Dancefloor :** une puissance maîtrisée pour une immersion totale façon « club », avec un son chaud et
      équilibré.
  - **Design lumière & architecture.** La lumière ne sert pas qu'à éclairer, elle sculpte l'espace. Personne ne
    souhaite célébrer un moment unique sous un éclairage froid. Nos solutions de mise en lumière architecturale
    (uplighting) transforment instantanément l'atmosphère de votre salle de réception ou de vos espaces
    extérieurs.
  - Encadré (citation, bordure or) : « Intégration invisible. Notre obsession : l'esthétique. Câblage dissimulé,
    couleurs sobres, régies discrètes. La technique doit s'effacer pour laisser place à la magie de l'instant et
    respecter la scénographie de votre lieu de réception. »
- Corps EN :
  - The success of an exceptional event — be it a wedding in the Basque Country or a prestige seminar — rests on
    a perfect synergy between art and technique. At **GROOVE CAVIAR**, we consider sound quality and visual
    immersion to be the pillars of your evening. To rule out any technical surprise, we invest exclusively in
    state-of-the-art equipment, chosen from the leading audio and lighting brands.
  - **Clarity above all.** A successful sound setup is one you forget but feel. We deploy systems tailored to
    your venue's configuration:
  - List (gold ▶ bullet):
    - **Ceremony & cocktails:** crystal-clear, discreet sound for your vows and lounge atmospheres, even
      outdoors.
    - **Dinner & speeches:** perfect dynamic control so every word is intelligible without ever straining the
      ear.
    - **Dancefloor:** mastered power for a full “club” immersion, with warm, balanced sound.
  - **Lighting design & architecture.** Light doesn't just illuminate, it sculpts space. No one wants to
    celebrate a unique moment under cold lighting. Our architectural lighting solutions (uplighting) instantly
    transform the atmosphere of your reception hall or outdoor spaces.
  - Quote box (gold border): “Invisible integration. Our obsession: aesthetics. Hidden cabling, sober colours,
    discreet control booths. The technique must fade away to make room for the magic of the moment and respect
    the scenography of your venue.”
- Lien : (aucun)

---

### 04 — Design sonore  *(image à droite)*
- Accroche — FR : « 04 / Identité auditive » · EN : “04 / Auditory identity”
- Titre — FR : « Design sonore » · EN : “Sound Design”
- Citation (Cormorant italique) — FR : « L'ADN sonore de votre marque est aussi important que son identité
  visuelle. » · EN : “Your brand's sonic DNA is as important as its visual identity.”
- Corps FR :
  - **Vous gérez une boutique, un restaurant ou un hôtel et souhaitez renforcer votre image de marque ?**
    **GROOVE CAVIAR** est là pour vous aider à définir l'ambiance musicale de votre établissement et élaborer
    sa programmation. Depuis toujours passionnés par la musique, nous avons acquis une culture éclectique qui
    nous permet de répondre à un grand nombre d'exigences en termes d'univers musicaux et d'imaginer une
    identité sonore à votre image.
  - **Vous organisez un événement, un salon professionnel ou un marché de Noël ?** Nous sommes là pour créer et
    gérer la bande sonore de votre manifestation ! De la direction artistique à la création de contenus
    musicaux spécifiques, notre équipe est prête à répondre à une multitude de besoins en matière de design
    sonore et musical.
  - **Vous réalisez un film ou une vidéo, préparez un spectacle, créez une application ou un produit nécessitant
    de l'audio ?** Nous sommes à votre écoute pour retranscrire vos envies et vous proposer des solutions
    adaptées : scoring, création de bande-son, direction musicale ou encore product sound design.
  - **La musique à votre service.** Le design sonore est un levier marketing puissant. Nous concevons des
    chartes audio et des bandes-son originales qui incarnent vos valeurs et renforcent votre positionnement
    sensoriel.
- Corps EN :
  - **Do you run a shop, a restaurant or a hotel and want to strengthen your brand image?** **GROOVE CAVIAR** is
    here to help you define your venue's musical atmosphere and craft its programming. Lifelong music lovers, we
    have built an eclectic culture that lets us meet a wide range of needs in terms of musical worlds and imagine
    a sonic identity in your image.
  - **Are you organising an event, a trade show or a Christmas market?** We're here to create and manage your
    event's soundtrack! From artistic direction to the creation of specific musical content, our team is ready
    to meet a multitude of sound- and music-design needs.
  - **Are you making a film or video, preparing a show, creating an app or a product that needs audio?** We're
    here to translate your ideas and offer tailored solutions: scoring, soundtrack creation, music direction or
    product sound design.
  - **Music at your service.** Sound design is a powerful marketing lever. We create audio guidelines and
    original soundtracks that embody your values and strengthen your sensory positioning.
- Lien — FR : « Évaluer vos besoins → » · EN : “Assess your needs →”

---

### 05 — Production événementielle  *(image à gauche)*
- Accroche — FR : « 05 / Direction artistique et technique » · EN : “05 / Artistic and technical direction”
- Titre — FR : « Production événementielle » · EN : “Event Production”
- Sous-titre — FR : « Créateurs de moments d'exception » · EN : “Creators of exceptional moments”
- Corps FR :
  - Au-delà du booking, **GROOVE CAVIAR** est un moteur de création événementielle. Nous concevons, produisons
    et gérons des concepts de soirées et des événements innovants qui marquent l'identité culturelle du
    Pays Basque. De l'intimité d'un club à l'immensité d'une plage, nous transformons chaque lieu en une
    expérience immersive.
  - **Une approche « full service ».** La réussite d'un événement repose sur une coordination millimétrée. Nous
    assurons une direction artistique et technique globale pour garantir la fluidité de chaque projet.
  - Liste (puce ▶ dorée) :
    - **Planification & stratégie :** étude de faisabilité, logistique globale et gestion de projet.
    - **Curation & direction artistique :** création de l'identité du concept et sélection des talents.
    - **Programmation DJ :** line-up pointus et cohérents avec l'ADN de l'événement.
    - **Production technique :** déploiement de systèmes de sonorisation et d'éclairage haute performance.
    - **Communication & branding :** création visuelle, stratégie digitale et relations presse.
    - **Gestion des réseaux sociaux :** création de contenu et community management en temps réel.
  - **Des soirées et événements mémorables.** De la conception à la coordination terrain, nous assurons une
    production événementielle sans faille. Parce que chaque événement mérite une exécution irréprochable, nous
    orchestrons tous les détails avec précision et créativité.
- Corps EN :
  - Beyond booking, **GROOVE CAVIAR** is an engine of event creation. We design, produce and manage innovative
    party concepts and events that shape the cultural identity of the Basque Country. From the intimacy of a
    club to the vastness of a beach, we transform every venue into an immersive experience.
  - **A “full service” approach.** A successful event rests on millimetre-perfect coordination. We provide
    global artistic and technical direction to guarantee the smooth running of every project.
  - List (gold ▶ bullet):
    - **Planning & strategy:** feasibility study, end-to-end logistics and project management.
    - **Curation & artistic direction:** creating the concept's identity and selecting talent.
    - **DJ programming:** sharp line-ups, coherent with the event's DNA.
    - **Technical production:** deployment of high-performance sound and lighting systems.
    - **Communication & branding:** visual creation, digital strategy and press relations.
    - **Social media management:** content creation and real-time community management.
  - **Memorable parties and events.** From concept to on-site coordination, we deliver flawless event
    production. Because every event deserves impeccable execution, we orchestrate every detail with precision
    and creativity.
- Lien — FR : « Faisons la fête ! → » · EN : “Let's celebrate! →”

---

### CTA final (section sombre, pleine largeur)
- Titre — FR : « Votre événement **commence ici** » · EN : “Your event **starts here**” (dernier segment en or)
- Sous-titre — FR : « Prêt à transformer votre vision en une réalité sonore et visuelle exceptionnelle ? Nous
  sommes à votre écoute pour concevoir l'inattendu. » · EN : “Ready to turn your vision into an exceptional
  audio and visual reality? We're here to design the unexpected.”
- Bouton 1 (`btn-gc-primary`) — FR : « Demander un devis » · EN : “Request a quote”
- Bouton 2 (`btn-gc-outline`) — FR : « Contacter l'agence » · EN : “Contact the agency” (vers `/contact` / `/en/contact`)
