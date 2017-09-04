import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Navigation from './Navigation.jsx';

import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};

		window.firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: Object.assign({}, user.providerData[0])
				});
			} else {
				this.setState({
					user: {
						uid: null
					}
				});
			}
		});
	}

	getChildContext() {
		return {
			user: this.state.user
		}
	}

	render() {
		return (
			<div>
				<Navigation />
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
