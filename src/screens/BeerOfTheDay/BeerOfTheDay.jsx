import React, { useState } from 'react';
import { fetchRandomBeer } from '../../services/beers';
import Heading from '../../shared/components/Heading/Heading';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../services/localStorage';
import Beer from '../../shared/components/Beer/Beer';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import Button from '../../shared/components/Button/Button';
import './styles.scss';


const createEmptyBeer = () => ({
  name: '',
  abv: '',
  img: '',
  ibu: '',
  isPlaceholder: true,
})

function BeerOfTheDayComponent() {

  const [beer, setBeer] = useState(createEmptyBeer())

  const getRandomBeer = async () => {
    const beer = await fetchRandomBeer()
    console.log(beer)
    setBeer(beer);
  };

  const addBeerToFavourites = () => {
    const beers = getItemFromLocalStorage('beers') || [];
    const { id, img, name, description, ibu, abv } = beer;
    const newBeer = { id, name, description, img, ibu, abv };
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beers', newBeers);
  };

  return (
    <div className="beer-day-page">
      <Heading
        className="title-beer-day"
        text="Beer of the day"
      />
      <Button
        className="button-choose"
        onClick={getRandomBeer}
        text="Choose a beer"
      />
      {
        !beer.isPlaceholder && <div className="random-beer">
          <FavouriteButton
            onClick={addBeerToFavourites} />
          <Beer
            name={beer.name}
            description={beer.description}
            abv={beer.abv}
            img={beer.img}
            ibu={beer.ibu}
          />
        </div>
      }
    </div>
  );
};


export default BeerOfTheDayComponent;