import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { AllProduct } from '../share/styles';

const ProductList = ({ products }) => (
  <AllProduct>
  {products.map(product => (
    <Product key={product.id} product={product} />
  ))}
  </AllProduct>
   
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;