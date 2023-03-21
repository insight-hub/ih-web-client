import React from 'react';

import { Row, Layout, Text, Button } from 'src/components';
import { AlignItems, JustifyContent } from 'src/components/core';

export const Header: React.FC = () => {
  return (
    <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
      <Layout>
        <Text color="white" weigth="bold" size="x-large">
          Logo
        </Text>
      </Layout>
      <Layout>
        <Button>Sing in</Button>
        <Button variant="outline">Sing up</Button>
      </Layout>
    </Row>
  );
};
