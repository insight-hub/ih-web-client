import { makeHandler } from './makeHandler';

export const join = makeHandler(
  'join',
  (req: { username: string; email: string; password: string }) => ({
    method: 'POST',
    path: '/join',
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

export const login = makeHandler(
  'login',
  (req: { userame: string; password: string }) => ({
    method: 'POST',
    path: '/login',
    form: [
      { name: 'username', value: req.userame },
      { name: 'password', value: req.password },
    ],
  }),
  (data: { user: UserWithToken }) => data.user,
);

export const humanVerify = makeHandler(
  'humanVerify',
  (req: { token: string }) => ({
    method: 'POST',
    path: '/recaptcha',
    form: [{ name: 'token', value: req.token }],
  }),
  (data: { is_human: boolean }) => data.is_human,
);

export const verifyOTP = makeHandler(
  'verifyOTP',
  (req: { otp: string; username: string }) => ({
    method: 'POST',
    path: '/otp',
    form: [
      { name: 'username', value: req.username },
      { name: 'otp', value: req.otp },
    ],
  }),
  (res: { user: UserWithToken }) => res.user,
);

type UserWithToken = {
  id: string;
  username: string;
  email: string;
  token: string;
  is_mail_confirmed: boolean;
};

type UserCreated = {
  id: string;
  username: string;
  emai: string;
};
