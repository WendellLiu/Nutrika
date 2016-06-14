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
export const togglePin = (id) => (
    {
        type: TOGGLE_PIN,
        id
    }
)

export const PUSH_PIN = 'PUSH_PIN'
export const pushPin = (item) => (
    {
        type: PUSH_PIN,
        item
    }
)

export const POP_PIN = 'POP_PIN'
export const popPin = (id) => (
    {
        type: POP_PIN,
        id
    }
)

export const HANDLE_PIN = 'HANDLE_PIN'
export const handlePin = (id) => (
  {
    type: HANDLE_PIN,
    id
  }
)

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
export const receiveNutrition = (json) => (
  {
    type: RECEIVE_NUTRITION,
    json
  }
)

export const FETCH_NUTRITION_WITH_DELAY = 'FETCH_NUTRITION_WITH_DELAY'
export const fetch_nutrition_with_delay = (keyword=null) => (
  {
    type: FETCH_NUTRITION_WITH_DELAY,
    keyword
  }
)
