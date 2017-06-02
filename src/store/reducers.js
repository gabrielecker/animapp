import { combineReducers } from 'redux';
import pet from './../modules/pet/reducers/index';
import account from './../modules/account/reducers/index';

export default combineReducers({
  pet,
  account,
});
