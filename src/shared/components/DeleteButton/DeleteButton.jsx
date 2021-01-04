import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

const DeleteButton = ({ onClick }) => {
  return (
    <FontAwesomeIcon icon={faTrash} className="delete-beer" onClick={onClick} />
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
