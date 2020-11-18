import React from 'react';
import './styles.scss';

const DeleteButton = ({ onClick }) => {
  
  return ( 
    <button className="delete-beer" onClick={onClick}>X</button>
   );
}
 
export default DeleteButton;