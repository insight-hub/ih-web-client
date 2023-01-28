import React, { ReactNode } from 'react';

import { CSSObject, styled } from 'src/components/utils-styled-components';

export type Columns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type OffsetColumns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

interface BreakpointObject<C> {
  default?: C;
  xs?: C;
  sm?: C;
  md?: C;
  lg?: C;
  xl?: C;
}

export function getBreakpointCss<T>(
  propValue: T | BreakpointObject<T> | undefined,
  callback: (value: T) => CSSObject,
): CSSObject {
  if (typeof propValue === 'string' || typeof propValue === 'number') {
    return callback(propValue);
  }

  if (typeof propValue === 'object') {
    const css: CSSObject = {};
    Object.entries(propValue).forEach(([breakpointKey, breakpointValue]) => {
      css[getBreakpointWidthRule(breakpointKey)] = callback(breakpointValue);
    });
    return css;
  }

  return {};
}

type Breackpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const breackpointMap: Record<Breackpoint, string> = {
  xs: '0',
  sm: '480px',
  md: '720px',
  lg: '960px',
  xl: '1200px',
};

const getBreakpointWidthRule = (breakpoint: Breackpoint | 'default'): string => {
  if (breakpoint === 'default') {
    return '&';
  }

  return `@media screen and (min-width: ${breackpointMap[breakpoint]})`;
};

interface ScProps {
  $cols: Props['cols'];
  $offset?: OffsetColumns;
}

const ScColumn = styled.div<ScProps>`
box - sizing: border - box;
flex: 0 0 auto;

  ${({ $cols }) =>
    getBreakpointCss($cols, (value) => ({
      'flex-basis': (value / 12) * 100 + '%',
      'max-width': (value / 12) * 100 + '%',
    }))}

  ${({ $offset }) =>
    getBreakpointCss($offset, (value) => ({
      'margin-left': (value / 12) * 100 + '%',
    }))}
`;

interface ColumnValues {
  default?: Columns;
  xs?: Columns;
  sm?: Columns;
  md?: Columns;
  lg?: Columns;
  xl?: Columns;
}

interface Props {
  cols: Columns | ColumnValues;
  offset?: OffsetColumns;
  children?: ReactNode;
}

export const Column: React.FC<Props> = (props) => {
  return <ScColumn $cols={props.cols} $offset={props.offset} {...props} />;
};
