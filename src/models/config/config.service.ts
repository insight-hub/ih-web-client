import { inject, injectable } from 'inversify';
import { ApiError } from 'src/api/error';
import { TYPES } from 'src/iocTypes';
import { User } from '../user';

import * as constaints from './constaints';

type ApplicationConfig = {
  baseApiUrl: string;
  apiTimeout: number;
  recaptchaPubKey: string;
};

export interface AppConfigService {
  getApplicationConfig(): ApplicationConfig;
  onApiError(e: ApiError): void;
}

@injectable()
export class ConfigService implements AppConfigService {
  constructor(@inject(TYPES.User) private userModel: User) { }

  // hmmmm
  onApiError(e: ApiError): void {
    switch (e.httpStatus) {
      case 401:
        this.userModel.logout();
        return;
    }
  }

  getApplicationConfig() {
    return {
      baseApiUrl: constaints.API_URL,
      apiTimeout: constaints.API_TIMEOUT,
      recaptchaPubKey: constaints.RECAPTCHA_PUB_KEY,
    };
  }
}
