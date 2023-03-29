import React, { forwardRef, ForwardRefRenderFunction, MouseEventHandler, ReactNode } from 'react';

import { styled } from '../utils-styled-components';
import { Color, CoreInteractive } from 'src/components/core';

type ButtonVariant = 'primary' | 'danger' | 'secondary' | 'outline' | 'outline--primary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
  fullWidth?: boolean;
}

interface ScProps {
  $size: Props['size'];
  $fullWidth: Props['fullWidth'];
}

const ButtonInternalSize = {
  sm: '5px 20px',
  lg: '15px 20px',
  md: '7px 20px',
};

const ButtonInternalFontSize = {
  sm: '0.9rem',
  md: '1rem',
  lg: '1.1rem',
};

// TODO
const ScButtonBase = styled(CoreInteractive) <ScProps>`
  display: inline-block;
  width: ${(props) => (props.$fullWidth ? '100%' : '')};
  border-radius: 5px;
  padding: ${(props) => (props.$size ? ButtonInternalSize[props.$size] : '5px 20px')};
  border: none;
  background-color: transparent;
  // contrast themed color
  color: white;
  outline: none;
  cursor: pointer;
  font-size: ${(props) =>
    props.$size ? ButtonInternalFontSize[props.$size] : ButtonInternalFontSize['md']};
  font-weight: ${(props) => props.$size === 'lg' && 'bold'};
`;

const ScPouredButton = styled(ScButtonBase)`
  background-color: ${(props) => (props.disabled ? Color.PrimaryDisabled : Color.Primary)};

  &:hover {
    background-color: ${(props) => (props.disabled ? Color.PrimaryDisabled : Color.PrimaryHovered)};
  }

  &:focus {
    background-color: ${(props) => (props.disabled ? Color.PrimaryDisabled : Color.PrimaryHovered)};
  }
`;

const ScOutlinedButton = styled(ScButtonBase)`
  border: 1px solid white;
`;

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {
  switch (props.variant) {
    case 'primary':
      return (
        <ScPouredButton $fullWidth={props.fullWidth} $size={props.size} ref={ref} {...props} />
      );
    case 'outline':
      return (
        <ScOutlinedButton $fullWidth={props.fullWidth} $size={props.size} ref={ref} {...props} />
      );
    default:
      return <ScButtonBase $fullWidth={props.fullWidth} $size={props.size} ref={ref} {...props} />;
  }
};

export default forwardRef(Button);

Button.displayName = 'Button';
