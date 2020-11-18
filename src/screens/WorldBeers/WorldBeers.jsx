import React, { PureComponent } from 'react';
import './styles.scss';

class WorldBeersComponent extends PureComponent {
  render() {
    return (
      <div>
        <h3 className="title">Worl Beers</h3>
        <img className="image" alt="beer" src="images/beer.jpg"></img>
      </div>
    )
  }
}

export default WorldBeersComponent;