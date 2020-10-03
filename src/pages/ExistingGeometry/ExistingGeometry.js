import React from "react";
import "./ExistingGeometry.styles.scss";
import NavigationButtons from "../../components/NavigationButtons/NavigationButtons";
import ExistingFacadeSelector from "../../components/ExistingFacadeSelector/ExistingFacadeSelector";
import { useSelector } from "react-redux";

import PreviewComponent from "../../components/PreviewComponent/PreviewComponent";

import ModalContent from "../../components/ModalContent/ModalContent";

import Facade from "../../facadeComponents/Facade/Facade";

const ExistingGeometry = (props) => {
  const building = useSelector((state) => state.building);

  //generating ids for facade elements
  const floors = [];
  const entrances = [];
  for (let i = 1; i <= building.floors; i++) {
    floors.push(i);
  }
  for (let i = 1; i <= building.entrances; i++) {
    entrances.push(i);
  }

  return (
    <div className='content-container column'>
      <div className='captions'>
        <h2>Define existing building geometry</h2>
        <h4 className='heading-4'>
          {building.buildingName ? building.buildingName : "Building Name"}
        </h4>
      </div>
      <div className='row'>
        <div className='left'>
          <ExistingFacadeSelector />
        </div>
        <div className='right'>
          <PreviewComponent>
            <Facade entrances={entrances} floors={floors} />
          </PreviewComponent>
        </div>
      </div>

      <NavigationButtons history={props.history} navigateto='/facade' />

      <ModalContent />
    </div>
  );
};

export default ExistingGeometry;
