import React from 'react';
import { Container } from 'reactstrap';

import Navigation from './Navigation.jsx';

import CONFIG from './config.js';

import './App.css';

export default class App extends React.Component {
	componentDidMount() {
		window.fbAsyncInit = function() {
			window.FB.init({
				appId      : CONFIG.FB.AppID,
				xfbml      : true,
				version    : 'v2.10'
			});
			window.FB.AppEvents.logPageView();
			window.FB.getLoginStatus(function(response) {
				console.log(response);
			});
		};
	}

	render() {
		return (
			<div>
				<Navigation {...this.props} />
				<Container>
					{this.props.children}
				</Container>
			</div>
		);
	}
}
