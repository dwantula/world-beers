import React, { PureComponent } from 'react';
import WorldBeersComponent from './screens/WorldBeers/WorldBeers';
import BeerOfTheDayComponent from './screens/BeerOfTheDay/BeerOfTheDay';
import FavouriteBeersComponent from './screens/BeersFavourite/FavouriteBeers';
import SeartchBeersComponent from './screens/SeartchBeers/SeartchBeers';
import Navigation from './shared/components/Navigation/Navigation';
import './App.scss';

const pageSwitch = [
  {
    id: 'worldBeers',
    label: 'Home',
    component: <WorldBeersComponent />,
  },
  {
    id:'favouriteBeers',
    label: 'Favourite Beers',
    component: <FavouriteBeersComponent />
  },
  {
    id: 'seartch beers',
    label: 'Seartch Beers',
    component: <SeartchBeersComponent />
  },
  {
    id: 'beerDay',
    label: 'Beer Day',
    component: <BeerOfTheDayComponent />,
  },
]

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: <WorldBeersComponent />,
    }
  }

  handleScreenChange = (screen) => {
    this.setState({ screen })
  }

  render() {
    return (
      <>
        <Navigation pages={pageSwitch} onLinkClick={this.handleScreenChange} />
        {this.state.screen}
      </>
    )
  }
}
export default App;