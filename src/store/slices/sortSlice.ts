import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SortState {
  name: string;
  sortProperty: string;
  order: string;
}

const initialState: SortState = {
  name: 'популярности',
  sortProperty: 'rating',
  order: 'desc',
};

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort(state, action: PayloadAction<SortState>) {
      state.name = action.payload.name;
      state.sortProperty = action.payload.sortProperty;
      state.order = action.payload.order;
    },
  },
});

export const { setSort } = sortSlice.actions;

export default sortSlice.reducer;
