import React, { useState } from 'react';
import Heading from '../../shared/components/Heading/Heading';
import Button from '../../shared/components/Button/Button';
import './styles.scss';

const WorldBeersComponent = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [<img className="image" alt="beer" src="images/beer.jpg"></img>, <img className="image" alt="beer" src="images/beers.jpg"></img>, <img className="image" alt="beer" src="images/beers2.jpg"></img>]

  const handleClick = () =>
    setImageIndex(imageIndex >= images.length - 1 ? 0 : imageIndex + 1)

  return (
    <div>
      <Heading
        className="title"
        text="World Beers" />
      <>
        {images[imageIndex]}
        <Button
          onClick={handleClick}
          text="Change Pictures"
          className="change-button" />
      </>
    </div>
  )
}

export default WorldBeersComponent;

