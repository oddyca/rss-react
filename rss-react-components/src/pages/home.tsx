import React, { useEffect, useState } from 'react';
import Search from '../components/search';
import FetchedData from '../components/fetched-data';
import { TFetchedData } from '../types/types';

const Home = () => {
  const [dataCards, setDataCards] = useState<TFetchedData[]>([]);

  useEffect(() => {
    const getDataForCards = async () => {
      const dataToRender = await FetchedData();
      setDataCards(dataToRender);
    };
    getDataForCards();
  }, []);

  function renderAPIData(): React.ReactNode {
    return dataCards.map((card, id) => {
      return (
        <div className="cards-border" key={id}>
          <div className="cards">
            <div className="card-title">
              <p className="card-title_decoration">
                /LOADED
                <br />
                {card.code}
              </p>
              <h3>CARD_{id + 1}</h3>
            </div>
            <div className="card-body">
              <p>Card info</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="home-container">
      <Search />
      <div className="cards-container">{renderAPIData()}</div>
    </div>
  );
};

export default Home;
