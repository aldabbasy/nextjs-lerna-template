import { LANGUAGES } from '@/constants/common';
import { LocalizationContext } from '@/contexts/localizationContext';
import { ThemeContext } from '@/contexts/themeContext';
import useTranslations from '@/hooks/useTranslations';
import Flex from '@/styles/components/Flex';
import Typography from '@/styles/components/Typography';
import type { NextPage } from 'next';
import { useContext } from 'react';

const Home: NextPage = () => {
  const {
    homePage: { toggleLanguageLabel, toggleThemeLabel, welcomeLabel }
  } = useTranslations();
  const { toggleTheme } = useContext(ThemeContext);
  const { changeLanguage, locale } = useContext(LocalizationContext);

  return (
    <div>
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
      <Flex
        alignItems={'center'}
        justifyContent={'center'}
        width={'100%'}
        height={'calc(100vh - 64px)'}
      >
        <Typography variant={'display'} textGradient={'primaryGradient'}>
          {welcomeLabel}
        </Typography>
      </Flex>
    </div>
  );
};

export default Home;
