// src/redux/reducer.js
import { SET_USER_DATA, RESET_USER_DATA } from './actions';

const initialState = {
  id: null,
  name: '',
  email: '',
  phone: '',
  isVerifiedEmail: false,
  isVerifiedPhone: false,
  token: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log("SE USER DATA",action)
      return {
        ...state,
        ...action.payload,
      };
    case RESET_USER_DATA:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
