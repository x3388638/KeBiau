import React from 'react';

import App from './App.jsx';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<App {...this.props}>
				this is &lt;Home /&gt;
			</App>
		);
	}
}
