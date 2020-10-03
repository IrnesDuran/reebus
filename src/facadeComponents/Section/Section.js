import React from 'react';
import Unit from '../Unit/Unit';
import './Section.styles.scss';

const Section = props => {
  const { sectionId } = props;
  //console.log(props);
  return (
    <div className="section">
      {props.floors.map(unit => (
        <Unit unit={unit} sectionId={sectionId} key={unit} />
      ))}
    </div>
  );
};

export default Section;
