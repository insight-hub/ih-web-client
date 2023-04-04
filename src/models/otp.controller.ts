import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { ProxyField } from './proxyField';
import { User } from './user';
import { Auth } from './auth';
import * as api from 'src/api';

@injectable()
export class OTPController {
  private oneTimePassword = '';

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.User) private userModel: User,
    @inject(TYPES.AuthModel) private authModel: Auth,
  ) {
    makeAutoObservable(this);
  }

  get userEmail() {
    return this.authModel.email;
  }

  get submitDisabled() {
    return this.oneTimePassword.length < 6;
  }

  oneTimePasswordField = new ProxyField({
    getter: () => this.oneTimePassword,
    setter: (val: string) => (this.oneTimePassword = val),
  });

  verifyOTP() {
    return this.apiService
      .call('verifyOTP', {
        username: this.authModel.username,
        otp: this.oneTimePassword,
      })
      .then((user: api.UserWithToken) => {
        this.userModel.fromJson(user);
        return this.userModel;
      })
      .catch((e) => {
        console.log(e);
        if (e && e.details.hasOwnProperty('otp')) {
          this.oneTimePasswordField.setError(e.details.otp);
        }
      });
  }
}
