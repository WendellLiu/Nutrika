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
