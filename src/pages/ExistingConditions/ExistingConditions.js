import React from 'react';
import NavigationButtons from '../../components/NavigationButtons/NavigationButtons';
import './ExistingConditions.styles.scss';
import Input from '../../components/Input/Input';
import RadioButtons from '../../components/RadioButtons/RadioButtons';
import Colors from '../../constants/Colors';
import YearPicker from '../../components/YearPicker/YearPicker';
import DropdownIcon from '../../assets/images/dropdown.svg';

import FrontStairIcon from '../../iconComponents/FrontStairIcon/FrontStairIcon';
import InteriorStairIcon from '../../iconComponents/InteriorStairIcon/InteriorStairIcon';

import {
  selectPanelsNum,
  checkItem,
  uncheckItem,
} from '../../redux/building/building.actions';

import { useSelector, useDispatch } from 'react-redux';

const ExistingConditions = props => {
  const building = useSelector(state => state.building);
  const dispatch = useDispatch();

  return (
    <div className="content-container column">
      <div className="captions">
        <h2>Existing building conditions</h2>
        <h4 className="heading-4">
          {building.buildingName ? building.buildingName : 'Building Name'}
        </h4>
      </div>
      <div className="pages-data-content">
        <YearPicker text="Building year of completion: " />
        <RadioButtons
          checkedHandler={building.isRenovated}
          optOne="No"
          optTwo="Yes"
          setChecked={() => dispatch(checkItem('isRenovated'))}
          setUnchecked={() => dispatch(uncheckItem('isRenovated'))}
          title="Has the building been renovated?"
        />
        <RadioButtons
          checkedHandler={building.isInsulated}
          optOne="No"
          optTwo="Yes"
          setChecked={() => dispatch(checkItem('isInsulated'))}
          setUnchecked={() => dispatch(uncheckItem('isInsulated'))}
          title="Was insulation added to the walls?"
        />

        <Input
          inputtype="select"
          type="select"
          name="completion-date"
          label="Enter the insulation thickness 
         value (mm): "
          icon={
            //additionally rendered icon inside input field
            <div className="dropdown-icon-container">
              <img
                src={DropdownIcon}
                alt="dropdown"
                className="dropdown-icon"
              />
            </div>
          }
          onChange={e =>
            dispatch(
              selectPanelsNum('insulationThickness', parseInt(e.target.value))
            )
          }
          disabled={!building.isInsulated}
        >
          <option default value="none" hidden>
            {building.insulationThickness}
          </option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="110">110</option>
          <option value="1200">120</option>
        </Input>
        <RadioButtons
          checkedHandler={building.isAccessible}
          optOne="Low"
          optTwo="Adequate"
          setChecked={() => dispatch(checkItem('isAccessible'))}
          setUnchecked={() => dispatch(uncheckItem('isAccessible'))}
          title="What is the building accessibility 
        level?"
        />
        <RadioButtons
          checkedHandler={building.stairway} //two options so bool is used to determine choice
          optOne="Front Stairway"
          optTwo="Interior Stairway"
          setChecked={() => dispatch(checkItem('stairway'))}
          setUnchecked={() => dispatch(uncheckItem('stairway'))}
          title="Choose the type of stairway"
          iconOne={
            <FrontStairIcon
              className="stairs-button"
              fill={building.stairway ? Colors.disabled : Colors.main}
            />
          }
          iconTwo={
            <InteriorStairIcon
              className="stairs-button"
              fill={building.stairway ? Colors.main : Colors.disabled}
            />
          }
        />
      </div>
      <NavigationButtons
        history={props.history}
        navigateto="/existing-building-geometry"
      />
    </div>
  );
};

export default ExistingConditions;
