import React from 'react';
import ReactDOM from 'react-dom';
import {
	HashRouter as Router,
	Route,
	Link,
	Redirect,
	Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home.jsx';
import Exchange from './Exchange.jsx';

import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};
window.firebase.initializeApp(config);

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
