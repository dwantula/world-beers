import React from 'react';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../../services/localStorage';
import Beer from '../Beer/Beer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import PropTypes from 'prop-types';
import './styles.scss';

const RandomBeer = ({ randomBeer }) => {

  function addBeerToFavourites() {
    const beers = getItemFromLocalStorage('beers') || [];
    const { id, image_url: img, name, description, ibu, abv } = randomBeer;
    const newBeer = { id, name, description, image_url: img, ibu, abv };
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beers', newBeers);
  };

  const { id, image_url: img, name, description, abv, ibu } = randomBeer;
  return (
    <div className="random-beer">
      <FavouriteButton
        onClick={addBeerToFavourites} />
      <Beer
        key={id}
        name={name}
        description={description}
        abv={abv}
        img={img}
        ibu={ibu}
      />
    </div>
  );
};

RandomBeer.propTypes = {
  randomBeer: PropTypes.object.isRequired
};

export default RandomBeer;

