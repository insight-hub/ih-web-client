import { Container } from 'inversify';

import { Api } from './api/api';
import { TYPES } from './iocTypes';
import { CreateAcoountController } from './models/account.controller';
import { CreateAccount } from './models/account.model';

export const container = new Container();

const api = new Api({ base: 'http://localhost:8888' });

container.bind<Api>(TYPES.Api).toConstantValue(api);
container.bind<CreateAccount>(TYPES.Account).to(CreateAccount).inSingletonScope();
container
  .bind<CreateAcoountController>(TYPES.CreateAccountController)
  .to(CreateAcoountController)
  .inSingletonScope();
