import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
