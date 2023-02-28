import { makeAutoObservable } from 'mobx';
import { decorate, injectable } from 'inversify';

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

decorate(injectable(), User);
