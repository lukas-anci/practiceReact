import React from 'react';
const arr = [1, 2, 3, 4, 5];
const Product = (props) => {
  return (
    <div className="product">
      <h5>{props.prod.type}</h5>
      <p>{props.prod.name}</p>
      {arr.map((lol) => (
        <i className="far fa-star"></i>
      ))}
      <p>{props.prod.price}</p>
    </div>
  );
};

export default Product;
