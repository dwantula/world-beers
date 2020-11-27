import React, { PureComponent } from 'react';
import { fetchRandomBeer } from '../../services/beers';
import Heading from '../../shared/components/Heading/Heading';
import { saveItemInLocalStorage, getItemFromLocalStorage } from '../../services/localStorage';
import Beer from '../../shared/components/Beer/Beer';
import FavouriteButton from '../../shared/components/FavouriteButton/FavouriteButton';
import Button from '../../shared/components/Button/Button';
import './styles.scss';

class BeerOfTheDayComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beer: [],
    };
  };

  getRandomBeer = async () => {
    const beer = await fetchRandomBeer();
    this.setState({ beer });
  };

  addBeerToFavourites = () => {
    const beers = getItemFromLocalStorage('beers') || [];
    const { id, image_url: img, name, description, ibu, abv } = this.state.beer;
    const newBeer = { id, name, description, image_url: img, ibu, abv };
    const newBeers = [...beers, newBeer];
    saveItemInLocalStorage('beers', newBeers);
  };

  render() {
    const { id, image_url: img, abv, ibu, name, description } = this.state.beer;
    return (
      <div className="beer-day-page">
        <Heading
          className="title-beer-day"
          text="Beer of the day"
        />
        <Button
          className="button-choose"
          onClick={this.getRandomBeer}
          text="Choose a beer"
        />
        {
          name && <div key={id} className="random-beer">
            <FavouriteButton
              onClick={this.addBeerToFavourites} />
            <Beer
              name={name}
              description={description}
              abv={abv}
              img={img}
              ibu={ibu}
            />
          </div>
        }
      </div>
    );
  };
}

export default BeerOfTheDayComponent;