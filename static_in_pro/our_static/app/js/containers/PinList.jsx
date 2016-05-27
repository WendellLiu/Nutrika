import React from 'react'
import { connect } from 'react-redux'
import PinResultList from '../components/PinResultList'
import { handlePin, increasePinnedAmount, decreasePinnedAmount } from '../actions'


const mapStateToProps = (state, ownProps) => (
    {
        results: state.pinResults
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        toggle_pin: (id) => {
            dispatch(handlePin(id))
        },
        increase_pinned_amount: (id) => {
            dispatch(increasePinnedAmount(id))
        },
        decrease_pinned_amount: (id) => {
            dispatch(decreasePinnedAmount(id))
        }
    }
)

const PinList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PinResultList)

export default PinList
