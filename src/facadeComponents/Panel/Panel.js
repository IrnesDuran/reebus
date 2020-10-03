import React from "react";
import "./Panel.styles.scss";
//import { useSelector } from 'react-redux';
import Cassette from "../Cassette/Cassette";

const Panel = (props) => {
  const { unitid } = props;
  const panelId = parseInt(`${unitid}${props.id}`);
  //const facade = useSelector(state => state.facade);
  //const panels = facade[facade.beingEdited].panels;
  return (
    <div
      className='panel'
      onClick={() => {}}
      //style={{ height: '75px', width: '60px' }}
    >
      <Cassette {...props} cassette={props.cassette} />
      <span className='panel-text'>{panelId}</span>
    </div>
  );
};
export default Panel;
