import { LANGUAGES, STORAGE_KEYS } from '@/constants/common';
import { Language } from '@/constants/types';
import i18n from '@/utils/i18next.utils';
import i18next from 'i18next';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { I18nextProvider } from 'react-i18next';

type LocalizationContextProps = {
  locale: Language;
  changeLanguage: (language: Language) => void;
};

export const LocalizationContext = createContext<LocalizationContextProps>(
  undefined as LocalizationContextProps
);

export const LocalizationProvider = ({
  children,
  defaultLocale
}: {
  children: ReactNode;
  defaultLocale?: Language;
}) => {
  const [locale, setLocale] = useState<Language>(
    defaultLocale || LANGUAGES.ENGLISH
  );

  const changeLanguage = (language: Language) => {
    const dir = language === LANGUAGES.ARABIC ? 'rtl' : 'ltr';
    setLocale(language);
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
    i18next.changeLanguage(language);
  };

  const providerValue = useMemo(
    () => ({
      locale,
      changeLanguage
    }),
    [locale, changeLanguage]
  );

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      STORAGE_KEYS.LANGUAGE
    ) as Language;
    const languageToLoad = defaultLocale || storedLanguage || LANGUAGES.DEFAULT;
    changeLanguage(languageToLoad as Language);
  }, [defaultLocale]);

  return (
    <LocalizationContext.Provider value={providerValue}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </LocalizationContext.Provider>
  );
};
