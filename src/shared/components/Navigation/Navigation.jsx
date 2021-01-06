import './styles.scss';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import CounterBeer from '../Counter/CounterBeers';
import { CounterBeers } from '../../../counterBeer';

function NavigationComponent({ pages, onLinkClick }) {
  const { counter } = useContext(CounterBeers);

  return (
    <nav className="nav">
      {pages.map(({ id, label, component }) => (
        <button
          type="button"
          className="links-button"
          key={id}
          onClick={() => onLinkClick(component)}
        >
          {label}
        </button>
      ))}
      <CounterBeer />
      {counter}
    </nav>
  );
}

NavigationComponent.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onLinkClick: PropTypes.func.isRequired,
};

export default NavigationComponent;
