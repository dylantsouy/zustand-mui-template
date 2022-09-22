import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export const useTranslation = (f) => {
    const languageContext = useContext(LanguageContext);

    const t = (text) => {
        return languageContext.dictionary && languageContext.dictionary[f]
            ? text.split('.').reduce((o, i) => o && o[i], languageContext.dictionary[f]) || text
            : text;
    };

    return { t };
};
