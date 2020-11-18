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
      value: null,
    };
  };

  getRandomBeer = async () => {
    const randomBeer = await fetchRandomBeer();
    this.setState({
      value: randomBeer,
    })
  }

  render() {
    const { value } = this.state;
    return (
      <div className="beer-day-page">
        <Heading 
          type="h3"
          className="title-beer-day"
          text="Beer of the day"
        />
        <Button 
          className=" button-choose" 
          onClick={this.getRandomBeer}
          text="Choose a beer"
        />
        {value ? <RandomBeer value={value}/> : value }
      </div>
    )
  }
}

export default BeerOfTheDayComponent;