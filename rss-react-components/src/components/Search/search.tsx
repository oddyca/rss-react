import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FetchedData from '../fetched-data';
import corener_lines from '../../assets/corner-lines.svg';
import { SearchProps } from 'types/types';
import { saveInput } from './searchSlice';

import '../../styles/search.css';

export default function Search(props: SearchProps) {
  const lsValue: string = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(lsValue);
  const dispatch = useDispatch();
  // const inputRef = useRef('');

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchBarValue', inputRef.current);
  //   };
  // }, []);

  useEffect(() => {
    dispatch(
      saveInput({
        value,
      })
    );
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    const search = async () => {
      props.setIsLoaded(false);
      let searchResult;
      if (value === '') {
        searchResult = await FetchedData('default');
      } else {
        searchResult = await FetchedData(value);
      }
      props.setDataCards(searchResult);
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
          value={value}
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