import React, { useState, useEffect, useRef } from 'react';
import FetchedData from '../components/fetched-data';
import '../styles/search.css';
import corener_lines from '../assets/corner-lines.svg';
import { SearchProps } from 'types/types';

export default function Search(props: SearchProps) {
  const lsValue: string = localStorage.getItem('searchBarValue') || '';
  const [value, setValue] = useState(lsValue);
  const inputRef = useRef('');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchBarValue', inputRef.current);
    };
  }, []);

  useEffect(() => {
    inputRef.current = value;
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    const search = async () => {
      props.setIsLoaded(false);
      const searchResult = await FetchedData(value);
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
    </div>
  );
}
