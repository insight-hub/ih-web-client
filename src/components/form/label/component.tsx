import React from 'react';
import { Color } from 'src/components/core';

import { styled } from 'src/components/utils-styled-components';

interface Props {
  id: string;
  label?: string;
  required?: boolean;
}

const ScLabel = styled.label`
  color: #24292e;
  font-size: ${(props) => props.theme.textRegularSize};
`;

const ScRequiredStar = styled.span`
  &:after {
    content: ' *';
    color: ${Color.Danger};
  }
`;

export const Label: React.FC<Props> = (props) => {
  return (
    <ScLabel htmlFor={props.id} {...props}>
      {props.label}
      {props.required && <ScRequiredStar />}
    </ScLabel>
  );
};

Label.displayName = 'Label';
