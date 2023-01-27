import * as sc from 'styled-components';

export interface ThemeContextValue {
  name: 'light' | 'dark';
}

type ScTypes = sc.ThemedStyledComponentsModule<ThemeContextValue>;

export const styled: ScTypes['default'] = sc.default;

export * from 'styled-components';
