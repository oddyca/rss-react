import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../components/Search/search';
import FetchedData from '../components/fetched-data';
import { saveResults } from '../components/Search/searchResults';
import { RootState } from '../app/store';
import { getAPIAbort } from '../components/API/fetch';
import Modal from '../components/modal';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [toTransfer, setToTransfer] = useState<string[]>([]);

  const dispatch = useDispatch();

  const searchValue = useSelector((state: RootState) => {
    return state.rootReducer.search.value;
  });

  const searchResults = useSelector((state: RootState) => {
    return state.rootReducer.searchResults.value;
  });

  useEffect(() => {
    const getDataForCards = async () => {
      setIsLoaded(false);
      const searchInput = searchValue;
      const dataToRender = searchInput
        ? await FetchedData(searchInput)
        : await FetchedData('default');

      dispatch(
        saveResults({
          value: dataToRender,
        })
      );
      setIsLoaded(true);
    };
    getDataForCards();
    return () => {
      getAPIAbort.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const transferData = (args: string[]) => {
    setToTransfer(args);
  };

  function renderAPIData(): React.ReactNode {
    return searchResults.map((card, id) => {
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
        setDataCards={saveResults}
        isLoaded={isLoaded}
        dataCards={searchResults}
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
