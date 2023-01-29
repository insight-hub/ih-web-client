import React, {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  MouseEventHandler,
} from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  //TODO add link support
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CoreInteractive: ForwardRefRenderFunction<HTMLButtonElement, Props> = (props, ref) => {
  return <button ref={ref} {...props} />;
};

export default forwardRef(CoreInteractive);
