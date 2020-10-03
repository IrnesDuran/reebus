import React from "react";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import NewFacadeSelector from "../../components/NewFacadeSelector/NewFacadeSelector";
import { useSelector } from "react-redux";

import PreviewComponent from "../../components/PreviewComponent/PreviewComponent";
import Modal from "../../components/Modal/Modal";

const FacadeConfig = (props) => {
  const building = useSelector((state) => state.building);

  return (
    <div className='content-container column'>
      <div className='captions'>
        <h2>New facade configuration - Performance</h2>
        <h4 className='heading-4'>
          {building.buildingName ? building.buildingName : "Building Name"}
        </h4>
      </div>
      <div className='row'>
        <div className='left'>
          <NewFacadeSelector />
        </div>
        <div className='right'>
          <PreviewComponent />
        </div>
      </div>

      <NavigationButtons history={props.history} navigateto='/overview' />
      <Modal />
    </div>
  );
};

export default FacadeConfig;
