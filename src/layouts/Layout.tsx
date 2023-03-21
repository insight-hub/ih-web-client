import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'src/components/grid';
import { Header } from 'src/components/Header';

export const Layout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
