import React from 'react';
import { Outlet } from 'react-router-dom';
import { Row } from 'src/components/grid/row';
import { Column } from 'src/components/grid/column';

import { Header } from './Header';

export const Layout: React.FC = () => {
  return (
    <div className="layout__container">
      <Header />
      <div className="container">
        <Row>
          <Column cols={2}>test</Column>
          <Column cols={2}>test</Column>
          <Column cols={2}>test</Column>
        </Row>
        <Outlet />
      </div>
    </div>
  );
};
