import { Map } from 'immutable'
import { EDIT_TARGET } from '../actions'

const target = (state={}, action) => {
    switch (action.type) {
        case EDIT_TARGET:
            return state.merge(Map(action.target))
        default:
            return state
    }
}

export default target
