import React, { PureComponent } from 'react';
import './styles.scss';

class WorldBeersComponent extends PureComponent {
  render() {
    return (
      <img className="image" alt="beer" src="images/beer.jpg"></img>
    )
  }
}

export default WorldBeersComponent;