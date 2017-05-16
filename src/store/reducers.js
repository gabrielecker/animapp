import { combineReducers } from 'redux';
import home from './../modules/home/reducers/index';
import pet from './../modules/pet/reducers/index';
import account from './../modules/account/reducers/index';

export default combineReducers({
  home,
  pet,
  account,
});
