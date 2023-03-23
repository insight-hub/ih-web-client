import { Container } from 'inversify';

import { Api } from './api/api';
import { TYPES } from './iocTypes';
import { CreateAcoountController } from './models/account.controller';
import { CreateAccount } from './models/account.model';
import { ConfigService } from './models/config';

export const container = new Container();

container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
container.bind<Api>(TYPES.Api).to(Api).inSingletonScope();
container.bind<CreateAccount>(TYPES.Account).to(CreateAccount).inSingletonScope();
container
  .bind<CreateAcoountController>(TYPES.CreateAccountController)
  .to(CreateAcoountController)
  .inSingletonScope();
