import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/form">Forms</Link>
          <Link to="/aboutus">About</Link>
        </div>
      </header>
    )
  }
}
