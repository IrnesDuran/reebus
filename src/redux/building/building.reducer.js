import { buildingActionTypes } from './building.types';

const initialState = {
  buildingName: '',
  buildingLocation: '',
  year: '',
  floors: 1,
  entrances: 1,
  insulationThickness: 'None',
  isRenovated: false,
  isInsulated: false,
  isAccessible: true,
  stairway: true,
};

const incrament = (state, action) => {
  return { ...state, [action.payload]: state[action.payload] + 1 };
};

const decrament = (state, action) => {
  const currentNum = state[action.payload];
  if (currentNum <= 1) {
    return { ...state, [action.payload]: state[action.payload] };
  }
  return { ...state, [action.payload]: state[action.payload] - 1 };
};

const selectNum = (state, action) => {
  return { ...state, [action.text]: action.value };
};

const buildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case buildingActionTypes.SET_BUILDING_NAME:
      return { ...state, buildingName: action.payload };
    case buildingActionTypes.SET_BUILDING_LOCATION:
      return { ...state, buildingLocation: action.payload };
    case buildingActionTypes.INCRAMENT:
      return incrament(state, action);
    case buildingActionTypes.DECRAMENT:
      return decrament(state, action);
    case buildingActionTypes.SET_YEAR:
      return { ...state, year: action.payload };
    case buildingActionTypes.SELECT_PANELS_NUM:
      return selectNum(state, action);
    case buildingActionTypes.CHECK_ITEM:
      return { ...state, [action.payload]: true };
    case buildingActionTypes.UNCHECK_ITEM:
      return { ...state, [action.payload]: false };
    default:
      return state;
  }
};

export default buildingReducer;
