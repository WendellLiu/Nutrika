import { fetchJSON } from '../utils'

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

export const PUSH_POP_PIN = 'PUSH_POP_PIN'
const pushPopPin = (item) => (
    {
        type: PUSH_POP_PIN,
        item
    }
)

export const handlePin = (id) => {
  return (dispatch, getState) => {
    dispatch(togglePin(id))

    const item = getState().searchResults.filter(ele => ele.get('id') === id).get(0)
    dispatch(pushPopPin(item))
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
  return dispatch => {
    dispatch(setSearchKeyword(keyword))

    if(keyword){
      return fetchJSON('/api/nutrition' + '?name=' + keyword)
        .then(json => json.map(ele => {
          ele['pinned'] = false
          ele['pinned_amount'] = 1
          return ele
        }))
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
