import { React, useState, useEffect } from 'react';
import '../style/home.css';
import Product from './Product';
const Home = () => {
  const [data, setData] = useState();
  const getData = async function () {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  const slicer = (data, value) => {
    return data?.slice(0, value);
  };

  const categoryFilter = (data, condition, sliceValue) => {
    const filData = data?.filter((item) => item.category === condition);
    if (sliceValue) {
      return slicer(filData, sliceValue);
    } else {
      return filData;
    }
  };
  console.log(categoryFilter(data, 'electronics', 3));
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
          {slicer(data, 2)?.map((item, index) => {
            return (
              <Product
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="home__row">
          {categoryFilter(data, 'electronics', 3).map((item) => {
            return (
              <Product
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="home__row">
          {/* 1 */}
          <Product
            itle="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
