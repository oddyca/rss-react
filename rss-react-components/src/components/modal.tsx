import React from 'react';
import { ModalProps } from '../types/types';

export default function Modal(props: ModalProps) {
  const { cardData } = props;

  return (
    <div className="card-modal">
      <div className="modal-body">
        <div className="modal-row1">
          <div className="row1-col1">
            <p className="modal-top-right-dec">{cardData[0]}</p>
            <h3 dangerouslySetInnerHTML={{ __html: cardData[2] }}></h3>
            <p className="modal-acronym">_//:{cardData[5]}</p>
          </div>
          <div className="row1-col2">
            <img className="modal-img" src={cardData[6]} alt="modal card image" />
          </div>
        </div>
        <div className="modal-row2">
          <div className="modal-description">
            <p className="modal-paragraph">{cardData[3]}</p>
          </div>
          <p className="modal-bot-right-dec">{cardData[7]}</p>
        </div>
      </div>
    </div>
  );
}
