import axios from 'axios';

export function setLoading(state, action) {
  return { ...state, isLoading: action.payload };
}

export function loginAccount(state, action) {
  if (action.payload.error) return state;
  sessionStorage.setItem('token', action.payload.data.token);
  sessionStorage.setItem('accountInfo', JSON.stringify(action.payload.data));
  return { ...state, accountInfo: action.payload.data };
}

export function logoutAccount(state, action) {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('accountInfo');
  return { ...state, accountInfo: {} };
}

export function registerAccount(state, action) {
  return state;
}
