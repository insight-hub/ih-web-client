import { configureStore, createReducer } from '@reduxjs/toolkit';

import profileReducer from './profile/reducer';

const rootReducer = createReducer({}, (builder) => { });

const store = configureStore({
  reducer: {
    rootReducer,
    profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
