import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { CreateAccount } from './account.model';
import { IProxyField, ProxyField } from './proxyField';

// TODO refactor
@injectable()
export class CreateAcoountController {
  isHuman: boolean = false;
  private _isPasswordSecure: boolean = true;

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private accountModel: CreateAccount,
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
      this.passwordField.isValid
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
    if (!re.test(val)) return `Invalid email ${val}`;
    return;
  }

  private validateUsername(val: string) {
    const re = /[\W_]/g;
    const result = Array.from(val.matchAll(re));
    if (re.test(val)) return `Username should not contain special characters: ${result.join(', ')}`;
    if (val.length < 4) return 'Username should has 4 characters at least';
    return;
  }

  private validatePassword(val: string) {
    const re = /[\W_]/g;
    const result = Array.from(val.matchAll(re));
    if (re.test(val)) return `Password should not contain special characters: ${result.join(', ')}`;
    return;
  }

  onCreateAccount() {
    this.apiService
      .call('join', {
        username: this.accountModel.username,
        email: this.accountModel.email,
        password: this.accountModel.password,
      })
      .then((res) => { });
  }

  humanVerify(token: string) {
    this.apiService.call('humanVerify', { token }).then((isHuman) => {
      console.log(isHuman);
      this.isHuman = isHuman;
    });
  }
}
