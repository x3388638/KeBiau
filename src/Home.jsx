import React from 'react';
import {
	Row,
	Col,
} from 'reactstrap';

import App from './App.jsx';
import CourseTableContainer from './CourseTableContainer.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<App>
				<CourseTableContainer />
			</App>
		);
	}
}
