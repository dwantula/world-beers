import React, { PureComponent } from 'react';
import Heading from '../../shared/components/Heading/Heading';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';
import DeleteButton from '../../shared/components/DeleteButton/DeleteButton';
import { getItemFromLocalStorage, saveItemInLocalStorage } from '../../services/localStorage';

class FavouriteBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  };

  componentDidMount = () => {
    const beers = getItemFromLocalStorage('beers') || [];
    this.setState({ beers });
  };

  deleteBeer = (id) => {
    const beers = this.state.beers.filter(element => element.id !== id);
    this.setState({ beers });
    saveItemInLocalStorage('beers', beers);
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
          {
            beers.map(({ name, id, description, abv, ibu, img }) => (
              <React.Fragment key={id}>
                <DeleteButton onClick={() => this.deleteBeer(id)} />
                <Beer
                  name={name}
                  description={description}
                  img={img}
                  abv={abv}
                  beer={beers}
                  ibu={ibu}
                />
              </React.Fragment>
            ))
          }
        </div>
      </div>
    );
  };
};

export default FavouriteBeersComponent;



