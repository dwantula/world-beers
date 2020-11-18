import React from 'react';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../../services/localStorage'; 
import Beer from '../Beer/Beer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import './styles.scss';

const RandomBeer = props => {
  const randomBeer = props.value;
  
  function addBeerToFavourites () {
    const beers = getItemFromLocalStorage('beer') || [];
    console.log(beers)
    const { id, image_url: img, name, description, ibu, abv} = randomBeer;
    const newBeer = {id, name, description, img, ibu, abv};
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beer', newBeers);
  }

  const { id, image_url: img, name, description, abv,ibu } = randomBeer;
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
  )
}
  
export default RandomBeer;