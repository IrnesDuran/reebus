import { authActionTypes } from './auth.types';

const initialState = {
  userName: '',
  userId: '',
  token: '',
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN:
      return {
        ...state,
        userName: action.userName,
        userId: action.userId,
        token: action.token,
        isAuthenticated: true,
      };
    case authActionTypes.LOGOUT:
      return {
        ...state,
        userName: '',
        userId: '',
        token: '',
        isAuthenticated: false,
      };
    case authActionTypes.AUTHENTICATE:
      return {
        userName: action.userName,
        userId: action.userId,
        token: action.token,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default authReducer;
