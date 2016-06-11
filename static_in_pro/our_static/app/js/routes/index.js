import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import PinDashboardList from '../containers/PinDashboardList'
import TargetForm from '../containers/TargetForm'
import Home from '../components/Home'
import App from '../components/App'

const Routers = ({ history }) => (
	<Router history={history}>
		<Route path='/app' component={App}>
			<IndexRoute component={Home}/>
			<Route path="/app/result" component={PinDashboardList} />
			<Route path="/app/target" component={TargetForm}/>
		</Route>
	</Router>
)

export default Routers
