import { Color } from '../color/color';
import { toRem } from './utils';

export interface ThemeContextValue {
  name: ThemeOption;
  textRegularSize: string;
  textLargeSize: string;
  textSecondarySize: string;
  primaryColor: Color;
  secondaryColor: Color;
  dangerColor: Color;
  textRegularColor: Color;
  textSecondaryColor: Color;
  baseInputColor: Color;
  primaryColorHovered: Color;
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
  textLargeSize = toRem(this.baseFontSize * 1.6);
  textSecondarySize = toRem(12);

  textRegularColor = Color.TextRegular;
  textSecondaryColor = Color.Secondary;
  textContrasty = Color.White;

  primaryColor = Color.Primary;
  primaryColorHovered = Color.PrimaryHovered;
  secondaryColor = Color.Secondary;
  dangerColor = Color.Danger;

  baseInputColor = Color.LigthGray;
}

export default new Theme();
