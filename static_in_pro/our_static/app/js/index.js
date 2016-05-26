import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import nutritionFactsApp from './reducers'
import App from './components/App'
import loggerForImmutable from './middlewares/loggerForImmutable'
import fetch from 'isomorphic-fetch'
import { fromJS } from 'immutable'
import { getInitState } from './getInitState'
import 'babel-polyfill'



// style
import '../scss/main'

let store

fetch('/api/nutrition')
  .then(response => response.json())
  .then(json => {
    json = json.map(ele => {
      ele.pinned = false
      ele.pinned_amount = 1
      return ele
    })

    let initState = getInitState()

    if(process.env.NODE_ENV === 'production'){
      store = createStore(nutritionFactsApp, initState, applyMiddleware(thunk))
    }else{
      store = createStore(nutritionFactsApp, initState, applyMiddleware(thunk, loggerForImmutable))
    }


    render(
      <Provider store={store}>
      <App />
      </Provider>,
      document.getElementById('root')
    )
  })
