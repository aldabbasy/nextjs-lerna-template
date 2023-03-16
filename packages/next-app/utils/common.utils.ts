/**
 * isSSR
 * @returns {Boolean}
 */
export const isSSR = (): boolean => typeof window === 'undefined';
