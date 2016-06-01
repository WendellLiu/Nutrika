import { fetchJSON } from '../utils'
import { fromJS } from 'immutable'


export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD'
export const setSearchKeyword = (keyword) => (
    {
        type: SET_SEARCH_KEYWORD,
        keyword
    }
)

export const EDIT_CATEGORY = 'EDIT_CATEGORY'
export const editCategory = (categories) => (
    {
        type: EDIT_CATEGORY,
        categories
    }
)

export const TOGGLE_PIN = 'TOGGLE_PIN'
const togglePin = (id) => (
    {
        type: TOGGLE_PIN,
        id
    }
)

export const PUSH_PIN = 'PUSH_PIN'
const pushPin = (item) => (
    {
        type: PUSH_PIN,
        item
    }
)

export const POP_PIN = 'POP_PIN'
const popPin = (id) => (
    {
        type: POP_PIN,
        id
    }
)

export const handlePin = (id) => {
  return (dispatch, getState) => {
    dispatch(togglePin(id))
    const state = getState()

    // check push or pop
    if(state.pinResults.filter(ele => ele.get('id') === id).isEmpty()){
      const item = getState().searchResults.filter(ele => ele.get('id') === id).get(0)
      dispatch(pushPin(item))
    }else{
      dispatch(popPin(id))
    }

  }
}

export const FILTER_NO_UNIT = 'FILTER_NO_UNIT'
export const filterNoUnit = () => (
    {
        type: FILTER_NO_UNIT
    }
)

export const INCREASE_PINNED_AMOUNT = 'INCREASE_PINNED_AMOUNT'
export const increasePinnedAmount = (id) => (
    {
        type: INCREASE_PINNED_AMOUNT,
        id
    }
)

export const DECREASE_PINNED_AMOUNT = 'DECREASE_PINNED_AMOUNT'
export const decreasePinnedAmount = (id) => (
    {
        type: DECREASE_PINNED_AMOUNT,
        id
    }
)

export const EDIT_TARGET = 'EDIT_TARGET'
export const editTarget = (target) => (
    {
        type: EDIT_TARGET,
        target
    }
)

export const RECEIVE_NUTRITION = 'RECEIVE_NUTRITION'
const receiveNutrition = (json) => (
  {
    type: RECEIVE_NUTRITION,
    json
  }
)

export const fetch_nutrition = (keyword=null) => {
  return (dispatch, getState) => {
    dispatch(setSearchKeyword(keyword))

    const pin_or_not = (item) => {
      return !getState().pinResults.filter(ele => ele.get('id') === item.id).isEmpty()
    }

    if(keyword){
      return fetchJSON('/api/nutrition' + '?name=' + keyword)
        .then(json => json.map(ele => {
          ele['pinned'] = pin_or_not(ele)
          ele['pinned_amount'] = 1
          return ele
        }))
        .then(json => fromJS(json))
        .then(json => dispatch(receiveNutrition(json)))
    }
  }
}

export const FETCH_NUTRITION_WITH_DELAY = 'FETCH_NUTRITION_WITH_DELAY'
export const fetch_nutrition_with_delay = (keyword) => (
  {
    type: FETCH_NUTRITION_WITH_DELAY,
    keyword
  }
)
