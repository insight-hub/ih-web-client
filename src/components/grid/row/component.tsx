import React, { ReactNode } from 'react';

import { AlignItems, JustifyContent } from 'src/components/layout';
import { styled } from 'src/components/utils-styled-components';
import { Layout } from 'src/components/layout';

interface Props {
  alignItems?: AlignItems;
  jusifyContent?: JustifyContent;
  children?: ReactNode;
}

const ScRow = styled(Layout)`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wpap: wrap;
  box-sizing: border-box;
`;

export const Row: React.FC<Props> = (props) => {
  return <ScRow {...props} />;
};
