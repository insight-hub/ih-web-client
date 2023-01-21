import { configureStore, createReducer } from '@reduxjs/toolkit';

const rootReducer = createReducer({}, (builder) => { });

const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
