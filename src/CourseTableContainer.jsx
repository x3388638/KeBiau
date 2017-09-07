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
		const sessionCourseList = window.sessionStorage.courseList ? JSON.parse(window.sessionStorage.courseList) : "{}";
		if (sessionCourseList[dept]) {
			console.log(`course in ${dept} exist in sessionStorage`);
			this.setState({
				courseList: Object.assign({}, sessionCourseList[dept])
			});
			return;
		}
		
		console.log(`Getting course in ${dept}`);
		this.db.ref(`course/${dept}`).once('value').then((snapshot) => {
			this.setState({
				courseList: snapshot.val() || {}
			});
			sessionStorage.courseList = JSON.stringify(Object.assign({}, sessionCourseList, {[dept]: snapshot.val()}));
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
