import fr from './fr.json';
import en from './en.json';

const ui = { fr, en };

export function useTranslations(lang: 'fr' | 'en') {
  return function t(key: string): string {
    // Permet de chercher des clés imbriquées comme "services.title"
    const keys = key.split('.');
    let translation: any = ui[lang] || ui.fr;
    
    for (const k of keys) {
      translation = translation?.[k];
    }
    
    // Si la clé n'existe pas dans le JSON, on renvoie la clé brute pour éviter un crash
    return translation || key;
  };
}