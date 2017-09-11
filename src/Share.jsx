import React from 'react';
import PropTypes from 'prop-types';
import { 
	Row,
	Col,
	Alert
} from 'reactstrap';

import App from './App.jsx';
import CourseTable from './CourseTable.jsx';

export default class Share extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			customTable: 'Loading...'
		}

		this.db = window.firebase.database();
	}

	componentDidMount() {
		const routeHash = this.context.router.route.match.params.hash;
		const uuid = routeHash.substring(0, routeHash.length - 4);
		const hash = routeHash.substring(routeHash.length - 4, routeHash.length);
		this.db.ref(`sharedTable/${uuid}`).once('value').then((snapshot) => {
			const data = snapshot.val();
			if (data === null) {
				this.setState({
					customTable: '連結無效'
				});
				return;
			}

			const tableData = JSON.parse(data)[hash];
			if (!tableData) {
				this.setState({
					customTable: '連結無效'
				});
				return;
			}

			this.setState({
				customTable: tableData
			});
		});
	}

	render() {
		return (
			<App>
				<Row className="mt-3">
					<Col xs="12">
						{ typeof this.state.customTable === 'string' &&
							<Alert className="text-center" color="warning">{this.state.customTable}</Alert>
						}

						{ typeof this.state.customTable !== 'string' &&
							<CourseTable tableData={this.state.customTable} shared />
						}
					</Col>
				</Row>
			</App>
		)
	}
}

Share.contextTypes = {
	router: PropTypes.object
}
