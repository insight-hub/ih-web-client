import { Container } from 'inversify';

import { Api } from './api/api';
import { TYPES } from './iocTypes';
import { CreateAcoountController } from './models/account.controller';
import { Account } from './models/account.model';

export const container = new Container();

container
  .bind<Api>(TYPES.Api)
  // TODO api config service
  .toDynamicValue(() => new Api({ base: 'http://localhost:1234' }))
  .inSingletonScope();
container.bind<Account>(TYPES.Account).to(Account).inSingletonScope();
container
  .bind<CreateAcoountController>(TYPES.CreateAccountController)
  .to(CreateAcoountController)
  .inSingletonScope();
