import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'
import TargetForm from '../containers/TargetForm'
import { Row, Col, Tab, Nav, NavItem } from 'react-bootstrap'
import { Router, Route, IndexRoute } from 'react-router'
import NavLink from './NavLink'

const App = (props) => (
	<div className="app-container">
		<Col xs={2} className="navbar">
			<ul role="nav">
				<li><NavLink to="/app/result" onlyActiveOnIndex>瞧瞧</NavLink></li>
				<li><NavLink to="/app" onlyActiveOnIndex>想要放入什麼</NavLink></li>
				<li><NavLink to="/app/target" onlyActiveOnIndex>補上一些吧</NavLink></li>
			</ul>
		</Col>
		<Col xs={10} className="tab-page">
			{props.children}
		</Col>
  </div>
)

export default App
