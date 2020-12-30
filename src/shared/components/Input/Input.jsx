import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const InputComponent = ({
  register,
  className,
  placeholder,
  type,
  name,
  onChange,
}) => (
  <input
    className={className}
    placeholder={placeholder}
    name={name}
    ref={register}
    type={type}
    onChange={onChange}
  />
);

InputComponent.propTypes = {
  register: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};

InputComponent.defaultProps = {
  register: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
};
export default InputComponent;
