import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from 'src/app/contexts';
import { Language } from 'src/shared/model';
import { saveCurrentLanguage } from 'src/shared/lib';

interface useThemeResult {
    language: Language;
    changeLanguage: () => void;
}

export function useLanguage(): useThemeResult {
    const { language, setLanguage } = useContext(LanguageContext);
    const { t, i18n } = useTranslation();

    const changeLanguage = (): void => {
        if (language === Language.Russian) {
            i18n.changeLanguage('en');
            saveCurrentLanguage(Language.English);
            setLanguage(Language.English);
        } else {
            i18n.changeLanguage('ru');
            saveCurrentLanguage(Language.Russian);
            setLanguage(Language.Russian);
        }
    };

    return { language, changeLanguage };
}
