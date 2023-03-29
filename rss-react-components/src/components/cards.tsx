import React, { Component } from 'react';
import '../styles/cards.css';

import { CardsProps } from '../types/types';

export default class Cards extends Component<CardsProps, object> {
  constructor(props: CardsProps) {
    super(props);

    this.renderCards = this.renderCards.bind(this);
  }

  renderCards = () => {
    const allCards = this.props.cards;

    return allCards?.map((card, id) => {
      return (
        <div className="cards" key={id}>
          <div className="card-title">
            <h3>Card #{id + 1}</h3>
          </div>
          <div className="card-body">
            <img className="card-pfp" src={card.pfp}></img>
            <div className="card-body_col">
              {Object.keys(card)
                .slice(0, -1)
                .map((key, id) => {
                  return (
                    <div className="card-body_row" key={id}>
                      <p>{key}:</p>
                    </div>
                  );
                })}
            </div>
            <div className="card-body_col">
              {Object.values(card)
                .slice(0, -1)
                .map((value, id) => {
                  return (
                    <div className="card-body_row" key={id}>
                      <p>{value}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="cards-container">{this.renderCards()}</div>;
  }
}
