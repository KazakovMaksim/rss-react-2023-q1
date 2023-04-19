import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardItem } from 'types';

const initialState: CardItem[] = [];

export const profileCards = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfileCard: (state, { payload: profileData }: PayloadAction<CardItem>) => {
      state.push(profileData);
    },
  },
});

export const { actions, reducer } = profileCards;
