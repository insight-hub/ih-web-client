import { styled, StyledComponent } from '../../utils-styled-components';
import { mapProps, LayoutProps, getLayoutStyles } from './';

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
