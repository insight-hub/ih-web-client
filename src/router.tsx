import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';
import { Profile, Calendar, Welcome } from './pages';

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/calendar',
        element: <Calendar />,
      },
      {
        path: '/settings',
        element: React.createElement('h1', {}, 'Settings'),
      },
      {
        path: '/help',
        element: React.createElement('h1', {}, 'Help'),
      },
    ],
  },
]);
