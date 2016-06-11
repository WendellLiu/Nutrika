import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import { Row, Col } from 'react-bootstrap'

const Home = () => (
  <div>
    <KeywordFilter />
    <CategoryFilter />
    <Row>
      <Col md={6}>
        <VisibleResultList />
      </Col>
      <Col md={6}>
        <PinList />
      </Col>
    </Row>
  </div>
)

export default Home
