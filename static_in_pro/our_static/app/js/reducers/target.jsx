import { Map } from 'immutable'


const target = (state={}, action) => {
    switch (action.type) {
        case 'EDIT_TARGET':
            return state.merge(Map(action.target))
        default:
            return state
    }
}

export default target
