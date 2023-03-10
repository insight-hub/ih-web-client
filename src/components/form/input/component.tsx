import React, { FormEventHandler, forwardRef, ForwardRefRenderFunction } from 'react';
import { BorderRadius, Color, injectThemeValue } from 'src/components/core';
import { styled } from 'src/components/utils-styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface Props {
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: FormEventHandler<HTMLInputElement>;
  error?: boolean;
  isLoading?: boolean;
}

const ScInputWrapper = styled.div`
  position: relative;
`;

const ScInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid ${injectThemeValue('baseInputColor')};
  border-radius: ${BorderRadius.Small};
  box-sizing: border-box;
  font-size: ${injectThemeValue('textRegularSize')};
  color: ${injectThemeValue('textRegularColor')};
  outline: none;

  &:focus {
    border-color: ${injectThemeValue('primaryColor')};
  }
`;

const ScErrorInput = styled(ScInput)`
  border-color: ${Color.Danger};
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
    <ScInputWrapper>
      {props.error ? <ScErrorInput {...props} ref={ref} /> : <ScInput {...props} ref={ref} />}
      <ScIconWrapper>
        {props.error ? <FontAwesomeIcon icon={faCircleExclamation} color={Color.Danger} /> : ''}
      </ScIconWrapper>
    </ScInputWrapper>
  );
};

export default forwardRef(Input);
