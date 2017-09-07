import React from 'react';
import {
	Row,
	Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

import CourseList from './CourseList.jsx';
import CourseTable from './CourseTable.jsx';

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
		this.getTableData = this.getTableData.bind(this);

	}

	componentDidMount() {
		this.getCourseData();
		this.getTableData();
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

	getTableData() {
		const user = this.context.user;
		if (user === null) {
			setTimeout(this.getTableData, 100);
			return;
		}

		if (user.uid) {
			// logged in, get data from db
			this.db.ref(`customTable/${user.uuid}`).once('value').then((snapshot) => {
				const tableData = snapshot.val();
			});
		} else {
			// no login, set default value
		}
	}

	render() {
		return (
			<div>
				{this.context.user && this.context.user.uid &&
					<div>logged in {JSON.stringify(this.context.user)}</div>
				}
				<Row className="mb-2 mt-3">
					<Col xs="12">
						<CourseTable />
						<hr />
					</Col>
				</Row>
				<Row className="mb-5">
					<Col xs="12">
						<CourseList deptList={this.state.deptList} courseList={this.state.courseList} onChangeDept={this.changeDept} />
					</Col>
				</Row>
			</div>
		);
	}
}

CourseTableContainer.contextTypes = {
	user: PropTypes.object
};
