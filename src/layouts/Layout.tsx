import React from 'react';
import { Outlet } from 'react-router-dom';
import { Row } from 'src/components/grid/row/component';

import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="container">
        <div className="row pt-5">
          <Row></Row>
          <div className="col-12-xs">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
