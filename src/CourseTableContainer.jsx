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
		this.getCourseList = this.getCourseList.bind(this);
		this.getCourseData = this.getCourseData.bind(this);
		this.changeDept = this.changeDept.bind(this);

		this.getCourseData();
	}

	getCourseList(dept = '通識') {
		this.db.ref(`course/${dept}`).once('value').then((snapshot) => {
			this.setState({
				courseList: snapshot.val() || {}
			});
		});
	}

	getCourseData() {
		console.log('Getting course data...')
		this.db.ref('deptList/').once('value').then((snapshot) => {
			this.setState({
				deptList: snapshot.val() || {}
			});
		});

		this.getCourseList();
	}

	changeDept(dept) {
		this.getCourseList(dept);
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
						<CourseList deptList={this.state.deptList} courseList={this.state.courseList} onChangeDept={this.changeDept} />
					</Col>
				</Row>
			</div>
		);
	}
}
