import { makeAutoObservable } from 'mobx';
import { injectable } from 'inversify';

@injectable()
export class User {
  userName: string = '';
  email: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUserName(val: string) {
    this.userName = val;
  }

  setEmail(val: string) {
    this.email = val;
  }
}
