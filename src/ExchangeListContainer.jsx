import React from 'react';
import {
	Row,
	Col,
	Container,
	Alert
} from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import cloenDeep from 'lodash.clonedeep';

import ExchangeSetting from './ExchangeSetting.jsx'
import ExchangeList from './ExchangeList.jsx'

export default class ExchangeListContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			exchangeList: {},
			filter: null
		};

		this.db = window.firebase.database();
		this.handleSaveExchangeSetting = this.handleSaveExchangeSetting.bind(this);
		this.handleUnpublish = this.handleUnpublish.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.parseList = this.parseList.bind(this);
	}

	componentDidMount() {
		this.getExchangeList();
	}

	getExchangeList() {
		this.db.ref('exchangeList/').once('value').then((snapshot) => {
			const data = snapshot.val() || {};
			this.setState({
				exchangeList: data
			});
		});
	}

	handleSaveExchangeSetting(have, want, desc) {
		const name = this.context.user.displayName;
		const fbid = this.context.user.uid;
		const uuid = this.context.user.uuid;
		const time = moment().format();
		this.db.ref(`exchangeList/${uuid}`).set(JSON.stringify({
			fbid, name, want, have, desc, time
		}))
		.then(() => {
			this.getExchangeList();
		});
	}

	handleUnpublish() {
		this.db.ref(`exchangeList/${this.context.user.uuid}`).remove().then(() => {
			this.getExchangeList();
		});
	}

	handleFilter(keywords) {
		this.setState({
			filter: keywords
		});
	}

	parseList() {
		const exchangeList = cloenDeep(this.state.exchangeList);
		const filterArr = this.state.filter ? cloenDeep(this.state.filter) : null;

		let result = Object.values(exchangeList).map((val) => {
			return JSON.parse(val);
		});

		result = this.shuffle(result);
		if (filterArr) {
			result = result.filter((val) => {
				let valid = false;
				let testString = val.have.join('') + val.want.join('');
				filterArr.forEach((keyword) => {
					if (testString.includes(keyword)) {
						valid = true;
					}
				});

				return valid;
			});
		}

		return result;
	}

	shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	render() {
		const containerStyle = {
			height: 'calc(100vh - 56px)',
			overflow: 'auto',
			background: '#fff'
		};

		const exchangeList = this.parseList();

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
							exchangeList={this.state.exchangeList}
							onSave={this.handleSaveExchangeSetting}
							onUnpublish={this.handleUnpublish}
							onToggleSetting={this.handleToggleSetting}
							onFilter={this.handleFilter}
						/>
						<Container style={containerStyle}>
							<Row>
								<Col xs="12">
									<ExchangeList exchangeList={exchangeList}/>
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
