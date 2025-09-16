import { configureStore } from '@reduxjs/toolkit';
import shavermaSlice from './slices/shavermaSlice';
import sortSlice from './slices/sortSlice';
import categoriesSlice from './slices/categoriesSlice';
import searchSlice from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    shaverma: shavermaSlice,
    sort: sortSlice,
    categories: categoriesSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
