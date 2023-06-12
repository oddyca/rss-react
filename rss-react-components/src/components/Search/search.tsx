import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FetchedData from '../fetched-data';
import { RootState } from '../../app/store';
import { saveResults } from '../../components/Search/searchResults';
import { SearchProps } from 'types/types';
import { saveInput } from './searchSlice';

import '../../styles/search.css';
import corener_lines from '../../assets/corner-lines.svg';

export default function Search(props: SearchProps) {
  const dispatch = useDispatch();

  const searchValue = useSelector((state: RootState) => {
    return state.rootReducer.search.value;
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = event.target.value;
    dispatch(
      saveInput({
        value: inputData,
      })
    );
  };

  const handleSubmit = () => {
    const search = async () => {
      props.setIsLoaded(false);
      let searchResult;
      if (searchValue === '') {
        searchResult = await FetchedData('default');
      } else {
        searchResult = await FetchedData(searchValue);
      }
      dispatch(
        saveResults({
          value: searchResult,
        })
      );
      props.setIsLoaded(true);
    };
    search();
  };

  return (
    <div className="search-container">
      <p className="corener-top">CONNECTION 55.034f</p>
      <p className="corner-left">
        002030
        <br />
        929308
        <br />
        237320
      </p>
      <img src={corener_lines} className="corner-lines" alt="search bar decorations" />
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="search-bar"
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="_type anything [40ch max.]"
          maxLength={40}
        />
        <button className="search-button" type="submit" />
      </form>
      {props.isLoaded && props.dataCards.length === 0 && (
        <div className="no-result">
          <h3>ERROR:: NOTHING_WAS_FOUND</h3>
          <p>/reload</p>
        </div>
      )}
    </div>
  );
}
