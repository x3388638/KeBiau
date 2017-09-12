import React from 'react';
import {
	Row,
	Col,
	Container,
	Alert
} from 'reactstrap';
import PropTypes from 'prop-types';

import ExchangeSetting from './ExchangeSetting.jsx'

export default class ExchangeListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exchangeList: {}
		};

		this.db = window.firebase.database();
	}

	componentDidMount() {
		this.getExchangeList();
	}

	getExchangeList() {
		this.db.ref('exchangeList/').once('value').then((snapshot) => {
			const data = snapshot.val();
			if (data) {
				this.setState({
					exchangeList: data
				});
			}
		});
	}

	render() {
		const containerStyle = {
			height: 'calc(100vh - 56px)',
			overflow: 'auto',
			background: '#fff'
		};

		return (
			<div>
				{ this.context.user && !this.context.user.uid &&
					<Row>
						<Col xs="12">
							<Alert className="text-center mt-3" color="danger">請先登入</Alert>
						</Col>
					</Row>
				}

				{ this.context.user && this.context.user.uid &&
					<div>
						<ExchangeSetting
							exchangeSetting={this.state.exchangeList[this.context.user.uuid]} // JSON string || undefined
						/>
						<Container style={containerStyle}>
							<Row>
								<Col xs="12">
									123
								</Col>
							</Row>
						</Container>
					</div>
				}
			</div>
		)
	}
}

ExchangeListContainer.contextTypes = {
	user: PropTypes.object
};
