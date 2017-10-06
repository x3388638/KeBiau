import React from 'react';

import App from './App.jsx';

export default class CourseReview extends React.Component {
	render() {
		return (
			<App {...this.props}>
				<div>This is CourseReview component.</div>
			</App>
		)
	}
}
