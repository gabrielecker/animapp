export function setLoading(state, action) {
  return { ...state, isLoading: action.payload };
}

export function loginAccount(state, action) {
  sessionStorage.setItem('accountInfo', JSON.stringify(action.payload.data));
  return { ...state, accountInfo: action.payload.data };
}

export function logoutAccount(state, action) {
  sessionStorage.removeItem('accountInfo');
  return {...state, accountInfo: {}};
}

export function registerAccount(state, action) {
  return state;
}
