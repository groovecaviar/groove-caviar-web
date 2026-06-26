# Analytics & tracking — Groove Caviar

Tout le tracking est centralisé via **Google Tag Manager** (un seul conteneur).
GA4, Google Tag, et plus tard Meta Pixel / LinkedIn se configurent **dans GTM**, pas dans le code.

## 1. Identifiants (où les changer)

Un seul fichier : **`src/config/analytics.ts`**

| Clé | Valeur |
|---|---|
| `gtmId` | `GTM-K939WRS` |
| `ga4Id` | `G-JNP77GV0GC` (réf. — configuré dans GTM) |
| `googleTagId` | `GT-NMLTR5K` (réf. — configuré dans GTM) |

## 2. Fichiers

| Fichier | Rôle |
|---|---|
| `src/config/analytics.ts` | IDs + mapping `data-track → événement` + flag debug |
| `src/components/analytics/GoogleTagManager.astro` | Consent Mode + emplacement Silktide + chargeur GTM (idle) + noscript |
| `src/utils/analytics.ts` | `trackEvent()` + écouteur délégué `data-track` |
| `src/layouts/Layout.astro` | Injecte GTM (head + body) et initialise l'écouteur |

## 3. Suivre un clic : attribut `data-track`

Ajoute simplement l'attribut sur le CTA :

```html
<a href="tel:+33623625704" data-track="call-click">Appeler</a>
<a href="/devis/mariages" data-track="quote-wedding">Demander un devis</a>
<a href="https://wa.me/33623625704" data-track="whatsapp-click">WhatsApp</a>
```

Mapping actuel (`src/config/analytics.ts`) :

| `data-track` | Événement GA4 |
|---|---|
| `call-click` | `phone_click` |
| `email-click` | `email_click` |
| `whatsapp-click` | `whatsapp_click` |
| `instagram-click` | `contact_click` |
| `quote-wedding` / `quote-booking` | `quote_request` |
| `cta-hero` / `cta-final` | `cta_click` |

Optionnel : `data-track-label="hero"` pour ajouter un libellé.

## 4. Suivre un événement manuel (ex. soumission Jotform)

```ts
import { trackEvent } from '~/utils/analytics';
trackEvent('form_submit', { form: 'devis-mariage' });
trackEvent('generate_lead', { value: 1 });
```

## 5. Ajouter un NOUVEL événement

1. Ajoute une entrée dans `TRACK_EVENT_MAP` (`src/config/analytics.ts`) **ou** appelle `trackEvent('mon_event')`.
2. Dans GTM : crée un déclencheur **Custom Event** dont le nom = celui poussé dans le dataLayer, puis une balise **GA4 Event** branchée dessus.
3. Publie le conteneur GTM.

## 6. Téléphone FR / WhatsApp EN

- Pages **FR** : `tel:+33623625704` (appel classique) → `call-click`
- Pages **EN** : `https://wa.me/33623625704` (WhatsApp) → `whatsapp-click`

Géré dans `src/data/pages/home.ts` (`ctaPhone.type` = `'tel'` ou `'whatsapp'`).

---

## 7. Silktide (CMP / RGPD) — DÉJÀ INTÉGRÉ DANS LE CODE

**Rien à faire pour Pierre.** Le bandeau de consentement **Silktide Consent Manager** (open-source, gratuit, sans compte ni ID) est intégré dans `GoogleTagManager.astro` :

- **Consent Mode v2 en refus par défaut** : aucun tracking tant que le visiteur n'a pas accepté (le défaut est lu depuis `localStorage`, donc un visiteur déjà consentant n'est pas redemandé).
- **Bandeau en français**, position bas-gauche, bouton « Tout accepter » aux couleurs de la marque (or `#AF9453`).
- **3 catégories** : *Essentiels* (obligatoires), *Mesure d'audience* (→ `analytics_storage` → GA4), *Marketing* (→ `ad_storage` / `ad_user_data` / `ad_personalization` → futur Pixel/LinkedIn).
- À l'acceptation, Silktide envoie `gtag('consent','update',…)` **et** pousse l'événement `stcm_consent_update` dans le dataLayer (capté par le déclencheur GTM du même nom, qui relance la balise GA4).
- Source chargée depuis le CDN jsDelivr avec contrôle d'intégrité (SRI).

> Aucune balise « Custom HTML Silktide » n'est nécessaire dans GTM : l'initialisation vit dans le code du site.
>
> Pour modifier les textes / couleurs du bandeau plus tard : éditer les variables `silktideInit` et `stcmStyles` en haut de `GoogleTagManager.astro`.

## 8. Configuration GTM (interface web) — DÉJÀ FAIT ✅

Dans le conteneur **GTM-K939WRS**, déjà en place :

- **Balise `Google Tag - GA4`** (Balise Google, ID `G-JNP77GV0GC`)
  - Déclencheurs : **Initialization - All Pages** **+** **STCM Consent Update**.
- **Balise `GA4 - Événements`** (Événement GA4, nom = `{{Event}}`)
  - Paramètres : `label` = `{{DLV - label}}`, `track_key` = `{{DLV - track_key}}`.
  - Consentement requis : `analytics_storage`.
  - Déclencheur : **GC - Événements personnalisés**.
- **Variables** (couche de données v2) : `DLV - label`, `DLV - track_key`.
- **Déclencheur `GC - Événements personnalisés`** (Custom Event, regex) :
  `phone_click|email_click|whatsapp_click|contact_click|quote_request|form_submit|generate_lead|cta_click`.
- **Déclencheur `STCM Consent Update`** (Custom Event = `stcm_consent_update`).

**Reste à faire :**
1. **Enhanced Measurement** (dans GA4, pas GTM) : active pages vues, scroll, clics sortants, engagement/temps, interactions formulaires.
2. **Tester** (section 9) en mode Aperçu GTM + DebugView GA4.
3. **Marquer `quote_request` et `generate_lead`** comme **événements clés (conversions)** dans GA4 — possible une fois qu'ils se sont déclenchés au moins une fois (ils apparaîtront dans la liste).
4. **Publier** le conteneur (bouton « Envoyer »).

## 9. Tester

- **Mode debug local** : en `npm run dev`, chaque événement est loggé dans la console (`[analytics] →`).
- **GTM Preview** : dans GTM, bouton « Aperçu » → entre l'URL du site → vérifie que les balises se déclenchent au clic.
- **GA4 DebugView** : Admin → DebugView → observe les événements en temps réel (avec l'extension Google Analytics Debugger ou via GTM Preview).

## 10. Évolutions futures (Meta Pixel / LinkedIn)

Aucun changement de code : ajoute les balises **dans GTM**, branchées sur les mêmes déclencheurs, et gate-les par le consentement **Marketing** (Silktide). Les événements du dataLayer sont déjà disponibles.
