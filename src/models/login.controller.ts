import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { ProxyField } from './proxyField';
import { User } from './user';

@injectable()
export class LoginController {
  isHuman: boolean = false;
  private username = '';
  private password = '';

  private _isPasswordSecure: boolean = true;

  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.User) private userModel: User,
  ) {
    makeAutoObservable(this);
  }

  get isFullfilled() {
    return false;
  }

  get isPasswordSecure() {
    return this._isPasswordSecure;
  }

  usernameField = new ProxyField({
    getter: () => this.username,
    setter: (val) => (this.username = val),
  });

  passwordField = new ProxyField({
    getter: () => this.password,
    setter: (val) => (this.password = val),
  });

  toggleSecurePassword = () => {
    this._isPasswordSecure = !this._isPasswordSecure;
  };

  humanVerify(token: string) {
    this.apiService.call('humanVerify', { token }).then((isHuman) => {
      this.isHuman = isHuman;
    });
  }

  onLogin(): Promise<User> {
    return this.apiService
      .call('login', { username: this.username, password: this.password })
      .then((user) => {
        this.userModel.fromJson(user);
        return this.userModel;
      });
  }
}
