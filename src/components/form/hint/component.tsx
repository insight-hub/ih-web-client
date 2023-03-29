import React, { ReactNode } from 'react';

import { Color, injectThemeValue } from 'src/components/core';
import { styled, StyledProps } from 'src/components/utils-styled-components';

interface Props {
  children?: ReactNode;
  isError?: boolean;
  color?: Color;
}

interface ScProps {
  $color: Props['color'];
}

const ScHint = styled.p<StyledProps<ScProps>>`
  font-size: ${injectThemeValue('textSecondarySize')};
  color: ${(props) => props.color || Color.Secondary};
`;

export const Hint: React.FC<Props> = (props) => {
  return <ScHint $color={props.color} {...props} />;
};
