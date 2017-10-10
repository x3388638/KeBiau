import React from 'react';
import TagsInput from 'react-tagsinput';
import {
	ButtonGroup,
	Button
} from 'reactstrap';

import './CourseReviewFilter.css';

export default class CourseReviewFilter extends React.Component {
	render() {
		return (
			<div className="mt-2">
				<h5>搜尋課程</h5>
				<TagsInput 
					className="form-control"
					id="ExchangeSetting__inputWant"
					value={this.props.filterTags}
					onChange={this.props.onFilter}
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
