import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Navigation from './Navigation.jsx';

import CONFIG from './config.js';

import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};
	}

	getChildContext() {
		return {
			user: this.state.user
		}
	}

	componentDidMount() {
		const _this = this;
		window.fbAsyncInit = function() {
			window.FB.init({
				appId      : CONFIG.FB.AppID,
				xfbml      : true,
				version    : 'v2.10'
			});
			window.FB.AppEvents.logPageView();
			window.FB.getLoginStatus((response) => {
				if (response.status === 'connected') {
					window.FB.api('/me', (res) => {
						_this.setState({
							user: Object.assign({}, res)
						});
					});
				} else {
					_this.setState({
						user: {
							name: null,
							id: null
						}
					})
				}
			});
		};
		(typeof window.FB !== 'undefined') && window.fbAsyncInit();
	}

	render() {
		return (
			<div>
				<Navigation
					user={this.state.user}
					{...this.props}
				/>
				<Container>
					{this.props.children}
				</Container>
			</div>
		);
	}
}

App.childContextTypes = {
	user: PropTypes.object
};
