import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { styled } from '../utils-styled-components';

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface LayoutProps extends Omit<DivProps, 'color' | 'role' | 'ref'> { }

export const Layout = styled.div.withConfig({})<LayoutProps>(() => ({}));
