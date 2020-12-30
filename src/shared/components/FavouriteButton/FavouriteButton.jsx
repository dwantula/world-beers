import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  saveItemInLocalStorage,
  getItemFromLocalStorage,
} from '../../../services/localStorage';
import './styles.scss';

const FavouriteButton = ({ beerId }) => {
  function addBeerIdToFavourites() {
    const beers = getItemFromLocalStorage('beers') || [];
    const theSameId = !!beers.find((elem) => elem === beerId);
    if (theSameId === false) {
      const newBeers = [...beers, beerId];
      saveItemInLocalStorage('beers', newBeers);
    }
  }

  return (
    <FontAwesomeIcon
      icon={faHeart}
      className="icon"
      onClick={addBeerIdToFavourites}
    />
  );
};

FavouriteButton.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default FavouriteButton;
