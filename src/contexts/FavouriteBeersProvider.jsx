import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FavouriteBeersContext from './FavouriteBeersContext';
import { getItemFromLocalStorage } from '../services/localStorage';

function FavouriteBeersProvider({ children }) {
  const [favouriteBeersNumber, setFavouriteBeersNumber] = useState(0);

  useEffect(() => {
    const storedBeers = getItemFromLocalStorage('beers');
    const initialBeersNumber = storedBeers ? storedBeers.length : 0;
    setFavouriteBeersNumber(initialBeersNumber);
  }, []);

  return (
    <FavouriteBeersContext.Provider
      value={{ favouriteBeersNumber, setFavouriteBeersNumber }}
    >
      {children}
    </FavouriteBeersContext.Provider>
  );
}

FavouriteBeersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FavouriteBeersProvider;
