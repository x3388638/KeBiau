import React from 'react';
import {
	Row,
	Col,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash.clonedeep';

import CourseList from './CourseList.jsx';
import CourseTable from './CourseTable.jsx';
import ToolBar from './ToolBar.jsx';

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
				sun: false
			},
			modalEditCourse: {
				open: false,
				modalTitle: '編輯課程',
				title: '',
				desc: '',
				bg: ''
			},
			modalCustomCourseOpen: false,
			filterConflict: false,
			modalFilterCourseOpen: false,
			filterCourseForm: {
				title: '',
				teacher: '',
				time: '',
				location: ''
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
		this.checkConflict = this.checkConflict.bind(this);
		this.handleDelSatOrSun = this.handleDelSatOrSun.bind(this);
		this.handleDelCourse = this.handleDelCourse.bind(this);
		this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
		this.toggleModalEditCourse = this.toggleModalEditCourse.bind(this);
		this.handleEditCourse = this.handleEditCourse.bind(this);
		this.handleReColor = this.handleReColor.bind(this);
		this.toggleModalCustomCourse = this.toggleModalCustomCourse.bind(this);
		this.handleAddCustomCourse = this.handleAddCustomCourse.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleShare = this.handleShare.bind(this);
		this.filterConflict = this.filterConflict.bind(this);
		this.toggleModalFilterCourse = this.toggleModalFilterCourse.bind(this);
		this.handleFilterCourse = this.handleFilterCourse.bind(this);
		this.handleClearFilterCourse = this.handleClearFilterCourse.bind(this);
		this.handleFilterCourseChange = this.handleFilterCourseChange.bind(this);
	}

	componentDidMount() {
		this.getCourseData();
		this.getTableData();
	}

	getCourseList(dept = '通識') {
		const sessionCourseList = window.sessionStorage.courseList ? JSON.parse(window.sessionStorage.courseList) : "{}";
		/*
		if (sessionCourseList[dept]) {
			// console.log(`course in ${dept} exist in sessionStorage`);
			this.setState({
				courseList: Object.assign({}, sessionCourseList[dept])
			});
			return;
		}
		*/
		
		// console.log(`Getting course in ${dept}`);
		this.db.ref(`course/${dept}`).once('value').then((snapshot) => {
			this.setState({
				courseList: snapshot.val() || {}
			});
			window.sessionStorage.courseList = JSON.stringify(Object.assign({}, sessionCourseList, {[dept]: snapshot.val()}));
		});
	}

	getCourseData() {
		// console.log('Getting course data...');
		if (/* !window.sessionStorage.deptList */ true) {
			// console.log('Getting deptList from db...')
			this.db.ref('deptList/').once('value').then((snapshot) => {
				window.sessionStorage.deptList = JSON.stringify(snapshot.val() || {});
				this.setState({
					deptList: snapshot.val() || {}
				});
			});
		} else {
			// console.log('deptList exist in sessionStorage.')
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
			// console.log('Getting custom table data');
			this.db.ref(`customTable/${user.uuid}`).once('value').then((snapshot) => {
				const tableData = snapshot.val();
				tableData && this.setState({
					customTable: Object.assign({}, JSON.parse(tableData))
				});
			});
		}
	}

	checkConflict(courseData, shouldAddCourse) {
		// if !shouldAddCourse => only check course conflict
		// validate time
		const time = courseData.time.toLowerCase(); // '2bc3g'
		const sections = this.apartCourseTime(time); // ['abc', '3g']
		let timeValid = true;
		sections.some((t) => {
			const valid = this.validateTime(t)
			if (!valid.valid) {
				shouldAddCourse && alert(valid.msg);
				timeValid = false;
				return true;
			}

			return false;
		});

		if (timeValid) {
			let conflict = false;
			const customTable = cloneDeep(this.state.customTable); // prevent call by reference
			sections.forEach((t, index) => {
				if (conflict) {
					return;
				}

				const time = t; // 2ab
				const dayOfWeek = time[0]; // 2
				const startTime = time[1]; // a
				const rowspan = time.length - 1; // 2
				if (customTable.course[this.timeMap[startTime]][dayOfWeek - 1] === null
					|| customTable.course[this.timeMap[startTime]][dayOfWeek - 1].title) {
					conflict = true;
					return;
				}

				if (shouldAddCourse) {
					customTable.course[this.timeMap[startTime]][dayOfWeek - 1] = { // customTable.course['a/08'][1]
						rowspan: rowspan,
						title: courseData.cname || courseData.title,
						desc: courseData.desc || `${courseData.location} ${courseData.teacher}`,
						bg: courseData.bg || ''
					};
				}

				let nextTimeOrder = this.timeOrder.indexOf(startTime) + 1;
				let nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
				for (let i = 0; i < rowspan - 1; i ++) {
					const nextTimeCourse = customTable.course[nextTime][dayOfWeek - 1];
					if (nextTimeCourse === null || nextTimeCourse.title) {
						conflict = true;
						return;
					}

					shouldAddCourse && (customTable.course[nextTime][dayOfWeek - 1] = null);
					nextTimeOrder ++;
					nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
				}
				
				if (!shouldAddCourse) return;

				if (dayOfWeek === '6' && !customTable.sat) {
					customTable.sat = true;
				}

				if (dayOfWeek === '7' && !customTable.sun) {
					customTable.sun = true;
				}
			});

			if (!!conflict && shouldAddCourse) {
				alert('!!! 衝堂 !!!');
				return;
			}

			shouldAddCourse && this.setState({
				customTable: cloneDeep(customTable)
			});

			return conflict;
		}

		return false;
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
		if (t === '') {
			return ['zzzzz'];
		}

		if (t.replace(/[1-7]{1}[A-MZa-mz]+/g, '').length > 0) {
			result.push(t);
			return result;
		}

		return t.match(/[1-7]{1}[A-MZa-mz]+/g);
	}

	handleDelSatOrSun(day) {
		const customTable = cloneDeep(this.state.customTable);
		customTable[day] = false;
		const dayOrder = day === 'sat' ? 5 : 6;
		Object.keys(customTable.course).forEach((key, i) => {
			customTable.course[key][dayOrder] = {};
		});

		this.setState({
			customTable: cloneDeep(customTable)
		});
	}

	handleDelCourse(time, rowspan, dayOfWeek) { // 'a/08', '2', '0'
		const customTable = cloneDeep(this.state.customTable);
		customTable.course[time][dayOfWeek] = {};
		let nextTimeOrder = this.timeOrder.indexOf(time[0]) + 1;
		let nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
		for (let i = 0; i < rowspan - 1; i ++) {
			customTable.course[nextTime][dayOfWeek] = {};
			nextTimeOrder ++;
			nextTime = this.timeMap[this.timeOrder[nextTimeOrder]];
		}

		this.setState({
			customTable: cloneDeep(customTable)
		});
	}

	handleOpenEditModal(courseData) {
		const modalEditCourse = cloneDeep(this.state.modalEditCourse);
		modalEditCourse.open = true;
		modalEditCourse.modalTitle = `編輯 ${courseData.title}`;
		modalEditCourse.title = courseData.title;
		modalEditCourse.desc = courseData.desc;
		modalEditCourse.bg = courseData.bg;
		modalEditCourse.time = courseData.time;
		modalEditCourse.dayOfWeek = courseData.dayOfWeek;
		this.setState({
			modalEditCourse: cloneDeep(modalEditCourse)
		});
	}

	toggleModalEditCourse() {
		const modalEditCourse = cloneDeep(this.state.modalEditCourse);
		modalEditCourse.open = !modalEditCourse.open;
		this.setState({
			modalEditCourse: cloneDeep(modalEditCourse)
		});
	}

	handleEditCourse(time, dayOfWeek) { // 'a/08', '0'
		if (document.getElementById('ModalEditCourse__inputTitle').value === '') {
			alert('標題不得為空');
			return;
		}

		const modalEditCourse = cloneDeep(this.state.modalEditCourse);
		modalEditCourse.open = false;

		const customTable = cloneDeep(this.state.customTable);
		customTable.course[time][dayOfWeek].title = document.getElementById('ModalEditCourse__inputTitle').value;
		customTable.course[time][dayOfWeek].desc = document.getElementById('ModalEditCourse__inputDesc').value;
		customTable.course[time][dayOfWeek].bg = document.getElementById('ModalEditCourse__inputBg').value;

		this.setState({
			modalEditCourse: cloneDeep(modalEditCourse),
			customTable: cloneDeep(customTable)
		})
	}

	handleReColor() {
		const customTable = cloneDeep(this.state.customTable);
		Object.keys(customTable.course).forEach((time) => {
			Object.keys(customTable.course[time]).forEach((dayOrder) => {
				customTable.course[time][dayOrder] && (customTable.course[time][dayOrder].bg = '');
			});
		});

		this.setState({
			customTable: cloneDeep(customTable)
		});
	}

	toggleModalCustomCourse() {
		this.setState((prevState) => ({
			modalCustomCourseOpen: !prevState.modalCustomCourseOpen
		}));
	}

	handleAddCustomCourse() {
		const time = document.getElementById('ModalCustomCourse__inputTime').value;
		const title = document.getElementById('ModalCustomCourse__inputTitle').value;
		if (!time || !title) {
			alert('時間、標題不得為空');
			return;
		}

		this.checkConflict({
			time,
			title,
			desc: document.getElementById('ModalCustomCourse__inputDesc').value || ' ',
			bg: document.getElementById('ModalCustomCourse__inputBg').value
		}, true);

		this.toggleModalCustomCourse();
	}

	handleSave() {
		this.db.ref(`customTable/${this.context.user.uuid}`).set(JSON.stringify(this.state.customTable)).then(() => {
			alert('儲存成功!');
		});
	}

	handleShare() {
		const uuid = this.context.user.uuid;
		const hash = (Date.now() * Math.random() * Math.random()).toString(16).replace('.', '').substring(2, 6);
		this.db.ref(`sharedTable/${uuid}`).set(JSON.stringify({[hash]: this.state.customTable})).then(() => {
			prompt('已將當前課表分享於以下連結', `${process.env.REACT_APP_BASE_URL}/#/share/${uuid}${hash}`);
		});
	}

	filterConflict() {
		this.setState((prevState) => ({
			filterConflict: !prevState.filterConflict
		}));
	}

	toggleModalFilterCourse() {
		this.setState((prevState) => ({
			modalFilterCourseOpen: !prevState.modalFilterCourseOpen
		}));
	}

	handleFilterCourseChange(event, field) {
		const value = event.target.value;
		this.setState((prevState) => ({
			filterCourseForm: Object.assign({}, prevState.filterCourseForm, { [field]: value })
		}));
	}

	handleFilterCourse() {}

	handleClearFilterCourse() {}

	render() {
		let courseList = cloneDeep(this.state.courseList);
		Object.keys(courseList).forEach((courseKey, index) => {
			courseList[courseKey].isConflict = this.checkConflict(courseList[courseKey], false);
		});

		return (
			<div style={{background: '#fff', padding: '20px 5px', boxShadow: '0 0 10px 0 #080808'}}>
				<Row className="mb-2">
					<Col xs="12">
						{ this.context.user && this.context.user.uid &&
							<ToolBar
								onSave={this.handleSave}
								onShare={this.handleShare}
								onReColor={this.handleReColor}
								onClickCustom={this.toggleModalCustomCourse}
							/>
						}
					</Col>
				</Row>
				<Row className="mb-2">
					<Col xs="12">
						<CourseTable
							tableData={this.state.customTable}
							onDelSatOrSun={this.handleDelSatOrSun}
							onDelCourse={this.handleDelCourse}
							onEditCourse={this.handleOpenEditModal}
						/>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col xs="12">
						<CourseList
							deptList={this.state.deptList}
							courseList={courseList}
							onChangeDept={this.changeDept}
							onAddCourse={this.checkConflict}
							filterConflict={this.state.filterConflict}
							onFilterConflict={this.filterConflict}
							onFilterCourse={this.toggleModalFilterCourse}
						/>
					</Col>
				</Row>
				<Modal id="ModalEditCourse" isOpen={this.state.modalEditCourse.open} toggle={this.toggleModalEditCourse}>
					<ModalHeader id="ModalEditCourse__title" toggle={this.toggleModalEditCourse}>{this.state.modalEditCourse.modalTitle}</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label for="ModalEditCourse__inputTitle" sm={2}>標題</Label>
								<Col sm={10}>
									<Input type="text" id="ModalEditCourse__inputTitle" defaultValue={this.state.modalEditCourse.title} placeholder="課程名稱" />
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalEditCourse__inputDesc" sm={2}>內容</Label>
								<Col sm={10}>
									<Input type="text" id="ModalEditCourse__inputDesc" defaultValue={this.state.modalEditCourse.desc} placeholder="教師、地點" />
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalEditCourse__inputBg" sm={2}>標記</Label>
								<Col sm={10}>
									<input id="ModalEditCourse__inputBg" type="color" defaultValue={this.state.modalEditCourse.bg || '#ffffff'} style={{verticalAlign: 'sub', width: '100%'}}/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={() => {this.handleEditCourse(this.state.modalEditCourse.time, this.state.modalEditCourse.dayOfWeek)}}>確定</Button>
					</ModalFooter>
				</Modal>
				<Modal id="ModalCustomCourse" isOpen={this.state.modalCustomCourseOpen} toggle={this.toggleModalCustomCourse}>
					<ModalHeader toggle={this.toggleModalCustomCourse}>自訂時段</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label for="ModalCustomCourse__inputTime" sm={2}>時間</Label>
								<Col sm={10}>
									<Input type="text" id="ModalCustomCourse__inputTime" placeholder="2bcd4jk" />
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalCustomCourse__inputTitle" sm={2}>標題</Label>
								<Col sm={10}>
									<Input type="text" id="ModalCustomCourse__inputTitle" placeholder="meeting" />
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalCustomCourse__inputDesc" sm={2}>內容</Label>
								<Col sm={10}>
									<Input type="text" id="ModalCustomCourse__inputDesc" placeholder="R438 with YCC" />
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalCustomCourse__inputBg" sm={2}>標記</Label>
								<Col sm={10}>
									<input id="ModalCustomCourse__inputBg" type="color" defaultValue="#ffffff" style={{verticalAlign: 'sub', width: '100%'}}/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.handleAddCustomCourse}>確定</Button>
					</ModalFooter>
				</Modal>
				<Modal id="ModalFilterCourse" isOpen={this.state.modalFilterCourseOpen} toggle={this.toggleModalFilterCourse}>
					<ModalHeader id="ModalFilterCourse__title" toggle={this.toggleModalFilterCourse}>篩選課程</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup row>
								<Label for="ModalFilterCourse__inputCname" sm={2}>課名</Label>
								<Col sm={10}>
									<Input
										type="text"
										id="ModalFilterCourse__inputCname"
										value={this.state.filterCourseForm.title}
										onChange={(e) => { this.handleFilterCourseChange(e, 'title') }}
										placeholder="課程名稱"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalFilterCourse__inputTeacher" sm={2}>教師</Label>
								<Col sm={10}>
									<Input
										type="text"
										id="ModalFilterCourse__inputTeacher"
										value={this.state.filterCourseForm.teacher}
										onChange={(e) => { this.handleFilterCourseChange(e, 'teacher') }}
										placeholder="授課教師"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalFilterCourse__inputTime" sm={2}>時間</Label>
								<Col sm={10}>
									<Input
										type="text"
										id="ModalFilterCourse__inputTime"
										value={this.state.filterCourseForm.time}
										onChange={(e) => { this.handleFilterCourseChange(e, 'time') }}
										placeholder="1bcd"
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label for="ModalFilterCourse__inputLocation" sm={2}>教室</Label>
								<Col sm={10}>
									<Input
										type="text"
										id="ModalFilterCourse__inputLocation"
										value={this.state.filterCourseForm.location}
										onChange={(e) => { this.handleFilterCourseChange(e, 'location') }}
										placeholder="管268"
									/>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={() => { this.handleFilterCourse }}>篩選</Button>
						<Button color="danger" onClick={() => { this.handleClearFilterCourse }}>取消篩選</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}

CourseTableContainer.contextTypes = {
	user: PropTypes.object
};
