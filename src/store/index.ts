import { configureStore } from '@reduxjs/toolkit';
import shavermaSlice from './slices/shavermaSlice';
import sortSlice from './slices/sortSlice';
import categoriesSlice from './slices/categoriesSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    shaverma: shavermaSlice,
    sort: sortSlice,
    categories: categoriesSlice,
    search: searchSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
