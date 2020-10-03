import { buildingActionTypes } from './building.types';

export const clearUnits = () => ({
  type: buildingActionTypes.RESET_BUILDING,
});

export const setBuildingName = text => ({
  type: buildingActionTypes.SET_BUILDING_NAME,
  payload: text,
});

export const setBuildingLocation = text => ({
  type: buildingActionTypes.SET_BUILDING_LOCATION,
  payload: text,
});

export const incrament = text => ({
  type: buildingActionTypes.INCRAMENT,
  payload: text,
});

export const decrament = text => ({
  type: buildingActionTypes.DECRAMENT,
  payload: text,
});

export const selectPanelsNum = (text, value) => ({
  type: buildingActionTypes.SELECT_PANELS_NUM,
  text: text,
  value: value,
});

export const setYear = date => ({
  type: buildingActionTypes.SET_YEAR,
  payload: date,
});

export const checkItem = item => ({
  type: buildingActionTypes.CHECK_ITEM,
  payload: item,
});

export const uncheckItem = item => ({
  type: buildingActionTypes.UNCHECK_ITEM,
  payload: item,
});

export const setaccessibility = () => ({
  type: buildingActionTypes.SET_ACCESSIBILITY,
});

export const setStairway = () => ({
  type: buildingActionTypes.SET_STAIRWAY,
});
