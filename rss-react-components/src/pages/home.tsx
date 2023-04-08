import React, { useEffect, useLayoutEffect, useState } from 'react';
import Search from '../components/search';
import FetchedData from '../components/fetched-data';
import { TFetchedData } from '../types/types';
import { getAPIAbort } from '../components/API/fetch';

const Home = () => {
  const [dataCards, setDataCards] = useState<TFetchedData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getDataForCards = async () => {
      setIsLoaded(false);
      const dataToRender = await FetchedData();
      setDataCards(dataToRender);
      setIsLoaded(true);
    };
    getDataForCards();
    return () => {
      getAPIAbort.abort();
    };
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
  //
  return (
    <div className="home-container">
      <Search />
      {!isLoaded ? (
        <div className="psoload">
          Intercepting corpo data...
          <div className="straight"></div>
          <div className="curve"></div>
          <div className="center"></div>
          <div className="inner"></div>
        </div>
      ) : (
        <div className="cards-container">{renderAPIData()}</div>
      )}
    </div>
  );
};

export default Home;
