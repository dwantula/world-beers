import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SelectComponents = ({ className, options, name, value, onChange, placeholder }) => {
  return (
    <>
      <select className={className} name={name} value={value} onChange={onChange}>
        <option selected hidden disabled value="">{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

    </>
  );
};

SelectComponents.propTypes = {
  className: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
}

export default SelectComponents;