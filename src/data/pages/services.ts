interface ServiceLink {
  readonly text: string;
  readonly href: string;
}

interface ServiceItem {
  readonly num: string;
  readonly accroche: string;
  readonly title: string;
  readonly subtitle: string | null;
  readonly body: string;
  readonly list: readonly string[] | null;
  readonly blockquote: string | null;
  readonly link: ServiceLink | null;
  readonly imageAlt: string;
  readonly reverse: boolean;
}

interface ServicesHero {
  readonly eyebrow: string;
  readonly titleWhite: string;
  readonly titleGold: string;
}

interface ServicesIntro {
  readonly title: string;
  readonly paragraph: string;
}

interface ServicesQuoteBanner {
  readonly quote: string;
}

interface ServicesCta {
  readonly titleWhite: string;
  readonly titleShimmer: string;
  readonly subtitle: string;
  readonly btnQuote: ServiceLink;
  readonly btnContact: ServiceLink;
}

export interface ServicesContent {
  readonly hero: ServicesHero;
  readonly intro: ServicesIntro;
  readonly services: readonly ServiceItem[];
  readonly quoteBanner: ServicesQuoteBanner;
  readonly cta: ServicesCta;
}

export const services: Record<'fr' | 'en', ServicesContent> = {
  fr: {
    hero: {
      eyebrow: "L'excellence artistique",
      titleWhite: 'Nos',
      titleGold: 'Services',
    },

    intro: {
      title: "Une expertise musicale & technique au service de l'émotion",
      paragraph:
        "<span class=\"brand\">Groove Caviar</span> sublime vos événements avec une approche sur-mesure, alliant excellence artistique et maîtrise technique pour créer des moments inoubliables. Chaque prestation est pensée comme une œuvre d'art unique, où le luxe rencontre la performance.",
    },

    services: [
      {
        num: '01',
        accroche: '01 / La meilleure musique, bien mixée',
        title: 'Prestation DJ',
        subtitle: 'Booking DJ & Direction Artistique',
        body: `<p><span class="brand">Groove Caviar</span> accompagne vos projets en musique et propose des DJ professionnels pour tout type d'événements privés ou publics, en vous apportant notre savoir-faire dans l'animation musicale de vos manifestations et établissements. Basés à Biarritz, nous intervenons dans toute l'Aquitaine (Pays Basque, Landes, Gironde, Béarn…) et au-delà pour offrir une signature musicale unique à vos événements.</p><p><strong>Styles &amp; culture musicale.</strong> Notre culture musicale éclectique (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…) nous permet de construire des sets sur-mesure. Notre différence : la lecture de la foule, en adaptant l'énergie en temps réel pour une piste de danse magnétique.</p><p><strong>Professionnalisme &amp; sérénité.</strong> Au-delà de la performance artistique, nous garantissons ponctualité, présentation impeccable et matériel haut de gamme. Confiez-nous la direction artistique et technique, et profitez pleinement de vos clients et invités.</p>`,
        list: null,
        blockquote: null,
        link: { text: 'Booker un DJ', href: '/devis/booking-dj' },
        imageAlt: 'DJ Groove Caviar en prestation',
        reverse: false,
      },

      {
        num: '02',
        accroche: '02 / Donnez de la voix à vos événements',
        title: 'Prestation Speaker / MC',
        subtitle: "L'art de l'éloquence",
        body: `<p>La dimension sonore d'un événement ne s'arrête pas à la musique : la voix lie vos invités à votre message. Chez <span class="brand">Groove Caviar</span>, l'animation d'un micro est un exercice de haute précision. Gala de charité à Biarritz, séminaire à Hossegor ou remise de prix internationale : nos intervenants apportent l'étincelle de professionnalisme qui transforme une simple annonce en véritable expérience.</p><p><strong>Des profils d'experts pour une prestation haut de gamme.</strong> Nos intervenants ne sont pas de simples « animateurs », mais de véritables spécialistes de la prise de parole en public :</p>`,
        list: [
          'Journalistes & présentateurs — conférences, salons et foires : crédibilité et structure.',
          'Commentateurs sportifs — spécialistes du direct pour vos compétitions et démonstrations sportives.',
          'Maîtres de cérémonie — des voix pétillantes pour vos lancements de produits ou défilés de mode.',
          'Speakers bilingues (FR/EN) — indispensables pour vos événements internationaux.',
        ],
        blockquote: null,
        link: {
          text: 'Réserver un speaker',
          href: 'mailto:contact@groovecaviar.com?subject=Je%20souhaite%20r%C3%A9server%20un%20MC/speaker&body=Bonjour%2C%0D%0A%0D%0AJe%20souhaite%20r%C3%A9server%20un%20MC/speaker%20pour%20mon%20%C3%A9v%C3%A9nement.%20Voici%20quelques%20informations%20%3A%0D%0A%0D%0ADate%20%3A%20%0D%0ALieu%20%3A%20%0D%0ALe%20num%C3%A9ro%20o%C3%B9%20me%20joindre%20%3A%20%0D%0A%0D%0AMerci%20de%20me%20recontacter.%0D%0ABien%20cordialement%2C',
        },
        imageAlt: 'Speaker / MC en événement haut de gamme',
        reverse: true,
      },

      {
        num: '03',
        accroche: '03 / Haute-fidélité & mise en lumière adaptée',
        title: 'Sonorisation & éclairage',
        subtitle: "L'excellence technique au service de l'émotion",
        body: `<p>La réussite d'un événement d'exception — mariage au Pays Basque ou séminaire de prestige — repose sur une synergie parfaite entre l'art et la technique. Pour éviter tout imprévu, nous investissons exclusivement dans des parcs matériels de pointe, parmi les marques leaders de l'audio et du light.</p><p><strong>La clarté avant tout.</strong> Une sonorisation réussie, on l'oublie mais on la ressent. Nos systèmes s'adaptent à votre lieu :</p>`,
        list: [
          'Cérémonie & cocktails — diffusion cristalline et discrète, même en extérieur.',
          "Dîner & discours — chaque mot intelligible, sans jamais agresser l'oreille.",
          'Dancefloor — une puissance maîtrisée pour une immersion façon « club », un son chaud et équilibré.',
        ],
        blockquote:
          "Notre obsession : l'esthétique. Câblage dissimulé, couleurs sobres, régies discrètes. La technique doit s'effacer pour laisser place à la magie de l'instant.",
        link: null,
        imageAlt: 'Sonorisation et éclairage événementiel haut de gamme',
        reverse: false,
      },

      {
        num: '04',
        accroche: '04 / Identité auditive',
        title: 'Design sonore',
        subtitle: "La création de sons et d'ambiances musicales à votre service",
        body: `<p><strong>Boutique, restaurant ou hôtel&nbsp;?</strong> Nous définissons l'ambiance musicale de votre établissement et élaborons sa programmation, en imaginant une identité sonore à votre image.</p><p><strong>Événement, salon ou marché de Noël&nbsp;?</strong> Nous créons et gérons la bande sonore de votre manifestation, de la direction artistique à la création de contenus musicaux spécifiques.</p><p><strong>Film, spectacle, application ou produit nécessitant de l'audio&nbsp;?</strong> Scoring, création de bande-son, direction musicale ou product sound design : nous mettons vos projets en musique.</p><p><strong>La musique à votre service.</strong> Le design sonore est un levier marketing puissant : nous concevons des chartes audio et des bandes-son originales qui incarnent vos valeurs et renforcent votre positionnement sensoriel. Chez <span class="brand">Groove Caviar</span>, la musique fait partie intégrante de notre quotidien, et notre culture musicale est un atout majeur pour la création de contenus riches et variés qui répondront au plus juste à vos demandes.</p>`,
        list: null,
        blockquote: null,
        link: { text: 'Évaluer vos besoins', href: '/contact' },
        imageAlt: 'Design sonore et identité auditive de marque',
        reverse: true,
      },

      {
        num: '05',
        accroche: '05 / Direction artistique et technique',
        title: 'Production événementielle',
        subtitle: "Créateurs de moments d'exception",
        body: `<p>Au-delà du booking, <span class="brand">Groove Caviar</span> est un moteur de création événementielle. Nous concevons, produisons et gérons des concepts de soirées et des événements innovants qui marquent l'identité culturelle du Pays Basque. De l'intimité d'un club à l'immensité d'une plage, nous transformons chaque lieu en une expérience immersive.</p><p><strong>Une approche « full service ».</strong> La réussite d'un événement repose sur une coordination millimétrée. Nous assurons une direction artistique et technique globale pour garantir la fluidité de chaque projet :</p>`,
        list: [
          'Planification & stratégie — faisabilité, logistique, gestion de projet.',
          "Curation & direction artistique — identité du concept, sélection des talents.",
          "Programmation DJ — line-up pointus, cohérents avec l'ADN de l'événement.",
          'Production technique — sonorisation et éclairage haute performance.',
          'Communication & branding — création visuelle, stratégie digitale, relations presse.',
          'Réseaux sociaux — création de contenu et community management en temps réel.',
        ],
        blockquote: null,
        link: { text: 'Faisons la fête !', href: '/contact' },
        imageAlt: 'Production événementielle et direction artistique',
        reverse: false,
      },
    ],

    quoteBanner: {
      quote: "L'ADN sonore de votre marque est aussi important<br class=\"gc-br-lg\"> que son identité visuelle.",
    },

    cta: {
      titleWhite: 'Votre événement',
      titleShimmer: 'commence ici',
      subtitle:
        "Prêt à transformer votre vision en une réalité sonore et visuelle exceptionnelle&nbsp;?<br>Nous sommes à votre écoute pour concevoir l'inattendu.",
      btnQuote: { text: 'Demander un devis', href: '/devis/booking-dj' },
      btnContact: { text: "Contacter l'agence", href: '/contact' },
    },
  },

  en: {
    hero: {
      eyebrow: 'Artistic excellence',
      titleWhite: 'Our',
      titleGold: 'Services',
    },

    intro: {
      title: 'Musical & technical expertise in service of emotion',
      paragraph:
        '<span class="brand">Groove Caviar</span> elevates your events with a bespoke approach, blending artistic excellence and technical mastery to create unforgettable moments. Every service is conceived as a unique work of art, where luxury meets performance.',
    },

    services: [
      {
        num: '01',
        accroche: '01 / The finest music, perfectly mixed',
        title: 'DJ Services',
        subtitle: 'DJ Booking & Artistic Direction',
        body: `<p><span class="brand">Groove Caviar</span> brings music to your projects and provides professional DJs for every kind of private or public event, with genuine expertise in the musical animation of your celebrations and venues. Based in Biarritz, we operate throughout Aquitaine (Basque Country, Landes, Gironde, Béarn…) and beyond, to give your events a unique musical signature.</p><p><strong>Styles &amp; musical culture.</strong> Our eclectic musical culture (Pop, Soul, Funk, Disco, House, Hip-hop, Electro…) lets us build bespoke sets. Our difference: reading the crowd and adapting the energy in real time for a magnetic dancefloor.</p><p><strong>Professionalism &amp; peace of mind.</strong> Beyond the artistic performance, we guarantee punctuality, impeccable presentation and high-end equipment. Entrust us with the artistic and technical direction, and fully enjoy your clients and guests.</p>`,
        list: null,
        blockquote: null,
        link: { text: 'Book a DJ', href: '/en/quote/dj-booking' },
        imageAlt: 'Groove Caviar DJ performance',
        reverse: false,
      },

      {
        num: '02',
        accroche: '02 / Give your events a voice',
        title: 'Speaker / MC Services',
        subtitle: 'The art of eloquence',
        body: `<p>The sound of an event doesn't stop at music: the voice connects your guests to your message. At <span class="brand">Groove Caviar</span>, working a microphone is an exercise in precision. A charity gala in Biarritz, a seminar in Hossegor or an international awards ceremony: our speakers bring the spark of professionalism that turns a simple announcement into a genuine experience.</p><p><strong>Expert profiles for a premium service.</strong> Our speakers are not mere "hosts", but true public-speaking specialists:</p>`,
        list: [
          'Journalists & presenters — conferences, trade shows and fairs: credibility and structure.',
          'Sports commentators — live specialists for your competitions and sporting demonstrations.',
          'Masters of ceremony — sparkling voices for your product launches or fashion shows.',
          'Bilingual speakers (FR/EN) — essential for your international events.',
        ],
        blockquote: null,
        link: {
          text: 'Book a speaker',
          href: 'mailto:contact@groovecaviar.com?subject=I%20would%20like%20to%20book%20an%20MC/speaker&body=Hello%2C%0D%0A%0D%0AI%20would%20like%20to%20book%20an%20MC/speaker%20for%20my%20event.%20Here%20are%20a%20few%20details%3A%0D%0A%0D%0ADate%3A%20%0D%0ALocation%3A%20%0D%0ABest%20phone%20number%20to%20reach%20me%3A%20%0D%0A%0D%0AThank%20you%20for%20getting%20back%20to%20me.%0D%0AKind%20regards%2C',
        },
        imageAlt: 'Speaker / MC at a high-end event',
        reverse: true,
      },

      {
        num: '03',
        accroche: '03 / High-fidelity sound & tailored lighting',
        title: 'Sound & Lighting',
        subtitle: 'Technical excellence in service of emotion',
        body: `<p>The success of an exceptional event — a wedding in the Basque Country or a prestige seminar — rests on a perfect synergy between art and technique. To rule out surprises, we invest exclusively in state-of-the-art equipment from the leading audio and lighting brands.</p><p><strong>Clarity above all.</strong> A successful sound setup is forgotten but felt. Our systems adapt to your venue:</p>`,
        list: [
          'Ceremony & cocktails — crystal-clear, discreet sound, even outdoors.',
          'Dinner & speeches — every word intelligible, without ever straining the ear.',
          'Dancefloor — mastered power for a "club" immersion, with warm, balanced sound.',
        ],
        blockquote:
          'Our obsession: aesthetics. Hidden cabling, sober colours, discreet control booths. The technique must fade away to make room for the magic of the moment.',
        link: null,
        imageAlt: 'High-end sound and lighting for events',
        reverse: false,
      },

      {
        num: '04',
        accroche: '04 / Auditory identity',
        title: 'Sound Design',
        subtitle: 'Crafting sounds and musical atmospheres at your service',
        body: `<p><strong>Shop, restaurant or hotel?</strong> We define your venue's musical atmosphere and craft its programming, imagining a sonic identity in your image.</p><p><strong>Event, trade show or Christmas market?</strong> We create and manage your event's soundtrack, from artistic direction to bespoke musical content.</p><p><strong>Film, show, app or product that needs audio?</strong> Scoring, soundtrack creation, music direction or product sound design: we set your projects to music.</p><p><strong>Music at your service.</strong> Sound design is a powerful marketing lever: we craft audio guidelines and original soundtracks that embody your values and strengthen your sensory positioning. At <span class="brand">Groove Caviar</span>, music is part of our everyday life, and our musical culture is a major asset for creating rich, varied content that meets your needs precisely.</p>`,
        list: null,
        blockquote: null,
        link: { text: 'Assess your needs', href: '/en/contact' },
        imageAlt: 'Sound design and brand audio identity',
        reverse: true,
      },

      {
        num: '05',
        accroche: '05 / Artistic and technical direction',
        title: 'Event Production',
        subtitle: 'Creators of exceptional moments',
        body: `<p>Beyond booking, <span class="brand">Groove Caviar</span> is an engine of event creation. We design, produce and manage innovative party and event concepts that shape the cultural identity of the Basque Country. From the intimacy of a club to the vastness of a beach, we transform every venue into an immersive experience.</p><p><strong>A "full service" approach.</strong> A successful event rests on millimetre-perfect coordination. We provide global artistic and technical direction to guarantee the smooth running of every project:</p>`,
        list: [
          'Planning & strategy — feasibility, logistics, project management.',
          'Curation & artistic direction — concept identity, talent selection.',
          "DJ programming — sharp line-ups, coherent with the event's DNA.",
          'Technical production — high-performance sound and lighting.',
          'Communication & branding — visual creation, digital strategy, press relations.',
          'Social media — content creation and real-time community management.',
        ],
        blockquote: null,
        link: { text: "Let's celebrate!", href: '/en/contact' },
        imageAlt: 'Event production and artistic direction',
        reverse: false,
      },
    ],

    quoteBanner: {
      quote: "Your brand's sonic DNA is as important<br class=\"gc-br-lg\"> as its visual identity.",
    },

    cta: {
      titleWhite: 'Your event',
      titleShimmer: 'starts here',
      subtitle:
        "Ready to turn your vision into an exceptional audio and visual reality?<br>We're here to design the unexpected.",
      btnQuote: { text: 'Request a quote', href: '/en/quote/dj-booking' },
      btnContact: { text: 'Contact the agency', href: '/en/contact' },
    },
  },
};

export type Locale = keyof typeof services;
