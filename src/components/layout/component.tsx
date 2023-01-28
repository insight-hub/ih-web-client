import {
  styled,
  StyledComponent,
  ThemeContextValue,
  ThemedStyledProps,
} from '../utils-styled-components';
import { mapProps, LayoutProps, PropClassNameMap } from './';

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

export const Layout = styled.div.withConfig({
  shouldForwardProp: (prop, fn) => {
    if (prop in mapProps) {
      return false;
    }

    return fn(prop);
  },
})<LayoutProps>((props) => getLayoutStyles(props, mapProps)) as StyledComponent<
  'div',
  never,
  LayoutProps,
  never
>;

Layout.displayName = 'Layout';
