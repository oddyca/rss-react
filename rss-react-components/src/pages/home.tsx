import React from 'react';
import Search from '../components/search';

const Home: React.FC<object> = (props: object) => {
  return (
    <div className="home-container">
      <Search />
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
    </div>
  );
};

export default Home;
