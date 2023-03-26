import React, { Component } from 'react'
import Search from '../components/search'
import Cards from '../components/cards'
import Form from './form'

export default class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Form />
        <Search />
        <Cards />
      </div>
    )
  }
}
