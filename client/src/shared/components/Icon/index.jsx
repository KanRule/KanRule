import React from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './Styles';

const fontIconCodes = {
  [`bug`]: '🐞',
  [`stopwatch`]: '⏱',
  [`task`]: '☑',
  [`story`]: '📗',
  [`arrow-down`]: '↓',
  [`arrow-left-circle`]: '⬅',
  [`arrow-up`]: '↑',
  [`chevron-down`]: '🔽',
  [`chevron-left`]: '◀️',
  [`chevron-right`]: '▶️',
  [`chevron-up`]: '🔼',
  [`board`]: '⬒',
  [`help`]: '⍰',
  [`link`]: '🔗',
  [`menu`]: '🍔',
  [`more`]: '︙',
  [`attach`]: '📎',
  [`plus`]: '+',
  [`search`]: '🔍',
  [`issues`]: '!',
  [`settings`]: '⚙',
  [`close`]: '☒',
  [`feedback`]: '💯',
  [`trash`]: '🗑',
  [`github`]: '🐱',
  [`shipping`]: '🚚',
  [`component`]: '📦',
  [`reports`]: '📈',
  [`page`]: '📝',
  [`calendar`]: '🗓',
  [`arrow-left`]: '←',
  [`arrow-right`]: '→',
};

const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(fontIconCodes)).isRequired,
  size: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 16,
  left: 0,
  top: 0,
};

const Icon = ({ type, ...iconProps }) => (
  <StyledIcon {...iconProps} data-testid={`icon:${type}`} code={fontIconCodes[type]} />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
