import React, { forwardRef, ForwardRefRenderFunction, MouseEventHandler, ReactNode } from 'react';
import { styled } from '../utils-styled-components';

import { CoreInteractive, Color } from 'src/components/core';

type ButtonVariant = 'primary' | 'danger' | 'secondary' | 'outline';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  children?: ReactNode;
}

interface ScProps {
  $variant: Props['variant'];
}

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
  padding: 5px 20px;
  color: white;
  font-size: 0.9rem;
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
`;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {
  return <ScButton $variant={props.variant} {...props} ref={ref} />;
};

export default forwardRef(Button);

Button.displayName = 'Button';
