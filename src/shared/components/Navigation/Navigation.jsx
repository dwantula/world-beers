import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function NavigationComponent({ pages, onLinkClick }) {
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
