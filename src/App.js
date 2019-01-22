import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './pages/routes';

import './styles/App.css';

class App extends Component {
	render() {
		console.log('App render');

		return (
			<Router>
				<Switch>
					{routes.map((route, i) => (
						<Route key={i} path={route.path} exact={route.exact} component={route.component} />
					))}
				</Switch>
			</Router>
		);
	}
}

export default App;
