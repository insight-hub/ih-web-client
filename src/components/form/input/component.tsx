import React, { FormEventHandler, forwardRef, ForwardRefRenderFunction, ReactElement } from 'react';
import { BorderRadius, Color, injectThemeValue } from 'src/components/core';
import { styled, StyledProps } from 'src/components/utils-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Hint } from '../hint';

interface Props {
  disabled?: boolean;
  secure?: boolean;
  renderIcon?: ReactElement;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  error?: string;
  isLoading?: boolean;
}

interface ScInputProps {
  $isValid: boolean;
}

const ScInputWrapper = styled.div`
  position: relative;
`;

const ScInput = styled.input.attrs((props: Props) => ({
  type: props.secure ? 'password' : 'text',
})) <StyledProps<ScInputProps>>`
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
  // TODO
  const renderIcon = () => {
    if (props.renderIcon) return props.renderIcon;
    if (props.error) return <FontAwesomeIcon icon={faCircleExclamation} color={Color.Danger} />;
  };
  return (
    <>
      <ScInputWrapper>
        <ScInput {...props} autoComplete="off" $isValid={!props.error} ref={ref} />
        <ScIconWrapper>{renderIcon()}</ScIconWrapper>
      </ScInputWrapper>
      <Hint color={Color.Danger}>{props.error}</Hint>
    </>
  );
};

export default forwardRef(Input);
