import { useTranslation } from 'react-i18next';

type HomePageTranslationsReturnType = {
  welcomeLabel: string;
  toggleThemeLabel: string;
  toggleLanguageLabel: string;
  currentModeLabel: (mode: string) => string;
};

/**
 * use home page translations
 */
const useHomePageTranslations = (): HomePageTranslationsReturnType => {
  const { t } = useTranslation();

  return {
    welcomeLabel: t('HomePage.WelcomeLabel'),
    toggleThemeLabel: t('HomePage.ToggleThemeLabel'),
    toggleLanguageLabel: t('HomePage.ToggleLanguageLabel'),
    currentModeLabel: (mode: string) => t('HomePage.CurrentModeLabel', { mode })
  };
};

type TranslationsReturnType = {
  homePage: HomePageTranslationsReturnType;
};

/**
 * use  translations
 */
const useTranslations = (): TranslationsReturnType => {
  const homePage = useHomePageTranslations();

  return {
    homePage
  };
};

export default useTranslations;
