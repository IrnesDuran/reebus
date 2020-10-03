import React from 'react';
import NavigationButtons from '../../components/NavigationButtons/NavigationButtons';
import Input from '../../components/Input/Input';
import './BuildingData.styles.scss';
import LocationPin from '../../assets/images/pin.svg';

import { useSelector, useDispatch } from 'react-redux';

import {
  setBuildingName,
  setBuildingLocation,
} from '../../redux/building/building.actions'; //redux action

const BuildingData = props => {
  const building = useSelector(state => state.building);
  const dispatch = useDispatch();

  const onNameChange = e => {
    dispatch(setBuildingName(e));
  };

  const onLocationChange = e => {
    dispatch(setBuildingLocation(e));
  };

  return (
    <div className="content-container column">
      <h2>Building data</h2>

      <div className="pages-data-content">
        <Input
          type="text"
          name="building-name"
          label="Building association name: "
          value={building.buildingName}
          onChange={e => onNameChange(e.target.value)}
        />

        <Input
          type="text"
          name="building-location"
          label="Building location: "
          value={building.buildingLocation}
          onChange={e => onLocationChange(e.target.value)}
          icon={<img src={LocationPin} alt="pin" className="loc-pin" />} //additionally rendered icon inside input field
        />
      </div>

      <NavigationButtons
        history={props.history}
        navigateto="/existing-building-conditions"
      />
    </div>
  );
};

export default BuildingData;
