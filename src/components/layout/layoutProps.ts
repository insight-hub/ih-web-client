import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ThemeContextValue, ThemedStyledProps } from 'src/components/utils-styled-components';
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
import { toCssProp } from './utils';

export type PropClassNameMap<T> = {
  [P in keyof T]: (
    props: ThemedStyledProps<Partial<T>, ThemeContextValue>,
    value: T[P],
  ) => string | void | null;
};

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

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LayoutProps
  extends LayoutCss,
  LayoutNonCss,
  Omit<DivProps, 'color' | 'role' | 'ref'> { }

export const mapProps: PropClassNameMap<Required<LayoutCss>> = {
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
