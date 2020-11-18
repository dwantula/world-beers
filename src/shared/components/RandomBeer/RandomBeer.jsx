import React from 'react';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../../services/localStorage'; 
import Beer from '../Beer/Beer';
import FavouriteButton from '../FavouriteButton/FavouriteButton';
import './styles.scss';

const RandomBeer = props => {
  const randomBeer = props.value;
  
  function addBeerToFavourites () {
    const beers = getItemFromLocalStorage('beer') || [];
    const { id, image_url: img, name, description, abv} = randomBeer;
    const newBeer = {id, name, description, img, abv};
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beer', newBeers);
  }

  const { id, image_url: img, name, description, abv } = randomBeer;
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
      />
    </div>
  )
}
  
export default RandomBeer;



// {
//   <div className="beer" key={randomBeer.id}>
//     <h2 className="beer">{`Beer's name: ${randomBeer.name}`}</h2>
//     <h2 className="beer">{`ABV: ${randomBeer.abv}%`}</h2>
//     <h4 className="beer">{`Description: ${randomBeer.description}`}</h4>
//     <div className="row">
//       <FontAwesomeIcon 
//         icon={faHeart}
//         className="icon"
//         onClick={addBeerToFavourites}
//       />
//       <p>Like It!</p>
//     </div>
//   </div>
// }