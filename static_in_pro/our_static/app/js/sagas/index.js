import * as actions from '../actions'
import {  take, put, call, fork, select } from 'redux-saga/effects'
import { delay, takeLatest, takeEvery } from 'redux-saga'

function* fetch_nutrition_with_delay(action){
  yield call(delay, 800)
  yield put(actions.fetch_nutrition(action.keyword))
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
