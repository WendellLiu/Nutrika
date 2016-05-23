import expect from 'expect'
import * as actions from '../static_in_pro/our_static/app/js/actions'


describe('actions', () => {
  it('should create an action to edit search keyword ', () => {
    const keyword = 'test'
    const expectedAction = {
      type: actions.SET_SEARCH_KEYWORD,
      keyword: 'test'
    }

    expect(actions.setSearchKeyword(keyword)).toEqual(expectedAction)
  })

  it('should create an action to edit array of selected categories ', () => {
    const categories = ['水果', '肉類', '穀物']
    const expectedAction = {
      type: actions.EDIT_CATEGORY,
      categories
    }

    expect(actions.editCategory(categories)).toEqual(expectedAction)
  })

  it('should create an action to return toggled target item id', () => {
    const id = 1
    const expectedAction = {
      type: actions.TOGGLE_PIN,
      id
    }

    expect(actions.togglePin(id)).toEqual(expectedAction)
  })
})
