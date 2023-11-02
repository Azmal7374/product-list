import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css'
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className={number === currentPage ? 'active' : ''}>
          <button onClick={() => onPageChange(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;