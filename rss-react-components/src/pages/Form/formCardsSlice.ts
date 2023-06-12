import { createSlice } from '@reduxjs/toolkit';
import { FormState } from '../../types/types';

const initialState: FormState = { selection: '', cards: [] };

const formCardsSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setCards: (state, action) => {
      console.log('action from setCards reducer', action);
      state.selection = action.payload.selection;
      state.cards.push(action.payload.cards);
    },
  },
});

export const { setCards } = formCardsSlice.actions; // to Form
export default formCardsSlice.reducer; // to rootReducer
