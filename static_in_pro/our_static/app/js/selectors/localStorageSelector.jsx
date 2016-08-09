const localStorageSelector = (state) => (
  {
    target: state.target,
    visibilityFilter: state.visibilityFilter,
    searchResults: state.searchResults,
    pinResults: state.pinResults
  }
)

export default localStorageSelector
