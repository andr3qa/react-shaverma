import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: string;
  price: number;
  count: number;
}

export type CartItemCount = {
  id: string;
  type: string;
  size: string;
};

export interface CartState {
  items: CartItem[];
  totalCount: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalCount: 0,
  totalPrice: 0,
};

const findItem = (state: CartState, action: PayloadAction<CartItemCount>) =>
  state.items.find(
    (item) =>
      item.id === action.payload.id &&
      item.type === action.payload.type &&
      item.size === action.payload.size
  );

const sumTotalCount = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.count, 0);

const sumTotalPrice = (state: CartState) =>
  state.items.reduce((sum, item) => sum + item.price * item.count, 0);

const updateTotals = (state: CartState) => {
  state.totalCount = sumTotalCount(state);
  state.totalPrice = sumTotalPrice(state);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<CartItem>) {
      const item = findItem(state, action);

      if (item) {
        item.count += 1;
      } else {
        state.items.push(action.payload);
      }

      updateTotals(state);
    },

    incrementCount(state, action: PayloadAction<CartItemCount>) {
      const item = findItem(state, action);

      if (!item) return;

      item.count += 1;

      updateTotals(state);
    },

    decrementCount(state, action: PayloadAction<CartItemCount>) {
      const item = findItem(state, action);

      if (!item) return;

      item.count -= 1;

      updateTotals(state);
    },

    deleteItem(state, action: PayloadAction<CartItemCount>) {
      const item = findItem(state, action);

      if (!item) return;

      const itemIndex = state.items.indexOf(item);

      state.items.splice(itemIndex, 1);

      updateTotals(state);
    },

    emptyCart(state) {
      state.items = [];

      updateTotals(state);
    },
  },
});

export const {
  setCart,
  incrementCount,
  decrementCount,
  deleteItem,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
