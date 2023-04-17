import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductCard } from 'types';

type HomeDataItem = {
  searchValue: string;
  filteredProductCards: ProductCard[];
};

const initialState: HomeDataItem = {
  searchValue: '',
  filteredProductCards: [],
};

export const productCards = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addSearchValue: (state, { payload: search }: PayloadAction<string>) => {
      return { ...state, searchValue: search };
    },
  },
});

export const { actions, reducer } = productCards;
