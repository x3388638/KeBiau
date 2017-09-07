import React from 'react';
import {
	Row,
	Col,
} from 'reactstrap';

import CourseList from './CourseList.jsx';

export default class CourseTableContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			deptList: {}
		};
		this.db = window.firebase.database();
		this.getCourseData = this.getCourseData.bind(this);

		this.getCourseData();
	}

	getCourseData() {
		console.log('Getting dept list data...')
		this.db.ref('deptList/').once('value').then((snapshot) => {
			this.setState({
				deptList: snapshot.val() || {}
			});
		});
	}

	render() {
		return (
			<div>
				<Row>
					<Col xs="12">
						custom table here
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<CourseList deptList={ this.state.deptList } />
					</Col>
				</Row>
			</div>
		);
	}
}
