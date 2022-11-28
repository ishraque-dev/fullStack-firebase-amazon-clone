import React from 'react';
import '../style/home.css';
import Product from './Product';
const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__container">
        <div className="home__row">
          {/* 2 */}
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {' '}
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          {/* 1 */}
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
