import {Map, List} from 'immutable'
import { SET_SEARCH_KEYWORD, EDIT_CATEGORY, FILTER_NO_UNIT } from '../actions'

const visibilityFilter = (state={}, action) => {
    switch (action.type) {
        case SET_SEARCH_KEYWORD:
            return state.set('keyword', action.keyword)

        case EDIT_CATEGORY:
            return state.set('categories', List(action.categories))
        case FILTER_NO_UNIT:
            return state.set('filter_no_unit', !state.get('filter_no_unit'))
        default:
            return state

    }
}

export default visibilityFilter
