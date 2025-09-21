import { configureStore } from '@reduxjs/toolkit';
import shavermaSlice from './slices/shavermaSlice';
import sortSlice from './slices/sortSlice';
import categoriesSlice from './slices/categoriesSlice';
import searchSlice from './slices/searchSlice';
import cartSlice from './slices/cartSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import productPopupSlice from './slices/productPopupSlice';

const persistConfig = {
  key: 'cart',
  storage,
};

const persistedCart = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    shaverma: shavermaSlice,
    sort: sortSlice,
    categories: categoriesSlice,
    search: searchSlice,
    cart: persistedCart,
    productPopup: productPopupSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
