import React from 'react'

const ImageIcon = props => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.777"
      height="25.777"
      viewBox="0 0 25.777 25.777"
    >
      <g transform="translate(0.5 0.5)">
        <path
          d="M7.23,4.5H26.34a2.73,2.73,0,0,1,2.73,2.73V26.34a2.73,2.73,0,0,1-2.73,2.73H7.23A2.73,2.73,0,0,1,4.5,26.34V7.23A2.73,2.73,0,0,1,7.23,4.5Z"
          transform="translate(-4.5 -4.5)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          d="M14.449,12.474A1.974,1.974,0,1,1,12.474,10.5,1.974,1.974,0,0,1,14.449,12.474Z"
          transform="translate(-5.001 -5.001)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
        <path
          d="M29.438,21.581,22.582,15,7.5,29.479"
          transform="translate(-4.867 -4.909)"
          fill="none"
          stroke={props.fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </g>
    </svg>
  </div>
)

export default ImageIcon
