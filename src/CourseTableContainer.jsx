import React from 'react';
import {
	Row,
	Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import CourseList from './CourseList.jsx';
import CourseTable from './CourseTable.jsx';

export default class CourseTableContainer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			deptList: {},
			courseList: {},
			customTable: {
				course: {
					'a/08': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'b/09': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'c/10': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'd/11': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'z/12': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'e/13': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'f/14': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'g/15': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'h/16': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'i/17': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'j/18': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'k/19': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'l/20': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
					'm/21': {0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}},
				},
				sat: false,
				sun: false,
				shared: false,
				shareLink: '',
			}
		};
		this.timeMap = {a: 'a/08', b: 'b/09', c: 'c/10', d: 'd/11', z: 'z/12', e: 'e/13', f: 'f/14',
			g: 'g/15', h: 'h/16', i: 'i/17', j: 'j/18', k: 'k/19', l: 'l/20', m: 'm/21'};
		this.timeOrder = ['a', 'b', 'c', 'd', 'z', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
		this.db = window.firebase.database();
		this.getCourseList = this.getCourseList.bind(this);
		this.getCourseData = this.getCourseData.bind(this);
		this.changeDept = this.changeDept.bind(this);
		this.getTableData = this.getTableData.bind(this);
		this.addCourse = this.addCourse.bind(this);
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
		console.log('Getting course data...');
		if (!window.sessionStorage.deptList) {
			console.log('Getting deptList from db...')
			this.db.ref('deptList/').once('value').then((snapshot) => {
				window.sessionStorage.deptList = JSON.stringify(snapshot.val() || {});
				this.setState({
					deptList: snapshot.val() || {}
				});
			});
		} else {
			console.log('deptList exist in sessionStorage.')
			this.setState({
				deptList: Object.assign({}, JSON.parse(window.sessionStorage.deptList))
			});
		}

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
			console.log('Getting custom table data');
			this.db.ref(`customTable/${user.uuid}`).once('value').then((snapshot) => {
				const tableData = snapshot.val();
				tableData && this.setState({
					customTable: Object.assign({}, tableData)
				});
			});
		}
	}

	addCourse(courseData) {
		// validate time
		const time = courseData.time; // '2bc3g'
		const sections = this.apartCourseTime(time); // ['abc', '3g']
		let timeValid = true;
		sections.some((t) => {
			const valid = this.validateTime(t)
			if (!valid.valid) {
				alert (valid.msg);
				timeValid = false;
				return true;
			}

			return false;
		});

		if (timeValid) {
			let conflict = false;
			sections.forEach((t) => {
				if (conflict) {
					return;
				}

				const time = t; // 2ab
				const dayOfWeek = time[0]; // 2
				const startTime = time[1]; // a
				const rowspan = time.length - 1; // 2
				const customTable = cloneDeep(this.state.customTable); // prevent call by reference
				if (customTable.course[this.timeMap[startTime]][dayOfWeek - 1] === null
					|| customTable.course[this.timeMap[startTime]][dayOfWeek - 1].title) {
					conflict = true;
					return;
				}

				customTable.course[this.timeMap[startTime]][dayOfWeek - 1] = { // customTable.course['a/08'][1]
					rowspan: rowspan,
					title: courseData.cname,
					desc: `${courseData.location} ${courseData.teacher}`,
					bg: ''
				};

				let nextTimeOrder = this.timeOrder.indexOf(startTime) + 1;
				let nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
				for (let i = 0; i < rowspan - 1; i ++) {
					const nextTimeCourse = customTable.course[nextTime][dayOfWeek - 1];
					if (nextTimeCourse === null || nextTimeCourse.title) {
						conflict = true;
						return;
					}

					customTable.course[nextTime][dayOfWeek - 1] = null;
					nextTimeOrder ++;
					nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
				}

				if (dayOfWeek === '6' && !customTable.sat) {
					customTable.sat = true;
				}

				if (dayOfWeek === '7' && !customTable.sun) {
					customTable.sat = true;
					customTable.sun = true;
				}

				this.setState({
					customTable: cloneDeep(customTable)
				});
			});

			if (!!conflict) {
				alert('!!! 衝堂 !!!');
			}
		}

		// TODO: 刪除, 編輯, 上色
	}

	validateTime(t) {
		if (/^[1-7]{1}[A-MZa-mz]+$/.test(t)) {
			let last = -1;
			let err = 0;
			for (let i = i; i < t.length; i ++) {
				let current = t[i].charCodeAt();
				if (last !== -1) {
					if (current === 122) { // z
						if (last !== 100) {
							err++;
							break;
						}

						last = current;
						continue;
					}

					if (current === 101) { // e
						if (last !== 122) {
							err++;
							break;
						}

						last = current;
						continue;
					}

					if (current !== (+last +1)) {
						err++;
						break;
					}
				}

				last = current;
			}

			if (err) {
				return {
					valid: false, 
					msg: '時段不連續'
				}
			} else {
				return {
					valid: true
				}
			}
		} else {
			return {
				valid: false, 
				msg: '時間格式錯誤'
			}
		}
	}

	apartCourseTime(t) {
		let result = [];
		if (t.replace(/[1-7]{1}[A-MZa-mz]+/g, '').length > 0) {
			result.push(t);
			return result;
		}

		return t.match(/[1-7]{1}[A-MZa-mz]+/g);
	}

	render() {
		return (
			<div style={{background: '#fff', padding: '20px 5px', boxShadow: '0 0 10px 0 #080808'}}>
				<Row className="mb-2">
					<Col xs="12">
						<CourseTable tableData={this.state.customTable} />
						<hr />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<CourseList
							deptList={this.state.deptList}
							courseList={this.state.courseList}
							onChangeDept={this.changeDept}
							onAddCourse={this.addCourse}
						/>
					</Col>
				</Row>
			</div>
		);
	}
}

CourseTableContainer.contextTypes = {
	user: PropTypes.object
};
