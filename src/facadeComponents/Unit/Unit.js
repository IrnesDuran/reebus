import React from "react";
import "./Unit.styles.scss";
import { useSelector } from "react-redux";

import Panel from "../Panel/Panel";

const Unit = (props) => {
  const unitid = parseInt(`${props.unit}${props.sectionId}`);
  const facade = useSelector((state) => state.facade);

  const facadeToDisplay = useSelector(
    (state) => state.facade[facade.beingEdited]
  );

  const { units } = facadeToDisplay;

  //WIDTH SHOULD BE EITHER SORTED OR MOVED O CASSETTE DEFINITION

  const Cassettes = units[0].panels.map((panel) => {
    // const width = panel.width;
    // const dynWidth = width / 3 + 'px';
    // console.log(dynWidth);
    return (
      <Panel
        id={panel.id}
        key={panel.id}
        unitid={unitid}
        className='panel-cassette'
        cassette={panel.name}
        // style={{ width: `${dynWidth}` }}
      />
    );
  });

  // const cassettes = [];
  // for (let i = 1; i <= panels; i++) {
  //   cassettes.push(
  //     <Panel id={i} key={i} unitId={unitId} className="panel-cassette" />
  //   );
  // }

  // const cassettes = [];
  // for (let i = 1; i <= panels; i++) {
  //   cassettes.push(
  //     <Panel id={i} key={i} unitId={unitId} className="panel-cassette" />
  //   );
  // }

  // const cassettes = [
  //   <Panel
  //     cassette="4500A"
  //     unitId={unitId}
  //     id={1}
  //     className="panel-cassette"
  //   />,
  // ];

  return (
    <div
      className='unit'
      onClick={() => {
        console.log(unitid);
      }}
    >
      {Cassettes}
    </div>
  );
};

export default Unit;
