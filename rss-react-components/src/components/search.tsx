import React, { useState, useEffect } from 'react';
import '../styles/search.css';

export default function Search() {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem('searchBarValue');
    if (storedValue) {
      setValue(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('searchBarValue', value);
  }, [value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
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
