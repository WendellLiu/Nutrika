import * as actions from '../actions'
import {  take, put, call, fork, select } from 'redux-saga/effects'
import { delay, takeLatest, takeEvery } from 'redux-saga'
import { fetchJSON } from '../utils'
import { fromJS } from 'immutable'


function fetch_nutrition_by_keyword(keyword, state){
  // function checking whether pinned or not
  const pin_or_not = (item) => {
    return !state.pinResults.filter(ele => ele.get('id') === item.id).isEmpty()
  }

  return fetchJSON(`/api/nutrition?name=${keyword}`)
          .then(json => json.map(ele => {
            ele['pinned'] = pin_or_not(ele)
            ele['pinned_amount'] = 1
            return ele
          }))
          .then(json => fromJS(json))
}

function* fetch_nutrition_with_delay(action){
  yield call(delay, 800)

  yield put(actions.setSearchKeyword(action.keyword))

  if(action.keyword){
    const state = yield select()
    const nutrition = yield call(fetch_nutrition_by_keyword, action.keyword, state)
    yield put(actions.receiveNutrition(nutrition))
  }
}

function* watchFetch(){
  yield* takeLatest(actions.FETCH_NUTRITION_WITH_DELAY, fetch_nutrition_with_delay)
}

function* handlePin(action){
  const id = action.id
  yield put(actions.togglePin(id))


  const state = yield select()
  if(state.pinResults.filter(ele => ele.get('id') === id).isEmpty()){
    const item = state.searchResults.filter(ele => ele.get('id') === id).get(0)
    yield put(actions.pushPin(item))
  }else{
    yield put(actions.popPin(id))
  }

}

function* watchHandlePin(){
  yield* takeEvery(actions.HANDLE_PIN, handlePin)
}

export default function* rootSaga() {
  yield [
    fork(watchFetch),
    fork(watchHandlePin)
  ]
}
