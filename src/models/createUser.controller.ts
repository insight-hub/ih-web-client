import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';

import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { User } from './user.model';
import { IProxyField, ProxyField } from './proxyField';

// TODO refactor
@injectable()
export class CreateAcoountController {
  isHuman: boolean = false;
  private _isPasswordSecure: boolean = true;

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private accountModel: User,
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
    getter: () => this.accountModel.email,
    setter: (val) => (this.accountModel.email = val),
    validator: this.validateEmail,
  });

  usernameField: IProxyField = new ProxyField({
    getter: () => this.accountModel.username,
    setter: (val) => (this.accountModel.username = val),
    validator: this.validateUsername,
  });

  passwordField: IProxyField = new ProxyField({
    getter: () => this.accountModel.password,
    setter: (val) => (this.accountModel.password = val),
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
    return this.apiService.call('join', {
      username: this.accountModel.username,
      email: this.accountModel.email,
      password: this.accountModel.password,
    });
  }

  humanVerify(token: string) {
    this.apiService.call('humanVerify', { token }).then((isHuman) => {
      this.isHuman = isHuman;
    });
  }
}
