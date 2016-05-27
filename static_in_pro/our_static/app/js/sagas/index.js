import { fetch_nutrition, FETCH_NUTRITION_WITH_DELAY } from '../actions'
import {  take, put, call } from 'redux-saga/effects'
import { delay, takeLatest } from 'redux-saga'

export function* fetch_nutrition_with_delay(action){
  yield call(delay, 1000)
  yield put(fetch_nutrition(action.keyword))
}

export default function* rootSaga() {
  yield* takeLatest(FETCH_NUTRITION_WITH_DELAY, fetch_nutrition_with_delay)
}
