import React, { FormEventHandler, forwardRef, ForwardRefRenderFunction } from 'react';
import { BorderRadius, injectThemeValue } from 'src/components/core';
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
  padding: 0.5rem;
  border: 1px solid ${injectThemeValue('baseInputColor')};
  border-radius: ${BorderRadius.Small};
  font-size: ${injectThemeValue('textRegularSize')};
  color: ${injectThemeValue('textRegularColor')};
  outline: none;

  &:focus {
    border-color: ${injectThemeValue('primaryColor')};
  }
`;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
  return <ScInput {...props} ref={ref} />;
};

export default forwardRef(Input);
