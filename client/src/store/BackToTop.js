/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showBackToTop: true,
};

const slice = createSlice({
  name: 'backToTop',
  initialState,
  reducers: {
    toggleBackToTop: (state) => {
      state.showBackToTop = !state.showBackToTop;
    },
  },
});

export const { toggleBackToTop } = slice.actions;
export default slice.reducer;
