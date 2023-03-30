import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Container } from 'src/components/grid';
import { AlignItems, Display, JustifyContent, Layout as LayoutComponent, Text } from 'src/components';
import { Header } from 'src/components/Header';

export const Layout: React.FC = () => {
  const location = useLocation();
  const shouldHideHeader = ['/join', '/signin', '/otp'].some((path) => path === location.pathname);
  const shouldHileLogo = location.pathname === '/otp';

  return (
    <Container>
      {shouldHideHeader ? (
        // TODO
        <LayoutComponent
          display={Display.Flex}
          alignItems={AlignItems.Center}
          justifyContent={JustifyContent.Center}
          height="50px"
          breackpointMd={{ height: '200px' }}
        >
          {!shouldHileLogo && (
            <Link to="/">
              <Text {...styles.logo}>Logo</Text>
            </Link>
          )}
        </LayoutComponent>
      ) : (
        <Header />
      )}
      <Outlet />
    </Container>
  );
};

const styles = {
  logo: {
    cursor: 'pointer',
    color: 'white',
    weigth: 'bold',
    size: 'x-large',
  },
};
