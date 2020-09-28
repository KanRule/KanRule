import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 28,
};

const Logo = ({ className, size }) => (
  <span className={className}>
    <svg
      width={size}
      height={size}
      style={{ borderRadius: 3 }}
      viewBox="0 0 128 128"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="white" />
    </svg>
  </span>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
