import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
	Alert,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';
import moment from 'moment';
import cloneDeep from 'lodash.clonedeep';

import CourseReviewFilter from './CourseReviewFilter.jsx';
import CourseReviewList from './CourseReviewList.jsx';
import './CourseReviewContainer.css';

export default class CourseReviewContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addReviewModalOpen: false,
			reviewData: {},
			likeData: {},
			sortType: 1,
			filterTags: []
		}

		this.db = window.firebase.database();
		this.toggleAddReviewModal = this.toggleAddReviewModal.bind(this);
		this.handleAddReview = this.handleAddReview.bind(this);
		this.getReviewList = this.getReviewList.bind(this);
		this.parseReviewList = this.parseReviewList.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
		this.handleChangeSortType = this.handleChangeSortType.bind(this);
		this.handleDelReview = this.handleDelReview.bind(this);
		this.handleLike = this.handleLike.bind(this);

		this.getReviewList();
	}

	getReviewList() {
		let reviewData;
		let likeData;
		this.db.ref('review').once('value').then((snapshot) => {
			reviewData = snapshot.val() || {};
		})
		.then(() => {
			this.db.ref('likedReview').once('value').then((snapshot) => {
				likeData = snapshot.val() || {};
				this.setState({
					reviewData,
					likeData
				})
			});
		});
	}

	parseReviewList() {
		const reviewData = cloneDeep(this.state.reviewData);
		const likeData = cloneDeep(this.state.likeData);
		const uuid = this.context.user && this.context.user.uuid;
		let result = [];
		let likedCount = {};
		Object.values(likeData).forEach((likeObj, i) => {
			Object.keys(likeObj).forEach((reviewKey, j) => {
				if (!likedCount[reviewKey]) likedCount[reviewKey] = {};
				if (!likedCount[reviewKey][likeObj[reviewKey]]) likedCount[reviewKey][likeObj[reviewKey]] = 0
				likedCount[reviewKey][likeObj[reviewKey]] ++;
			});
		});

		for (let uid in reviewData) {
			for (let reviewKey in reviewData[uid]) {
				let reviewObj = JSON.parse(reviewData[uid][reviewKey]);
				// filter
				let match = false;
				if (this.state.filterTags.length > 0) {
					this.state.filterTags.some((keyword, i) => {
						keyword = keyword.toLowerCase();
						if (reviewObj.cid.toLowerCase().includes(keyword) ||
							reviewObj.cname.toLowerCase().includes(keyword) ||
							reviewObj.teacher.toLowerCase().includes(keyword) ||
							reviewObj.content.toLowerCase().includes(keyword)) {
							match = true;
							return true;
						} else {
							return false;
						}
					});
				} else {
					match = true;
				}

				// like or dislike
				if (uuid &&
					likeData[uuid] &&
					likeData[uuid][reviewKey] !== undefined) {
					reviewObj.currentUserLike = likeData[uuid][reviewKey]
				}

				// current user's post
				if (uuid &&
					uid === uuid) {
					reviewObj.currentUserPost = true;
				}

				!!match && result.push({
					...reviewObj,
					key: reviewKey,
					like: likedCount[reviewKey] || {}
				});
			}
		}

		if (this.state.sortType === 1) {
			result.sort(this.compareByTime);
		} else {
			result.sort(this.compareByLike);
		}

		return result;
	}

	compareByTime(a, b) {
		if (moment(a.time).isBefore(moment(b.time)))
			return 1;
		if (moment(a.time).isBefore(moment(b.time)))
			return -1;
		return 0;
	}

	compareByLike(a, b) {
		if ((a.like['1'] || 0) < (b.like['1'] || 0))
			return 1;
		if ((a.like['1'] || 0) > (b.like['1'] || 0))
			return -1;
		return 0;
	}

	toggleAddReviewModal() {
		this.setState({
			addReviewModalOpen: !this.state.addReviewModalOpen
		});
	}

	handleAddReview() {
		const cname = document.getElementById('ModalAddReview__inputCname').value;
		const cid = document.getElementById('ModalAddReview__inputCid').value;
		const teacher = document.getElementById('ModalAddReview__inputTeacher').value;
		const content = document.getElementById('ModalAddReview__inputContent').value;
		if (cname === '' || content === '') {
			alert('課程名稱、評論不得為空');
			return;
		}

		const uid = this.context.user.uuid;
		const fbid = this.context.user.uid;
		const username = this.context.user.displayName;
		const time = moment().format();
		const randomKey = (Date.now().toString(32) + Math.random().toString(32)).replace('.', '');
		this.db.ref(`review/${uid}/${randomKey}`).set(JSON.stringify({
			cname, cid, teacher, content, fbid, username, time
		}))
		.then(() => {
			this.toggleAddReviewModal();
			this.getReviewList();
		});
	}

	handleFilter(filterTags) {
		this.setState({
			filterTags
		});
	}

	handleChangeSortType(sortType) {
		this.setState({
			sortType
		});
	}

	handleDelReview(key) {
		if (window.confirm('確定刪除此篇評論？')) {
			this.db.ref(`review/${this.context.user.uuid}/${key}`).remove().then(() => {
				this.getReviewList();
			});
		}
	}

	handleLike(btnType, currentUserLike, key) {
		let likeType;
		if (btnType === currentUserLike) {
			likeType = 0;
		} else {
			likeType = btnType;
		}

		this.db.ref(`likedReview/${this.context.user.uuid}/${key}`).set(likeType).then(() => {
			this.getReviewList();
		});
	}

	render() {
		const reviewList = this.parseReviewList();
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
					<Container style={{background: '#fff'}}>
						<Row id="CourseReviewFilter__wrapper">
							<Col xs="12">
								<CourseReviewFilter
									filterTags={this.state.filterTags}
									onFilter={this.handleFilter}
									sortType={this.state.sortType}
									onChangeSortType={this.handleChangeSortType}
								/>
							</Col>
						</Row>
						<hr />
						<Row className="CourseReviewList__wrapper">
							<Col xs="12">
								<CourseReviewList
									reviewList={reviewList}
									onDel={this.handleDelReview}
									onLike={this.handleLike}
								/>
							</Col>
						</Row>
						<div className="CourseReview__btnOpenModal" onClick={this.toggleAddReviewModal}>
							<i className="fa fa-pencil" aria-hidden="true"></i>留下一則評論...
						</div>
						<Modal size="lg" isOpen={this.state.addReviewModalOpen} toggle={this.toggleAddReviewModal}>
							<ModalHeader toggle={this.toggleAddReviewModal}>留下一則評論</ModalHeader>
							<ModalBody>
								<FormGroup row>
									<Label className="text-danger" for="ModalAddReview__inputCname" sm={2}>課程名稱*</Label>
									<Col sm={10}>
										<Input type="text" id="ModalAddReview__inputCname" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="ModalAddReview__inputCid" sm={2}>課號</Label>
									<Col sm={10}>
										<Input type="text" id="ModalAddReview__inputCid" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="ModalAddReview__inputTeacher" sm={2}>教師</Label>
									<Col sm={10}>
										<Input type="text" id="ModalAddReview__inputTeacher" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label className="text-danger" for="ModalAddReview__inputContent" sm={2}>評論*</Label>
									<Col sm={10}>
										<Input type="textarea" name="text" id="ModalAddReview__inputContent" />
									</Col>
								</FormGroup>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" block onClick={this.handleAddReview}>送出</Button>
							</ModalFooter>
						</Modal>
					</Container>
				}
			</div>
		);
	}
}

CourseReviewContainer.contextTypes = {
	user: PropTypes.object
}
