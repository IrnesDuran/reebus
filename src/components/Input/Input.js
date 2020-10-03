import React from 'react';
import './Input.styles.scss';

const Input = props => {
  let inputElement = null;

  switch (props.inputtype) {
    case 'input':
      inputElement = <input className="InputElement" {...props} />;
      break;
    case 'textarea':
      inputElement = <textarea className="InputElement" {...props} />;
      break;
    case 'select':
      inputElement = (
        <select className="InputElement select" {...props}>
          {props.children}
        </select>
      );
      break;
    default:
      inputElement = <input className="InputElement" {...props} />;
  }

  return (
    <div className="Input">
      <label className={props.disabled ? 'Label inactive' : 'Label'}>
        {props.label}
      </label>
      <div>
        {props.icon}
        {inputElement}
      </div>
    </div>
  );
};

export default Input;
