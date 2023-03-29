import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Layout, Text, Button } from 'src/components';
import { AlignItems, JustifyContent } from 'src/components/core';

export const Header: React.FC = () => {
  return (
    <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
      <Link to="/">
        <Text {...styles.logo}>Logo</Text>
      </Link>
      <Layout>
        <Link to="/signin">
          <Button>Sing in</Button>
        </Link>
        <Link to="/join">
          <Button variant="outline">Sing up</Button>
        </Link>
      </Layout>
    </Row>
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
