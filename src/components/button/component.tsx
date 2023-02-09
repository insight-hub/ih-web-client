import React, { forwardRef, ForwardRefRenderFunction, MouseEventHandler, ReactNode } from 'react';
import { styled } from '../utils-styled-components';

import { CoreInteractive, Color } from 'src/components/core';

type ButtonVariant = 'primary' | 'danger' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

interface ScProps {
  $variant: Props['variant'];
  $size: Props['size'];
}

const ButtonInternalSize = {
  sm: '5px 20px',
  lg: '15px 20px',
  md: '7px 20px',
};

// TODO
const ScButton = styled(CoreInteractive) <ScProps>`
  display: inline-block;
  border: ${(props) => {
    switch (props.$variant) {
      case 'outline':
        return `1px solid ${Color.White}`;
      default:
        return 'none';
    }
  }};
  border-radius: 5px;
  padding: ${(props) => (props.$size ? ButtonInternalSize[props.$size] : '5px 20px')};
  color: white;
  font-size: ${(props) => {
    switch (props.$size) {
      case 'md':
        return '1rem';
      case 'lg':
        return '1rem';
      default:
        return '0.9rem';
    }
  }};
  outline: none;
  cursor: pointer;
  background-color: ${(props) => {
    switch (props.$variant) {
      case 'primary':
        return Color.Primary;
      default:
        return 'transparent';
    }
  }};
  font-weight: bold;
`;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {
  return <ScButton $size={props.size} $variant={props.variant} {...props} ref={ref} />;
};

export default forwardRef(Button);

Button.displayName = 'Button';
