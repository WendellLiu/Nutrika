import { Map, List } from 'immutable'

export const getInitState =   {
  target: Map({
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0
  }),
  visibilityFilter: Map({
      keyword: '',
      filter_no_unit: true,
      categories: List([])
  }),
  searchResults: List([]),
  pinResults: List([])
}
