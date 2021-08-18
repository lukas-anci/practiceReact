import Shoes from './picture.jpg';

import React, { useReducer } from 'react';
import Button from './Button';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
const countReducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return {
        count: state.count + 1,
        price: state.price,
        totalPrice: state.price * state.count,
      };
    case ACTION.DECREMENT:
      return {
        count: state.count - 1,
        price: state.price,
        totalPrice: state.price * state.count,
      };

    default:
      break;
  }
};

const Product = ({ item }) => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
    price: 16,
    totalPrice: 16,
  });
  const increment = () => {
    dispatch({ type: ACTION.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: ACTION.DECREMENT });
  };
  return (
    <div className="d-flex">
      <div className="image-container">
        <img src={Shoes} alt="" />
      </div>
      <div className="product-info">
        {item.map((i) => (
          <div key={i.title}>
            <h2>{i.title}</h2>
            <p>{i.description}</p>
            <p>{i.priceRange}</p>

            <p>{state.totalPrice} eur</p>
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
