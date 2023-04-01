import React from 'react';

import { Container } from 'src/components/grid';
import { useInjection } from 'src/components';
import { User } from 'src/models';
import { TYPES } from 'src/iocTypes';
import { DevBadge } from 'src/components/DevBadge';
import { AuthorizedLayout } from './AuthorizedLayout';
import { UnauthorizedLayout } from './UnauthorizedLayout';
import { observer } from 'mobx-react-lite';

export const Layout: React.FC = observer(() => {
  const userModel = useInjection<User>(TYPES.User);

  return (
    <>
      <DevBadge />
      <Container>{userModel.isAuth ? <AuthorizedLayout /> : <UnauthorizedLayout />}</Container>
    </>
  );
});
