import React from 'react';

const Button = ({ name, disabled, onClick, className }) => (
  <button className={className}
    disabled = {disabled}
    onClick = {onClick}
  >{name}</button>
);

Button.propTypes = {
  disabled: React.PropTypes.bool,
  name: React.PropTypes.string,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string
};

export default Button;
