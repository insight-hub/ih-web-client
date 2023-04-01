import React from 'react';
import { Outlet } from 'react-router-dom';
import { UnauthorizedHeader } from 'src/components/Header';

export const UnauthorizedLayout: React.FC = () => {
  return (
    <>
      <UnauthorizedHeader />
      <Outlet />
    </>
  );
};
