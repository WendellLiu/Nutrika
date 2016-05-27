import { PUSH_POP_PIN, INCREASE_PINNED_AMOUNT, DECREASE_PINNED_AMOUNT } from '../actions'
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
    case PUSH_POP_PIN:
      const item_id = action.item.get('id')
      if(state.filter(ele => ele.get('id') === item_id).isEmpty()){
        return state.push(action.item)
      }
      return state.filter(ele => ele.get('id') !== item_id)
    case INCREASE_PINNED_AMOUNT:
    case DECREASE_PINNED_AMOUNT:
      return state.map(ele => pinResult(ele, action))
    default:
      return state
  }
}

export default pinResults
