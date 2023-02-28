// TODO
import 'reflect-metadata';
import { User } from 'src/models/user';

describe('User model', () => {
  const userModel = new User();
  it('should set user name', () => {
    userModel.setUserName('username');
    expect(userModel.userName).toStrictEqual('username');
  });

  it('should set email', () => {
    userModel.setEmail('test@mail.com');
    expect(userModel.email).toStrictEqual('test@mail.com');
  });
});
