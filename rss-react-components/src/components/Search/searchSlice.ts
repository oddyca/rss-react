import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState = { value: '' } as SearchState;

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
