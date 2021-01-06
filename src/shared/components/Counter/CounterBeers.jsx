import React, { useContext } from 'react';
import './styles.scss';
import { CounterBeers } from '../../../counterBeer';

function CounterBeer() {
  const { counter } = useContext(CounterBeers);
  return <div className="counter">{counter}</div>;
}

export default CounterBeer;
