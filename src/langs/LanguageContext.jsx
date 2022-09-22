import React from 'react';
import { dictionaryList } from './index';

// create the language context with default selected language
export const LanguageContext = React.createContext({
    userLanguage: 'tw',
    dictionary: dictionaryList.tw,
});
