import { useReducer } from 'react';
import Context from './Context';

const initialState = {
  data: [],
  searchItem: null,
};
const reducer = (state, action) => {
  if (action.type === 'SetData') {
    return {
      data: action.val,
    };
  } else if (action.type === 'SearchItem') {
    return {
      ...state,
      searchItem: action.val,
    };
  }
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
  const stateValue = {
    data: state.data,
    searchItem: state.searchItem,
    setData: setData,
    setSearchItem: setSearchItem,
  };

  return (
    <Context.Provider value={stateValue}>{props.children}</Context.Provider>
  );
};
export default Provider;
