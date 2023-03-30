import { Container } from 'inversify';

import { Api } from './api/api';
import { TYPES } from './iocTypes';
import { CreateAcoountController } from './models/createUser.controller';
import { IStorage, User } from './models/user';
import { ConfigService } from './models/config';
import { OTPController } from './models/otp.controller';
import { Auth } from './models/auth';

// TODO
const localStorage = window.localStorage;

export const container = new Container();

container.bind<Auth>(TYPES.AuthModel).to(Auth).inSingletonScope();
container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
container.bind<Api>(TYPES.Api).to(Api).inSingletonScope();
container.bind<User>(TYPES.User).to(User).inSingletonScope();
container.bind<OTPController>(TYPES.OTPController).to(OTPController).inSingletonScope();
container.bind<IStorage>(TYPES.Storage).toConstantValue(localStorage);
container
  .bind<CreateAcoountController>(TYPES.CreateAccountController)
  .to(CreateAcoountController)
  .inSingletonScope();
