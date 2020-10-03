import React from 'react';
import './RadioButtons.styles.scss';

const RadioButtons = props => {
  /*
   * stairs group and stairs button classes are conditionally
   * rendered in order to change default radio buton styling (active and inactive)
   * to custom icons imported from FrontStairIcon.js and InteriorStairIcon
   * (stored in iconComponents folder)
   */

  return (
    <div className="radio-container">
      <div className="Label">{props.title}</div>
      <div className={props.iconOne ? 'stairs-group' : 'radio-group'}>
        {props.iconOne ? (
          <div className="radio-icon" onClick={props.setUnchecked}>
            {props.iconOne}
          </div>
        ) : (
          <div
            className={
              props.checkedHandler === false
                ? 'radio-button active'
                : 'radio-button'
            }
            onClick={props.setUnchecked}
          />
        )}
        <div
          className={
            props.checkedHandler === false
              ? 'radio-label active'
              : 'radio-label'
          }
        >
          {props.optOne}
        </div>
      </div>

      <div className={props.iconTwo ? 'stairs-group' : 'radio-group'}>
        {props.iconTwo ? (
          <div className="radio-icon" onClick={props.setChecked}>
            {props.iconTwo}
          </div>
        ) : (
          <div
            className={
              props.checkedHandler ? 'radio-button active' : 'radio-button'
            }
            onClick={props.setChecked}
          />
        )}
        <div
          className={
            props.checkedHandler ? 'radio-label active' : 'radio-label'
          }
        >
          {props.optTwo}
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;
