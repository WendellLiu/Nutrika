import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nutritionFactsApp from './reducers'
import App from './components/App'
import loggerForImmutable from './middlewares/loggerForImmutable'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { getInitState } from './getInitState'
import 'babel-polyfill'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Routers from './routes'
import { fromJS } from 'immutable'
import localStorageSelector from './selectors/localStorageSelector'

// style
import '../scss/main'

let store
const sagaMiddleware = createSagaMiddleware()

// handle localStorage
let initState = JSON.parse(localStorage.getItem('Nutrika')) || getInitState

Object.keys(initState).forEach((ele, index) => {
  initState[ele] = fromJS(initState[ele])
1})


if(process.env.NODE_ENV === 'production'){
  store = createStore(nutritionFactsApp, initState, applyMiddleware(thunk, sagaMiddleware))
}else{
  store = createStore(nutritionFactsApp, initState, applyMiddleware(thunk, sagaMiddleware, loggerForImmutable))
}
const history = syncHistoryWithStore(browserHistory, store)

sagaMiddleware.run(rootSaga)

// subcribe localstorage store
store.subscribe(() => {
  const storedState = localStorageSelector(store.getState())
  localStorage.setItem('Nutrika', JSON.stringify(storedState))
})

render(
  <Provider store={store}>
    <Routers history={history} />
  </Provider>,
  document.getElementById('root')
)
