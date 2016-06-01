import { PUSH_PIN, POP_PIN, INCREASE_PINNED_AMOUNT, DECREASE_PINNED_AMOUNT } from '../actions'
import { List } from 'immutable'



const pinResult = (state, action) => {
  switch (action.type) {
    case INCREASE_PINNED_AMOUNT:
      if(state.get('id') !== action.id){
        return state
      }
      return state.set('pinned_amount', state.get('pinned_amount')+1)
    case DECREASE_PINNED_AMOUNT:
      if(state.get('id') !== action.id){
        return state
      }
      return state.set('pinned_amount', state.get('pinned_amount')-1)
    default:
      return state

  }
}

const pinResults = (state=List([]), action) => {
  switch (action.type) {
    case PUSH_PIN:
      return state.push(action.item)
    case POP_PIN:
      return state.filter(ele => ele.get('id') !== action.id)
    case INCREASE_PINNED_AMOUNT:
    case DECREASE_PINNED_AMOUNT:
      return state.map(ele => pinResult(ele, action))
    default:
      return state
  }
}

export default pinResults
