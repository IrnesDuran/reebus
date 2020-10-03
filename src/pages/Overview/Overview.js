import React from "react";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";

const Overview = (props) => {
  return (
    <div className='content-container'>
      <h2>Scenario Overview | Building Name</h2>
      <NavigationButtons history={props.history} navigateto='/checkout' />

      <div></div>
    </div>
  );
};

export default Overview;
