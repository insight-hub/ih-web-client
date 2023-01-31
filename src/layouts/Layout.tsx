import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'src/components/grid';

export const Layout: React.FC = () => {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
