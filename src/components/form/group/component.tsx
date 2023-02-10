import React, { ReactNode } from 'react';

import { styled } from 'src/components/utils-styled-components';

interface Props {
  children?: ReactNode;
}

// TODO I really sorry but I have to make it quick
const ScGroup = styled.div`
  margin: 0.5rem 0;

  & > input {
    margin-top: 0.5rem;
    width: 96%;
  }

  & > label {
    display: block;
  }

  & > p {
    margin-top: 0.4rem;
  }
`;

export const FormGroup: React.FC<Props> = (props) => {
  return <ScGroup {...props} />;
};
