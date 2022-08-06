import { ColorMode, ThemeMode } from '@/constants/colors';
import { STORAGE_KEYS } from '@/constants/common';
import { Theme } from '@/constants/types';
import { LocalizationContext } from '@/contexts/localizationContext';
import { isSSR } from '@/utils/common.utils';
import {
  getColorMode,
  getSystemTheme,
  getThemeValues
} from '@/utils/theme.utils';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeContextProps = {
  toggleTheme: () => void;
  handleSetThemeMode: (themeMode: ThemeMode) => void;
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextProps>(
  undefined as ThemeContextProps
);

export const ThemeProvider = ({
  children,
  storyBookTheme
}: {
  children: ReactNode;
  storyBookTheme?: ThemeMode;
}) => {
  const { locale } = useContext(LocalizationContext);
  const [isMounted, setIsMounted] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(
    storyBookTheme || ThemeMode.system
  );

  const systemTheme = useMemo(getSystemTheme, [isMounted]);

  const colorMode = useMemo(
    () => getColorMode(themeMode),
    [themeMode, systemTheme]
  );

  useEffect(() => {
    document.body.classList.remove(ColorMode.light, ColorMode.dark);
    document.body.classList.add(colorMode);
  }, [colorMode]);

  const handleSetThemeMode = (themeMode: ThemeMode) => {
    setThemeMode(themeMode);
    localStorage.setItem(STORAGE_KEYS.THEME_MODE, themeMode);
  };
  const toggleTheme = () => {
    const themeValue =
      colorMode === ColorMode?.light ? ThemeMode?.dark : ThemeMode?.light;

    handleSetThemeMode(themeValue);
  };
  useEffect(() => {
    if (storyBookTheme) {
      handleSetThemeMode(storyBookTheme);
    }
  }, [storyBookTheme]);

  useEffect(() => {
    if (storyBookTheme || isSSR()) return;
    setIsMounted(true);

    const storedTheme = localStorage.getItem(STORAGE_KEYS.THEME_MODE);
    handleSetThemeMode((storedTheme as ThemeMode) || ThemeMode.system);
  }, []);

  const theme = useMemo(
    () => getThemeValues({ themeMode, locale }),
    [themeMode, locale]
  );

  const providerValue = useMemo(
    () => ({ toggleTheme, handleSetThemeMode, theme }),
    [themeMode, toggleTheme]
  );

  if (!isMounted && !storyBookTheme) return null;

  return (
    <ThemeContext.Provider value={providerValue}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
