import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import nutritionFactsApp from './reducers'
import App from './components/App'
import loggerForImmutable from './middlewares/loggerForImmutable'

// style
import '../scss/main'

let store

if(process.env.NODE_ENV === 'production'){
  store = createStore(nutritionFactsApp)
}else{
  store = createStore(nutritionFactsApp, applyMiddleware(loggerForImmutable))
}


render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)
