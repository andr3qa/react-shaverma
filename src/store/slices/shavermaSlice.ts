import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface ShavermaItem {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: string[];
  sizes: string[];
  weight: number[];
  price: number[];
  category: number;
  rating: number;
}

export interface ShavermaState {
  items: ShavermaItem[];
  loading: boolean;
  error: string | null;
}

const initialState: ShavermaState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchShaverma = createAsyncThunk(
  'shaverma/fetchShaverma',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<ShavermaItem[]>(
        'https://687fc39af1dcae717b6027be.mockapi.io/shaverma'
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.data === 'Not found') {
          return rejectWithValue('Шавермы не найдены');
        }
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Неизвестная ошибка');
    }
  }
);

export const shavermaSlice = createSlice({
  name: 'shaverma',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShaverma.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchShaverma.fulfilled,
        (state, action: PayloadAction<ShavermaItem[]>) => {
          state.loading = false;
          state.items = action.payload;
        }
      )
      .addCase(fetchShaverma.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {} = shavermaSlice.actions;

export default shavermaSlice.reducer;
