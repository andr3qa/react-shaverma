import { configureStore } from '@reduxjs/toolkit';
import { shavermaSlice } from './slices/shavermaSlice';

export const store = configureStore({
  reducer: {
    shaverma: shavermaSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
