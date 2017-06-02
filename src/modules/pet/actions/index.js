import axios from 'axios';
import * as constants from '../../../config/constants';
import * as types from './types';

export function setLoading(loading) {
  return {
    type: types.SET_LOADING,
    payload: !!loading,
  };
}

export function fetchPets(params = {}) {
  const request = axios.get(`${constants.SERVER_URL}/pets`, {
    params,
  });

  return {
    type: types.FETCH_PETS,
    payload: request,
  };
}

export function registerPet(params) {
  const request = axios.post(`${constants.SERVER_URL}/pets`, params, {
    headers: {
      authorization: sessionStorage.getItem('token'),
    },
  },
  );

  return {
    type: types.REGISTER_PET,
    payload: request,
  };
}

export function fetchCurrentPet(id) {
  const request = axios.get(`${constants.SERVER_URL}/pets/${id}`);

  return {
    type: types.FETCH_CURRENT_PET,
    payload: request,
  };
}

export function updateSearchFilters(params) {
  return {
    type: types.UPDATE_SEARCH_FILTERS,
    payload: params,
  };
}

