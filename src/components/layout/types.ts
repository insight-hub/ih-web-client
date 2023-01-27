export enum Position {
  Relative = 'relative',
  Absolute = 'absolute',
  Fixed = 'fixed',
}

export enum Display {
  Block = 'block',
  Flex = 'flex',
  Inline = 'inline',
  InlineBlock = 'inline-block',
  InlineFlex = 'inline-flex',
  Hide = 'none',
}

export enum JustifyContent {
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  Between = 'space-between',
  Around = 'space-around',
}

export enum FlexDirection {
  Column = 'column',
  ColumnReverse = 'column-reverse',
  Row = 'row',
  RowReverse = 'row-reverse',
}

export enum AlignContent {
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  Between = 'space-between',
  Around = 'space-around',
  Stretch = 'stretch',
}

export enum AlignItems {
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}

export enum AlignSelf {
  Auto = 'auto',
  Start = 'flex-start',
  End = 'flex-end',
  Center = 'center',
  Baseline = 'baseline',
  Stretch = 'stretch',
}

export enum FlexWrap {
  Wrap = 'wrap',
  NoWrap = 'nowrap',
  WrapReverse = 'wrap-reverse',
}

export enum Cursor {
  Default = 'default',
  Pointer = 'pointer',
}

export enum Overflow {
  Scroll = 'scroll',
  Hidden = 'hidden',
}

export enum ZIndex {
  Default = 'z-index-default',
  Above = 'z-index-above',
  Below = 'z-index-below',
}

export enum Background {
  Base = 'base',
  DarkGray = 'dark-gray',
}

export enum Color {
  Base = 'base',
  Danger = 'danger',
  Secondary = 'secondary',
}

export enum FontSize {
  Size1 = 'font-size-1',
  Size2 = 'font-size-2',
  Size3 = 'font-size-3',
  Size4 = 'font-size-4',
}

export enum FontWeight {
  Regular = 'regular',
  SemiBold = 'semibold',
  Bold = 'bold',
}

export type BorderRadiusProps = BorderRadius;
