import { LANGUAGES } from '@/constants/common';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from '@/public/locales/ar/translations.json';
import translationEN from '@/public/locales/en/translations.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  }
};

i18next.use(initReactI18next).init({
  initImmediate: false,
  supportedLngs: Object.values(LANGUAGES),
  resources,
  lng: LANGUAGES.ENGLISH,
  debug: false,
  interpolation: {
    prefix: '{',
    suffix: '}'
  },
  react: {
    useSuspense: true
  }
});

export default i18next;
