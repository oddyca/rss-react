import React, { Component } from 'react'
import "../styles/cards.css"

import { CardsProps } from '../types/types'

export default class Cards extends Component<CardsProps, {}> {

  constructor(props: CardsProps){
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  componentDidUpdate(prevProps: Readonly<CardsProps>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log(this.props)
  }

  renderCards = () => {
    const allCards = this.props.cards;

    console.log(allCards)

    return allCards?.map((card, id) => {
      return (
        <div className="cards" key={id}>
          <div className="card-title">
            <h3>Card #{id}</h3>
          </div>
          <div className="card-body">
            <div className="card-body_col">
              {
                Object.keys(card).map((key, id) => {
                  return (
                    <div className="card-body_row" key={id}>
                      <p>{key}:</p>
                    </div>
                  )
                })
              }
            </div>
            <div className="card-body_col">
              <div className="card-body_row"></div>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return (
      <div className="cards-container">
        {this.renderCards()}
      </div>
    )
  }
}
