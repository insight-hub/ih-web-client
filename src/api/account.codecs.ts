import { makeHandler } from './makeHandler';

export const createAccount = makeHandler(
  'createAccount',
  (req: { username: string; email: string; password: string }) => ({
    method: 'POST',
    path: '/account',
    form: [
      {
        name: 'username',
        value: req.username,
      },
      { name: 'email', value: req.email },
      { name: 'password', value: req.password },
    ],
  }),
  (data) => data,
);
