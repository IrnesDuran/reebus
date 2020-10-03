import React from 'react'

const FileIcon = props => (
  <div {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.325"
      height="24.693"
      viewBox="0 0 27.325 24.693"
    >
      <path
        d="M29.325,25.56a2.633,2.633,0,0,1-2.633,2.633H5.633A2.633,2.633,0,0,1,3,25.56V7.133A2.633,2.633,0,0,1,5.633,4.5h6.581l2.633,3.949H26.693a2.633,2.633,0,0,1,2.633,2.633Z"
        transform="translate(-2.5 -4)"
        fill="none"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      />
    </svg>
  </div>
)

export default FileIcon
