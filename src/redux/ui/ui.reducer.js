import { uiActionTypes } from './ui.types';

const initialState = {
  modalVisible: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case uiActionTypes.SHOW_MODAL:
      return { ...state, modalVisible: true };
    case uiActionTypes.HIDE_MODAL:
      return { ...state, modalVisible: false };
    default:
      return state;
  }
};

export default uiReducer;
