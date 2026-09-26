// Contenu bilingue de la page « Politique de confidentialité & mentions légales »
// (page regroupée : mentions légales + confidentialité + cookies).

const GC = '<span class="brand">Groove Caviar</span>';

interface PrivacySection {
  readonly title: string;
  readonly html: string;
}

export interface PrivacyContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly updated: string;
  readonly sections: readonly PrivacySection[];
}

export const privacy: Record<'fr' | 'en', PrivacyContent> = {
  fr: {
    eyebrow: 'Informations légales',
    title: 'Politique de confidentialité & mentions légales',
    updated: 'Dernière mise à jour : 1<sup>er</sup> septembre 2026',
    sections: [
      {
        title: 'Éditeur du site',
        html: `<p>Le site www.groovecaviar.com est édité par ${GC}, entreprise individuelle (EI) de Pierre Henny, dont le siège est situé <strong>3 allée Gabrielle Dorziat, 64200 Biarritz</strong>.</p>
<ul>
<li>SIRET : 503 532 616 00029 — RCS Bayonne 503 532 616</li>
<li>TVA non applicable, art. 293 B du CGI</li>
<li>E-mail : <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a> — Téléphone : <a href="tel:+33623625704">06 23 62 57 04</a></li>
<li>Directeur de la publication : Pierre Henny</li>
</ul>`,
      },
      {
        title: 'Hébergeur',
        html: `<p>Le site est hébergé par <strong>Hostinger, UAB</strong> — Švitrigailos str. 34, LT-03230 Vilnius, Lituanie (Union européenne).</p>`,
      },
      {
        title: 'Définitions',
        html: `<ul>
<li><strong>Utilisateur</strong> : toute personne qui visite ou utilise le site.</li>
<li><strong>Données personnelles</strong> : toute information permettant d'identifier, directement ou indirectement, une personne physique (art. 4 du RGPD).</li>
<li>Les termes « traitement », « responsable de traitement » et « sous-traitant » ont le sens défini par le RGPD (Règlement UE 2016/679) et la loi Informatique et Libertés du 6 janvier 1978 modifiée.</li>
</ul>`,
      },
      {
        title: 'Responsable de traitement',
        html: `<p>Le responsable du traitement des données collectées sur le site est ${GC}, représenté par Pierre Henny. Pour toute question relative à vos données : <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a>.</p>`,
      },
      {
        title: 'Données collectées, finalités et bases légales',
        html: `<p>Le site est un <strong>site vitrine</strong> : il ne propose ni compte utilisateur, ni vente en ligne. Vos données ne sont collectées que lorsque vous nous les transmettez, ou via la mesure d'audience (après consentement).</p>
<ul>
<li><strong>Formulaire de contact / demande de devis</strong> — données : nom, e-mail, téléphone, message. Finalité : répondre à votre demande et établir un devis. Base légale : votre consentement et l'exécution de mesures précontractuelles.</li>
<li><strong>Newsletter</strong> — donnée : adresse e-mail. Finalité : vous envoyer nos actualités. Base légale : votre consentement.</li>
<li><strong>Mesure d'audience</strong> — données : données de navigation (pages consultées, type d'appareil, adresse IP tronquée). Finalité : améliorer le site. Base légale : votre consentement (via le bandeau cookies).</li>
</ul>`,
      },
      {
        title: 'Destinataires et sous-traitants',
        html: `<p>Vos données ne sont <strong>ni vendues ni cédées</strong>. Elles peuvent être traitées par nos sous-traitants, uniquement pour les finalités ci-dessus :</p>
<ul>
<li><strong>Brevo</strong> (Sendinblue SAS, France) — envoi de la newsletter.</li>
<li><strong>Google Ireland Ltd / Google LLC</strong> — mesure d'audience (Google Analytics 4 et Google Tag Manager).</li>
<li><strong>Silktide</strong> — gestion du consentement aux cookies (sans compte, exécuté localement dans votre navigateur).</li>
<li><strong>Hostinger, UAB</strong> (Union européenne) — hébergement du site.</li>
</ul>`,
      },
      {
        title: 'Durées de conservation',
        html: `<ul>
<li>Demandes via le formulaire de contact / devis : <strong>3 ans</strong> à compter du dernier échange.</li>
<li>Inscription à la newsletter : <strong>jusqu'à votre désinscription</strong>.</li>
<li>Mesure d'audience (Google Analytics 4) : <strong>14 mois</strong> maximum.</li>
</ul>`,
      },
      {
        title: 'Transferts hors Union européenne',
        html: `<p>La mesure d'audience via Google peut entraîner un transfert de données vers les États-Unis. Google LLC adhère au <strong>Data Privacy Framework</strong> UE–États-Unis, qui encadre ces transferts. Les autres prestataires (Brevo, Hostinger) hébergent les données au sein de l'Union européenne.</p>`,
      },
      {
        title: 'Vos droits',
        html: `<p>Conformément au RGPD, vous disposez des droits d'<strong>accès</strong> (art. 15), de <strong>rectification</strong> (art. 16), d'<strong>effacement</strong> (art. 17), de <strong>limitation</strong> (art. 18), d'<strong>opposition</strong> (art. 21), de <strong>portabilité</strong> (art. 20), et du droit de <strong>retirer votre consentement</strong> à tout moment (art. 7). Vous pouvez également définir des directives relatives au sort de vos données après votre décès.</p>
<p>Pour exercer ces droits, écrivez-nous à <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a> ou par courrier à ${GC} — 3 allée Gabrielle Dorziat, 64200 Biarritz. Une preuve d'identité pourra être demandée. Vous pouvez aussi introduire une réclamation auprès de la <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).</p>`,
      },
      {
        title: 'Sécurité',
        html: `<p>${GC} met en œuvre des mesures techniques et organisationnelles appropriées (connexion chiffrée HTTPS, accès restreint aux données) afin de protéger vos données contre la perte, l'accès non autorisé ou la divulgation. Aucun système n'étant infaillible, en cas de violation susceptible d'engendrer un risque pour vos droits, les personnes concernées et la CNIL seraient informées conformément à la réglementation.</p>`,
      },
      {
        title: "Cookies et mesure d'audience",
        html: `<p>Un cookie est un petit fichier déposé sur votre terminal lors de la visite d'un site.</p>
<p>Le site utilise un <strong>gestionnaire de consentement (Silktide)</strong> couplé au <strong>Consent Mode v2 de Google</strong>. Par défaut, <strong>aucun cookie de mesure d'audience n'est déposé</strong> : les cookies Google Analytics ne sont activés <strong>qu'après votre consentement explicite</strong>, via le bandeau affiché dès votre arrivée sur le site.</p>
<ul>
<li>Vous pouvez <strong>accepter</strong> ou <strong>refuser</strong> les cookies non essentiels, et <strong>modifier votre choix à tout moment</strong> en rouvrant les préférences de cookies.</li>
<li>Le refus des cookies de mesure d'audience n'affecte pas votre navigation.</li>
<li>Seuls les cookies strictement nécessaires au fonctionnement du site (le cas échéant) peuvent être déposés sans consentement, conformément aux recommandations de la CNIL.</li>
</ul>`,
      },
      {
        title: 'Propriété intellectuelle',
        html: `<p>L'ensemble des éléments du site (textes, images, graphismes, logos, vidéos, sons) est protégé par le Code de la propriété intellectuelle. Toute reproduction ou représentation, totale ou partielle, sans l'autorisation écrite préalable de ${GC}, est interdite.</p>`,
      },
      {
        title: 'Droit applicable',
        html: `<p>Le site et la présente politique sont soumis au <strong>droit français</strong>. En cas de litige, et à défaut de résolution amiable, compétence est attribuée aux tribunaux compétents de <strong>Bayonne</strong>.</p>`,
      },
      {
        title: 'Contact',
        html: `<p>Pour toute question relative à la présente politique ou à vos données personnelles : <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a>.</p>`,
      },
    ],
  },

  en: {
    eyebrow: 'Legal information',
    title: 'Privacy Policy & Legal Notice',
    updated: 'Last updated: September 1, 2026',
    sections: [
      {
        title: 'Site publisher',
        html: `<p>The website www.groovecaviar.com is published by ${GC}, a sole proprietorship (entreprise individuelle, EI) of Pierre Henny, whose registered office is at <strong>3 allée Gabrielle Dorziat, 64200 Biarritz, France</strong>.</p>
<ul>
<li>SIRET: 503 532 616 00029 — Registered with the Bayonne Trade and Companies Register (RCS Bayonne 503 532 616)</li>
<li>VAT not applicable, art. 293 B of the French Tax Code (CGI)</li>
<li>E-mail: <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a> — Phone: <a href="tel:+33623625704">+33 6 23 62 57 04</a></li>
<li>Publication director: Pierre Henny</li>
</ul>`,
      },
      {
        title: 'Hosting',
        html: `<p>The site is hosted by <strong>Hostinger, UAB</strong> — Švitrigailos str. 34, LT-03230 Vilnius, Lithuania (European Union).</p>`,
      },
      {
        title: 'Definitions',
        html: `<ul>
<li><strong>User</strong>: any person who visits or uses the site.</li>
<li><strong>Personal data</strong>: any information that makes it possible to identify, directly or indirectly, a natural person (art. 4 GDPR).</li>
<li>The terms “processing”, “controller” and “processor” have the meaning defined by the GDPR (EU Regulation 2016/679) and the French Data Protection Act of 6 January 1978, as amended.</li>
</ul>`,
      },
      {
        title: 'Data controller',
        html: `<p>The controller of the data collected on the site is ${GC}, represented by Pierre Henny. For any question regarding your data: <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a>.</p>`,
      },
      {
        title: 'Data collected, purposes and legal bases',
        html: `<p>This is a <strong>showcase website</strong>: it offers neither user accounts nor online sales. Your data is only collected when you provide it to us, or through audience measurement (after consent).</p>
<ul>
<li><strong>Contact / quote-request form</strong> — data: name, e-mail, phone, message. Purpose: to answer your request and prepare a quote. Legal basis: your consent and pre-contractual measures.</li>
<li><strong>Newsletter</strong> — data: e-mail address. Purpose: to send you our news. Legal basis: your consent.</li>
<li><strong>Audience measurement</strong> — data: browsing data (pages viewed, device type, truncated IP address). Purpose: to improve the site. Legal basis: your consent (via the cookie banner).</li>
</ul>`,
      },
      {
        title: 'Recipients and processors',
        html: `<p>Your data is <strong>neither sold nor transferred</strong> for commercial purposes. It may be processed by our processors, solely for the purposes above:</p>
<ul>
<li><strong>Brevo</strong> (Sendinblue SAS, France) — newsletter delivery.</li>
<li><strong>Google Ireland Ltd / Google LLC</strong> — audience measurement (Google Analytics 4 and Google Tag Manager).</li>
<li><strong>Silktide</strong> — cookie consent management (no account, run locally in your browser).</li>
<li><strong>Hostinger, UAB</strong> (European Union) — website hosting.</li>
</ul>`,
      },
      {
        title: 'Retention periods',
        html: `<ul>
<li>Contact / quote requests: <strong>3 years</strong> from the last exchange.</li>
<li>Newsletter subscription: <strong>until you unsubscribe</strong>.</li>
<li>Audience measurement (Google Analytics 4): <strong>14 months</strong> maximum.</li>
</ul>`,
      },
      {
        title: 'Transfers outside the European Union',
        html: `<p>Audience measurement via Google may involve a transfer of data to the United States. Google LLC is certified under the <strong>EU–US Data Privacy Framework</strong>, which governs such transfers. Our other providers (Brevo, Hostinger) store data within the European Union.</p>`,
      },
      {
        title: 'Your rights',
        html: `<p>Under the GDPR, you have the rights of <strong>access</strong> (art. 15), <strong>rectification</strong> (art. 16), <strong>erasure</strong> (art. 17), <strong>restriction</strong> (art. 18), <strong>objection</strong> (art. 21), <strong>portability</strong> (art. 20), and the right to <strong>withdraw your consent</strong> at any time (art. 7). You may also give directives regarding the fate of your data after your death.</p>
<p>To exercise these rights, write to <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a> or by post to ${GC} — 3 allée Gabrielle Dorziat, 64200 Biarritz, France. Proof of identity may be requested. You may also lodge a complaint with the French data protection authority, the <strong>CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).</p>`,
      },
      {
        title: 'Security',
        html: `<p>${GC} implements appropriate technical and organisational measures (encrypted HTTPS connection, restricted access to data) to protect your data against loss, unauthorised access or disclosure. As no system is infallible, in the event of a breach likely to create a risk to your rights, the persons concerned and the CNIL would be informed in accordance with the regulations.</p>`,
      },
      {
        title: 'Cookies and audience measurement',
        html: `<p>A cookie is a small file placed on your device when you visit a website.</p>
<p>The site uses a <strong>consent management platform (Silktide)</strong> combined with <strong>Google Consent Mode v2</strong>. By default, <strong>no audience-measurement cookie is placed</strong>: Google Analytics cookies are only activated <strong>after your explicit consent</strong>, via the banner displayed as soon as you arrive on the site.</p>
<ul>
<li>You can <strong>accept</strong> or <strong>refuse</strong> non-essential cookies, and <strong>change your choice at any time</strong> by reopening the cookie preferences.</li>
<li>Refusing audience-measurement cookies does not affect your browsing.</li>
<li>Only cookies strictly necessary for the operation of the site (if any) may be placed without consent, in line with the CNIL's recommendations.</li>
</ul>`,
      },
      {
        title: 'Intellectual property',
        html: `<p>All elements of the site (texts, images, graphics, logos, videos, sounds) are protected by intellectual property law. Any reproduction or representation, in whole or in part, without the prior written authorisation of ${GC}, is prohibited.</p>`,
      },
      {
        title: 'Governing law',
        html: `<p>The site and this policy are governed by <strong>French law</strong>. In the event of a dispute, and failing an amicable resolution, jurisdiction is granted to the competent courts of <strong>Bayonne, France</strong>.</p>`,
      },
      {
        title: 'Contact',
        html: `<p>For any question regarding this policy or your personal data: <a href="mailto:contact@groovecaviar.com">contact@groovecaviar.com</a>.</p>`,
      },
    ],
  },
};
