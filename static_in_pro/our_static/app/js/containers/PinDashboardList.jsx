import React from 'react'
import { connect } from 'react-redux'
import PinDashboard from '../components/PinDashboard'


const getPinResults = (immutable_list) => {
    return immutable_list.filter(ele => ele.get('pinned') == true)
}

const mapStateToProps = (state, ownProps) => (
    {
        results: getPinResults(state.pinResults),
        target: state.target.toJS()
    }
)

const mapDispatchToProps = (dispatch) => (
    {
    }
)

const PinDashboardList = connect(
    mapStateToProps,
    mapDispatchToProps
)(PinDashboard)

export default PinDashboardList
