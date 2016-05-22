import { Map } from 'immutable'

const initState = Map({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0
})

const target = (state=initState, action) => {
    switch (action.type) {
        case 'EDIT_TARGET':
            return state.merge(Map(action.target))
        default:
            return state
    }
}

export default target
