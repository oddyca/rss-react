import React, { Component } from 'react';
import Search from '../components/search';

import { HomeState } from '../types/types';

export default class Home extends Component<object, HomeState> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <Search />
        <h3>CARDS..</h3>
      </div>
    );
  }
}
