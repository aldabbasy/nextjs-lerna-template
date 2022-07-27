import colors from '@/constants/colors';
import { LANGUAGES, STORAGE_KEYS } from '@/constants/common';
import { Language, Theme } from '@/constants/types';
import { LocalizationContext } from '@/contexts/localizationContext';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export enum ColorMode {
  dark = 'dark',
  light = 'light'
}

type ThemeContextProps = {
  themeMode: ColorMode;
  toggleTheme: () => void;
  theme: Theme;
};

const getThemeValues = (colorMode: ColorMode, locale: Language): Theme => ({
  mode: colorMode,
  colors: colors?.[colorMode],
  isRtl: locale === LANGUAGES.ARABIC,
  direction: locale === LANGUAGES.ENGLISH ? 'ltr' : 'rtl',
  leading: locale === LANGUAGES.ENGLISH ? 'left' : 'right',
  trailing: locale === LANGUAGES.ENGLISH ? 'right' : 'left',
  fontFamily: '"Poppins", sans-serif' // add arabic font
});

export const ThemeContext = createContext<ThemeContextProps>(
  undefined as ThemeContextProps
);

export const ThemeProvider = ({
  children,
  defaultThemeMode
}: {
  children: ReactNode;
  defaultThemeMode?: ColorMode;
}) => {
  const { locale } = useContext(LocalizationContext);
  const [themeMode, setThemeMode] = useState(
    defaultThemeMode || ColorMode.light
  );

  const theme = getThemeValues(themeMode, locale);

  const handleSetThemeMode = (colorMode: ColorMode) => {
    setThemeMode(colorMode);
    localStorage.setItem(STORAGE_KEYS.THEME_MODE, colorMode);
    document.body.classList.remove(ColorMode.light, ColorMode.dark);
    document.body.classList.add(colorMode);
  };

  const toggleTheme = () => {
    const themeValue =
      themeMode === ColorMode?.light ? ColorMode?.dark : ColorMode?.light;

    handleSetThemeMode(themeValue);
  };

  const providerValue = useMemo(
    () => ({ themeMode, toggleTheme, theme }),
    [themeMode, toggleTheme]
  );

  useEffect(() => {
    const systemTheme = matchMedia('(prefers-color-scheme: dark)').matches
      ? ColorMode.dark
      : ColorMode.light;

    const localValue = localStorage.getItem(
      STORAGE_KEYS.THEME_MODE
    ) as ColorMode;
    const themeValue = defaultThemeMode || localValue || systemTheme;
    handleSetThemeMode(themeValue);
  }, [defaultThemeMode]);

  return (
    <ThemeContext.Provider value={providerValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
