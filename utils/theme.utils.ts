import colors, { ColorMode, ThemeMode } from '@/constants/colors';
import { LANGUAGES } from '@/constants/common';
import { Language, Theme } from '@/constants/types';
import { isSSR } from './common.utils';

/**
 * getThemeValues - get theme values
 * @param colorMode - color mode
 * @param themeMode - theme mode
 * @returns {ColorMode} - color mode
 */
export const getThemeValues = ({
  themeMode,
  locale
}: {
  themeMode: ThemeMode;
  locale: Language;
}): Theme => ({
  themeMode,
  colorMode: getColorMode(themeMode),
  colors: { ...colors?.[getColorMode(themeMode)], ...colors?.greyscale },
  isRtl: locale === LANGUAGES.ARABIC,
  direction: locale === LANGUAGES.ENGLISH ? 'ltr' : 'rtl',
  leading: locale === LANGUAGES.ENGLISH ? 'left' : 'right',
  trailing: locale === LANGUAGES.ENGLISH ? 'right' : 'left',
  fontFamily: '"Poppins", sans-serif' // add arabic font
});

/**
 * getSystemTheme - return system prefered theme mode
 * @returns {ColorMode} - color mode
 */
export const getSystemTheme = () => {
  if (isSSR()) return;
  return matchMedia('(prefers-color-scheme: dark)').matches
    ? ColorMode.dark
    : ColorMode.light;
};

/**
 * getColorMode - map theme mode to color mode
 * @param themeMode - theme mode
 * @returns {ColorMode} - color mode
 */
export const getColorMode = (themeMode: ThemeMode): ColorMode => {
  if (isSSR()) return;
  if (themeMode === ThemeMode.system) return getSystemTheme();
  return ColorMode?.[themeMode];
};
