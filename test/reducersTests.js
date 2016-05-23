import expect from 'expect'
import target from '../static_in_pro/our_static/app/js/reducers/target'
import visibilityFilter from '../static_in_pro/our_static/app/js/reducers/visibilityFilter'
import pinResults from '../static_in_pro/our_static/app/js/reducers/pinResults'
import * as actions from '../static_in_pro/our_static/app/js/actions'
import { fromJS, Map, List } from 'immutable'


describe('target reducers', () => {
  it('should return state added specific target', () => {
    const initialState = fromJS({
      protein: 10
    })
    let settingTarget = {
      calories: 100
    }
    let expectedState = fromJS({
      protein: 10,
      calories: 100
    })

    expect(
      target(initialState, actions.editTarget(settingTarget))
    ).toEqual(expectedState)

    settingTarget = {
      calories: 50
    }
    const expectedState2 = fromJS({
      protein: 10,
      calories: 50
    })

    expect(
      target(expectedState, actions.editTarget(settingTarget))
    ).toEqual(expectedState2)
  })
})

describe('visibilityFilter reducers', () => {
  it('should return state of search keyword', () => {
    const initialState = Map({
        keyword: '',
        filter_no_unit: true,
        categories: List([])
    })

    const keyword = 'test'
    const expectedState = Map({
        keyword: 'test',
        filter_no_unit: true,
        categories: List([])
    })

    expect(
      visibilityFilter(initialState, actions.setSearchKeyword(keyword))
    ).toEqual(expectedState)
  })

  it('should return state of selected categories list(immutable List)', () => {
    const initialState = Map({
        keyword: '',
        filter_no_unit: true,
        categories: List([])
    })

    const categories = ['肉類', '蔬菜類']
    const expectedState = Map({
        keyword: '',
        filter_no_unit: true,
        categories: List(['肉類', '蔬菜類'])
    })

    expect(
      visibilityFilter(initialState, actions.editCategory(categories))
    ).toEqual(expectedState)
  })

  it('should return state of filter_no_unit', () => {
    const initialState = Map({
        keyword: '',
        filter_no_unit: true,
        categories: List([])
    })

    const filter_no_unit = false
    const expectedState = Map({
        keyword: '',
        filter_no_unit: false,
        categories: List()
    })

    expect(
      visibilityFilter(initialState, actions.filterNoUnit(filter_no_unit))
    ).toEqual(expectedState)
  })
})

describe('pinResult', () => {
  const initialState = fromJS(
    [
      {
        id: 1,
        name: '牛肉',
        pinned: false,
        pinned_amount: 1
      },
      {
        id: 2,
        name: '高麗菜',
        pinned: false,
        pinned_amount: 1
      },
      {
        id: 5,
        name: '肉包',
        pinned: false,
        pinned_amount: 1
      },
    ]
  )

  it('should return state after toggling a item', () => {
    const id = 1
    const expectedState = fromJS(
      [
        {
          id: 1,
          name: '牛肉',
          pinned: true,
          pinned_amount: 1
        },
        {
          id: 2,
          name: '高麗菜',
          pinned: false,
          pinned_amount: 1
        },
        {
          id: 5,
          name: '肉包',
          pinned: false,
          pinned_amount: 1
        },
      ]
    )

    expect(
      pinResults(initialState, actions.togglePin(id))
    ).toEqual(expectedState)
  })

  it('should return state after increasing pinned_amount of an item', () => {
    const id = 1
    const expectedState = fromJS(
      [
        {
          id: 1,
          name: '牛肉',
          pinned: false,
          pinned_amount: 2
        },
        {
          id: 2,
          name: '高麗菜',
          pinned: false,
          pinned_amount: 1
        },
        {
          id: 5,
          name: '肉包',
          pinned: false,
          pinned_amount: 1
        },
      ]
    )

    expect(
      pinResults(initialState, actions.increasePinnedAmount(id))
    ).toEqual(expectedState)
  })

  it('should return state after decreasing pinned_amount of an item', () => {
    const id = 1
    const expectedState = fromJS(
      [
        {
          id: 1,
          name: '牛肉',
          pinned: false,
          pinned_amount: 0
        },
        {
          id: 2,
          name: '高麗菜',
          pinned: false,
          pinned_amount: 1
        },
        {
          id: 5,
          name: '肉包',
          pinned: false,
          pinned_amount: 1
        },
      ]
    )

    expect(
      pinResults(initialState, actions.decreasePinnedAmount(id))
    ).toEqual(expectedState)
  })
})
