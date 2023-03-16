import { ColorMode, ThemeMode } from './colors';

export type Language = 'en' | 'ar';

export type ColorName =
  | 'primary'
  | 'primaryShade'
  | 'primaryGradient'
  | 'secondary'
  | 'onPrimary'
  | 'onSecondary'
  | 'surfaceBase'
  | 'surfaceHighEmphasis'
  | 'surfaceMediumEmphasis'
  | 'surfaceLowEmphasis'
  | 'surfaceContrast'
  | 'onSurfaceHighEmphasis'
  | 'onSurfaceMediumEmphasis'
  | 'onSurfaceLowEmphasis'
  | 'onSurfaceDisabled'
  | 'onSurfaceContrast'
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | 'grey0'
  | 'grey1'
  | 'grey2'
  | 'grey3'
  | 'grey4'
  | 'grey5'
  | 'grey6'
  | 'grey7'
  | 'grey8'
  | 'grey9'
  | 'grey10'
  | 'grey11'
  | 'grey12'
  | 'grey13'
  | 'grey14'
  | 'grey15'
  | 'grey16'
  | 'grey17'
  | 'grey18'
  | 'grey19'
  | 'grey20'
  | 'grey21'
  | 'grey22'
  | 'grey23'
  | 'grey24';

export interface Theme {
  colorMode: ColorMode;
  themeMode: ThemeMode;
  colors: Record<ColorName, string>;
  zIndex?: Record<string, number>;
  isRtl: boolean;
  direction: 'ltr' | 'rtl';
  leading: 'left' | 'right';
  trailing: 'left' | 'right';
  fontFamily?: `${string}, sans-serif`;
}
