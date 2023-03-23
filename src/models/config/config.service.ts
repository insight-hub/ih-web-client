import { injectable } from 'inversify';

import * as constaints from './constaints';

type ApplicationConfig = {
  baseApiUrl: string;
  apiTimeout: number;
};

export interface AppConfigService {
  getApplicationConfig(): ApplicationConfig;
}

@injectable()
export class ConfigService implements AppConfigService {
  getApplicationConfig() {
    return {
      baseApiUrl: constaints.API_URL,
      apiTimeout: constaints.API_TIMEOUT,
    };
  }
}
