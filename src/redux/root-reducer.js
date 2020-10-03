import { combineReducers } from 'redux';

import buildingReducer from './building/building.reducer';
import authReducer from './auth/auth.reducer';
import facadeReducer from './facade/facade.reducer';
import uiReducer from './ui/ui.reducer';

const rootReducer = combineReducers({
  building: buildingReducer,
  auth: authReducer,
  facade: facadeReducer,
  ui: uiReducer,
});

export default rootReducer;
