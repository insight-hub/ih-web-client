import React, { FormEventHandler, forwardRef, ForwardRefRenderFunction } from 'react';
import { BorderRadius } from 'src/components/core';
import { styled } from 'src/components/utils-styled-components';

interface Props {
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: FormEventHandler<HTMLInputElement>;
}

const ScInput = styled.input`
  height: 1.4rem;
  padding: 0.3rem;
  font-size: 1rem;
  color: #24292e;
  border: 1px solid #e1e4e8;
  border-radius: ${BorderRadius.Small};
`;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
  return <ScInput {...props} ref={ref} />;
};

export default forwardRef(Input);
