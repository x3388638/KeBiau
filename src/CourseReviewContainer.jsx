import React from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
	Alert
} from 'reactstrap';

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
					<div>
						loggggg
					</div>
				}
			</div>
		);
	}
}

CourseReviewContainer.contextTypes = {
	user: PropTypes.object
}
