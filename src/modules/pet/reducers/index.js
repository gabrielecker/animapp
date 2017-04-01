import Immutable from 'immutable';
import * as types from './../actions/types';
import * as pet from './reducers';

const initialstate = Immutable.fromJS({
  petsList: [],
  petsListPagionation: [1],
});

export default function reducer(state = initialstate, action = {}) {
  switch (action.type) {
    case types.SET_LOADING:
      return pet.setLoading(state, action);
    case types.FETCH_PETS:
      return pet.fetchPets(state, action);
    default:
      return state;
  }
}
