import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

import * as api from 'src/api';

@injectable()
export class User {
  username: string = '';
  email: string = '';
  isMailConfirmed = '';
  token: string = '';
  createdAt: string = '';
  updatedAt: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  get isAuth() {
    return this.token.length > 0;
  }

  fromJson(user: api.UserWithToken) {
    this.username = user.username;
    this.email = user.email;
    this.isMailConfirmed = user.email;
    this.token = user.token;
    this.createdAt = user.created_at;
    this.updatedAt = user.updated_at;
  }
}
