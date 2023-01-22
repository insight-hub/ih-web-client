import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="container">
        <div className="row pt-5">
          <div className="col-12-xs">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
