import './styles.scss';
import PropTypes from 'prop-types';
import React from 'react';

function Button({ className, type = 'button', onClick, text }) {
  return (
    <button
      className={className}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Button.defaultProps = {
  className: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
