import React, { PureComponent } from 'react'
import './styles.css';

class AllBeersComponent extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      volumeValue: '',
      valueUnit: '',
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
      const { volume } = data[0]
      this.setState(state =>({
        name,
        description: data[0].description,
        volumeValue: volume.value,
      }))
      
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <button onClick={this.allBeers}></button>
        <p>{this.state.name}</p>
        <p>{this.state.description}</p>
        <p>{this.state.volumeValue}</p>
      </div>
    )
  }
  
}

export default AllBeersComponent;