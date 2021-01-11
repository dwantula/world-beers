import './styles.scss';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import Counter from '../Counter/Counter';
import FavouriteBeersContext from '../../../contexts/FavouriteBeersContext';

function NavigationComponent({ pages, onLinkClick }) {
  const { favouriteBeersNumber } = useContext(FavouriteBeersContext);

  return (
    <nav className="nav">
      {pages.map(({ id, label, component }) => (
        <div key={id} className="nav-link">
          <button
            type="button"
            className="links-button"
            key={id}
            onClick={() => onLinkClick(component)}
          >
            {label}
          </button>
          {id === 'favouriteBeers' && (
            <div className="counter">
              <Counter favouriteBeersNumber={favouriteBeersNumber} />
            </div>
          )}
        </div>
      ))}
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
