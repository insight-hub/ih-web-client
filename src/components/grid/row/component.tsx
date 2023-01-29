import React, { ReactNode } from 'react';

import { AlignItems, JustifyContent, Layout } from 'src/components/core/layout';
import { styled } from 'src/components/utils-styled-components';

interface Props {
  alignItems?: AlignItems;
  jusifyContent?: JustifyContent;
  children?: ReactNode;
}

const ScRow = styled(Layout)`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const Row: React.FC<Props> = (props) => {
  return <ScRow {...props} />;
};
