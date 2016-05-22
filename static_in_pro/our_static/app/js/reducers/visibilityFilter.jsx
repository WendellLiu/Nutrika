import {Map, List} from 'immutable'

const initState = Map({
    keyword: '',
    filter_no_unit: true,
    categories: List([])
})

const visibilityFilter = (state = initState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEYWORD':
            return state.set('keyword', action.keyword)

        case 'EDIT_CATEGORY':
            return state.set('categories', List(action.categories))
        case 'FILTER_NO_UNIT':
            return state.set('filter_no_unit', !state.get('filter_no_unit'))
        default:
            return state

    }
}

export default visibilityFilter
