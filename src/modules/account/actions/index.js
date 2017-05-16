import axios from 'axios';
import * as constants from '../../../config/constants';
import * as types from './types';

export function setLoading(loading) {
  return {
    type: types.SET_LOADING,
    payload: !!loading,
  };
}

export function loginAccount(params) {
  const request = axios.post(`${constants.SERVER_URL}/accounts/login`, params);
  return {
    type: types.LOGIN_ACCOUNT,
    payload: request,
  };
}

export function logoutAccount(params) {
  /*
  const accountInfo = JSON.parse(sessionStorage.getItem('accountInfo') || '{}');
  const request = axios.get(`${constants.SERVER_URL}/accounts/logout`, {
    params: { Authorization: `Bearer ${accountInfo.token}` },
  });

  */

  sessionStorage.setItem('accountInfo', JSON.stringify({}));
  return {
    type: types.LOGOUT_ACCOUNT,
    payload: {},
  };
}

export function registerAccount(params) {
  const request = axios.post(`${constants.SERVER_URL}/accounts/register`, params);
  return {
    type: types.REGISTER_ACCOUNT,
    payload: request,
  };
}

