import React from 'react';

import App from './App.jsx';
import CourseTable from './CourseTable.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<App>
				<CourseTable />
			</App>
		);
	}
}
