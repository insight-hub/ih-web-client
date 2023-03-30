import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { ProxyField } from './proxyField';
import { User } from './user.model';

@injectable()
export class OTPController {
  private oneTimePassword = '';

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private userModel: User,
  ) {
    makeAutoObservable(this);
  }

  get userEmail() {
    return this.userModel.email;
  }

  get submitDisabled() {
    return this.oneTimePassword.length < 6;
  }

  oneTimePasswordField = new ProxyField({
    getter: () => this.oneTimePassword,
    setter: (val: string) => (this.oneTimePassword = val),
  });

  verifyOTP() {
    this.apiService
      .call('verifyOTP', {
        username: this.userModel.username,
        otp: this.oneTimePassword,
      })
      .catch((e) => console.log(e.detail));
  }
}
