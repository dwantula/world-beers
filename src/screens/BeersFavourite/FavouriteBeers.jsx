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
    const beers = getItemFromLocalStorage('beer') || [];
    this.setState({ beers });
  } 

  deleteBeer = (id) => {
    
    const beer = this.state.beers.filter(element => element.id !== id);
    
    this.setState({ beers: beer });
    saveItemInLocalStorage('beer', beer);
  }
  
  render(){
    return (
      <>
        <Heading 
          type="h3"
          className="title-favourite-beers"
          text="Your favourite beers"
        />
        {this.state.beers.map(({name, id, description, abv, img}) => (
            <React.Fragment key={id}>
              <DeleteButton
              onClick={() => this.deleteBeer(id)} />
              <Beer 
                name={name}
                description={description}
                img={img}
                abv={abv}
              />
            </React.Fragment> 
          ))
          }
      </>
    )
  } 
}

export default FavouriteBeersComponent;