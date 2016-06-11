import visibilityFilter from './visibilityFilter'
import searchResults from './searchResults'
import pinResults from './pinResults'
import target from './target'
import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

const nutritionFactsApp = combineReducers({
  pinResults,
  searchResults,
  visibilityFilter,
  target,
  routing: routerReducer
})

export default nutritionFactsApp
