import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import marvelCharacters from './slices/characterSlice'

const makeStore = () => configureStore({
  reducer: {
    characters: marvelCharacters,
  },
  devTools: true
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(makeStore);