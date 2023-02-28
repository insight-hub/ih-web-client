import { Container } from 'inversify';

import { TYPES } from './';
import { User } from './user';

export const container = new Container();

container.bind<User>(TYPES.User).to(User).inSingletonScope();
