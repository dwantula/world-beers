import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import FavouriteBeersContext from '../../../contexts/FavouriteBeersContext';
import {
  saveItemInLocalStorage,
  getItemFromLocalStorage,
} from '../../../services/localStorage';
import './styles.scss';

const FavouriteButton = ({ beerId }) => {
  const { setFavouriteBeersNumber } = useContext(FavouriteBeersContext);

  const [active, setActive] = useState(false);

  function addBeerIdToFavourites() {
    setActive(true);
    const beers = getItemFromLocalStorage('beers') || [];
    const theSameId = !!beers.find((elem) => elem === beerId);
    if (theSameId === false) {
      const newBeers = [...beers, beerId];
      saveItemInLocalStorage('beers', newBeers);
      setFavouriteBeersNumber((prevNumber) => prevNumber + 1);
    }
  }

  return (
    <div className="icon-position-favourite-button">
      <FontAwesomeIcon
        icon={faThumbsUp}
        className={active ? 'spinner-anim icon' : 'icon'}
        onClick={addBeerIdToFavourites}
      />
    </div>
  );
};

FavouriteButton.propTypes = {
  beerId: PropTypes.number.isRequired,
};

export default FavouriteButton;
