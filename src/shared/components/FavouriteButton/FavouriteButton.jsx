import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  saveItemInLocalStorage,
  getItemFromLocalStorage,
} from '../../../services/localStorage';
import './styles.scss';

const FavouriteButton = ({ beerId }) => {
  const [active, setActive] = useState(false);

  function addBeerIdToFavourites() {
    setActive(true);
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
      className={active ? 'spinner-anim icon' : 'icon'}
      onClick={addBeerIdToFavourites}
    />
  );
};

FavouriteButton.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default FavouriteButton;
