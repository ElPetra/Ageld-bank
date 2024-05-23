import { Language } from 'src/shared/model';

export const getCurrentLanguage = (): Language =>
    (localStorage.getItem('current-language') as Language) || Language.Russian;

export const saveCurrentLanguage = (language: Language): void => {
    localStorage.setItem('current-language', language);
};
