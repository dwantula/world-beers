import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const InputComponent = ({ className, placeholder, value, type, name, onChange }) => {
  return (

    <input
      className={className}
      placeholder={placeholder}
      value={value}
      name={name}
      type={type}
      onChange={onChange}>
    </input>
  );
}

InputComponent.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default InputComponent;