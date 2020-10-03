import React from 'react';

const FrontStairIcon = props => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="45"
      viewBox="0 0 54 45"
    >
      <g transform="translate(-549.5 -475)">
        <line
          x2="31"
          transform="translate(560.5 505.5)"
          fill="none"
          stroke={props.fill}
          strokeWidth="1"
        />
        <line
          x2="39"
          transform="translate(556.5 512.5)"
          fill="none"
          stroke={props.fill}
          strokeWidth="1"
        />
        <line
          x2="54"
          transform="translate(549.5 519.5)"
          fill="none"
          stroke={props.fill}
          strokeWidth="1"
        />
        <g
          transform="translate(565 475)"
          fill="none"
          stroke={props.fill}
          strokeWidth="1"
        >
          <rect width="22" height="25" stroke="none" />
          <rect x="0.5" y="0.5" width="21" height="24" fill="none" />
        </g>
        <g
          transform="translate(570 487)"
          fill="none"
          stroke={props.fill}
          strokeWidth="1"
        >
          <circle cx="2" cy="2" r="2" stroke="none" />
          <circle cx="2" cy="2" r="1.5" fill="none" />
        </g>
      </g>
    </svg>
  </div>
);

export default FrontStairIcon;
