// src/redux/actions.js
export const SET_USER_DATA = 'SET_USER_DATA';
export const RESET_USER_DATA = 'RESET_USER_DATA';

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export const resetUserData = () => ({
  type: RESET_USER_DATA,
});
