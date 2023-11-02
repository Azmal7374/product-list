import React from 'react';
import PropTypes from 'prop-types';
import { ProductCategory, ProductContainer, ProductDescription, ProductImage, ProductPrice, ProductTitle } from '../share/styles';

const Product = ({ product }) => (
  <ProductContainer>
    <ProductImage src={product.image} alt={product.title} />
    <ProductTitle>{product.title}</ProductTitle>
    <ProductDescription>{product.description}</ProductDescription>
    <ProductPrice>${product.price}</ProductPrice>
    <ProductCategory>Category: {product.category}</ProductCategory>
  </ProductContainer>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
