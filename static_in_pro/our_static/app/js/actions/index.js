import fetch from 'isomorphic-fetch'

export const setSearchKeyword = (keyword) => (
    {
        type: 'SET_SEARCH_KEYWORD',
        keyword
    }
)

export const editCatogory = (categories) => (
    {
        type: 'EDIT_CATEGORY',
        categories
    }
)

export const togglePin = (id) => (
    {
        type: 'TOGGLE_PIN',
        id
    }
)

export const filterNoUnit = () => (
    {
        type: 'FILTER_NO_UNIT'
    }
)

export const increasePinnedAmount = (id) => (
    {
        type: 'INCREASE_PINNED_AMOUNT',
        id
    }
)

export const decreasePinnedAmount = (id) => (
    {
        type: 'DECREASE_PINNED_AMOUNT',
        id
    }
)

export const editTarget = (target) => (
    {
        type: 'EDIT_TARGET',
        target
    }
)

export const RECEIVE_ALL_NUTRITION = 'RECEIVE_ALL_NUTRITION'
const receiveAllNutrition = (json) => (
  {
    type: RECEIVE_ALL_NUTRITION,
    json
  }
)

const fetch_all_nutrition = () => {
  return dispatch => {
    return fetch('/api/nutrition')
      .then(response => response.json())
      .then(json => dispatch(receiveAllNutrition(json)))
  }
}
