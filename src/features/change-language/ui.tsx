import { useLanguage } from 'src/entities/language';
import { Language } from 'src/shared/model';

export function LanguageButton() {
    const { language, changeLanguage } = useLanguage();

    return (
        <button onClick={changeLanguage}>
            {language === Language.Russian ? <div>ENG</div> : <div>RUS</div>}
        </button>
    );
}
