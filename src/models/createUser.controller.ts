import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';

import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { IProxyField, ProxyField } from './proxyField';
import { Auth } from './auth';
import { ApiError } from 'src/api/error';

// TODO refactor
@injectable()
export class CreateAcoountController {
  isHuman: boolean = false;
  private _isPasswordSecure: boolean = true;

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.AuthModel) private authModel: Auth,
  ) {
    makeAutoObservable(this);
  }

  get isPasswordSecure() {
    return this._isPasswordSecure;
  }

  toggleSecurePassword = () => {
    this._isPasswordSecure = !this._isPasswordSecure;
  };

  get isFullfilled() {
    return (
      this.isHuman &&
      this.usernameField.isValid &&
      this.emailField.isValid &&
      this.passwordField.isValid &&
      this.usernameField.value &&
      this.emailField.value &&
      this.passwordField.value
    );
  }

  emailField: IProxyField = new ProxyField({
    getter: () => this.authModel.email,
    setter: (val) => (this.authModel.email = val),
    validator: this.validateEmail,
  });

  usernameField: IProxyField = new ProxyField({
    getter: () => this.authModel.username,
    setter: (val) => (this.authModel.username = val),
    validator: this.validateUsername,
  });

  passwordField: IProxyField = new ProxyField({
    getter: () => this.authModel.password,
    setter: (val) => (this.authModel.password = val),
    validator: this.validatePassword,
  });

  private validateEmail(val: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val.length < 1) return;
    if (!re.test(val)) return `Not valid email ${val}`;
  }

  private validateUsername(val: string) {
    const re = /^[A-Za-z0-9_]{4,30}$/g;
    if (val.length < 1) return;
    if (val.length < 4) return 'Username should has 4 characters at least';
    if (!re.test(val)) return `Username should contain only latin letters, numbers and _`;
  }

  private validatePassword(val: string) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g;
    if (val.length < 1) return;
    if (!re.test(val)) return `Password 8 characters, at least one letter and one number`;
  }

  onCreateAccount() {
    this.isHuman = false;
    return this.apiService
      .call('join', {
        username: this.authModel.username,
        email: this.authModel.email,
        password: this.authModel.password,
      })
      .catch((err: ApiError) => {
        const { details } = err;
        if (details && details.hasOwnProperty('username')) {
          this.usernameField.setError(err.details.username);
        }

        if (details && details.hasOwnProperty('email')) {
          this.emailField.setError(err.details.email);
        }
      });
  }

  humanVerify(token: string) {
    this.apiService.call('humanVerify', { token }).then((isHuman) => {
      this.isHuman = isHuman;
    });
  }
}
