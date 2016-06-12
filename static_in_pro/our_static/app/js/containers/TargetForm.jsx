import { connect } from 'react-redux'
import { editTarget } from '../actions'
import TargetInput from '../components/TargetInput'
import React from 'react'
import { Row, Col } from 'react-bootstrap'


class TargetForm extends React.Component {

    render(){
        return(
            <div>
                <label>你可以輸入預定的目標</label>
                <Row>
                    <Col md={4}>
                        <TargetInput edit_target={(target) => { this.props.dispatch(editTarget(target)) }} entity="calories" />
                    </Col>
                    <Col md={4}>
                        <TargetInput edit_target={(target) => { this.props.dispatch(editTarget(target)) }} entity="protein" />
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <TargetInput edit_target={(target) => { this.props.dispatch(editTarget(target)) }} entity="carbs" />
                    </Col>
                    <Col md={4}>
                        <TargetInput edit_target={(target) => { this.props.dispatch(editTarget(target)) }} entity="fat" />
                    </Col>
                </Row>
            </div>


        )
    }
}

TargetForm = connect()(TargetForm)

export default TargetForm
