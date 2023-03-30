import { Container } from 'inversify';

import { Api } from './api/api';
import { TYPES } from './iocTypes';
import { CreateAcoountController } from './models/createUser.controller';
import { User } from './models/user.model';
import { ConfigService } from './models/config';
import { OTPController } from './models/otp.controller';

export const container = new Container();

container.bind<ConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
container.bind<Api>(TYPES.Api).to(Api).inSingletonScope();
container.bind<User>(TYPES.Account).to(User).inSingletonScope();
container.bind<OTPController>(TYPES.OTPController).to(OTPController).inSingletonScope();
container
  .bind<CreateAcoountController>(TYPES.CreateAccountController)
  .to(CreateAcoountController)
  .inSingletonScope();
