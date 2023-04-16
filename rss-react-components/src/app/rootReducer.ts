import { combineReducers } from '@reduxjs/toolkit';
import searchInputReducer from '../components/Search/searchSlice';
import searchResultsReducer from '../components/Search/searchResults';
import formCardsReducer from '../pages/Form/formCardsSlice';

export const rootReducer = combineReducers({
  search: searchInputReducer,
  searchResults: searchResultsReducer,
  formCards: formCardsReducer,
});
