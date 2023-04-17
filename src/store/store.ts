import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as profilesReducer } from './profileCards/profileCards.slice';
import { reducer as productsReducer } from './productCards/productCards.slice';
import { api } from './api/api';

const reducer = combineReducers({
  profiles: profilesReducer,
  products: productsReducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
