import React, { useState } from 'react';
import productsData from '../public/products.json'; // Sample product data
import ProductList from './components/ProductList';
import Pagination from './share/Pagination';
import { AppContainer, FilterContainer } from './share/styles';

const ITEMS_PER_PAGE = 5;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(productsData);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filterProducts = () => {
    let filteredProducts = productsData;

    // Filter by price
    if (minPrice) {
      filteredProducts = filteredProducts.filter(product => product.price >= parseFloat(minPrice));
    }
    if (maxPrice) {
      filteredProducts = filteredProducts.filter(product => product.price <= parseFloat(maxPrice));
    }

    // Filter by category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    return filteredProducts;
  };

  const sortedProducts = filterProducts().sort((a, b) => b.price - a.price);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const onPageChange = pageNumber => setCurrentPage(pageNumber);

  const handleMinPriceChange = event => setMinPrice(event.target.value);
  const handleMaxPriceChange = event => setMaxPrice(event.target.value);
  const handleCategoryChange = event => setSelectedCategory(event.target.value);

  return (
    <AppContainer>
      <FilterContainer>
       <h2>Filtered By Price</h2>
        <label>
          Min Price:
          <input type="number" value={minPrice} onChange={handleMinPriceChange} />
        </label>
        <label>
          Max Price:
          <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
        </label>
        <h2>Filtered By Category</h2>
        <label>
          Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Furniture">Furniture</option>
            <option value="Travel">Travel</option>
            <option value="Beauty">Beauty</option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
            {/* Add more categories here */}
          </select>
        </label>
      </FilterContainer>
      <ProductList products={currentProducts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </AppContainer>
  );
};

export default App;
