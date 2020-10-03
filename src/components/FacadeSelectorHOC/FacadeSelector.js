import React from 'react';
import './FacadeSelector.styles.scss';
import FacadeNavbar from '../FacadeNavbar/FacadeNavbar';

const FacadeSelector = props => {
  return (
    <div className="facade-selector">
      <div className="scroll-ltr">
        <FacadeNavbar />
      </div>
      <div className="scroll-ltr">{props.children}</div>
    </div>
  );
};

export default FacadeSelector;
