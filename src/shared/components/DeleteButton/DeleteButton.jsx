import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const DeleteButton = ({ onClick }) => {
  return (
    <button type="button" className="delete-beer" onClick={onClick}>
      X
    </button>
  );
};

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
