import React, { Component } from 'react'
import "../styles/cards.css"

export default class Cards extends Component {

  constructor(props: {}){
    super(props)
  }

  render() {
    return (
      <div className="cards-container">
        <div className="cards">
          <div className="card-title">
            <h3>Card #1</h3>
          </div>
          <div className="card-body">
            <p>Card info</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className="cards">
          <div className="card-title">
            <h3>Card #2</h3>
          </div>
          <div className="card-body">
            <p>Card info</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
    )
  }
}
