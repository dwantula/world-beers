import React, { PureComponent } from 'react';
import { fetchRandomBeer } from '../../services/beers';
import Heading from '../../shared/components/Heading/Heading';
import RandomBeer from '../../shared/components/RandomBeer/RandomBeer';
import Button from '../../shared/components/Button/Button';
import './styles.scss';

class BeerOfTheDayComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beer: null,
    };
  };

  getRandomBeer = async () => {
    const randomBeer = await fetchRandomBeer();
    this.setState({
      beer: randomBeer,
    });
  };

  render() {
    const { beer } = this.state;
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
        {beer && <RandomBeer randomBeer={beer} />}
      </div>
    );
  };
};

export default BeerOfTheDayComponent;