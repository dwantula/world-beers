import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Counter({ favouriteBeersNumber }) {
  return <div className="counter">{`(${favouriteBeersNumber})`}</div>;
}

Counter.propTypes = {
  favouriteBeersNumber: PropTypes.number.isRequired,
};
export default Counter;
