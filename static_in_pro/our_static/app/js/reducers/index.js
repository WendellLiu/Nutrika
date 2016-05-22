import visibilityFilter from './visibilityFilter'
import pinResults from './pinResults'
import target from './target'
import {combineReducers} from 'redux'

const nutritionFactsApp = combineReducers({
    pinResults,
    visibilityFilter,
    target
})

export default nutritionFactsApp
