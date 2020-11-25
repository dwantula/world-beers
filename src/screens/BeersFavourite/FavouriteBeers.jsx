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
    }
  }

  componentDidMount = () => {
    const beers = getItemFromLocalStorage('beers') || [];
    this.setState({ beers });
  }

  deleteBeer = (id) => {
    const beers = this.state.beers.filter(element => element.id !== id);
    this.setState({ beers });
    saveItemInLocalStorage('beers', beers);
  }

  render() {
    const { beers } = this.state;
    console.log(beers)
    return (
      <div className="favourite-beers">
        <Heading
          type="h3"
          className="title-favourite-beers"
          text="Your favourite beers"
        />

        {
          beers.map(({ name, id, description, abv, ibu, image_url: img }) => (
            <React.Fragment className="favourite-beers" key={id}>
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
      </div >

    )
  }
}
export default FavouriteBeersComponent;


