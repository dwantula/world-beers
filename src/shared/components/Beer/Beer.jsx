import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Beer({
  food,
  brewed,
  tagline,
  ebc,
  name,
  abv,
  description,
  img,
  ibu,
}) {
  return (
    <div className="beer-card">
      <div className="beer-img">
        <p>
          {img ? (
            <img className="img" src={img} alt="beer" />
          ) : (
            <span className="no-photo">No photo</span>
          )}
        </p>
      </div>
      <div className="beer-text">
        <p className="text-beer">
          <strong>Beers name: </strong>
          {name}
        </p>
        <p>
          {tagline && (
            <span className="text-beer">
              <strong>Tagline: </strong>
              {tagline}
            </span>
          )}
        </p>
        <p>
          {brewed && (
            <span className="text-beer">
              <strong>First brewed: </strong>
              {brewed}
            </span>
          )}
        </p>
        <p>
          {!!food.length && (
            <span className="text-beer">
              <strong>Food: </strong>
              {food}
            </span>
          )}
        </p>
        <p className="text-beer">
          <strong>ABV: </strong>
          {abv}%
        </p>
        <p className="text-beer">
          <strong>IBU: </strong>
          {ibu}
        </p>
        <p>
          {ebc && (
            <span className="text-beer">
              <strong>EBC: </strong>
              {ebc}
            </span>
          )}
        </p>
        <p className="text-beer">
          <strong>Description: </strong>
          {description}
        </p>
      </div>
    </div>
  );
}

Beer.propTypes = {
  food: PropTypes.arrayOf(PropTypes.string),
  brewed: PropTypes.string,
  tagline: PropTypes.string,
  ebc: PropTypes.number,
  name: PropTypes.string.isRequired,
  abv: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  ibu: PropTypes.number,
};

Beer.defaultProps = {
  food: [],
  brewed: '',
  tagline: '',
  ebc: undefined,
  img: '',
  ibu: undefined,
};
export default Beer;
