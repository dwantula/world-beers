import React from 'react';
import PropTypes from 'prop-types';

export const H2 = 'h2';
export const H3 = 'h3';
export const H4 = 'h4';

const createHeading = (type, classname, text) => {
  switch (type) {
    case H4:
      return <h4 className={classname}>{text}</h4>;
    case H3:
      return <h3 className={classname}>{text}</h3>;
    case H2:
      return <h2 className={classname}>{text}</h2>;
    default:
      return <h1 className={classname}>{text}</h1>;
  }
};

function Heading({ type, className, text }) {
  return createHeading(type, className, text);
}

Heading.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Heading;
