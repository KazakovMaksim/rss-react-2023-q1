import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as profilesReducer } from './profileCards/profileCards.slice';

const reducer = combineReducers({
  profiles: profilesReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
