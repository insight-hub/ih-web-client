import Theme, { ThemeContextValue } from './theme';

export function toRem(val: number) {
  return val / 16 + 'rem';
}

export function injectThemeValue(val: keyof ThemeContextValue) {
  return ({ theme }: { theme: typeof Theme }) => theme[val];
}
