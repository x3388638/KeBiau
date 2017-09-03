import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home.jsx';
import Exchange from './Exchange.jsx';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/exchange" component={Exchange} />
			<Redirect from="*" to="/" />
		</Switch>
	</Router>,
	document.getElementById('app')
);
registerServiceWorker();
