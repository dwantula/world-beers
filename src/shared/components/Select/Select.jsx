import React, { PureComponent } from 'react';
import './styles.scss';

const alcohollVolumeOptions = [
  {
    label: "more than 4,5%",
    value: "abv_gt=4.5",
  },
  {
    label: "less than 4,5%",
    value: "abv_lt=4.5",
  },
]
const ibuOptions = [
  {
    label: "less than 60",
    value: "ibu_lt=60",
  },
  {
    label: "more than 60",
    value: "ibu_gt=60",
  },
]
const ebcOptions = [
  {
    label: "less than 60",
    value: "ebc_lt=60",
  },
  {
    label: "more than 60",
    value: "ebc_gt=60",
  },
]
const SelectComponents = ({ alcohollVolumeOptions, ibuOptions, ebcOptions }) => {
  return (
    <div className="filter-select">
      <select value={ } >
        {alcohollVolumeOptions.map(({ value, label }) => (
          <option key={value} value={value} >{label}</option>
        ))}
      </select>

    </div>
  );
}


export default SelectComponents;