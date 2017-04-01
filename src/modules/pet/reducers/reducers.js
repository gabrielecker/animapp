export function setLoading(state, action) {
  return state
    .set('isLoading', action.payload);
}

export function fetchPets(state, action) {
  return state
    .set('petsListPagination', action.payload.data.pagination)
    .set('petsList', action.payload.data.pets);
}