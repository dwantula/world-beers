import React, { PureComponent } from 'react';
import Heading from '../../shared/components/Heading/Heading';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import DeleteButton from '../../shared/components/DeleteButton/DeleteButton';
import { fetchBeersWithIds } from '../../services/beers';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../../services/localStorage';

class FavouriteBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount = async () => {
    const beersId = getItemFromLocalStorage('beers') || [];
    const beers = await fetchBeersWithIds(beersId.join('|'));
    this.setState({ beers });
  };

  deleteBeer = (id) => {
    const { beers } = this.state;
    const beersIdWithoutDeletedBeer = beers.filter(
      (element) => element.id !== id,
    );
    const beersId = beersIdWithoutDeletedBeer.map((elem) => elem.id);
    this.setState({ beers: beersIdWithoutDeletedBeer });
    saveItemInLocalStorage('beers', beersId);
  };

  render() {
    const { beers } = this.state;

    return (
      <div>
        <Heading
          type="h3"
          className="title-favourite-beers"
          text="Your favourite beers"
        />
        <div className="favourite-beer">
          {beers.map(({ name, id, description, abv, ibu, img }) => (
            <React.Fragment key={id}>
              <DeleteButton onClick={() => this.deleteBeer(id)} />
              <Beer
                name={name}
                description={description}
                img={img}
                abv={abv}
                ibu={ibu}
              />
              <div className="line" />
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  }
}

export default FavouriteBeersComponent;
