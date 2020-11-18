import React, { PureComponent } from 'react';
import { fetchAllBeers } from './../../services/beers';
import Button from '../../shared/components/Button/Button';
import BeersList from './../../shared/components/BeersList/BeersList';
import './styles.scss';
import Heading from '../../shared/components/Heading/Heading';

class SeartchBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      smallBeer: null
    }
  }  

  getAllBeers = async () => {
    const allBeers = await fetchAllBeers()
    this.setState({
      beers: allBeers,
    })
  }

  weakBeers = () => {
    const smallvolumeAlcohol = this.state.beers.filter(beer=> beer.abv <= 4.5);
    this.setState({
      smallBeer: smallvolumeAlcohol,
    })
  }
  
  render(){
    const beers = this.state.beers;
    return (
      <div className="seartch-page">
        <Heading 
          type="h3"
          className="title-seartch"
          text='Find Beers'
        />
        <h4>Filter: </h4>
        <div className="filter-select">
          <select className="option">
            <option>--Alcohol volume--</option>
            <option onClick={this.weakBeers}>less 4,5 %</option>
            <option>more 4,5 %</option>
          </select>
          <select className="option">
            <option>--IBU--</option>
            <option>less 60</option>
            <option>more 60</option>
          </select>
        </div>
        <Button 
          className="button-seartch" 
          onClick={this.getAllBeers}
          text="Find beer" />
        {beers ? <BeersList beers={beers} /> : beers}
      </div>
    )
  }
}

export default SeartchBeersComponent;