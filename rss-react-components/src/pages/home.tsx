import React, { Component } from 'react'
import Search from '../components/search'
import Cards from '../components/cards'
import Form from './form'

import { HomeState } from '../types/types'

export default class Home extends Component<{}, HomeState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      submittedData: []
    }

    this.handleSubmittedData = this.handleSubmittedData.bind(this);
  }

  handleSubmittedData = (data: []) => {
    this.setState({...this.state, submittedData: data})
  }
  render() {
    return (
      <div className="home-container">
        <Form handleSubmittedData={this.handleSubmittedData}/>
        <Search />
        <Cards />
      </div>
    )
  }
}
