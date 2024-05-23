import { createContext } from 'react';

import { Language } from 'src/shared/model';

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: Language.Russian,
    setLanguage: () => {}
});
