import { makeHandler } from './makeHandler';

export const join = makeHandler(
  'join',
  (req: { username: string; email: string; password: string }) => ({
    method: 'POST',
    path: '/user/join',
    form: [
      {
        name: 'username',
        value: req.username,
      },
      { name: 'email', value: req.email },
      { name: 'password', value: req.password },
    ],
  }),
  (res: { user: UserCreated }) => res.user,
);

type UserCreated = {
  username: string;
  emai: string;
};
