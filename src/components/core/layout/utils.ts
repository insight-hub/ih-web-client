import { StandardPropertiesHyphen } from 'csstype';
import { directionalProperty } from 'polished';
import { ThemeContextValue } from 'src/components/utils-styled-components';
import { css, ThemedStyledProps } from 'styled-components';
import { PropClassNameMap } from './layoutProps';
import { Margin, MarginValue, Padding, PaddingValue } from './types';

export function toCssProp<P extends {}>(cssProp: keyof StandardPropertiesHyphen) {
  return (_: P, propValue: unknown) => {
    return `${cssProp}: ${propValue} !important;`;
  };
}

export function getLayoutStyles<T extends {}>(
  props: ThemedStyledProps<T, ThemeContextValue>,
  map: PropClassNameMap<Required<T>>,
) {
  let styles = '';

  for (const propName in props as T) {
    if (propName in map) {
      const propValue = props[propName];

      styles += map[propName](props, propValue);
    }
  }

  return styles;
}

export function getSpacingVal(val: MarginValue | PaddingValue) {
  switch (val) {
    case 'auto':
      return val;
    case 0:
      return 0;
    default:
      return `${val}rem`;
  }
}

// TODO refactor
export function getSpacingStyles(val: Margin | Padding, type: 'margin' | 'padding'): string {
  if (typeof val === 'object') {
    const obj = directionalProperty(
      type,
      getSpacingVal(val.y! ?? val.top),
      getSpacingVal(val.x! ?? val.right),
      getSpacingVal(val.y! ?? val.bottom),
      getSpacingVal(val.x! ?? val.left),
    );
    return css(obj).join('');
  }

  return css(directionalProperty(type, getSpacingVal(val))).join('');
}

// TODO refactor
export enum BorderRadius {
  None = 'none',
  Small = '5px',
  Medium = '13px',
  Large = '50%',
  Rounded = '100%',
}

export function getBorderRadiusStyles(opts: BorderRadius) {
  return () => css`
    border-radius: ${opts};
  `;
}
