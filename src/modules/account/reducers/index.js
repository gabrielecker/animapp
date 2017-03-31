import Immutable from 'immutable';
import * as types from './../actions/types';
import * as home from './reducers';


const initialstate = Immutable.fromJS({
  classesList: [],
  isClassesLoading: false,
});

export default function reducer(state = initialstate, action = {}) {
  switch (action.type) {
    case types.FETCH_CLASSES:
      return home.fetchClasses(state, action);
    default:
      return state;
  }
}
