import { combineReducers } from '@reduxjs/toolkit';
import searchInputReducer from '../components/Search/searchSlice';
import searchResultsReducer from '../components/Search/searchResults';

export const rootReducer = combineReducers({
  search: searchInputReducer,
  searchResults: searchResultsReducer,
  // formSubmissions: formCardsReducer
});
