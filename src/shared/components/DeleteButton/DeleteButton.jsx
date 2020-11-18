import React from 'react';
import './styles.scss';

const DeleteButton = (props) => {
  return ( 
    <button className="delete-beer" onClick={props.onClick}>X</button>
   );
}
 
export default DeleteButton;