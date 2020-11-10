import React, { PureComponent } from 'react';
import './styles.css';

class BeerOfTheDayComponent extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      abv:'',
      description: '',
      volumeValue: '',
      valueUnit: '',
      img: '',
    }
  }

  allBeers = () => {
    const API = 'https://api.punkapi.com/v2/beers/random'
    fetch(API)
    .then(response => {
      if (response.ok) {
        return response
      }
      throw Error('error')
    })
    .then(response => response.json())
    .then(data => {
      const name = data[0].name;
      const abv = data[0].abv;
      const img = data[0].image_url;
      const { volume } = data[0]
      this.setState(state =>({
        name,
        description: data[0].description,
        volumeValue: volume.value,
        abv,
        img,
      }))
      
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div className="beer-day">
        <h4 className="title-beer-day">Beer of the day</h4>
        <button className="button-choose" onClick={this.allBeers}>Choose a beer</button>
        <div className="list-info">
          <p> {this.state.name}</p>
          <p>{this.state.description}</p>
          <p>{this.state.volumeValue}</p>
          <p>{this.state.abv}</p>
          <p>{this.state.img}</p>
        </div>
      </div>
    )
  }
  
}

export default BeerOfTheDayComponent;