import React, { forwardRef, ForwardRefRenderFunction, ReactNode } from 'react';
import { Layout, LayoutProps } from 'src/components/core';
import { styled } from 'src/components/utils-styled-components';

interface Props extends LayoutProps {
  children: ReactNode;
}

const ScForm = styled(Layout).attrs(() => ({ as: 'form' }))``;

// TODO typing
const Form: ForwardRefRenderFunction<HTMLFormElement, Props> = (props, ref) => {
  return <ScForm ref={ref} {...props} />;
};

export default forwardRef(Form);
