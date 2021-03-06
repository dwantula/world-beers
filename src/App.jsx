import React, { PureComponent } from 'react';
import WorldBeersComponent from './screens/WorldBeers/WorldBeers';
import BeerOfTheDayComponent from './screens/BeerOfTheDay/BeerOfTheDay';
import FavouriteBeersComponent from './screens/BeersFavourite/FavouriteBeers';
import SearchBeersComponent from './screens/SearchBeers/SearchBeers';
import Navigation from './shared/components/Navigation/Navigation';
import './App.scss';
import FavouriteBeersProvider from './contexts/FavouriteBeersProvider';

const pages = [
  {
    id: 'worldBeers',
    label: 'Home',
    component: <WorldBeersComponent />,
  },
  {
    id: 'favouriteBeers',
    label: 'Favourite Beers',
    component: <FavouriteBeersComponent />,
  },
  {
    id: 'search beers',
    label: 'Search Beers',
    component: <SearchBeersComponent />,
  },
  {
    id: 'beerDay',
    label: 'Beer of the Day',
    component: <BeerOfTheDayComponent />,
  },
];

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      screen: <WorldBeersComponent />,
    };
  }

  handleScreenChange = (screen) => {
    this.setState({ screen });
  };

  render() {
    const { screen } = this.state;
    return (
      <FavouriteBeersProvider>
        <Navigation pages={pages} onLinkClick={this.handleScreenChange} />
        {screen}
      </FavouriteBeersProvider>
    );
  }
}
export default App;
