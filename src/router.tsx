import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
      },
      {
        path: '/profile',
      },
    ],
  },
]);
