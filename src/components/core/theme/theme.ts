import { Color } from '../color/color';
import { toRem } from './utils';

export interface ThemeContextValue {
  name: ThemeOption;
  textRegularSize: string;
  textSecondarySize: string;
  primaryColor: Color;
  secondaryColor: Color;
  dangerColor: Color;
  textRegularColor: Color;
  textSecondaryColor: Color;
}

type ThemeOption = 'light' | 'dark';

class Theme implements ThemeContextValue {
  private theme: ThemeOption = 'light';
  private baseFontSize = 14;

  name = this.theme;

  setTheme(val: ThemeOption) {
    this.theme = val;
  }

  textRegularSize = toRem(this.baseFontSize);
  textSecondarySize = toRem(this.baseFontSize / 1.6);

  textRegularColor = Color.TextRegular;
  textSecondaryColor = Color.Secondary;

  primaryColor = Color.Primary;
  secondaryColor = Color.Secondary;
  dangerColor = Color.Danger;
}

export default new Theme();
