import React from 'react';
import TagsInput from 'react-tagsinput';
import {
	InputGroup,
	InputGroupButton,
	ButtonGroup,
	Button
} from 'reactstrap';

import './CourseReviewFilter.css';

export default class CourseReviewFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterTags: []
		};

		this.handleFilter = this.handleFilter.bind(this);
	}

	handleFilter(filterTags) {
		this.setState({
			filterTags
		});
	}

	render() {
		return (
			<div className="mt-2">
				<h5>搜尋課程</h5>
				<TagsInput 
					className="form-control"
					id="ExchangeSetting__inputWant"
					value={this.state.filterTags}
					onChange={this.handleFilter}
					onlyUnique
				/>
				<div className="mt-2">
					<ButtonGroup size="sm">
						<Button active>時間優先</Button>{' '}
						<Button>評價優先</Button>
					</ButtonGroup>
				</div>
			</div>
		);
	}
}
