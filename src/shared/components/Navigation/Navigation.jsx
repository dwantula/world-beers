import React from 'react';
import './styles.css';

const NavigationComponent = ({ pages }) => (
  <nav>
    {pages.map(({ id, label }) => (
      <ul>
        <li key={id}>{label}</li>
      </ul>
    ))}
  </nav>
);

export default NavigationComponent;