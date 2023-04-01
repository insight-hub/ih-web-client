import React from 'react';
import { Outlet } from 'react-router-dom';
import { AuthorizedHeader } from 'src/components/Header';

export const AuthorizedLayout: React.FC = () => {
  return (
    <>
      <AuthorizedHeader />
      <Outlet />
    </>
  );
};
