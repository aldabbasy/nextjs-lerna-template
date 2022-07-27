import { LANGUAGES } from '@/constants/common';
import { LocalizationContext } from '@/contexts/localizationContext';
import { ThemeContext } from '@/contexts/themeContext';
import useTranslations from '@/hooks/useTranslations';
import Box from '@/styles/components/Box/Box';
import Typography from '@/styles/components/Typography';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Home: NextPage = () => {
  const {
    homePage: { toggleLanguageLabel, toggleThemeLabel, currentModeLabel }
  } = useTranslations();
  const { toggleTheme, themeMode } = useContext(ThemeContext);
  const { changeLanguage, locale } = useContext(LocalizationContext);

  const router = useRouter();

  return (
    <div>
      <button type={'button'} onClick={() => router.push('/test')}>
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
      <Box margin={20}>
        <Typography variant={'display'} color={'primary'}>
          {currentModeLabel(themeMode)}
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
