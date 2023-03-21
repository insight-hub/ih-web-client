import React, { FormEventHandler, forwardRef, ForwardRefRenderFunction } from 'react';
import { BorderRadius, Color, injectThemeValue } from 'src/components/core';
import { styled, StyledProps } from 'src/components/utils-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Hint } from '../hint';

interface Props {
  disabled?: boolean;
  secure?: boolean;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  error?: string;
  isLoading?: boolean;
}

const ScInputWrapper = styled.div`
  position: relative;
`;

const ScInput = styled.input.attrs((props: Props) => ({
  type: props.secure ? 'password' : 'text',
})) <StyledProps<{ $isValid: boolean; secure: boolean }>>`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${injectThemeValue('baseInputColor')};
  border-radius: ${BorderRadius.Small};
  border-color: ${(props) => (props.$isValid ? Color.Secondary : Color.Danger)};
  box-sizing: border-box;
  font-size: ${injectThemeValue('textRegularSize')};
  color: ${injectThemeValue('textRegularColor')};
  outline: none;

  &:focus {
    border-color: ${injectThemeValue('primaryColor')};
  }
`;

const ScIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 50%;
  right: 0.75rem;
  transform: translateY(-50%);
`;

const Input: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {
  return (
    <>
      <ScInputWrapper>
        <ScInput {...props} autoComplete="off" $isValid={!props.error} ref={ref} />
        <ScIconWrapper>
          {props.error && <FontAwesomeIcon icon={faCircleExclamation} color={Color.Danger} />}
        </ScIconWrapper>
      </ScInputWrapper>
      <Hint color={Color.Danger}>{props.error}</Hint>
    </>
  );
};

export default forwardRef(Input);
