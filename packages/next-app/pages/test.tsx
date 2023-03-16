import { LANGUAGES } from '@/constants/common';
import { LocalizationContext } from '@/contexts/localizationContext';
import { ThemeContext } from '@/contexts/themeContext';
import useTranslations from '@/hooks/useTranslations';
import Typography from '@/styles/components/Typography';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Home: NextPage = () => {
  const {
    homePage: { toggleLanguageLabel, toggleThemeLabel, currentModeLabel }
  } = useTranslations();
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { changeLanguage, locale } = useContext(LocalizationContext);

  const router = useRouter();

  return (
    <div>
      <button type={'button'} onClick={() => router.push('/home')}>
        route
      </button>
      <button type={'button'} onClick={toggleTheme}>
        {toggleThemeLabel}
      </button>
      <button
        type={'button'}
        onClick={() =>
          changeLanguage(
            locale === LANGUAGES.ARABIC ? LANGUAGES.ENGLISH : LANGUAGES.ARABIC
          )
        }
      >
        {toggleLanguageLabel}
      </button>
      <Typography variant={'display'} color={'secondary'}>
        {currentModeLabel(theme?.themeMode)}
      </Typography>
    </div>
  );
};

export default Home;
