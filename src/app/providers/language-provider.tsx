import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageContext } from 'src/app/contexts';
import { Language } from 'src/shared/model';
import { getCurrentLanguage } from 'src/shared/lib';

import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
    const [language, setLanguage] = useState<Language>(Language.Russian);
    const { i18n } = useTranslation();

    useEffect(() => {
        const currentLanguage = getCurrentLanguage();
        if (currentLanguage === Language.Russian) {
            i18n.changeLanguage('en').then();
        } else {
            i18n.changeLanguage('ru').then();
        }
    }, []);

    const defaultValue = useMemo(
        () => ({
            language,
            setLanguage
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={defaultValue}>
            {children}
        </LanguageContext.Provider>
    );
}
