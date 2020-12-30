import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SelectComponents = ({
  className,
  options,
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <select
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option hidden disabled value="">
          {placeholder}
        </option>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SelectComponents.defaultProps = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SelectComponents;
