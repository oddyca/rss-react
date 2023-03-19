import './App.css'
import React, { Component } from 'react'
import Search from './components/search'
import Cards from './components/cards'
import "./styles/style.css"

import { AppState } from 'types/types'

export default class App extends React.Component <{}, AppState> {
  state: AppState = { inputValue: '' }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <>
        <Search />
        <Cards />
      </>
    )
  }
}
