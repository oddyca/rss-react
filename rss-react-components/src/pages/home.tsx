import React from 'react';
import Search from '../components/search';

const Home = () => {
  return (
    <div className="home-container">
      <Search />
      <div className="cards-container">
        <div className="cards-border">
          <div className="cards">
            <div className="card-title">
              <p className="card-title_decoration">
                /LOADED
                <br />
                v:43.234cd.xf
              </p>
              <h3>CARD_01</h3>
            </div>
            <div className="card-body">
              <p>Card info</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
        <div className="cards-border">
          <div className="cards">
            <div className="card-title">
              <p className="card-title_decoration">
                /LOADED
                <br />
                v:43.234cd.xf
              </p>
              <h3>CARD_02</h3>
            </div>
            <div className="card-body">
              <p>Card info</p>
              <p>Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
