import { Language } from './types';

export const ARABIC_FONT = '"Dubai"';
export const ENGLISH_FONT = '"Poppins", sans-serif';
export const LANGUAGES: Record<'DEFAULT' | 'ENGLISH' | 'ARABIC', Language> = {
  DEFAULT: 'en',
  ENGLISH: 'en',
  ARABIC: 'ar'
};
export const STORAGE_KEYS = {
  THEME_MODE: 'theme',
  LANGUAGE: 'language'
};
