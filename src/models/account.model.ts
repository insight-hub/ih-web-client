import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class Account {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(val: string) {
    this.username = val;
  }

  setEmail(val: string) {
    this.email = val;
  }

  setPassword(val: string) {
    this.password = val;
  }
}
