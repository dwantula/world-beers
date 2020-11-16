import React, { PureComponent } from 'react';
import { fetchAllBeers } from './../../services/beers';
import ButtonFetchBeers from './../../shared/components/ButtonFetchBeers/ButtonFetchBeers';
import BeersList from './../../shared/components/BeersList/BeersList';
import './styles.scss';

class SeartchBeersComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      beers: null,
    }
  }  

  getAllBeers = async () => {
    const allBeers = await fetchAllBeers();
    console.log(allBeers)
    this.setState({
      beers: allBeers,
    })
  }
  
  render(){
    const beers = this.state.beers;
    return (
      <div className="seartch-page">
        <h3 className="title-seartch">Find Beers</h3>
        <h4>Filter: </h4>
        <div className="filter-select">
          <select className="option">
            <option>--Alcohol volume--</option>
            <option>less 4,5 %</option>
            <option>more 4,5 %</option>
          </select>
          <select className="option">
            <option>--IBU--</option>
            <option>less 60</option>
            <option>more 60</option>
          </select>
        </div>
        <ButtonFetchBeers click={this.getAllBeers} />
        {beers ? <BeersList beers={beers} /> : beers}
      </div>
    )
  }
}

export default SeartchBeersComponent;