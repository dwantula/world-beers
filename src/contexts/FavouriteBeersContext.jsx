import { createContext } from 'react';

const FavouriteBeersContext = createContext({
  favouriteBeersNumber: 0,
  setFavouriteBeersNumber: () => {},
});

export default FavouriteBeersContext;
