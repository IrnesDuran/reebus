import React from 'react';
import './SideNav.styles.scss';
import BulletPoint from '../BulletPoint/BulletPoint';

const SideNav = props => {
  const location = props.location.pathname;

  //used to compare props.history.location in BulletPoint.js and conditionaly render className
  const dynamicValue = param => {
    switch (param) {
      case '/existing-building-conditions':
        return '2';
      case '/existing-building-geometry':
        return '3';
      case '/facade':
        return '4';
      case '/overview':
        return '5';
      case '/checkout':
        return '6';
      default:
        return '1';
    }
  };

  return (
    <div>
      {(props.location.pathname === '/Login' ||
        props.location.pathname === '/' ||
        props.location.pathname === '/login') === false && (
        <div className="sidenav-container">
          <BulletPoint
            location={location}
            rendText="1"
            dynamicValue={dynamicValue(location)}
          >
            Building data
          </BulletPoint>
          <BulletPoint
            location={location}
            rendText="2"
            dynamicValue={dynamicValue(location)}
          >
            Existing building conditions
          </BulletPoint>
          <BulletPoint
            location={location}
            rendText="3"
            dynamicValue={dynamicValue(location)}
          >
            Existing building geometry
          </BulletPoint>
          <BulletPoint
            location={location}
            rendText="4"
            dynamicValue={dynamicValue(location)}
          >
            New facade configuration/ Performance
          </BulletPoint>
          <BulletPoint
            location={location}
            rendText="5"
            dynamicValue={dynamicValue(location)}
          >
            Scenario Overview
          </BulletPoint>
          <BulletPoint
            location={location}
            rendText="6"
            dynamicValue={dynamicValue(location)}
          >
            Save project
          </BulletPoint>
        </div>
      )}
    </div>
  );
};

export default SideNav;
