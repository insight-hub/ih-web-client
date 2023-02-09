import React, { ReactNode } from 'react';

import { AlignItems, JustifyContent, Layout, Padding } from 'src/components/core/layout';
import { styled } from 'src/components/utils-styled-components';

interface Props {
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;
  width?: string;
  height?: string;
  children?: ReactNode;
  padding?: Padding;
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
