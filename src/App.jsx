import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navigation from './Navigation.jsx';

import './App.css';

const RelativeContainer = styled(Container)`
	position: relative;
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null
		};

		this.db = window.firebase.database();
		window.firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({
					user: Object.assign({}, user.providerData[0], {
						uuid: user.uid
					})
				});

				setTimeout(() => {
					this.db.ref(`/userLink/${user.uid}`).once('value').then((snapshot) => {
						if (!snapshot.val()) {
							window.firebase.auth().signOut().then(() => {
								this.setState({
									user: {
										uid: null
									}
								}, () => {
									window.location.reload();
								});
							}).catch(console.error);
							return;
						}

						this.setState({
							user: Object.assign({}, user.providerData[0], {
								uuid: user.uid,
								fbLink: snapshot.val()
							})
						});
					});
				}, 1000);
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
				<RelativeContainer>
					{this.props.children}
				</RelativeContainer>
			</div>
		);
	}
}

App.childContextTypes = {
	user: PropTypes.object
};
