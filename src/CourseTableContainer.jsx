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
			deptList: {},
			courseList: {}
		};
		this.db = window.firebase.database();
		this.getCourseData = this.getCourseData.bind(this);

		this.getCourseData();
	}

	getCourseData() {
		console.log('Getting course data...')
		this.db.ref('deptList/').once('value').then((snapshot) => {
			this.setState({
				deptList: snapshot.val() || {}
			});
		});

		this.db.ref('course/通識').once('value').then((snapshot) => {
			this.setState({
				courseList: snapshot.val() || {}
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
						<CourseList deptList={this.state.deptList} courseList={this.state.courseList} />
					</Col>
				</Row>
			</div>
		);
	}
}
