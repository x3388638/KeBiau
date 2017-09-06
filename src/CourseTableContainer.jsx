import React from 'react';
import {
	Row,
	Col,
} from 'reactstrap';

import CourseList from './CourseList.jsx';

export default class CourseTableContainer extends React.Component {
	constructor(props) {
		super(props);
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
						<CourseList />
					</Col>
				</Row>
			</div>
		);
	}
}
