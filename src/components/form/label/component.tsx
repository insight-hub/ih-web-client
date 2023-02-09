import React from 'react';

import { styled } from 'src/components/utils-styled-components';

interface Props {
  id: string;
  label?: string;
}

const ScLabel = styled.label`
  color: #24292e;
`;

export const Label: React.FC<Props> = (props) => {
  return (
    <ScLabel htmlFor={props.id} {...props}>
      {props.label}
    </ScLabel>
  );
};

Label.displayName = 'Label';
