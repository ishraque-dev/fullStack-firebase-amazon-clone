import { useReducer } from 'react';
import Context from './Context';

const initialState = {
  data: [],
  searchItem: null,
  basket: [],
};
const reducer = (state, action) => {
  if (action.type === 'SetData') {
    return {
      ...state,
      data: action.val,
    };
  } else if (action.type === 'SearchItem') {
    return {
      ...state,
      searchItem: action.val,
    };
  } else if (action.type === 'Add') {
    console.log(state);
    return {
      ...state,
      basket: [...state.basket, action.val],
    };
  }
  return state;
};
const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const setData = (val) => {
    dispatch({
      type: 'SetData',
      val: val,
    });
  };
  const setSearchItem = (val) => {
    dispatch({
      type: 'SearchItem',
      val: val,
    });
  };
  const addToCart = (item) => {
    console.log(item);
    dispatch({
      type: 'Add',
      val: item,
    });
  };
  const stateValue = {
    data: state.data,
    searchItem: state.searchItem,
    setData: setData,
    setSearchItem: setSearchItem,
    addToCart: addToCart,
  };
  console.log(state.basket);
  return (
    <Context.Provider value={stateValue}>{props.children}</Context.Provider>
  );
};
export default Provider;
