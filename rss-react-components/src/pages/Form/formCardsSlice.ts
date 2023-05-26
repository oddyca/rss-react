import { createSlice } from '@reduxjs/toolkit';
import { FormState } from '../../types/types';

const initialState: FormState = { selection: '', cards: [] };

const formCardsSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.selection = action.payload.value.selection;
      state.cards += action.payload.value.card;
    },
  },
});

export const { setCards } = formCardsSlice.actions;
export default formCardsSlice.reducer;
