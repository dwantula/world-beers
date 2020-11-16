import React, { PureComponent } from 'react';
import { getItemFromLocalStorage } from '../../services/localStorage';
import Beer from '../../shared/components/Beer/Beer';
import './styles.scss';

class FavouriteBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }
  
  componentDidMount = () => {
    const beers = getItemFromLocalStorage('beer') || [];
    this.setState({ beers });
  } 
   
  render(){
    return (
      <div className="favourite-beers-card">
        <h2 className="title-favourite-beers">Your favourite beers</h2>
        {this.state.beers.map(({name, id, description, abv, img}) => (
          <Beer 
            className="beer-day"
            key={id}
            name={name}
            description={description}
            img={img}
            abv={abv}
          />
        ))
        }
      </div>
    )
  } 
}

export default FavouriteBeersComponent;