import { StandardPropertiesHyphen } from 'csstype';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { ThemeContextValue, ThemedStyledProps } from 'src/components/utils-styled-components';

import { styled, StyledComponent } from '../utils-styled-components';
import {
  Position,
  Display,
  JustifyContent,
  FlexDirection,
  FlexWrap,
  AlignSelf,
  AlignItems,
  AlignContent,
  Cursor,
  Overflow,
  ZIndex,
  Background,
} from './';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LayoutNonCss {
  children?: ReactNode;
  className?: string;
}

export interface LayoutCss {
  position?: Position;
  display?: Display;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  alignSelf?: AlignSelf;
  alingItems?: AlignItems;
  alignContent?: AlignContent;
  cursor?: Cursor;
  overflow?: Overflow;
  zIndex?: ZIndex;
  background?: Background;
}

export interface LayoutProps
  extends LayoutCss,
  LayoutNonCss,
  Omit<DivProps, 'color' | 'role' | 'ref'> { }

const mapProps: PropClassNameMap<Required<LayoutCss>> = {
  position: toCssProp('position'),
  display: toCssProp('display'),
  justifyContent: toCssProp('justify-content'),
  flexDirection: toCssProp('flex-direction'),
  flexWrap: toCssProp('flex-wrap'),
  alignSelf: toCssProp('align-self'),
  alingItems: toCssProp('align-items'),
  alignContent: toCssProp('align-content'),
  cursor: toCssProp('cursor'),
  overflow: toCssProp('overflow'),
  zIndex: toCssProp('z-index'),
  background: toCssProp('background'),
};

export type PropClassNameMap<T> = {
  [P in keyof T]: (
    props: ThemedStyledProps<Partial<T>, ThemeContextValue>,
    value: T[P],
  ) => string | void | null;
};

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

export function toCssProp<P extends {}>(cssProp: keyof StandardPropertiesHyphen) {
  return (_props: P, propValue: unknown) => {
    return `${cssProp}: ${propValue} !important;`;
  };
}

export const Layout = styled.div.withConfig({})<LayoutProps>((props) =>
  getLayoutStyles(props, mapProps),
) as StyledComponent<'div', never, LayoutProps, never>;

Layout.displayName = 'Layout';
