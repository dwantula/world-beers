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




 // const beer = beerId
  // console.log(beer)
  // function addBeerToFavourites() {
  //   const beers = getItemFromLocalStorage('beers') || [];
  //   // const uniqueBeers = beers.filter((item, id) => id === beers.findIndex(elem => elem.id === item.id))
  //   console.log(beers)
  //   const { id, img, name, description, ibu, abv } = beer;
  //   // console.log(beer)
  //   const newBeer = { id, name, description, img, ibu, abv };
  //   const newBeers = [...beers, newBeer];
  //   saveItemInLocalStorage('beers', newBeers);
  // };




