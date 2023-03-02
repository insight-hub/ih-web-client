import { injectable, inject } from 'inversify';
import { Api } from 'src/api/api';
import { TYPES } from 'src/iocTypes';
import { Account } from './account.model';
import { IProxyField, ProxyField } from './proxyField';

@injectable()
export class CreateAcoountController {
  constructor(
    @inject(TYPES.Api) private apiService: Api,
    @inject(TYPES.Account) private accountModel: Account,
  ) { }

  usernameField: IProxyField = new ProxyField({
    getter: () => this.accountModel.username,
    setter: (val) => this.accountModel.setUsername(val),
  });

  emailField: IProxyField = new ProxyField({
    getter: () => this.accountModel.email,
    setter: (val) => this.accountModel.setEmail(val),
  });

  passwordField: IProxyField = new ProxyField({
    getter: () => this.accountModel.password,
    setter: (val) => this.accountModel.setPassword(val),
  });

  onSubmit() {
    this.apiService.call('createAccount', {
      username: this.usernameField.value,
      email: this.emailField.value,
      password: this.passwordField.value,
    });
  }
}
