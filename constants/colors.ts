export enum ThemeMode {
  dark = 'dark',
  light = 'light',
  system = 'system'
}

export enum ColorMode {
  dark = 'dark',
  light = 'light'
}

const colors = {
  light: {
    primary: '#8C83F8',
    primaryShade: '#67A5E4',
    primaryGradient: 'linear-gradient(120deg, #8C83F8, #67A5E4)',
    secondary: '#47689A',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    surfaceBase: '#F2F1F6',
    surfaceHighEmphasis: '#FFFFFF',
    surfaceMediumEmphasis: '#F7F8FA',
    surfaceLowEmphasis: '#5D5E67',
    surfaceContrast: '#000000',
    onSurfaceHighEmphasis: '#0F1020',
    onSurfaceMediumEmphasis: '#363744',
    onSurfaceLowEmphasis: '#5D5E67',
    onSurfaceDisabled: '#ACC0D2',
    onSurfaceContrast: '#FFFFFF',
    success: '#419E3A',
    successShade: '#62C25B',
    error: '#D9534F',
    errorShade: '#E36363',
    warning: '#F58C15',
    warningShade: '#F79F3B',
    info: '#1E80F7',
    infoShade: '#4E9BF9'
  },
  dark: {
    primary: '#B97FE9',
    primaryShade: '#8D84F9',
    primaryGradient: 'linear-gradient(120deg, #B97FE9, #8D84F9)',
    secondary: '#67A5E4',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    surfaceBase: '#1C2024',
    surfaceHighEmphasis: '#24292E',
    surfaceMediumEmphasis: '#2C3237',
    surfaceLowEmphasis: '#EBEBEB',
    surfaceContrast: '#FFFFFF',
    onSurfaceHighEmphasis: '#FFFFFF',
    onSurfaceMediumEmphasis: '#F4F4F4',
    onSurfaceLowEmphasis: '#EBEBEB',
    onSurfaceDisabled: '#696E78',
    onSurfaceContrast: '#24292E',
    success: '#4F9A51',
    successShade: '#51B04A',
    error: '#B34946',
    errorShade: '#DE5B59',
    warning: '#D48A36',
    warningShade: '#F79F3B',
    info: '#1E6DCD',
    infoShade: '#388FF8'
  },
  greyscale: {
    grey0: '#FFFFFF',
    grey1: '#F5F5F5',
    grey2: '#EBEBEB',
    grey3: '#E0E0E0',
    grey4: '#D6D6D6',
    grey5: '#CCCCCC',
    grey6: '#C2C2C2',
    grey7: '#B8B8B8',
    grey8: '#ADADAD',
    grey9: '#A3A3A3',
    grey10: '#999999',
    grey11: '#8F8F8F',
    grey12: '#858585',
    grey13: '#7A7A7A',
    grey14: '#707070',
    grey15: '#666666',
    grey16: '#5C5C5C',
    grey17: '#525252',
    grey18: '#434343',
    grey19: '#3D3D3D',
    grey20: '#333333',
    grey21: '#292929',
    grey22: '#1F1F1F',
    grey23: '#141414',
    grey24: '#0A0A0A'
  }
};

export default colors;
