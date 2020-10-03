import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, inverted, buttonLoader, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
    {buttonLoader ? <div className="ButtonLoader">Loading...</div> : null}
  </button>
);

export default CustomButton;
