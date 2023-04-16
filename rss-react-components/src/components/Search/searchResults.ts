import { createSlice } from '@reduxjs/toolkit';
import { TFetchedData } from 'types/types';

type SearchState = {
  value: TFetchedData[];
};

const initialState: SearchState = { value: [] };

const searchResultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    saveResults: (state, action) => {
      state.value = action.payload.value;
    },
  },
});

export const { saveResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
