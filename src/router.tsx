import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layouts';
import { Profile, Calendar, Welcome } from './pages';
import { Join } from './pages/Join';
import { OneTimePassword } from './pages/OneTimePassword';
import { SignIn } from './pages/SignIn';

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
        path: '/join',
        element: <Join />,
      },
      {
        path: '/otp',
        element: <OneTimePassword />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/:username',
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
