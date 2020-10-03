import React from 'react';
import './BulletPoint.styles.scss';

const BulletPoint = props => {
  const dynamicValue = props.dynamicValue; // conditionally defined integer based on props.history.location in SideNav.js
  const rendText = props.rendText; //manualy entered markup integer throug props

  //determines classes fro bullet points rendering (active, inactive)...
  const renderValue =
    dynamicValue >= rendText + 1 ? (
      <div className="bullet">&#10004;</div>
    ) : (
      <div
        className={`bullet ${
          dynamicValue === rendText
            ? 'active'
            : dynamicValue <= rendText
            ? 'inverted'
            : ''
        }`}
      >
        {rendText}
      </div>
    );

  return (
    <div
      className={`bp-container ${
        dynamicValue <= rendText - 1 ? 'inactive' : ''
      }`}
    >
      {renderValue}
      {rendText > 1 && (
        <div
          className={`bullet-connection-line ${
            dynamicValue <= rendText - 1 ? 'inactive' : ''
          }`}
        ></div>
      )}
      <div className="bullet-caption">{props.children}</div>
    </div>
  );
};

export default BulletPoint;
