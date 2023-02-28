import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import profileReducer from './profile/reducer';

export const createAccount = createAction<{}, 'createAccount'>('createAccount');

const rootReducer = createReducer(
  {
    username: '',
    email: '',
    password: '',
  },
  (builder) => {
    builder.addCase({ type: 'test' }, (state, action) => {
      console.log(action);
      console.log('test');
      state.username = 'test';
    });
  },
);

const middleware = [thunk];
if (process.env.NODE_ENV !== 'prod') {
  middleware.push(createLogger());
}

const store = configureStore({
  reducer: {
    rootReducer,
    profileReducer,
  },
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
