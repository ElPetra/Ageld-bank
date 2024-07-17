import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import enJSON from 'src/shared/model/i18n/locales/en/en.json';
import ruJSON from 'src/shared/model/i18n/locales/ru/ru.json';
import oldEnJSON from 'src/shared/model/i18n/locales/en/en_old.json';
import oldRuJSON from 'src/shared/model/i18n/locales/ru/ru_old.json';

i18n.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        keySeparator: false,
        nsSeparator: false,
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: { translation: enJSON, oldEnJSON },
            ru: { translation: ruJSON, oldRuJSON }
        }
    });

export default i18n;

export class i18next {}
