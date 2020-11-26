import React from 'react';
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

export default SelectComponents;