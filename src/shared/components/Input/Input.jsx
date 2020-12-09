import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const InputComponent = ({ value, register, className, placeholder, type, name, onChange }) => {

  return (
    <input
      className={className}
      placeholder={placeholder}
      name={name}
      ref={register}
      type={type}
      onChange={onChange}
      value={value}>
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