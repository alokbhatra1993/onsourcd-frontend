// src/redux/actions.js
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET_USER_DATA = 'RESET_USER_DATA';
export const SET_EMAIL_VERFICATION = 'SET_EMAIL_VERFICATION';


export const setUserData = (userData) => ({
  // const userdate = {_id ,token, name , email}s
  type: SET_USER_DATA,
  payload: userData,
});

export const setVerificationEmailComplete = () => ({
  type: SET_EMAIL_VERFICATION,
  // payload: userData,
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});
