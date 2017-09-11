import React from 'react';
import {
	Row,
	Col,
	Container
} from 'reactstrap';

import ExchangeSetting from './ExchangeSetting.jsx'

export default class ExchangeListContainer extends React.Component {
	render() {
		const containerStyle = {
			height: 'calc(100vh - 56px)',
			overflow: 'auto',
			background: '#fff'
		};

		return (
			<div>
				<ExchangeSetting />
				<Container style={containerStyle}>
					<Row>
						<Col xs="12">
							123
						</Col>
					</Row>
				</Container>
			</div>
		)
	}
}
