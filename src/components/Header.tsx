import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Layout, Text, Button } from 'src/components';
import { AlignItems, JustifyContent } from 'src/components/core';
import { UserAvatar } from './avatar/UserAvatar';

interface Props {
  isAuth: boolean;
}

export const AuthorizedHeader = () => {
  return (
    <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
      <Link to="/">
        <Text {...styles.logo}>Logo</Text>
      </Link>
      <Layout>
        <UserAvatar userName="test" avatarSrc="" />
      </Layout>
    </Row>
  );
};

export const UnauthorizedHeader = () => {
  return (
    <Row height="3rem" alignItems={AlignItems.Center} justifyContent={JustifyContent.Between}>
      <Link to="/">
        <Text {...styles.logo}>Logo</Text>
      </Link>
      <Layout>
        <Link to="/signin">
          <Button>Sign in</Button>
        </Link>
        <Link to="/join">
          <Button variant="outline">Register</Button>
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
