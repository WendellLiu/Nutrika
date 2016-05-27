import { fromJS, List } from 'immutable'
import { TOGGLE_PIN, INCREASE_PINNED_AMOUNT, RECEIVE_NUTRITION, DECREASE_PINNED_AMOUNT } from '../actions'


const searchResult = (state, action) => {
  switch (action.type) {
    case TOGGLE_PIN:
      if(state.get('id') !== action.id){
        return state
      }
      return state.set('pinned', !state.get('pinned'))
    default:
      return state

  }
}

const searchResults = (state=List([]), action) => {
  switch (action.type) {
    case TOGGLE_PIN:
      return state.map(ele => searchResult(ele, action))
    case RECEIVE_NUTRITION:
      return fromJS(action.json)
    default:
      return state
  }
}

export default searchResults
