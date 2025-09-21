import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductPopupState {
  id: number | null;
  imageUrl: string;
  title: string;
  description: string;
  type: string;
  size: string;
  weight: number | null;
  price: number | null;
  category: number | null;
  rating: number | null;
}

const initialState: ProductPopupState = {
  id: null,
  imageUrl: '',
  title: '',
  description: '',
  type: '',
  size: '',
  weight: null,
  price: null,
  category: null,
  rating: null,
};

export const productPopup = createSlice({
  name: 'productPopup',
  initialState,
  reducers: {
    setProductPopup(state, action: PayloadAction<ProductPopupState>) {
      state.id = action.payload.id;
      state.imageUrl = action.payload.imageUrl;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.type = action.payload.type;
      state.size = action.payload.size;
      state.weight = action.payload.weight;
      state.price = action.payload.price;
      state.category = action.payload.category;
      state.rating = action.payload.rating;
    },
  },
});

export const { setProductPopup } = productPopup.actions;

export default productPopup.reducer;
