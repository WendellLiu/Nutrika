import { connect } from 'react-redux'
import { editTarget } from '../actions'
import TargetForm from '../components/TargetForm'
import React from 'react'


const mapStateToProps = (state, ownProps) => (
    {
      target: state.target
    }
)

const mapDispatchToProps = (dispatch) => (
    {
      edit_target: (target) => { dispatch(editTarget(target))}
    }
)

const TargetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TargetForm)

export default TargetContainer
