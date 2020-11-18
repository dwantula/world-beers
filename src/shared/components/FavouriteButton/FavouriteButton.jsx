import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const FavouriteButton = (props) => {
  return ( 
    <FontAwesomeIcon 
      icon={faHeart}
      className="icon"
      onClick={props.onClick}
    />
  );
}
 
export default FavouriteButton;