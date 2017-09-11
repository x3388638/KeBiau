import React from 'react';

import App from './App.jsx';
import ExchangeListContainer from './ExchangeListContainer.jsx';

export default class Exchange extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<App {...this.props}>
				<ExchangeListContainer />
			</App>
		);
	}
}
