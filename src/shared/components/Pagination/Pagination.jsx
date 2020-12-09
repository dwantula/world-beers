import React from 'react';
import './styles.scss'

const PaginationComponent = ({ beersPerPage, totalBeers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= (totalBeers / beersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} className="page-link" href="!#" >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>

  );
}

export default PaginationComponent;