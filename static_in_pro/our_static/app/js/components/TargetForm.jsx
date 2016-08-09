import React , { PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import TargetInput from './TargetInput'
import { Row, Col } from 'react-bootstrap'


const TargetForm = ({ target, edit_target }) => (
  <div>
      <label>你可以輸入預定的目標</label>
      <Row>
          <Col md={4}>
              <TargetInput target={target} edit_target={edit_target}  entity="calories" />
          </Col>
          <Col md={4}>
              <TargetInput target={target} edit_target={edit_target} entity="protein" />
          </Col>
      </Row>
      <Row>
          <Col md={4}>
              <TargetInput target={target} edit_target={edit_target} entity="carbs" />
          </Col>
          <Col md={4}>
              <TargetInput target={target} edit_target={edit_target} entity="fat" />
          </Col>
      </Row>
  </div>
)

TargetForm.propTypes = {
  target: ImmutablePropTypes.map.isRequired,
  edit_target: PropTypes.func.isRequired
}

export default TargetForm
