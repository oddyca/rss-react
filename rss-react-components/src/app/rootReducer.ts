import { combineReducers } from '@reduxjs/toolkit';
import storeInputReducer from '../components/Search/searchSlice';

export const rootReducer = combineReducers({
  search: storeInputReducer,
  // searchResults: dataCardsReducer,
  // formSubmissions: formCardsReducer
});
