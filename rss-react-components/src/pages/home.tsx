import React, { useEffect, useState } from 'react';
import Search from '../components/search';
import FetchedData from '../components/fetched-data';
import { TFetchedData } from '../types/types';
import { getAPIAbort } from '../components/API/fetch';
import Modal from '../components/modal';

const Home = () => {
  const [dataCards, setDataCards] = useState<TFetchedData[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toTransfer, setToTransfer] = useState<string[]>([]);

  useEffect(() => {
    const getDataForCards = async () => {
      setIsLoaded(false);
      const lsItem = localStorage.getItem('searchBarValue');
      const dataToRender = lsItem ? await FetchedData(lsItem) : await FetchedData('default');
      setDataCards(dataToRender);
      setIsLoaded(true);
    };
    getDataForCards();
    return () => {
      getAPIAbort.abort();
    };
  }, []);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const transferData = (args: string[]) => {
    setToTransfer(args);
  };

  function renderAPIData(): React.ReactNode {
    return dataCards.map((card, id) => {
      return (
        <div className="cards-border" key={id}>
          <div
            className="cards"
            onClick={() => {
              toggleModal();
              transferData([
                card.id,
                card.code,
                card.title,
                card.description,
                card.type,
                card.acronym,
                card.img,
                `${card.number}`,
              ]);
            }}
          >
            <div className="card-title">
              <p className="card-title_decoration">
                /LOADED
                <br />
                {card.code}
              </p>
              <h3>CARD_{id + 1}</h3>
            </div>
            <div className="card-body">
              <div className="image-container">
                <img src={card.img} alt="patent img" className="card-img" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="home-container">
      <Search
        setIsLoaded={setIsLoaded}
        setDataCards={setDataCards}
        isLoaded={isLoaded}
        dataCards={dataCards}
      />
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
      {isOpen && (
        <div className="overlay" onClick={toggleModal}>
          <Modal cardData={toTransfer} />
        </div>
      )}
    </div>
  );
};

export default Home;
