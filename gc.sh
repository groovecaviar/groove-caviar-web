#!/usr/bin/env bash
#
# gc.sh — Met à jour le site Groove Caviar en UNE seule commande,
#         puis relance le serveur automatiquement.
#
# À placer une fois à la racine du dossier groove-caviar-v2.
#
# UTILISATION :
#   1. Dans le terminal où tourne le serveur, appuie sur Ctrl + C (pour l'arreter).
#   2. Remplace groove-caviar-homepage-hero.patch par la derniere version.
#   3. Lance :  bash gc.sh
#   4. Recharge le navigateur (Cmd + Shift + R).
#
# Le script remet le dossier propre, vide les caches, applique la derniere
# version, reinstalle les dependances et redemarre le serveur. Aucun conflit
# possible, quel que soit l'etat precedent.

set -e

PATCH="groove-caviar-homepage-hero.patch"
cd "$(dirname "$0")"

if [ ! -f "$PATCH" ]; then
  echo "ERREUR : le fichier $PATCH est introuvable a la racine du projet."
  echo "Telecharge-le, place-le ici, puis relance :  bash gc.sh"
  exit 1
fi
if [ ! -d ".git" ]; then
  echo "ERREUR : ce dossier n'est pas un depot git. Lance le script depuis groove-caviar-v2."
  exit 1
fi

echo "-> 1/5  Remise a zero propre (etat de reference)..."
git reset --hard origin/main >/dev/null 2>&1
git clean -fd src docs >/dev/null 2>&1

echo "-> 2/5  Nettoyage des caches (evite les images fantomes)..."
rm -rf node_modules/.vite .astro dist >/dev/null 2>&1 || true

echo "-> 3/5  Application de la derniere version..."
git apply --binary "$PATCH"

echo "-> 4/5  Verification des dependances..."
npm install --no-audit --no-fund >/dev/null 2>&1

echo "-> 5/5  Demarrage du serveur..."
echo ""
echo "Site a jour ! Le serveur demarre ci-dessous."
echo "Quand tu vois  Local http://localhost:4321  recharge le navigateur (Cmd + Shift + R)."
echo ""
npm run dev
