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

  return {};
}

interface ScProps {
  $cols: Columns;
  $offset?: OffsetColumns;
}

const ScColumn = styled.div<ScProps>`
  box-sizing: border-box;
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

interface Props {
  cols: Columns;
  offset?: OffsetColumns;
  children?: ReactNode;
}

export const Column: React.FC<Props> = (props) => {
  return <ScColumn $cols={props.cols} $offset={props.offset} {...props} />;
};
