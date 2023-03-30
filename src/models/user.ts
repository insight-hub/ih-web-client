import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

import * as api from 'src/api';
import { TYPES } from 'src/iocTypes';

export interface IStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

const TOKEN_KEY = '_authToken';

@injectable()
export class User {
  private _token: string = '';

  username: string = '';
  email: string = '';
  isMailConfirmed = '';
  createdAt: string = '';
  updatedAt: string = '';

  constructor(@inject(TYPES.Storage) private storage: IStorage) {
    makeAutoObservable(this);
    const token = storage.getItem(TOKEN_KEY);
    if (token) this.token = token;
  }

  get isAuth() {
    return this.token.length > 0;
  }

  get token() {
    return this._token;
  }

  set token(newToken: string) {
    this.storage.setItem(TOKEN_KEY, newToken);
    this._token = newToken;
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
