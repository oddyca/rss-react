import React, { Component } from 'react'
import Search from '../components/search'
import Cards from '../components/cards'

export default class Home extends Component {
  render() {
    return (
      <>
        <Search />
        <Cards />
      </>
    )
  }
}
