import React from 'react';
import './Incrament.styles.scss';

const Incrament = props => {
  return (
    <div className="incrament-container">
      <div className="Label">{props.title}</div>
      <div className="incrament">
        <div className="incrament-icon" onClick={props.decramentHandler}>
          -
        </div>
        <div className="incrament-content">{props.value}</div>
        <div className="incrament-icon" onClick={props.incramentHandler}>
          +
        </div>
      </div>
    </div>
  );
};

export default Incrament;
