import { makeHandler } from './makeHandler';

export const createUser = makeHandler(
  'createUser',
  (req: { username: string; email: string; password: string }) => ({
    method: 'POST',
    path: '/user',
    headers: {
      username: req.username,
      email: req.email,
      password: req.password,
    },
  }),
  (data) => data,
);
