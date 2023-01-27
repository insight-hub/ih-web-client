import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { styled } from '../utils-styled-components';
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

interface LayoutCssBreakpointProps { }

export interface LayoutProps extends Omit<DivProps, 'color' | 'role' | 'ref'> {
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
  breakpointXs?: LayoutCssBreakpointProps;
  breakpointSm?: LayoutCssBreakpointProps;
  breakpointMd?: LayoutCssBreakpointProps;
  breakpointLg?: LayoutCssBreakpointProps;
  breakpointXl?: LayoutCssBreakpointProps;
  children?: ReactNode;
  className?: string;
}

export const Layout = styled.div.withConfig({})<LayoutProps>(() => ({
  test: 'test',
}));
Layout.displayName = 'Layout';
