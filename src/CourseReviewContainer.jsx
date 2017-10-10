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

import CourseReviewFilter from './CourseReviewFilter.jsx';
import CourseReviewList from './CourseReviewList.jsx';
import './CourseReviewContainer.css';

export default class CourseReviewContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addReviewModalOpen: false
		}

		this.db = window.firebase.database();
		this.toggleAddReviewModal = this.toggleAddReviewModal.bind(this);
		this.handleAddReview = this.handleAddReview.bind(this);
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
			// TODO: get revirw list
		});
	}

	render() {
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
								<CourseReviewFilter />
							</Col>
						</Row>
						<hr />
						<Row className="CourseReviewList__wrapper">
							<Col xs="12">
								<CourseReviewList />
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
