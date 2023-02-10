import * as sc from 'styled-components';
import { ThemeContextValue } from 'src/components/core';

type ScTypes = sc.ThemedStyledComponentsModule<ThemeContextValue>;

export const styled: ScTypes['default'] = sc.default;

export * from 'styled-components';
