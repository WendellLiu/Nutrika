import React from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import ResultList from '../components/ResultList'
import { handlePin, increasePinnedAmount, decreasePinnedAmount } from '../actions'


const getVisibleResults = (result, state) => {
    // keyword is a string

    if(!state.get('keyword').trim()){
        return List([])
    }

    if(state.get('categories').size>0){
        result = result.filter(ele => (state.get('categories').indexOf(ele.get('category'))!= -1))
    }

    if(state.get('filter_no_unit')){
        result = result.filter(ele => (ele.get('piece_weight') !== 0))
    }



    return result
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getVisibleResults(state.searchResults, state.visibilityFilter)
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggle_pin: (id) => {
            dispatch(handlePin(id))
        }
    }
)

const VisibleResultList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultList)

export default VisibleResultList
