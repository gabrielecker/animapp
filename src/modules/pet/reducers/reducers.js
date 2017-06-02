export function setLoading(state, action) {
  return { ...state, isLoading: action.payload };
}

export function fetchPets(state, action) {
  const { pagination, pets } = action.payload.data;

  return { ...state,
    petsList: pets,
    petsListPagination: pagination,
  };
}

export function fetchCurrentPet(state, action) {
  return { ...state, currentPet: action.payload.data };
}

export function updateSearchFilters(state, action) {
  const searchFilters = Object.assign({}, state.searchFilters, action.payload);
  return { ...state, searchFilters };
}
