import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PropTypes from 'prop-types';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
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
      icon={faThumbsUp}
      className="icon"
      onClick={addBeerIdToFavourites}
    />
  );
};

FavouriteButton.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default FavouriteButton;
