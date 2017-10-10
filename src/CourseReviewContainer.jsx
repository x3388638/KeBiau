import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
	Alert
} from 'reactstrap';

import CourseReviewFilter from './CourseReviewFilter.jsx';
import CourseReviewList from './CourseReviewList.jsx';
import './CourseReviewContainer.css';

export default class CourseReviewContainer extends React.Component {
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
						<div className="CourseReview__btnOpenModal">
							<i className="fa fa-pencil" aria-hidden="true"></i>留下一則評論...
						</div>
					</Container>
				}
			</div>
		);
	}
}

CourseReviewContainer.contextTypes = {
	user: PropTypes.object
}
