import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
export class User {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor() {
    makeAutoObservable(this);
  }
}
