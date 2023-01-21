import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home, Layout, Profile } from './layouts';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
]);
