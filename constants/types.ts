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
  | 'surfaceContrast'
  | 'onSurfaceHighEmphasis'
  | 'onSurfaceMediumEmphasis'
  | 'onSurfaceLowEmphasis'
  | 'onSurfaceDisabled'
  | 'onSurfaceContrast'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export interface Theme {
  mode: 'light' | 'dark';
  colors: Record<ColorName, string>;
  zIndex?: Record<string, number>;
  isRtl: boolean;
  direction: 'ltr' | 'rtl';
  leading: 'left' | 'right';
  trailing: 'left' | 'right';
  fontFamily?: '"Poppins", sans-serif' | '"Dubai"'; // add arabic font
}
