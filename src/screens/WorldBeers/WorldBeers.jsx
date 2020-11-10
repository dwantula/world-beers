import React, { PureComponent } from 'react';
import Navigation from '../../shared/components/Navigation/Navigation';
import BeerOfTheDayComponent from '../BeerOfTheDay/BeerOfTheDay';
import './styles.css';

class WorldBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    } 
  }

  render() {
    return (
      <div className="card">
        <Navigation />
        <img className="image" alt="beers" src="images/beers2.jpg"></img>
        <BeerOfTheDayComponent />
      </div>
    )
  }
}

export default WorldBeersComponent