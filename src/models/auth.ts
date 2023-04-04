import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class Auth {
  username: string = 'saymurrmeow';
  email: string = 'capitanuragan1312@gmail.com';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }
}
