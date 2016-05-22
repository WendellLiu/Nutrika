import { fromJS } from 'immutable'
import { RECEIVE_ALL_NUTRITION } from '../actions'


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

const pinResults = (state={}, action) => {
  switch (action.type) {
    case 'TOGGLE_PIN':
    case 'INCREASE_PINNED_AMOUNT':
    case 'DECREASE_PINNED_AMOUNT':
      return state.map(ele => pinResult(ele, action))
    case RECEIVE_ALL_NUTRITION:
      return fromJS(action.json)
    default:
      return state
  }
}

export default pinResults
