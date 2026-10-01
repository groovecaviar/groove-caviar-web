// Contenu bilingue de la page « Conditions générales de vente ».
// Même structure que privacy.ts (articles numérotés automatiquement par CgvSections.astro).
// Base : CGV beta fournie par Pierre, relue et mise en conformité avec le contrat de
// prestation type « contrat DJ 2026 » (document prioritaire en cas de divergence) et avec
// le droit en vigueur (Code de la consommation, Code de commerce).

const GC = '<span class="brand">Groove Caviar</span>';

interface CgvSection {
  readonly title: string;
  readonly html: string;
}

export interface CgvContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly updated: string;
  readonly sections: readonly CgvSection[];
}

export const cgv: Record<'fr' | 'en', CgvContent> = {
  fr: {
    eyebrow: 'Informations légales',
    title: 'Conditions générales de vente',
    updated: 'Dernière mise à jour : 28 septembre 2026',
    sections: [
      {
        title: 'Objet',
        html: `<p>Toute signature de contrat ou de devis avec ${GC} vaut acceptation des présentes Conditions générales de vente (CGV), qui s'appliquent de plein droit. Elles définissent les relations contractuelles entre le prestataire, Monsieur Pierre Henny, responsable de la micro-entreprise ${GC}, SIRET 503 532 616 00029 (ci-après « le Prestataire », terme désignant également son personnel, ses sous-traitants, ses prestataires et plus généralement tout intervenant de son fait), et le client (ci-après « le Client »).</p>
<p>${GC} se réserve la possibilité de modifier les présentes CGV à tout moment sans préavis. Les conditions applicables sont celles en vigueur à la date de la commande passée par le Client.</p>`,
      },
      {
        title: 'Prestations',
        html: `<p>Les prestations proposées sont l'animation musicale avec DJ, l'animation musicale avec musique live, la sonorisation, l'éclairage, l'animation avec présentateur, la direction et la programmation artistique, le design sonore, le conseil, la communication, la fabrication de supports de communication, ainsi que l'élaboration et l'organisation de soirées et d'événements publics, privés et/ou professionnels. Ces prestations sont réalisées par ${GC} et/ou l'ensemble de son personnel, ses sous-traitants, ses prestataires et plus généralement tous les intervenants de son fait.</p>`,
      },
      {
        title: 'Obligations du client',
        html: `<p>Le Client s'engage à :</p>
<ul>
<li>Envoyer le devis daté et signé, approuvé par la mention « bon pour accord » ou une confirmation écrite datée et signée, conforme aux termes du barème ou du devis présenté, dans un délai de 15 jours ouvrables à compter de sa réception.</li>
<li>Renseigner le cahier des charges, qui ne subira plus de modification après avoir été approuvé par le Prestataire, sauf accord contraire ; il aura valeur de contrat à sa signature. Toute modification impliquant un remaniement substantiel du contrat initial pourra être facturée en supplément.</li>
<li>Fournir les éléments audio/visuels nécessaires*, en certifiant disposer de tous les droits de diffusion y afférents. Seule la responsabilité du Client pourra être engagée à ce titre.</li>
<li>Informer le Prestataire de tous les délais utiles et documents nécessaires à l'appréhension des besoins et à la bonne exécution des prestations.</li>
<li>Se conformer strictement aux préconisations techniques du Prestataire.</li>
<li>Garantir le Prestataire contre toute action qui pourrait lui être intentée du fait du caractère des données ou informations fournies ou choisies par le Client.</li>
<li>Régler, dans les délais prévus, les sommes dues au Prestataire.</li>
</ul>
<p>Sauf disposition contraire précisée au devis, le Client s'engage également à fournir, à ses frais, l'espace et les conditions nécessaires à l'installation du matériel :</p>
<ul>
<li>Un emplacement de 3 à 4 m sur 2 m, adaptable, face à la piste de danse.</li>
<li>Une hauteur de plafond de 2,50 m minimum.</li>
<li>Un espace libre de tout passage d'invités, permettant l'installation en toute sécurité du matériel et des câbles.</li>
<li>Une puissance électrique suffisante à proximité (moins de 10 m) du matériel, sur prises 220 V et 16/20 ampères avec prise de terre — à minima 2 kW disponibles sur deux lignes électriques distinctes, en plus de la puissance nécessaire aux autres prestataires.</li>
<li>Une table de 1,5 m sur 0,7 m minimum (hauteur 0,7 m minimum) pour chaque installation (cérémonie, cocktail, dîner, soirée…).</li>
<li>Une place de parking à proximité immédiate du lieu d'installation.</li>
<li>Un accès libre au lieu de l'événement au minimum 3 heures avant le début de la prestation, pour l'installation du matériel et les réglages, ainsi qu'un temps de démontage d'environ 1 heure après la fin de la prestation.</li>
<li>Si la manifestation a lieu en extérieur, une structure abritée pouvant accueillir le matériel en cas d'intempéries — le Prestataire et son matériel ne devant en aucun cas être exposés aux intempéries (froid, chaleur, pluie, neige, grêle ou autre).</li>
<li>Un repas complet avec boisson (hors plateau-repas) pour le DJ pendant la manifestation.</li>
</ul>`,
      },
      {
        title: 'Obligations du prestataire',
        html: `<p>Le Prestataire s'engage à :</p>
<ul>
<li>Intervenir dans l'élaboration du cahier des charges conjointement avec le Client, et proposer une offre de prestation reprenant l'ensemble des éléments commandés.</li>
<li>Informer le Client de manière régulière et efficace de l'avancée de la réalisation du contrat, notamment via les validations soumises (choix musicaux, contraintes et supports nécessaires aux animations éventuelles, titres destinés à souligner les moments forts de l'événement…).</li>
<li>Préparer et réaliser ses prestations conformément au contrat, avec du matériel son et lumières conforme aux normes en vigueur.</li>
<li>Proposer un rendez-vous de préparation au Client, dans le cas d'une offre personnalisée (hors location).</li>
</ul>
<p>Le Prestataire se réserve le droit de remplacer certains équipements par d'autres de qualité équivalente en cas de nécessité.</p>`,
      },
      {
        title: 'Durée du contrat',
        html: `<p>Le contrat prend effet à la date de sa signature. La durée des prestations est précisée dans le cahier des charges et le devis.</p>`,
      },
      {
        title: 'Tarifs',
        html: `<p>Les prix figurant sur le site www.groovecaviar.com sont donnés à titre indicatif. ${GC} se réserve le droit de modifier ses prix librement : les prestations sont facturées sur la base des tarifs mentionnés sur le devis, ou en vigueur au moment de la validation de la commande, sous réserve de disponibilité.</p>`,
      },
      {
        title: 'Réservation et droit de rétractation',
        html: `<p>Pour les particuliers, toute réservation de prestation doit être accompagnée du paiement d'arrhes d'un montant minimum de 400&nbsp;€. La réservation est acquise après réception du devis approuvé et encaissement effectif des arrhes.</p>
<p>Pour les professionnels, la validation du contrat se fait à réception du devis signé, accompagné d'un bon de commande. Le versement d'arrhes peut être demandé en fonction de la prestation.</p>
<p>Conformément à l'article L. 221-18 du Code de la consommation, le Client consommateur dispose d'un délai de 14 jours calendaires à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à justifier de motifs ni à payer de pénalités.</p>`,
      },
      {
        title: 'Résiliation et annulation',
        html: `<p>En cas de manquement de l'une des parties à l'une de ses obligations au titre des présentes, l'autre partie pourra faire valoir la résiliation du contrat, sous réserve de tous dommages et intérêts auxquels elle pourrait prétendre le cas échéant.</p>
<p>Le Client peut annuler le présent contrat jusqu'à 120 jours avant le début de la prestation, par lettre recommandée avec accusé de réception exposant les motifs de la rupture. Dans ce cas, il est exempté du règlement du solde de la prestation, mais le montant des arrhes reste acquis à ${GC} dans tous les cas, quels qu'en soient les motifs — il couvre notamment les frais déjà engagés par le Prestataire dans la préparation de la prestation.</p>
<p>Passé ce délai de 120 jours, le Client devra verser l'intégralité du montant de la prestation, à titre de dédommagement de l'immobilisation du Prestataire, sauf cas de force majeure** justifié (par exemple : fermeture administrative des salles pour raison sanitaire). Dans ce cas, un report de la prestation sera convenu à une date ultérieure avec l'accord du Prestataire, et le présent contrat continuera de s'appliquer.</p>
<p>Réciproquement, en cas d'impossibilité majeure ou indépendante de sa volonté (maladie, accident, deuil, fermeture de la société…), le Prestataire s'engage à proposer un service de remplacement équivalent aux conditions prévues lors de la signature du contrat.</p>`,
      },
      {
        title: 'Facturation et règlement',
        html: `<p>La facture est envoyée au Client par e-mail sous 7 jours après la date de réalisation de la prestation. Elle fait état de l'acompte déjà versé et du solde restant à payer.</p>
<p>Le Client est tenu de verser le solde du montant convenu au plus tard le jour de la prestation, par virement bancaire, et impérativement avant le début de la prestation.</p>
<p>Pour les professionnels, le délai de paiement de 30 jours fin de mois est applicable, sauf accord contraire mentionné au devis.</p>`,
      },
      {
        title: 'Retard de paiement',
        html: `<p>Pour les clients professionnels, tout retard de paiement au-delà de la date d'exigibilité entraîne de plein droit, conformément à l'article L. 441-10 du Code de commerce, des pénalités de retard calculées sur la base du taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente, majoré de 10 points. Une indemnité forfaitaire de 40&nbsp;€ pour frais de recouvrement est également due, conformément à l'article D. 441-5 du même code.</p>
<p>Pour les clients particuliers (consommateurs), tout retard de paiement entraîne l'application du taux d'intérêt légal en vigueur, conformément au droit commun ; l'indemnité forfaitaire de recouvrement de 40&nbsp;€ ne leur est pas applicable.</p>`,
      },
      {
        title: 'Confidentialité et références',
        html: `<p>Les parties s'engagent à préserver le caractère strictement confidentiel de toutes informations et documents internes obtenus ou échangés dans le cadre du contrat et de son exécution. Le Client doit respecter le savoir-faire du Prestataire, et ce dernier considère comme confidentielle toute information transmise par le Client dans le cadre de l'exécution des présentes.</p>
<p>${GC} pourra librement faire figurer le prénom d'un client particulier sur une liste de références et d'événements de son site internet, et se réserve le droit d'ajouter le logo et la marque de ses clients professionnels au titre de ses références. ${GC} s'autorise à citer et à exploiter, dans ses outils de communication internes comme externes, la prestation effectuée pour le compte de son Client, et pourra prendre et utiliser des photos et vidéos de la prestation à des fins promotionnelles. Si le Client exige la confidentialité la plus totale, il devra en informer ${GC} par écrit avant la date de l'opération.</p>`,
      },
      {
        title: 'Données personnelles',
        html: `<p>Les informations nominatives communiquées par le Client sont nécessaires à la gestion des commandes et des relations commerciales. Elles sont traitées conformément au Règlement général sur la protection des données (RGPD) et à la loi n° 78-17 du 6 janvier 1978 modifiée. Le Client dispose d'un droit d'accès, de rectification, d'effacement et d'opposition sur les données le concernant.</p>
<p>Le détail des traitements, finalités, durées de conservation et modalités d'exercice de ces droits est précisé dans la <a href="/politique-de-confidentialite">politique de confidentialité</a> du site.</p>`,
      },
      {
        title: 'Location de matériel',
        html: `<p>Dans le cadre d'une location de matériel à ${GC}, le Client est responsable de ce matériel en cas de perte, vol ou dégâts. Le Client majeur devra fournir obligatoirement une pièce d'identité ainsi qu'un chèque de caution à hauteur de la valeur du matériel retiré.</p>`,
      },
      {
        title: "Droit d'auteur et propriété intellectuelle",
        html: `<p>Conformément à l'article L. 122-5-1° du Code de la propriété intellectuelle, pour toute manifestation avec orchestre, spectacle, musique et/ou disc-jockey rémunérés, une déclaration est faite par le Client auprès de la SACEM. Le Client s'engage à s'acquitter de tous les droits liés à la manifestation.</p>
<p>Le Prestataire détient, sur l'ensemble des prestations effectuées au titre des présentes, l'intégralité des droits d'auteur. Sous réserve du paiement intégral du prix et des frais dus, le Prestataire cède au Client la totalité des droits sur lesdites prestations. En cas de non-paiement intégral dans les délais convenus, le Client s'engage à restituer au Prestataire tous éléments et documents en sa possession relatifs aux prestations accomplies, sur quelque support que ce soit, ainsi que les éventuelles copies qui auraient pu en être faites, et renonce à toute utilisation de ces travaux. Le Prestataire conserve en toute hypothèse la propriété des méthodes, du savoir-faire et des procédés qu'il aura développés ou mis en œuvre, qu'il pourra librement réutiliser pour d'autres projets.</p>`,
      },
      {
        title: 'Assurances',
        html: `<p>Le Prestataire s'engage à souscrire les assurances nécessaires à la couverture de sa responsabilité civile du fait des dommages corporels, matériels et immatériels directs dont il serait rendu responsable — que ce soit par lui-même, son personnel, ses sous-traitants, ses prestataires ou plus généralement tout intervenant de son fait — causés au Client, au personnel du Client ou à des tiers. Le Prestataire s'engage à maintenir ces garanties pendant toute la durée d'exécution du contrat et à en justifier sur demande du Client.</p>`,
      },
      {
        title: 'Limitation des responsabilités',
        html: `<p>Si le lieu choisi par le Client n'est pas équipé de limiteur de pression acoustique, le Prestataire ne pourra être tenu responsable en cas d'acouphènes ou de nuisances auditives que le Client et/ou ses invités pourraient subir. De même, en cas de nuisances sonores auprès du voisinage entraînant un arrêt contraint de la prestation par les pouvoirs publics, le Prestataire n'est pas responsable et le Client ne pourra prétendre à un remboursement.</p>
<p>Le Client est tenu responsable en cas de dégradation ou de destruction volontaire, accidentelle, par négligence ou maladresse du matériel du Prestataire, y compris par l'un de ses invités, et devra le rembourser à hauteur des dégâts occasionnés, estimés au prix du neuf ; un avoir sera le cas échéant édité en sa faveur après soustraction des frais de réparation et de remise en état.</p>
<p>Le Prestataire ne pourra être tenu responsable en cas de défaillance de l'installation électrique des lieux, ou du non-fonctionnement de ses appareils lié à une installation électrique défectueuse ou insuffisante. Suite à tout incident technique non imputable au Prestataire et entravant le déroulement normal de la prestation, le Client sera tenu de payer l'intégralité du tarif prévu au devis.</p>
<p>La responsabilité du Prestataire est entièrement dégagée à compter de la fin de la prestation, ou si tout ou partie du contrat ne pouvait être réalisé du fait de causes indépendantes de sa volonté — notamment si le Client a omis de remettre un document ou une information nécessaire au bon déroulement de la prestation, ou en cas de force majeure**. Elle ne pourra en tout état de cause entraîner d'indemnités supérieures à la somme versée par le Client pour les services prévus au contrat. Le Prestataire réalise ses prestations selon les règles de l'art en usage dans la profession et n'est tenu qu'à une obligation générale de moyens.</p>`,
      },
      {
        title: 'Playlist',
        html: `<p>Sauf spécification contraire mentionnée au cahier des charges, les prestations de ${GC} sont des prestations DJ personnalisées. À ce titre, ${GC} s'engage, au travers de sa politique commerciale haut de gamme, à respecter à minima 80&nbsp;% des choix musicaux du Client — ce service Premium n'étant garanti que si les conditions de préparation et d'accès au contenu média prévues aux présentes ont été respectées.</p>
<p>Toute playlist personnalisée devra être communiquée au Prestataire au moins deux mois avant l'événement, afin de pouvoir être analysée et intégrée au programme de la soirée, et recevoir son approbation. Si le Prestataire ne possède pas certains titres, le Client devra fournir ceux sortant du standard « généraliste » au moins deux mois avant l'événement, dans un format exploitable*. ${GC} ne pourra être tenu responsable de l'incapacité du Client à fournir ces titres dans les délais. Le profil de la playlist est défini entre le Client et ${GC} avant l'événement ; le Client pourra toutefois, durant celui-ci, orienter les choix musicaux du DJ — il sera alors seul responsable de la satisfaction de ses invités, et ${GC} sera dégagé de toute responsabilité à ce titre.</p>`,
      },
      {
        title: 'Cas particuliers',
        html: `<p>Sauf indication contraire précisée au contrat, l'heure maximale de fin d'une prestation DJ est fixée à 4 heures du matin ; le Prestataire se réserve le droit d'accepter ou non des heures supplémentaires, facturées 150&nbsp;€ chacune si elles ne sont pas prévues au contrat.</p>
<p>En cas d'impossibilité pour le Prestataire de réaliser la prestation le jour de l'événement, ${GC} s'engage à fournir une solution de remplacement équivalente, aux conditions convenues lors de la signature du contrat.</p>`,
      },
      {
        title: 'Dispositions diverses',
        html: `<p>Lorsque la prestation s'effectue lors de la transition aux horaires d'été ou d'hiver, sa durée demeure inchangée quel que soit le nouvel horaire.</p>
<p>Le Prestataire n'ouvre ni ne ferme les lieux de réception. Le Client s'engage à prévoir un temps de démontage d'environ 1 heure après la fin de la prestation.</p>
<p>Lors de la prestation, le Prestataire est autorisé à prendre des photos et vidéos et à les utiliser à des fins promotionnelles, dans les conditions prévues à l'article « Confidentialité et références » ci-dessus.</p>`,
      },
      {
        title: 'Réclamation',
        html: `<p>En cas de mécontentement sur la programmation DJ, le Client devra en faire part clairement dès qu'il en éprouve le besoin, et argumenter sa réclamation.</p>
<p>Toute prestation réalisée jusqu'à son terme prévu au cahier des charges ne pourra donner lieu à réclamation ni faire l'objet d'un remboursement.</p>`,
      },
      {
        title: 'Litige',
        html: `<p>Le contrat pourra être rompu si le Prestataire est victime de mauvais traitements, insultes ou comportement anormal de la part du Client, de ses représentants ou de ses invités, si son intégrité physique est mise en péril, en cas de dégradation volontaire du matériel fourni, ou si le Client ne respecte pas les clauses du présent contrat. Dans ces cas, le Prestataire pourra quitter les lieux de la prestation sans qu'il soit question de remboursement d'aucune sorte, le Client restant redevable des sommes éventuellement dues.</p>
<p>En cas de retour de chèque sans provision, le Client devra verser une garantie de paiement total avant l'installation du matériel ; à défaut, le Prestataire pourra annuler l'événement, le Client restant redevable de la totalité du devis approuvé.</p>
<p>Pour les clients professionnels, tout litige relève de la compétence exclusive du Tribunal de Commerce de Bayonne, nonobstant pluralité de défendeurs ou appel en garantie.</p>
<p>Pour les clients particuliers (consommateurs), les litiges relèvent des juridictions compétentes selon les règles de droit commun, conformément au Code de procédure civile et au Code de la consommation ; le Client consommateur peut notamment saisir la juridiction du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable.</p>`,
      },
      {
        title: 'Médiation de la consommation',
        html: `<p>Conformément aux articles L. 611-1 et suivants du Code de la consommation, le Client consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige qui l'oppose au Prestataire, après avoir tenté de le résoudre directement auprès de celui-ci par une réclamation écrite. Le médiateur de la consommation dont relève ${GC} est : Amare médiation, 83 avenue du Maréchal Juin, 64200 Biarritz – <a href="https://amare-mediation.fr/" target="_blank" rel="noopener noreferrer">amare-mediation.fr</a>.</p>`,
      },
      {
        title: 'Notes',
        html: `<p><strong>* Éléments audio/visuels :</strong> fichiers musicaux de qualité et formats exploitables (MP3, qualité de compression 192&nbsp;Kbps minimum) ; vidéo compatible Mac et/ou Windows ; diaporama au format PPT ou exécutable.</p>
<p><strong>** Cas de force majeure :</strong> événements ou incidents indépendants de la volonté des parties, tels que grèves, troubles sociaux, calamités publiques, incendies, fermetures administratives ou pandémies.</p>`,
      },
    ],
  },

  en: {
    eyebrow: 'Legal information',
    title: 'Terms and Conditions of Sale',
    updated:
      'Last updated: 28 September 2026 — This English version is provided for convenience only; the French version is the sole legally binding text and shall prevail in the event of any discrepancy.',
    sections: [
      {
        title: 'Purpose',
        html: `<p>Signing a contract or quote with ${GC} constitutes acceptance of these Terms and Conditions of Sale ("Terms"), which apply automatically. They define the contractual relationship between the service provider, Mr. Pierre Henny, operating the sole proprietorship ${GC}, SIRET 503 532 616 00029 (the "Provider", a term that also covers its staff, subcontractors, service providers and, more generally, anyone acting on its behalf), and the client (the "Client").</p>
<p>${GC} may amend these Terms at any time without prior notice. The applicable version is the one in force on the date the Client places an order.</p>`,
      },
      {
        title: 'Services',
        html: `<p>The services offered include DJ entertainment, live music entertainment, sound reinforcement, lighting, MC/host entertainment, artistic direction and programming, sound design, consulting, communications, the production of communication materials, and the design and organisation of public, private and/or corporate parties and events. These services are carried out by ${GC} and/or its staff, subcontractors, service providers and, more generally, anyone acting on its behalf.</p>`,
      },
      {
        title: 'Client obligations',
        html: `<p>The Client agrees to:</p>
<ul>
<li>Return the dated, signed quote approved with the words "approved" ("bon pour accord") or a dated, signed written confirmation matching the terms of the quote, within 15 business days of receiving it.</li>
<li>Complete the event brief, which may no longer be changed once approved by the Provider, unless otherwise agreed; it becomes contractually binding upon signature. Any change requiring a substantial revision of the original contract may be invoiced separately.</li>
<li>Provide the necessary audio/visual materials*, warranting that it holds all rights required for their broadcast. The Client alone may be held liable in this respect.</li>
<li>Inform the Provider of all relevant deadlines and documents needed to understand requirements and properly perform the services.</li>
<li>Strictly follow the Provider's technical recommendations.</li>
<li>Indemnify the Provider against any claim arising from the nature of the data or information supplied or selected by the Client.</li>
<li>Pay all amounts owed to the Provider by the agreed deadlines.</li>
</ul>
<p>Unless otherwise stated in the quote, the Client also agrees to provide, at its own expense, the space and conditions required to set up the equipment:</p>
<ul>
<li>An adjustable area of roughly 3–4 m by 2 m, facing the dance floor.</li>
<li>A minimum ceiling height of 2.50 m.</li>
<li>A space kept clear of guest traffic, allowing the equipment and cables to be installed safely.</li>
<li>Sufficient electrical power within 10 m of the equipment, on 220 V / 16–20 A grounded outlets — at least 2 kW available on two separate circuits, in addition to the power required by other vendors.</li>
<li>A table at least 1.5 m by 0.7 m (minimum height 0.7 m) for each setup (ceremony, cocktail hour, dinner, party…).</li>
<li>A parking space in the immediate vicinity of the venue.</li>
<li>Free access to the venue at least 3 hours before the service begins, for setup and sound checks, and roughly 1 hour after it ends for teardown.</li>
<li>For outdoor events, a sheltered structure able to house the equipment in case of bad weather — the Provider and its equipment must never be exposed to the elements (cold, heat, rain, snow, hail or other).</li>
<li>A full meal with a drink (not a packed meal) for the DJ during the event.</li>
</ul>`,
      },
      {
        title: 'Provider obligations',
        html: `<p>The Provider agrees to:</p>
<ul>
<li>Work with the Client to define the event brief, and propose a service offer covering all items ordered.</li>
<li>Keep the Client regularly and effectively informed of progress, notably through approvals sought along the way (music choices, constraints and materials needed for any entertainment segments, cues for the event's key moments…).</li>
<li>Prepare and perform its services in accordance with the contract, using sound and lighting equipment that complies with applicable standards.</li>
<li>Offer the Client a planning meeting where the booking is a custom package (equipment rental excluded).</li>
</ul>
<p>The Provider reserves the right to replace certain equipment with items of equivalent quality where necessary.</p>`,
      },
      {
        title: 'Contract term',
        html: `<p>The contract takes effect on the date it is signed. The duration of the services is specified in the event brief and the quote.</p>`,
      },
      {
        title: 'Pricing',
        html: `<p>Prices shown on www.groovecaviar.com are indicative. ${GC} may freely amend its prices: services are invoiced on the basis of the rates stated in the quote, or those in force when the order is confirmed, subject to availability.</p>`,
      },
      {
        title: 'Booking and right of withdrawal',
        html: `<p>For individual clients, any booking must be accompanied by a deposit of at least €400. The booking is confirmed once the approved quote has been received and the deposit actually collected.</p>
<p>For corporate clients, the contract is confirmed upon receipt of the signed quote together with a purchase order. A deposit may be requested depending on the service.</p>
<p>Consumer clients have a 14-calendar-day right of withdrawal from the date the contract is concluded, without having to give reasons or pay any penalty, in accordance with applicable French consumer law.</p>`,
      },
      {
        title: 'Cancellation and termination',
        html: `<p>Should either party fail to meet its obligations under these Terms, the other party may terminate the contract, subject to any damages it may be entitled to claim.</p>
<p>The Client may cancel this contract up to 120 days before the service by registered letter with acknowledgment of receipt, stating the reasons for cancellation. In that case, the Client is released from paying the balance, but the deposit is retained by ${GC} in all cases, whatever the reason — it notably covers costs already incurred by the Provider in preparing the service.</p>
<p>After that 120-day deadline, the Client must pay the full amount of the service as compensation for the Provider being unavailable for other bookings, except in a duly justified case of force majeure** (for example, an administrative closure of venues for public-health reasons). In that case, the service will be rescheduled to a later date with the Provider's agreement, and this contract will continue to apply.</p>
<p>Conversely, should the Provider face a major or unavoidable impossibility to perform (illness, accident, bereavement, business closure…), it agrees to offer an equivalent replacement service on the terms agreed when the contract was signed.</p>`,
      },
      {
        title: 'Invoicing and payment',
        html: `<p>The invoice is sent to the Client by email within 7 days of the service date. It shows the deposit already paid and the remaining balance.</p>
<p>The Client must pay the agreed balance no later than the day of the service, by bank transfer, and in any case before the service begins.</p>
<p>For corporate clients, payment terms of 30 days end-of-month apply, unless otherwise stated in the quote.</p>`,
      },
      {
        title: 'Late payment',
        html: `<p>For corporate clients, any payment made after the due date automatically triggers late-payment penalties calculated on the basis of the European Central Bank's most recent refinancing rate plus 10 points, together with a flat €40 collection-cost indemnity, in accordance with French commercial law.</p>
<p>For individual (consumer) clients, late payment triggers the statutory legal interest rate under ordinary French law; the flat €40 collection indemnity does not apply to them.</p>`,
      },
      {
        title: 'Confidentiality and references',
        html: `<p>Both parties agree to keep strictly confidential all information and internal documents obtained or exchanged in connection with the contract and its performance. The Client must respect the Provider's know-how, and the Provider treats any information shared by the Client as confidential.</p>
<p>${GC} may freely list an individual client's first name among the references and events shown on its website, and reserves the right to display corporate clients' logos and names among its references. ${GC} may refer to and showcase, in its internal and external communications, the service performed for the Client, and may take and use photos and videos of the service for promotional purposes. Clients requiring full confidentiality must inform ${GC} in writing before the date of the event.</p>`,
      },
      {
        title: 'Personal data',
        html: `<p>Personal information provided by the Client is required to manage orders and the business relationship. It is processed in accordance with the General Data Protection Regulation (GDPR) and applicable French data-protection law. The Client has a right of access, rectification, erasure and objection regarding their data.</p>
<p>Full details on processing, purposes, retention periods and how to exercise these rights are set out in the site's <a href="/en/privacy-policy">privacy policy</a>.</p>`,
      },
      {
        title: 'Equipment rental',
        html: `<p>Where equipment is rented from ${GC}, the Client is responsible for that equipment in case of loss, theft or damage. Adult clients must provide valid photo ID and a security cheque for the value of the equipment collected.</p>`,
      },
      {
        title: 'Copyright and intellectual property',
        html: `<p>For any paid event featuring a band, show, music and/or DJ, the Client must file a declaration with SACEM (the French music-rights collecting society), in accordance with French intellectual-property law. The Client agrees to settle all rights owed in connection with the event.</p>
<p>The Provider holds full copyright over all services it performs under these Terms. Subject to full payment of the price and fees due, the Provider assigns to the Client all rights in those services. In the event of non-payment within the agreed time, the Client agrees to return to the Provider all materials and documents in its possession relating to the services performed, on any medium, together with any copies made, and waives any use of that work. In all cases, the Provider retains ownership of the methods, know-how and processes it has developed or used, and may freely reuse them for other projects.</p>`,
      },
      {
        title: 'Insurance',
        html: `<p>The Provider agrees to take out the insurance necessary to cover its civil liability for direct bodily, material and intangible damage it may cause — whether by itself, its staff, subcontractors, service providers or anyone else acting on its behalf — to the Client, the Client's staff, or third parties. The Provider agrees to maintain this cover throughout the term of the contract and to provide proof of it on request.</p>`,
      },
      {
        title: 'Limitation of liability',
        html: `<p>If the venue chosen by the Client is not fitted with a sound-level limiter, the Provider cannot be held liable for tinnitus or hearing discomfort the Client and/or its guests may experience. Likewise, if noise complaints from neighbours force the authorities to stop the service, the Provider is not liable and the Client cannot claim a refund.</p>
<p>The Client is liable for any damage to or destruction of the Provider's equipment — whether wilful, accidental, or due to negligence or carelessness, including by any of its guests — and must reimburse the Provider for the damage caused, valued at replacement cost; a credit note will be issued to the Client where applicable, after deducting repair and refurbishment costs.</p>
<p>The Provider cannot be held liable for a faulty electrical installation at the venue, or for equipment malfunctioning as a result of a defective or insufficient power supply. Following any technical incident not attributable to the Provider that disrupts the normal course of the service, the Client remains liable for the full price stated in the quote.</p>
<p>The Provider's liability ends entirely once the service is complete, or if all or part of the contract could not be performed for reasons beyond its control — including where the Client failed to provide a document or information needed for the service, or in a case of force majeure**. In any event, the Provider's liability cannot exceed the amount paid by the Client for the services covered by the contract. The Provider performs its services according to standard industry practice and is bound only by a general obligation of means.</p>`,
      },
      {
        title: 'Playlist',
        html: `<p>Unless otherwise stated in the event brief, ${GC}'s services are personalised DJ services. As part of its premium approach, ${GC} agrees to honour at least 80% of the Client's music choices — this premium service being guaranteed only where the preparation and media-access conditions set out in these Terms have been met.</p>
<p>Any custom playlist must be sent to the Provider at least two months before the event, so it can be reviewed and worked into the evening's programme, and approved. Where the Provider does not already own certain tracks, the Client must supply any that fall outside the standard "general" repertoire at least two months before the event, in a usable format*. ${GC} cannot be held responsible if the Client fails to provide such tracks in time. The playlist profile is agreed between the Client and ${GC} before the event; during the event itself, the Client may steer the DJ's music choices, in which case the Client alone is responsible for guest satisfaction and ${GC} is released from any liability in that respect.</p>`,
      },
      {
        title: 'Special cases',
        html: `<p>Unless otherwise stated in the contract, a DJ service ends at 4:00 a.m. at the latest; the Provider reserves the right to accept or decline extra hours, which are billed at €150 each if not provided for in the contract.</p>
<p>Should the Provider be unable to perform the service on the day of the event, ${GC} agrees to provide an equivalent replacement solution, on the terms agreed when the contract was signed.</p>`,
      },
      {
        title: 'Miscellaneous',
        html: `<p>Where a service takes place during the switch to or from daylight-saving time, its duration remains unchanged regardless of the new time.</p>
<p>The Provider does not open or close the venue. The Client agrees to allow roughly 1 hour after the service ends for teardown.</p>
<p>During the service, the Provider is authorised to take photos and videos and use them for promotional purposes, under the conditions set out in "Confidentiality and references" above.</p>`,
      },
      {
        title: 'Complaints',
        html: `<p>Should the Client be unhappy with the DJ programming, it must say so clearly as soon as the need arises, explaining its complaint.</p>
<p>Any service performed in full, through to the end point set out in the event brief, cannot give rise to a complaint or a refund.</p>`,
      },
      {
        title: 'Disputes',
        html: `<p>The contract may be terminated by the Provider if it is subjected to mistreatment, insults or abnormal behaviour by the Client, its representatives or its guests, if its physical safety is put at risk, in case of wilful damage to the equipment supplied, or if the Client fails to comply with the terms of this contract. In such cases, the Provider may leave the venue without any refund whatsoever, and the Client remains liable for any amounts still owed.</p>
<p>Where a cheque is returned unpaid, the Client must provide a guarantee of full payment before the equipment is installed; failing that, the Provider may cancel the event, and the Client remains liable for the full amount of the approved quote.</p>
<p>For corporate clients, any dispute falls under the exclusive jurisdiction of the Commercial Court of Bayonne (France), regardless of the number of defendants or any third-party proceedings.</p>
<p>For individual (consumer) clients, disputes fall under the courts having jurisdiction under ordinary French law; the consumer Client may in particular bring proceedings before the court of the place where they resided when the contract was concluded or where the harmful event occurred.</p>`,
      },
      {
        title: 'Consumer mediation',
        html: `<p>In accordance with articles L. 611-1 et seq. of the French Consumer Code, a consumer Client may use a consumer mediator free of charge to seek an amicable settlement of a dispute with the Provider, after first trying to resolve it directly with the Provider through a written complaint. The consumer mediator for ${GC} is: Amare médiation, 83 avenue du Maréchal Juin, 64200 Biarritz (France) – <a href="https://amare-mediation.fr/" target="_blank" rel="noopener noreferrer">amare-mediation.fr</a>.</p>`,
      },
      {
        title: 'Notes',
        html: `<p><strong>* Audio/visual materials:</strong> good-quality, usable music files (MP3, minimum 192 Kbps compression); video compatible with Mac and/or Windows; slideshow in PPT or executable format.</p>
<p><strong>** Force majeure:</strong> events or incidents beyond either party's control, such as strikes, civil unrest, public disasters, fires, administrative closures or pandemics.</p>`,
      },
    ],
  },
};
