/* eslint-disable eqeqeq */
import React, { PureComponent } from 'react';
import Heading from '../../shared/components/Heading/Heading';
import Beer from '../../shared/components/Beer/Beer';
import Spinner from '../../shared/components/Spinner/Spinner';
import './styles.scss';
import DeleteButton from '../../shared/components/DeleteButton/DeleteButton';
import { fetchBeersWithIds } from '../../services/beers';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../../services/localStorage';
import { CounterBeers, defaultObject } from '../../counterBeer';

class FavouriteBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      loading: false,
      counter: defaultObject.counter,
      beerIdToDelete: '',
    };
  }

  componentDidMount = async () => {
    const loading = true;
    this.setState({ loading });
    const beersId = getItemFromLocalStorage('beers') || [];
    const beers = await fetchBeersWithIds(beersId.join('|'));
    this.setState({ beers });
    this.setState({ loading: !loading });
    this.setState({ counter: beersId.length });
  };

  deleteBeer = (id) => {
    setTimeout(() => {
      const { beers } = this.state;
      const beersIdWithoutDeletedBeer = beers.filter(
        (element) => element.id !== id,
      );
      const beersId = beersIdWithoutDeletedBeer.map((elem) => elem.id);
      this.setState({ beers: beersIdWithoutDeletedBeer });
      saveItemInLocalStorage('beers', beersId);
    }, 1500);
    this.setState({ beerIdToDelete: id });
  };

  render() {
    const { beers, loading, counter, beerIdToDelete } = this.state;
    return (
      <div>
        <Heading
          type="h3"
          className="title-favourite-beers"
          text="Your favourite beers"
        />
        <div className="favourite-beer">
          <CounterBeers.Provider
            value={{
              counter,
              handleCounterBeersChange: this.componentDidMount,
            }}
          />
          {loading === true ? (
            <Spinner />
          ) : (
            beers.map(({ name, id, description, abv, ibu, img }) => (
              <div
                className={beerIdToDelete === id ? 'opacity-anims' : ''}
                key={id}
              >
                <DeleteButton onClick={() => this.deleteBeer(id)} />
                <Beer
                  name={name}
                  description={description}
                  img={img}
                  abv={abv}
                  ibu={ibu}
                />
                <div className="line" />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default FavouriteBeersComponent;
