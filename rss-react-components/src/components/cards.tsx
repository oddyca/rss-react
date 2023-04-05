import React from 'react';
import '../styles/cards.css';

import { CardsProps } from '../types/types';

const Cards = ({ cards }: CardsProps) => {
  const renderCards = () => {
    return cards?.map((card, id) => {
      return (
        <div className="cards-form" key={id}>
          <div className="form-cards-border">
            <div className="form-cards-container">
              <div className="card-title">
                <p className="card-title_decoration">
                  /LOADED
                  <br />
                  v:43.234cd.xf
                </p>
                <h3>CARD_{id + 1}</h3>
              </div>
              <div className="card-form-body">
                <div className="card-pfp" style={{ backgroundImage: `url(${card.pfp})` }}></div>
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
          </div>
        </div>
      );
    });
  };

  return <div className="cards-container">{renderCards()}</div>;
};

export default Cards;
