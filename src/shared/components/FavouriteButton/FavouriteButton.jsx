import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const FavouriteButton = ({ onClick }) => {
  return (
    <FontAwesomeIcon
      icon={faHeart}
      className="icon"
      onClick={onClick}
    />
  );
};

FavouriteButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default FavouriteButton;