import 'reflect-metadata';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import { theme } from 'src/components/core';
import { ThemeProvider } from 'styled-components';
import { Provider as IOCProvider } from 'src/components/utils-ioc/provider';
import { container as iocContainer } from 'src/iocContainer';

import './styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <IOCProvider container={iocContainer}>
      <RouterProvider router={router} />
    </IOCProvider>
  </ThemeProvider>,
);
