import { fromJS } from 'immutable'
let data = require('../../nutrition')

// add pinned status
data = data.map(ele => {
        ele.pinned = false
        ele.pinned_amount = 1
        return ele
})

let initState = fromJS(data)

const pinResult = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_PIN':
            if(state.get('id') !== action.id){
                return state
            }
            return state.set('pinned', !state.get('pinned'))
        case 'INCREASE_PINNED_AMOUNT':
            if(state.get('id') !== action.id){
                return state
            }
            return state.set('pinned_amount', state.get('pinned_amount')+1)
        case 'DECREASE_PINNED_AMOUNT':
            if(state.get('id') !== action.id){
                return state
            }
            return state.set('pinned_amount', state.get('pinned_amount')-1)
        default:
            return state

    }
}

const pinResults = (state = initState, action) => {
    switch (action.type) {
        case 'TOGGLE_PIN':
        case 'INCREASE_PINNED_AMOUNT':
        case 'DECREASE_PINNED_AMOUNT':
            return state.map(ele => pinResult(ele, action))
        default:
            return state
    }
}

export default pinResults
