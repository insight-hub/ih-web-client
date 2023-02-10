import React, { forwardRef, ForwardRefRenderFunction, MouseEventHandler, ReactNode } from 'react';

import { styled } from '../utils-styled-components';
import { CoreInteractive, injectThemeValue } from 'src/components/core';

type ButtonVariant = 'primary' | 'danger' | 'secondary' | 'outline' | 'outline--primary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

interface ScProps {
  $size: Props['size'];
}

const ButtonInternalSize = {
  sm: '5px 20px',
  lg: '15px 20px',
  md: '7px 20px',
};

const ButtonInternalFontSize = {
  sm: '0.8rem',
  md: '0.9rem',
  lg: '1.1rem',
};

// TODO
const ScButtonBase = styled(CoreInteractive) <ScProps>`
  display: inline-block;
  border-radius: 5px;
  padding: ${(props) => (props.$size ? ButtonInternalSize[props.$size] : '5px 20px')};
  border: none;
  background-color: transparent;
  // contrast themed color
  color: white;
  outline: none;
  cursor: pointer;
  font-size: ${(props) =>
    props.$size ? ButtonInternalFontSize[props.$size] : ButtonInternalSize['md']};
  font-weight: ${(props) => props.$size === 'lg' && 'bold'};
`;

const ScPouredButton = styled(ScButtonBase)`
  background-color: ${injectThemeValue('primaryColor')};

  &:hover {
    background-color: ${injectThemeValue('primaryColorHovered')};
  }
`;

const ScOutlinedButton = styled(ScButtonBase)`
  border: 1px solid white;
`;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {
  switch (props.variant) {
    case 'primary':
      return <ScPouredButton $size={props.size} ref={ref} {...props} />;
    case 'outline':
      return <ScOutlinedButton $size={props.size} ref={ref} {...props} />;
    default:
      return <ScButtonBase $size={props.size} ref={ref} {...props} />;
  }
};

export default forwardRef(Button);

Button.displayName = 'Button';
