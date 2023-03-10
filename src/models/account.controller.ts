import { injectable, inject } from 'inversify';
import { makeAutoObservable } from 'mobx';
// import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { Account } from './account.model';
import { IProxyField, ProxyField } from './proxyField';

@injectable()
export class CreateAcoountController {
  constructor(
    // @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private accountModel: Account,
  ) { }

  emailField: IProxyField = new ProxyField({
    getter: () => this.accountModel.email,
    setter: (val) => this.accountModel.setEmail(val),
    validator: this.validateEmail,
  });

  usernameField: IProxyField = new ProxyField({
    getter: () => this.accountModel.username,
    setter: (val) => this.accountModel.setUsername(val),
  });

  passwordField: IProxyField = new ProxyField({
    getter: () => this.accountModel.password,
    setter: (val) => this.accountModel.setPassword(val),
  });

  private validateEmail(val: string) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(val)) return 'Invalid email';
  }

  onSubmit() { }
}
