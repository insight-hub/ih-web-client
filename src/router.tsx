import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';
import { Profile } from './pages/Profile';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: React.createElement('h1', {}, 'HOME'),
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/settings',
        element: React.createElement('h1', {}, 'Settings'),
      },
    ],
  },
]);
