import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { container } from './iocContainer';
import { TYPES } from './iocTypes';

import { Layout } from './layouts';
import { User } from './models';
import { Profile, Calendar, Welcome } from './pages';
import { Home } from './pages/Home';
import { Join } from './pages/Join';
import { OneTimePassword } from './pages/OneTimePassword';
import { SignIn } from './pages/SignIn';

// TODO
const userModel = container.get<User>(TYPES.User);

export default createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: userModel.isAuth ? <Home /> : <Welcome />,
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
