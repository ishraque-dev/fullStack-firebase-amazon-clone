import { React, useContext, useState } from 'react';
import '../style/header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Context from '../store/Context';
const Header = () => {
  const [focus, setFocus] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { data, setSearchItem } = useContext(Context);
  const search_items = data.map((item) => item.category);
  const onFocus = () => {
    setFocus(true);
  };
  const onBlur = () => {
    setTimeout(() => {
      setFocus(false);
    }, 500);
    return clearTimeout(setTimeout);
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setNotFound(false);
  };
  const handleClick = () => {
    console.log(inputValue);

    search_items.forEach((item) => {
      if (item !== inputValue) {
        setNotFound(true);
        setFocus(true);
      } else {
        setSearchItem(inputValue);
      }
    });
  };
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
      />
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          onFocus={onFocus}
          onBlur={onBlur}
          value={inputValue}
          placeholder={focus && 'You can search for...'}
          onChange={handleChange}
        />

        {focus && (
          <div className="search__dropdown">
            {!notFound && (
              <ul>
                {search_items
                  .filter((item, i) => search_items.indexOf(item) === i)
                  .map((item, i) => {
                    return (
                      <li
                        key={i}
                        onClick={() => {
                          setInputValue(item);
                          setSearchItem(item);
                        }}
                      >
                        {item}
                      </li>
                    );
                  })}
              </ul>
            )}
            {notFound && (
              <h1>
                Nothing found! You can only search for items those are present
                in suggestion.
              </h1>
            )}
          </div>
        )}
        <SearchIcon className="header__searchIcon" onClick={handleClick} />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">8</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
