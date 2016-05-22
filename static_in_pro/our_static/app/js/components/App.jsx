import React from 'react'
import KeywordFilter from '../containers/KeywordFilter'
import CategoryFilter from '../containers/CategoryFilter'
import VisibleResultList from '../containers/VisibleResultList'
import PinList from '../containers/PinList'
import PinDashboardList from '../containers/PinDashboardList'
import TargetForm from '../containers/TargetForm'
import { Row, Col, Tab, Nav, NavItem } from 'react-bootstrap'

const App = () => (
	<Tab.Container defaultActiveKey={2} id="uncontrolled-tab-example">
	<Row className="app-container">
		<Col xs={2} className="navbar">
			<Nav bsStyle="pills" stacked>
				<NavItem eventKey={1}>
				瞧瞧
				</NavItem>
				<NavItem eventKey={2}>
				想要放入什麼
				</NavItem>
				<NavItem eventKey={3}>
				補上一些吧
				</NavItem>
			</Nav>
		</Col>
		<Col xs={10} className="tab-page">
			<Tab.Content animation>
				<Tab.Pane eventKey={1}>

							<PinDashboardList />

				</Tab.Pane>
				<Tab.Pane eventKey={2}>

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
				</Tab.Pane>
				<Tab.Pane eventKey={3}>
					<TargetForm />
				</Tab.Pane>
			</Tab.Content>
		</Col>
	</Row>
	</Tab.Container>
)

export default App
