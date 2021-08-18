import React from 'react';
import Product from './Product';

const ProductList = (props) => {
  return (
    <div className="d-flex">
      {props.products.map((prod) => (
        <Product key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default ProductList;
