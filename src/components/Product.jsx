import Shoes from './picture.jpg';

import React, { useReducer, useEffect, useState } from 'react';
import Button from './Button';
import Cart from './Cart';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  TOTALPRICE: 'totalPrice',
};

const countReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {
        count: state.count + 1,
        price: state.price,
      };
    case ACTION.DECREMENT:
      return {
        count: state.count <= 0 ? 0 : state.count - 1,
        price: state.price,
      };
    // case ACTION.TOTALPRICE:
    //   return {
    //     ...state,
    //     totalPrice: state.price * state.count,
    //   };

    default:
      break;
  }
};

const Product = ({ item }) => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 1,
    price: 16,
    totalPrice: 16,
  });
  const [totalPrice, setTotalPrice] = useState(16);
  useEffect(() => {
    setTotalPrice(state.price * state.count);
  }, [state]);
  const increment = () => {
    dispatch({ type: ACTION.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };
  return (
    <div className="d-flex">
      <Cart count={state.count} />
      <div className="image-container">
        <img src={Shoes} alt="" />
      </div>
      <div className="product-info">
        {item.map((i) => (
          <div key={i.title}>
            <h2>{i.title}</h2>
            <p>{i.description}</p>
            <p>{i.priceRange}</p>

            <p>{totalPrice} eur</p>
            <div className="btn-group">
              <button onClick={decrement}>-</button>
              <button>{state.count}</button>
              <button onClick={increment}>+</button>
              <Button />
            </div>
            <hr />
            <p>{i.sku}</p>
            <p>{i.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
