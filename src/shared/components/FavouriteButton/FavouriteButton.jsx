import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../../services/localStorage';
import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const FavouriteButton = ({ beerId }) => {

  function addBeerIdToFavourites() {
    const beers = getItemFromLocalStorage('beers') || [];
    const theSameId = !!beers.find(elem => elem === beerId);
    if (theSameId === false) {
      const newBeers = [...beers, beerId]
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
  beerId: PropTypes.number
}

export default FavouriteButton;




