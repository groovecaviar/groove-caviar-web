// Configuration des formulaires de demande de devis.
// Source de vérité : URL du script Google (Apps Script) qui reçoit les demandes.

// ⚠️ À REMPLACER après le déploiement du script (voir ~/Groove Caviar/Claude/devis-automation/README.md) :
// URL « Application Web » terminant par /exec.
export const QUOTE_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxQj_baenUv8bt7RMo4LeJGNrg3T8-q73xHCUKBojy9Bily2H_UE4z2MAIUTslXlmwLiw/exec';

export const QUOTE_CONTACT = {
  phoneDisplay: '06\u00A023\u00A062\u00A057\u00A004',
  phoneHref: 'tel:+33623625704',
  email: 'contact@groovecaviar.com',
} as const;

// Lieux de mariage les plus fréquents — ordre alphabétique.
// La valeur envoyée au script = le libellé (repris tel quel dans l'objet du devis).
// Pour ajouter un lieu : ajouter une ligne ici, en respectant l'ordre alphabétique.
export const WEDDING_VENUES: readonly string[] = [
  '70 Hectares… & l’Océan (40510 Seignosse)',
  'Château d’Arcangues (64200 Arcangues)',
  'Château de Campet (40090 Campet-et-Lamolère)',
  'Château de Larraldia (64990 Villefranque)',
  'Château de Monbet (40300 Saint-Lon-les-Mines)',
  'Château du Clair de Lune (64200 Biarritz)',
  'Domaine Arremonteguy (64240 Urt)',
  'Domaine de Larbéou (64100 Bayonne)',
  'Domaine de Tilh (64300 Loubieng)',
  'Domaine Elhorria (64200 Biarritz)',
  'Espace de l’Océan (64600 Anglet)',
  'Espace Maïténa (64600 Anglet)',
  'Ferme Inharria (64310 Saint-Pée-sur-Nivelle)',
  'Hôtel du Palais (64200 Biarritz)',
  'La Ferme Aux Piments (64495 Saint-Pée-sur-Nivelle)',
  'La Ferme Ostalapia (64210 Ahetze)',
  'Les Hortensias du Lac (40150 Hossegor)',
  'Maison Chiberta (64600 Anglet)',
  'Théâtre de la Nature (64200 Arcangues)',
];
