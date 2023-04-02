import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Page404 from './404';
import Aboutus from './pages/aboutus';
import Form from './pages/form';
import './styles/style.css';

import { AppState } from 'types/types';

function App() {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/form" element={<Form handleSubmittedData={undefined} />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </>
  );
}

export default App;
