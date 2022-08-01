import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import charactersReducer from './reducers/charactersReducer';

export const store = configureStore({
  reducer: {
    characters: charactersReducer
  },
  devTools: true
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
