import { createSlice } from '@reduxjs/toolkit';

type SearchState = {
  value: string;
};

const initialState: SearchState = { value: '' };

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveInput: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { saveInput } = searchSlice.actions;
export default searchSlice.reducer;
