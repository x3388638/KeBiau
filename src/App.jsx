import React from 'react';
import { Container } from 'reactstrap';

import Navigation from './Navigation.jsx';

export default class App extends React.Component {
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
