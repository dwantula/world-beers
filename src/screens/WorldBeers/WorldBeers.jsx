import React, { PureComponent } from 'react';
import './styles.scss';

class WorldBeersComponent extends PureComponent {
  render() {
    return (
      <div className="card">
        <img className="image" alt="beer" src="images/beer.jpg"></img>
      </div>
    )
  }
}

export default WorldBeersComponent