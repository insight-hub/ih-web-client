import React, { ReactNode } from 'react';

import { injectThemeValue } from 'src/components/core';
import { styled } from 'src/components/utils-styled-components';

interface Props {
  children?: ReactNode;
  isError?: boolean;
}

const ScHint = styled.p`
  font-size: ${injectThemeValue('textSecondarySize')};
  color: ${injectThemeValue('secondaryColor')};
`;

export const Hint: React.FC<Props> = (props) => {
  return <ScHint {...props} />;
};
