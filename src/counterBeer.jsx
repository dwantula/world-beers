import { createContext } from 'react';

export const defaultObject = {
  counter: 0,
  handleCounterBeersChange: () => {},
};

export const CounterBeers = createContext(defaultObject);
