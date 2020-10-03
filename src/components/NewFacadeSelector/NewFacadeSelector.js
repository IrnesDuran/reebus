import React from 'react';
import './NewFacadeSelector.styles.scss';
import FacadeSelector from '../FacadeSelectorHOC/FacadeSelector';

const ExistingFacadeSelector = props => {
  return (
    <FacadeSelector>
      <div className="top-facade-content"></div>
      <div className="bottom-facade-content">
        <h4>Choose style package</h4>
      </div>
    </FacadeSelector>
  );
};

export default ExistingFacadeSelector;
