import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Row,
	Col,
	Alert
} from 'reactstrap';

import CourseReviewFilter from './CourseReviewFilter.jsx';

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
						<Row>
							<Col xs="12">
								<CourseReviewFilter />
							</Col>
						</Row>
						<hr />
						<Row>
							<Col xs="12">
								review list
							</Col>
						</Row>
					</Container>
				}
			</div>
		);
	}
}

CourseReviewContainer.contextTypes = {
	user: PropTypes.object
}
