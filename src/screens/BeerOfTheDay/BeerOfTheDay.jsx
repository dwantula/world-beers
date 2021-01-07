import React, { useState } from 'react';
import { fetchRandomBeer } from '../../services/beers';
import Heading from '../../shared/components/Heading/Heading';
import Beer from '../../shared/components/Beer/Beer';
import Spinner from '../../shared/components/Spinner/Spinner';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import Button from '../../shared/components/Button/Button';
import './styles.scss';

function BeerOfTheDayComponent() {
  const [loading, setLoading] = useState(false);
  const [beer, setBeer] = useState({
    name: '',
    abv: '',
    img: '',
    ibu: '',
    description: '',
  });

  async function getRandomBeer() {
    setLoading(true);
    const beer = await fetchRandomBeer();
    setBeer(beer);
    setLoading(false);
  }

  return (
    <div className="beer-day-page">
      <Heading className="title-beer-day" text="Beer of the day" />
      <Button
        className="button-choose"
        onClick={getRandomBeer}
        type="button"
        text="Choose a beer"
      />
      {loading === true ? (
        <Spinner />
      ) : (
        beer.name && (
          <div className="random-beer">
            <FavouriteButton beerId={beer.id} />
            <Beer
              id={beer.id}
              name={beer.name}
              description={beer.description}
              abv={beer.abv}
              img={beer.img}
              ibu={beer.ibu}
            />
          </div>
        )
      )}
    </div>
  );
}

export default BeerOfTheDayComponent;
