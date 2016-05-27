import visibilityFilter from './visibilityFilter'
import searchResults from './searchResults'
import pinResults from './pinResults'
import target from './target'
import {combineReducers} from 'redux'

const nutritionFactsApp = combineReducers({
  pinResults,
  searchResults,
  visibilityFilter,
  target
})

export default nutritionFactsApp
