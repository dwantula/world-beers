import React from 'react';
import WorldBeersComponent from './screens/WorldBeers/WorldBeers'
import './App.css';
import BeerOfTheDayComponent from './screens/BeerOfTheDay/BeerOfTheDay';
import Navigation from './shared/components/Navigation/Navigation'

function App() {
  const pageSwitch = [ { id: 'beer-day',  label: 'beer-day', component: <BeerOfTheDayComponent /> }]
  return (
    <div>
      <WorldBeersComponent />
      <Navigation pages={pageSwitch} />
    </div>
  );
}

export default App ;
