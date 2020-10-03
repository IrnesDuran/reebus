import React from 'react';
import './PreviewComponent.styles.scss';
import { useSelector } from 'react-redux';

const PreviewComponent = props => {
  const floors = useSelector(state => state.building.floors);
  const entrances = useSelector(state => state.building.entrances);
  return (
    <div className="preview-component">
      <div className="preview-header">
        <div className="axis">
          <span className="axis-span">
            <img
              src={require('../../assets/images/floors.svg')}
              alt="pin"
              className="floors-icon"
            />
            {floors}
          </span>
          stories
        </div>
        <div className="nav">
          <div className="nav-item">Full View</div>
          {/* <div className="nav-item">Section View</div> */}
          <div className="nav-item">Unit View</div>
        </div>
      </div>
      <div className="preview-content">
        <div className="vertical-line" />
        <div className="preview">{props.children}</div>
      </div>
      <div className="preview-footer">
        <div className="horizontal-line" />
        <div className="axis">
          <span className="axis-span">
            <img
              src={require('../../assets/images/entrances.svg')}
              alt="pin"
              className="floors-icon"
            />
            {entrances}
          </span>
          entrances
        </div>
      </div>
      <div className="preview-point" />
    </div>
  );
};
export default PreviewComponent;
