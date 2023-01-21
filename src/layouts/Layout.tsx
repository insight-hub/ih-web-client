import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="content__container">
        <Outlet />
      </div>
    </div>
  );
};
