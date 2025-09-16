import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CategoriesState {
  value: string;
}

const initialState: CategoriesState = {
  value: 'Все',
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
