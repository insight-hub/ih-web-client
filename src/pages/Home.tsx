import { observer } from 'mobx-react-lite';
import React from 'react';
import { useInjection } from 'src/components';
import { TYPES } from 'src/iocTypes';
import { User } from 'src/models';
import { Welcome } from './Welcome';

export const Home = observer(() => {
  const userModel = useInjection<User>(TYPES.User);
  return userModel.isAuth ? <h1 style={{ color: 'white' }}>TODO</h1> : <Welcome />;
});
