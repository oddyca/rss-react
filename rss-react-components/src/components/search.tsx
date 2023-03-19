import React, { Component } from 'react'

import "../styles/search.css"
import { SearchBarState } from 'types/types'

export default class search extends Component<{}, SearchBarState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount() {
    const storedValue = localStorage.getItem('searchBarValue');
    if (storedValue) {
      this.setState({ value: storedValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchBarValue', this.state.value);
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
          placeholder="type anything, 40ch max"
          maxLength={40}
        />
        <button
          className="search-button"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
        search
        </button>
      </div>
    );
  }
}

