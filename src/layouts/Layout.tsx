import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from 'src/components/button';

import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Button variant="primary">Create event</Button>
      </div>
      <Outlet />
    </>
  );
};
