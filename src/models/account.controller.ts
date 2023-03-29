import { injectable, inject } from 'inversify';
import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { CreateAccount } from './account.model';
import { IProxyField, ProxyField } from './proxyField';

@injectable()
export class CreateAcoountController {
  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private accountModel: CreateAccount,
  ) { }

  get isFullfilled() {
    return false;
  }

  emailField: IProxyField = new ProxyField({
    getter: () => this.accountModel.email,
    setter: (val) => (this.accountModel.email = val),
  });

  usernameField: IProxyField = new ProxyField({
    getter: () => this.accountModel.username,
    setter: (val) => (this.accountModel.username = val),
  });

  passwordField: IProxyField = new ProxyField({
    getter: () => this.accountModel.password,
    setter: (val) => (this.accountModel.password = val),
  });

  private validateEmail(val: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) return `Invalid email ${val}`;
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
}
