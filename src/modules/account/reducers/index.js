import * as types from './../actions/types';
import * as account from './reducers';

debugger;
const initialstate = {
  isLoading: false,
  accountInfo: JSON.parse(sessionStorage.getItem('accountInfo') || '{}'),
};

export default function reducer(state = initialstate, action = {}) {
  switch (action.type) {
    case types.SET_LOADING:
      return account.setLoading(state, action);
    case types.REGISTER_ACCOUNT:
      return account.registerAccount(state, action);
    case types.LOGIN_ACCOUNT:
      return account.loginAccount(state, action);
    case types.LOGOUT_ACCOUNT:
      return account.logoutAccount(state, action);
    default:
      return state;
  }
}
