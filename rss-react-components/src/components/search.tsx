import React, { useState, useEffect, useRef } from 'react';
import '../styles/search.css';

export default function Search() {
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

  return (
    <div className="search-container">
      <input
        className="search-bar"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="type anything, 40ch max"
        maxLength={40}
      />
      <button className="search-button" type="submit" onClick={(e) => e.preventDefault()}>
        search
      </button>
    </div>
  );
}
