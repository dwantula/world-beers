import React, { PureComponent } from 'react';
import { fetchRandomBeer } from '../../services/beers';
import RandomBeer from '../../shared/components/RandomBeer/RandomBeer';
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
        <h4 className="title-beer-day">Beer of the day</h4>
        <button 
          className=" button-choose" 
          onClick={this.getRandomBeer}
        >
        Choose a beer
        </button>
        {value ? <RandomBeer value={value}/> : value }
      </div>
    )
  }
}

export default BeerOfTheDayComponent;