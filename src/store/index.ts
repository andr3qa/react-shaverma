import { configureStore } from '@reduxjs/toolkit';
import shavermaSlice from './slices/shavermaSlice';
import sortSlice from './slices/sortSlice';

export const store = configureStore({
  reducer: {
    shaverma: shavermaSlice,
    sort: sortSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
