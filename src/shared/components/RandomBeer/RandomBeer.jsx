import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../../services/localStorage'; 
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const RandomBeer = props => {
  const randomBeer = props.value;
  function addBeerToFavourites ()  {
    const beers = getItemFromLocalStorage('beer') || [];
    const { id, image_url: img, name, description, abv} = randomBeer
    const newBeer = {id, name, description, img, abv}
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beer', newBeers);
  }

  return ( 
    <div className="random-beer">
    {
      <div className="beer" key={randomBeer.id}>
        <h2 className="beer">{`Beer's name: ${randomBeer.name}`}</h2>
        <h2 className="beer">{`ABV: ${randomBeer.abv}%`}</h2>
        <h4 className="beer">{`Description: ${randomBeer.description}`}</h4>
        <div className="row">
          <FontAwesomeIcon 
            icon={faHeart}
            className="icon"
            onClick={addBeerToFavourites}
          />
          <p>Like It!</p>
        </div>
      </div>
    }
    </div>
  )
}
  
export default RandomBeer;
