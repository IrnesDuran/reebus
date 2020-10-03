import React from "react";
import "./ExistingFacadeSelector.styles.scss";
import FacadeSelector from "../FacadeSelectorHOC/FacadeSelector";
import Incrament from "../Incrament/Incrament";

import Input from "../../components/Input/Input";
import DropdownIcon from "../../assets/images/dropdown.svg";
import SelectPanel from "../../components/SelectPanel/SelectPanel";

import { useSelector, useDispatch } from "react-redux";

//We use same incrament, decrament and select actions for all items, only use State slice item as param function call (floors, entrances, panels,insulationThickness... )
import { incrament, decrament } from "../../redux/building/building.actions";
import {
  selectPanelsNum,
  initiateFacade,
} from "../../redux/facade/facade.actions";

const ExistingFacadeSelector = (props) => {
  const building = useSelector((state) => state.building);
  const facades = useSelector((state) => state.facade);
  const editedFacade = facades.beingEdited;

  const dispatch = useDispatch();

  // const incramentHandle = useCallback(
  //   text => {
  //     dispatch(incrament(text));
  //     dispatch(initiateFacade());
  //   },
  //   [dispatch, incrament]
  // );
  // const decramentHandle = useCallback(
  //   text => {
  //     dispatch(decrament(text));
  //     dispatch(initiateFacade());
  //   },
  //   [dispatch, decrament]
  // );

  return (
    <FacadeSelector>
      <div className='top-facade-content'>
        <Incrament
          title='Number of floors: '
          value={building.floors}
          incramentHandler={() => {
            dispatch(incrament("floors"));
            dispatch(initiateFacade());
          }}
          decramentHandler={() => {
            dispatch(decrament("floors"));
            dispatch(initiateFacade());
          }}
        />
        <Incrament
          title='Number of entrances: '
          value={building.entrances}
          incramentHandler={() => {
            dispatch(incrament("entrances"));
            dispatch(initiateFacade());
          }}
          decramentHandler={() => {
            dispatch(decrament("entrances"));
            dispatch(initiateFacade());
          }}
        />
      </div>
      <div className='bottom-facade-content'>
        <h4>Define exiting ground level unit</h4>
        <Input
          inputtype='select'
          type='select'
          name='completion-date'
          label='Number of panels: '
          //additionally rendered icon inside input field
          icon={
            <div className='dropdown-icon-container'>
              <img
                src={DropdownIcon}
                alt='dropdown'
                className='dropdown-icon'
              />
            </div>
          }
          value={facades[editedFacade].panels}
          onChange={(e) => {
            dispatch(selectPanelsNum(parseInt(e.target.value)));
            dispatch(initiateFacade());
          }}
        >
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </Input>

        {/* Range= 1 is being used as a filter to select floorplan units only */}
        <SelectPanel range='1' />
        <h4>Define upper level unit</h4>
        {/* Range= 2 is being used as a filter to select all units above floorplan */}
        <SelectPanel range='2' />
      </div>
    </FacadeSelector>
  );
};

export default ExistingFacadeSelector;
