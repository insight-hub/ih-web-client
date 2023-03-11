import { StandardLonghandProperties } from 'csstype';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { ThemedStyledProps } from 'src/components/utils-styled-components';
import { Color } from '../color/color';
import { ThemeContextValue } from '../theme';
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
  getLayoutStyles,
  Padding,
  Margin,
} from './';
import { BorderRadius, getSpacingStyles, toCssProp } from './utils';

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

export interface LayoutBreackpointCss {
  height?: StandardLonghandProperties['height'];
  width?: StandardLonghandProperties['width'];
  minWidth?: StandardLonghandProperties['minWidth'];
  minHeigth?: StandardLonghandProperties['minHeight'];
  visibility?: StandardLonghandProperties['visibility'];
  margin?: Margin;
  padding?: Padding;
  paddingTop?: StandardLonghandProperties['paddingTop'];
  paddingBot?: StandardLonghandProperties['paddingBottom'];
  paddingLeft?: StandardLonghandProperties['paddingLeft'];
  paddingRight?: StandardLonghandProperties['paddingRight'];
  marginTop?: StandardLonghandProperties['marginTop'];
  marginBot?: StandardLonghandProperties['marginBottom'];
  marginLeft?: StandardLonghandProperties['marginLeft'];
  marginRight?: StandardLonghandProperties['marginRight'];
}

export interface LayoutCss extends LayoutBreackpointCss {
  position?: Position;
  display?: Display;
  justifyContent?: JustifyContent;
  flexDirection?: FlexDirection;
  flexWrap?: FlexWrap;
  alignSelf?: AlignSelf;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  borderRadius?: BorderRadius;
  backgroundColor?: Color;
  cursor?: Cursor;
  overflow?: Overflow;
  zIndex?: ZIndex;
  background?: Background;
  breackpointXs?: LayoutBreackpointCss;
  breackpointSm?: LayoutBreackpointCss;
  breackpointMd?: LayoutBreackpointCss;
  breackpointLg?: LayoutBreackpointCss;
  breackpointXl?: LayoutBreackpointCss;
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LayoutProps
  extends LayoutCss,
  LayoutNonCss,
  Omit<DivProps, 'color' | 'role' | 'ref'> { }

const breackpointProps: PropClassNameMap<Required<LayoutBreackpointCss>> = {
  height: toCssProp('height'),
  width: toCssProp('width'),
  minWidth: toCssProp('min-width'),
  minHeigth: toCssProp('min-height'),
  margin: (_, v) => getSpacingStyles(v, 'margin'),
  padding: (_, v) => getSpacingStyles(v, 'padding'),
  visibility: toCssProp('visibility'),
  paddingTop: toCssProp('padding-top'),
  paddingBot: toCssProp('padding-bottom'),
  paddingLeft: toCssProp('padding-left'),
  paddingRight: toCssProp('padding-right'),
  marginTop: toCssProp('margin-top'),
  marginBot: toCssProp('margin-bottom'),
  marginLeft: toCssProp('margin-left'),
  marginRight: toCssProp('margin-right'),
};

export const mapProps: PropClassNameMap<Required<LayoutCss>> = {
  ...breackpointProps,
  position: toCssProp('position'),
  display: toCssProp('display'),
  justifyContent: toCssProp('justify-content'),
  flexDirection: toCssProp('flex-direction'),
  flexWrap: toCssProp('flex-wrap'),
  alignSelf: toCssProp('align-self'),
  alignItems: toCssProp('align-items'),
  alignContent: toCssProp('align-content'),
  borderRadius: toCssProp('border-radius'),
  backgroundColor: toCssProp('background-color'),
  cursor: toCssProp('cursor'),
  overflow: toCssProp('overflow'),
  zIndex: toCssProp('z-index'),
  background: toCssProp('background'),
  breackpointXs: (props, bpProps) => `
    @media screen and (min-width: 0) {
      ${getLayoutStyles({ ...bpProps, theme: props.theme }, breackpointProps)}
    }
  `,
  breackpointSm: (props, bpProps) => `
    @media screen and (min-width: 570px) {
      ${getLayoutStyles({ ...bpProps, theme: props.theme }, breackpointProps)}
    }
  `,
  breackpointMd: (props, bpProps) => `
    @media screen and (min-width: 760px) {
      ${getLayoutStyles({ ...bpProps, theme: props.theme }, breackpointProps)}
    }
  `,
  breackpointLg: (props, bpProps) => `
    @media screen and (min-width: 990px) {
      ${getLayoutStyles({ ...bpProps, theme: props.theme }, breackpointProps)}
    }
  `,
  breackpointXl: (props, bpProps) => `
    @media screen and (min-width: 1200px) {
      ${getLayoutStyles({ ...bpProps, theme: props.theme }, breackpointProps)}
    }
  `,
};
